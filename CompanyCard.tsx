import Link from "next/link";
import { MockCompany } from "@/lib/mock-data";
import { formatMoney, formatGrowth } from "@/lib/format";

export default function CompanyCard({ company, index }: { company: MockCompany; index: number }) {
  const growthUp = company.growthRate >= 0;

  return (
    <Link
      href={`/companies/${company.id}`}
      className="card-raised rounded-lg p-5 flex flex-col gap-4 hover:border-brass transition-colors"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="seal text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full">
          Verified
        </span>
      </div>

      <div>
        <h3 className="font-voice text-xl text-text-primary">{company.name}</h3>
        <p className="text-sm text-text-secondary">{company.category}</p>
      </div>

      <p className="text-sm text-text-secondary line-clamp-2">{company.description}</p>

      <div className="grid grid-cols-2 gap-3 border-t border-line pt-3">
        <div>
          <p className="text-xs text-text-muted">Monthly revenue</p>
          <p className="ledger-number text-base text-text-primary">
            {formatMoney(company.monthlyRevenue)}
          </p>
        </div>
        <div>
          <p className="text-xs text-text-muted">Asking price</p>
          <p className="ledger-number text-base text-text-primary">
            {formatMoney(company.askingPrice)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs ${growthUp ? "text-forest" : "text-rust"}`}
        >
          {formatGrowth(company.growthRate)} growth
        </span>
        <span className="text-sm text-brass-strong">View details &rarr;</span>
      </div>
    </Link>
  );
}
