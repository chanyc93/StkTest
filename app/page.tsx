import { TrendingUp, Search, BarChart3, Bell, Star } from "lucide-react";

const stocks = [
  { symbol: "NVDA", name: "NVIDIA", pe: 58, roe: "74%", growth: "122%" },
  { symbol: "TSM", name: "TSMC", pe: 27, roe: "31%", growth: "39%" },
  { symbol: "AAPL", name: "Apple", pe: 32, roe: "147%", growth: "8%" },
  { symbol: "2330", name: "台積電", pe: 24, roe: "29%", growth: "34%" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">

        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Stock Vibe</h1>
            <p className="text-zinc-400 mt-2">
              AI Fundamental Analysis Platform
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl">
              <Star size={18} />
            </button>

            <button className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl">
              <Bell size={18} />
            </button>

            <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold">
              AI Screener
            </button>
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-5 mb-10">

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp />
              <h2 className="text-lg font-semibold">Market Trend</h2>
            </div>

            <p className="text-4xl font-bold">Bullish</p>
            <p className="text-green-400 mt-2">+2.14% this week</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Search />
              <h2 className="text-lg font-semibold">AI Scanner</h2>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Find high-growth companies with strong ROE and healthy cash flow.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 />
              <h2 className="text-lg font-semibold">Top Sector</h2>
            </div>

            <p className="text-4xl font-bold">AI Chips</p>
            <p className="text-green-400 mt-2">Strong momentum</p>
          </div>

        </section>

        <section className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Stock Screener</h2>

            <input
              placeholder="Search stock..."
              className="bg-black border border-zinc-800 rounded-2xl px-4 py-3 outline-none"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-zinc-500 border-b border-zinc-900">
                <tr>
                  <th className="text-left py-4">Symbol</th>
                  <th className="text-left py-4">Company</th>
                  <th className="text-left py-4">PE</th>
                  <th className="text-left py-4">ROE</th>
                  <th className="text-left py-4">Growth</th>
                </tr>
              </thead>

              <tbody>
                {stocks.map((stock) => (
                  <tr
                    key={stock.symbol}
                    className="border-b border-zinc-900 hover:bg-zinc-900/40 transition"
                  >
                    <td className="py-5 font-semibold">{stock.symbol}</td>
                    <td>{stock.name}</td>
                    <td>{stock.pe}</td>
                    <td className="text-green-400">{stock.roe}</td>
                    <td className="text-green-400">{stock.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>

      </div>
    </main>
  );
}