"use client";

import { useState } from "react";
import { EllipsisVerticalIcon, FunnelIcon, PencilSquareIcon, PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, TrashIcon } from "lucide-react";


interface Booking {
    id: number;
    title: string,
    name: string;
    startDate: string,
    endDate: string,
    guests: number,
    customerId: string;
    phone: string;
    price: number;
    status: "Arrived" | "Pending" | "Cancelled";
}

const mockBookings: Booking[] = [
    { id: 1, name: "Ahmet Yılmaz", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-001", phone: "+90 532 111 22 33", price: 10000, status: "Arrived" },
    { id: 2, name: "Elif Demir", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-002", phone: "+90 532 222 33 44", price: 6000, status: "Pending" },
    { id: 3, name: "Mehmet Kaya", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-003", phone: "+90 532 333 44 55", price: 14000, status: "Arrived" },
    { id: 4, name: "Ayşe Çelik", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-004", phone: "+90 532 444 55 66", price: 19000, status: "Cancelled" },
    { id: 5, name: "Burak Şahin", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-005", phone: "+90 532 555 66 77", price: 16000, status: "Pending" },
    { id: 6, name: "Zeynep Arslan", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-006", phone: "+90 532 666 77 88", price: 12000, status: "Arrived" },
    { id: 7, name: "Fatih Koç", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-007", phone: "+90 532 777 88 99", price: 18000, status: "Pending" },
    { id: 8, name: "Gamze Öz", title: "balayı turu", startDate: "11.09", endDate: "14.09", guests: 2, customerId: "CUST-008", phone: "+90 532 888 99 00", price: 15500, status: "Arrived" },

];

export default function BookingsPage() {
    const [openFilter, setOpenFilter] = useState(false);
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [openModal, setOpenModal] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        customerId: "",
        phone: "",
        totalPrice: "",
        status: "Pending",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddBooking = () => {
        console.log("Yeni Booking:", formData);
        setOpenModal(false);
        setFormData({ name: "", customerId: "", phone: "", totalPrice: "", status: "Pending" });
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">All Bookings</h2>
                <div className="flex gap-4 relative">
                    <button
                        onClick={() => setOpenFilter(!openFilter)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 cursor-pointer text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        <FunnelIcon className="w-5 h-5" /> Filter
                    </button>

                    {openFilter && (
                        <div className="absolute top-full mt-2 right-50 w-40 bg-white shadow rounded-md border z-10">
                            <button className="block w-full px-4 py-2 text-gray-700 text-left hover:bg-gray-100">All</button>
                            <button className="block w-full px-4 py-2 text-gray-700 text-left hover:bg-gray-100">Arrived</button>
                            <button className="block w-full px-4 py-2 text-gray-700 text-left hover:bg-gray-100">Pending</button>
                            <button className="block w-full px-4 py-2 text-gray-700 text-left hover:bg-gray-100">Cancelled</button>
                        </div>
                    )}

                    <button
                        onClick={() => setOpenModal(true)}
                        className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-[#0a1448] text-white rounded-lg hover:bg-[#1a2366]"
                    >
                        <PlusCircleIcon className="w-5 h-5" /> Add New Booking
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {openModal && (
                <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-3 right-3 text-gray-700 hover:text-gray-800 cursor-pointer"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>

                        <h3 className="text-xl font-bold mb-4 text-gray-700">Add New Booking</h3>

                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Customer Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-500 text-gray-800 rounded px-3 py-2 "
                            />
                            <input
                                type="text"
                                name="customerId"
                                placeholder="Customer ID"
                                value={formData.customerId}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-500 text-gray-800 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-500 text-gray-800 rounded px-3 py-2"
                            />
                            <input
                                type="number"
                                name="totalPrice"
                                placeholder="Total Price"
                                value={formData.totalPrice}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-500 text-gray-800 rounded px-3 py-2"
                            />
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-500 text-gray-800 rounded px-3 py-2"
                            >
                                <option value="Pending" className="text-gray-800">Pending</option>
                                <option value="Arrived">Arrived</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>

                        {/* Add Button */}
                        <button
                            onClick={handleAddBooking}
                            className="mt-6 w-full bg-[#0a1448] text-white py-2 rounded-lg hover:bg-[#1a2366] cursor-pointer"
                        >
                            Add Booking
                        </button>
                    </div>
                </div>
            )}

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-[1000px] w-full text-sm text-left text-gray-600">
                    <thead className="text-xs uppercase bg-gray-200 text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Customer Name</th>
                            <th className="px-4 py-3">Customer ID</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Start Date</th>
                            <th className="px-4 py-3">End Date</th>
                            <th className="px-4 py-3">Guests</th>
                            <th className="px-4 py-3">Toplam Ücret</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockBookings.map((booking) => (
                            <tr key={booking.id} className="border-b border-gray-200 last:border-0">
                                <td className="px-4 py-3">{booking.name}</td>
                                <td className="px-4 py-3">{booking.customerId}</td>
                                <td className="px-4 py-3">{booking.phone}</td>
                                <td className="px-4 py-3">{booking.title}</td>
                                <td className="px-4 py-3">{booking.startDate}</td>
                                <td className="px-4 py-3">{booking.endDate}</td>
                                <td className="px-4 py-3">{booking.guests}</td>
                                <td className="px-4 py-3">{booking.price} TL</td>
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
                                <td className="px-4 py-3 text-right relative">
                                    <button
                                        onClick={() => setOpenMenu(openMenu === booking.id ? null : booking.id)}
                                        className="text-gray-700 hover:text-gray-900"
                                    >
                                        <EllipsisVerticalIcon className="w-6 h-6 cursor-pointer hover:rounded-full" />
                                    </button>

                                    {openMenu === booking.id && (
                                        <div className="absolute right-6 mt-2 w-36 bg-white shadow rounded-md z-10">
                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-left cursor-pointer hover:bg-gray-100">
                                                <EyeIcon className="w-5 h-5 text-gray-500" /> View
                                            </button>
                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-left cursor-pointer hover:bg-gray-100">
                                                <PencilSquareIcon className="w-5 h-5 text-gray-500" /> Edit
                                            </button>
                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-left cursor-pointer text-red-600 hover:bg-gray-100">
                                                <TrashIcon className="w-5 h-5 text-red-500" /> Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <span>Showing 1–10 of {mockBookings.length}</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border rounded hover:bg-gray-100 flex items-center justify-center">
                        <ChevronLeftIcon className="w-4 h-4 cursor-pointer" />
                    </button>
                    <button className="px-3 py-1 border rounded bg-gray-200">1</button>
                    <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
                    <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
                    <button className="px-3 py-1 border rounded hover:bg-gray-100 flex items-center justify-center">
                        <ChevronRightIcon className="w-4 h-4 cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
}
