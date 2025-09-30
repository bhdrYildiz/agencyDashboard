"use client";

interface Booking {
    id: number;
    name: string;
    customerId: string;
    phone: string;
    price: number;
    status: "Arrived" | "Pending" | "Cancelled";
}

const mockBookings: Booking[] = [
    { id: 1, name: "Ahmet Yılmaz", customerId: "CUST-001", phone: "+90 532 111 22 33", price: 10000, status: "Arrived" },
    { id: 2, name: "Elif Demir", customerId: "CUST-002", phone: "+90 532 222 33 44", price: 6000, status: "Pending" },
    { id: 3, name: "Mehmet Kaya", customerId: "CUST-003", phone: "+90 532 333 44 55", price: 14000, status: "Arrived" },
    { id: 4, name: "Ayşe Çelik", customerId: "CUST-004", phone: "+90 532 444 55 66", price: 19000, status: "Cancelled" },
    { id: 5, name: "Burak Şahin", customerId: "CUST-005", phone: "+90 532 555 66 77", price: 16000, status: "Pending" },
];

export default function RecentBookings() {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Bookings</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs uppercase bg-gray-200 text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Customer Name</th>
                            <th className="px-4 py-3">Customer ID</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Toplam Ücret</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockBookings.map((booking) => (
                            <tr key={booking.id} className="border-b-0 last:border-0">
                                <td className="px-4 py-3">{booking.name}</td>
                                <td className="px-4 py-3">{booking.customerId}</td>
                                <td className="px-4 py-3">{booking.phone}</td>
                                <td className="px-4 py-3">{booking.price} TL </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium
                      ${booking.status === "Arrived"
                                                ? "bg-green-100 text-green-600"
                                                : booking.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-gray-700 hover:text-gray-900">⋮</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
