"use client";

import { mockCompanies, MockCompany } from "./mock-data";

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
};

export type StoredOffer = {
  id: string;
  companyId: string;
  amount: number;
  message: string;
  status: "PENDING" | "ACCEPTED" | "DECLINED";
  createdAt: string;
};

export type StoredMessage = {
  id: string;
  companyId: string;
  from: string;
  content: string;
  createdAt: string;
};

const KEYS = {
  users: "vxn-users",
  session: "vxn-session",
  companies: "vxn-companies",
  offers: "vxn-offers",
  messages: "vxn-messages",
  bookmarks: "vxn-bookmarks",
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getSession(): StoredUser | null {
  return read<StoredUser | null>(KEYS.session, null);
}

export function signup(name: string, email: string): StoredUser {
  const users = read<StoredUser[]>(KEYS.users, []);
  const user: StoredUser = {
    id: crypto.randomUUID(),
    name,
    email,
    role: "USER",
  };
  write(KEYS.users, [...users, user]);
  write(KEYS.session, user);
  return user;
}

export function login(email: string): StoredUser | null {
  const users = read<StoredUser[]>(KEYS.users, []);
  const user = users.find((u) => u.email === email) ?? null;
  if (user) write(KEYS.session, user);
  return user;
}

export function logout() {
  localStorage.removeItem(KEYS.session);
}

export function getAllCompanies(): MockCompany[] {
  const added = read<MockCompany[]>(KEYS.companies, []);
  return [...mockCompanies, ...added];
}

export function getMyCompanies(userId: string): MockCompany[] {
  const added = read<MockCompany[]>(KEYS.companies, []);
  return added.filter((c) => (c as MockCompany & { ownerId?: string }).ownerId === userId);
}

export function addCompany(company: Omit<MockCompany, "id">, ownerId: string) {
  const added = read<MockCompany[]>(KEYS.companies, []);
  const newCompany = { ...company, id: crypto.randomUUID(), ownerId } as MockCompany;
  write(KEYS.companies, [...added, newCompany]);
  return newCompany;
}

export function getOffers(): StoredOffer[] {
  return read<StoredOffer[]>(KEYS.offers, []);
}

export function addOffer(companyId: string, amount: number, message: string) {
  const offers = read<StoredOffer[]>(KEYS.offers, []);
  const offer: StoredOffer = {
    id: crypto.randomUUID(),
    companyId,
    amount,
    message,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };
  write(KEYS.offers, [...offers, offer]);
  return offer;
}

export function getMessages(companyId: string): StoredMessage[] {
  return read<StoredMessage[]>(KEYS.messages, []).filter((m) => m.companyId === companyId);
}

export function addMessage(companyId: string, from: string, content: string) {
  const messages = read<StoredMessage[]>(KEYS.messages, []);
  const message: StoredMessage = {
    id: crypto.randomUUID(),
    companyId,
    from,
    content,
    createdAt: new Date().toISOString(),
  };
  write(KEYS.messages, [...messages, message]);
  return message;
}

export function getBookmarks(userId: string): string[] {
  return read<Record<string, string[]>>(KEYS.bookmarks, {})[userId] ?? [];
}

export function toggleBookmark(userId: string, companyId: string) {
  const all = read<Record<string, string[]>>(KEYS.bookmarks, {});
  const current = all[userId] ?? [];
  const next = current.includes(companyId)
    ? current.filter((id) => id !== companyId)
    : [...current, companyId];
  all[userId] = next;
  write(KEYS.bookmarks, all);
  return next;
}
