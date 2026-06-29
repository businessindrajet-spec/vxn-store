import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

const stats = [
  { label: "Total listings", value: "3" },
  { label: "Total views", value: "1,204" },
  { label: "Messages", value: "12" },
  { label: "Offers received", value: "5" },
];

export default function DashboardHome() {
  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-voice text-2xl text-text-primary">Dashboard</h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="card-raised rounded-lg p-4">
              <p className="text-xs text-text-muted">{stat.label}</p>
              <p className="ledger-number text-2xl text-text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="card-raised rounded-lg p-5">
          <p className="font-voice text-lg text-text-primary mb-2">Revenue analytics</p>
          <p className="text-sm text-text-secondary">
            Wire this panel to /api/companies once the dashboard is connected to live data.
          </p>
        </div>
      </main>
    </div>
  );
}
