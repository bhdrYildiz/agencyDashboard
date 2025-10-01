"use client";

import { useState } from "react";

// Floating Label Input
function FloatingLabelInput({
    label,
    type = "text",
    name,
    value,
    onChange,
}: {
    label: string;
    type?: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="relative w-full">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 
                   focus:outline-none focus:ring-1 focus:ring-[#0a1448] focus:border-[#0a1448] transition"
            />
            <label
                className="absolute left-4 text-gray-500 transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm 
                  peer-placeholder-shown:text-gray-600 
                  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#0a1448] 
                  bg-white px-1"
            >
                {label}
            </label>
        </div>
    );
}

// Floating Label Select
function FloatingLabelSelect({
    label,
    name,
    value,
    onChange,
    options,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}) {
    return (
        <div className="relative w-full">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 bg-white text-gray-900 
                   focus:outline-none focus:ring-1 focus:ring-[#0a1448] focus:border-[#0a1448] transition"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <label
                className="absolute left-4 transition-all duration-200 
                  -top-2 text-xs bg-white px-1 text-[#0a1448]"
            >
                {label}
            </label>
        </div>
    );
}

// Floating Label Textarea
function FloatingLabelTextarea({
    label,
    name,
    value,
    onChange,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
    return (
        <div className="relative w-full">
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 min-h-[120px]
                   focus:outline-none focus:ring-1 focus:ring-[#0a1448] focus:border-[#0a1448] transition"
            />
            <label
                className="absolute left-4 text-gray-800 transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm 
                  peer-placeholder-shown:text-gray-800 
                  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#0a1448] 
                  bg-white px-1"
            >
                {label}
            </label>
        </div>
    );
}

export default function AddBookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        customerId: "",
        phone: "",
        title: "",
        hotelName: "",
        description: "",
        startDate: "",
        endDate: "",
        guests: 1,
        price: "",
        status: "Pending",
        notes: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Yeni booking kaydedildi:", formData);
        setFormData({
            name: "",
            customerId: "",
            phone: "",
            title: "",
            hotelName: "",
            description: "",
            startDate: "",
            endDate: "",
            guests: 1,
            price: "",
            status: "Pending",
            notes: "",
        });
    };

    return (
        <div className="p-6 max-w-4xl">
            {/* Başlık */}
            <h2 className="text-2xl font-bold text-gray-800">Add New Booking</h2>
            <p className="text-gray-500 mb-8">
                Fill in the details to create a new booking.
            </p>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelInput
                    label="Customer Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Customer ID"
                    name="customerId"
                    value={formData.customerId}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Booking Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Hotel Name"
                    name="hotelName"
                    value={formData.hotelName}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="End Date"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Guests"
                    type="number"
                    name="guests"
                    value={formData.guests} 
                    onChange={handleChange}
                />
                <FloatingLabelInput
                    label="Total Price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <FloatingLabelSelect
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                        { value: "Pending", label: "Pending" },
                        { value: "Arrived", label: "Arrived" },
                        { value: "Cancelled", label: "Cancelled" },
                    ]}
                />
            </div>

            {/* Notes alanı */}
            <div className="mt-6">
                <FloatingLabelTextarea
                    label="Notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>

            {/* Buton */}
            <button
                onClick={handleSave}
                className="mt-8 px-6 py-3 bg-[#0a1448] text-white rounded-lg shadow hover:bg-[#1a2366] transition cursor-pointer"
            >
                Save Booking
            </button>
        </div>
    );
}
