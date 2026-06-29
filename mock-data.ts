export type MockCompany = {
  id: string;
  name: string;
  category: string;
  description: string;
  monthlyRevenue: number;
  monthlyProfit: number;
  askingPrice: number;
  growthRate: number;
  websiteUrl: string;
  traffic: number;
  tags: string[];
  founder: { name: string; bio: string };
};

export const mockCompanies: MockCompany[] = [
  {
    id: "1",
    name: "Ledgerly",
    category: "SaaS",
    description: "Automated bookkeeping for freelancers, syncing with 12 bank providers.",
    monthlyRevenue: 18400,
    monthlyProfit: 11200,
    askingPrice: 410000,
    growthRate: 6.2,
    websiteUrl: "https://ledgerly.example.com",
    traffic: 24000,
    tags: ["fintech", "subscription", "b2b"],
    founder: { name: "Priya Shah", bio: "Built and ran Ledgerly solo for 3 years." },
  },
  {
    id: "2",
    name: "Northwind Studio",
    category: "Agency",
    description: "Productized branding agency serving DTC e-commerce brands.",
    monthlyRevenue: 32000,
    monthlyProfit: 14800,
    askingPrice: 260000,
    growthRate: 2.1,
    websiteUrl: "https://northwindstudio.example.com",
    traffic: 9000,
    tags: ["agency", "branding", "retainers"],
    founder: { name: "Marcus Lin", bio: "Ex-creative director, founded in 2021." },
  },
  {
    id: "3",
    name: "Crate & Coast",
    category: "E-commerce",
    description: "DTC home-goods brand with a loyal subscriber list and 4.8★ reviews.",
    monthlyRevenue: 54000,
    monthlyProfit: 9700,
    askingPrice: 320000,
    growthRate: -1.4,
    websiteUrl: "https://crateandcoast.example.com",
    traffic: 61000,
    tags: ["dtc", "shopify", "home"],
    founder: { name: "Elena Ruiz", bio: "Started in a garage, now ships nationwide." },
  },
  {
    id: "4",
    name: "Loomcast",
    category: "Creator Business",
    description: "Niche newsletter + paid community for indie game developers.",
    monthlyRevenue: 7600,
    monthlyProfit: 6900,
    askingPrice: 145000,
    growthRate: 9.8,
    websiteUrl: "https://loomcast.example.com",
    traffic: 15000,
    tags: ["newsletter", "community", "gaming"],
    founder: { name: "Theo Banks", bio: "Grew the list from 0 to 19,000 in 2 years." },
  },
  {
    id: "5",
    name: "Sparrow Metrics",
    category: "Software",
    description: "Lightweight analytics widget for indie SaaS founders.",
    monthlyRevenue: 12100,
    monthlyProfit: 9300,
    askingPrice: 280000,
    growthRate: 4.5,
    websiteUrl: "https://sparrowmetrics.example.com",
    traffic: 18000,
    tags: ["analytics", "indie", "api"],
    founder: { name: "Dana Okafor", bio: "Solo developer, fully bootstrapped." },
  },
  {
    id: "6",
    name: "The Daily Brief",
    category: "Media Company",
    description: "B2B morning newsletter covering supply-chain logistics.",
    monthlyRevenue: 21000,
    monthlyProfit: 13400,
    askingPrice: 390000,
    growthRate: 3.3,
    websiteUrl: "https://dailybrief.example.com",
    traffic: 47000,
    tags: ["media", "newsletter", "logistics"],
    founder: { name: "Sam Whitfield", bio: "Former trade journalist, launched in 2020." },
  },
];
