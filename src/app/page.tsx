import EarningChart from "@/components/charts/EarningChart";
import RecentActivities from "@/components/dashboard/RecentActivities";
import RecentBookings from "@/components/dashboard/RecentBookings";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Hoşgeldiniz 👋</h2>
      <p className="text-gray-600 mb-6">
        Burada acenta yönetim sistemi dashboard içeriği olacak.
      </p>

      {/* Stat Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 text-gray-700">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Earnings</h3>
          <p className="text-xl font-bold">$10,800</p>
          <span className="text-xs text-green-500">+50 Today</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Pending</h3>
          <p className="text-xl font-bold">$12,800</p>
          <span className="text-xs text-yellow-500">40 Today</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Booking</h3>
          <p className="text-xl font-bold">$54,800</p>
          <span className="text-xs text-blue-500">90+</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Wishlist</h3>
          <p className="text-xl font-bold">1834</p>
          <span className="text-xs text-red-500">260+</span>
        </div>
      </div>

      {/* Chart + Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Earning Statistics</h3>
          <EarningChart />
        </div>
        <RecentActivities />
        <div className="col-span-3">
          <RecentBookings />
        </div>
      </div>
    </div>
  );
}
