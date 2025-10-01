"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";

interface BookingEvent {
    id: number;
    title: string;
    time: string;
    color: string;
    type: string;
}

interface DayEvents {
    [key: number]: BookingEvent[];
}

const monthEvents: DayEvents = {
    2: [
        { id: 1, title: "One-on-one wi...", time: "10:00 AM", color: "bg-pink-100 text-pink-700", type: "meeting" }
    ],
    3: [
        { id: 2, title: "All-hands meeti...", time: "4:00 PM", color: "bg-gray-100 text-gray-700", type: "meeting" },
        { id: 3, title: "Dinner with C...", time: "6:30 PM", color: "bg-green-100 text-green-700", type: "dinner" }
    ],
    5: [
        { id: 4, title: "Friday standup", time: "9:00 AM", color: "bg-gray-100 text-gray-700", type: "standup" }
    ],
    6: [
        { id: 5, title: "House inspe...", time: "10:30 AM", color: "bg-red-100 text-red-700", type: "inspection" }
    ],
    9: [
        { id: 6, title: "One-on-one wi...", time: "10:00 AM", color: "bg-pink-100 text-pink-700", type: "meeting" }
    ],
    10: [
        { id: 7, title: "Deep work", time: "9:00 AM", color: "bg-blue-100 text-blue-700", type: "work" },
        { id: 8, title: "Lunch with...", time: "12:00 PM", color: "bg-green-100 text-green-700", type: "lunch" },
        { id: 9, title: "Design sync", time: "10:30 AM", color: "bg-blue-100 text-blue-700", type: "meeting" },
        { id: 10, title: "SEO planning", time: "1:30 PM", color: "bg-gray-100 text-gray-700", type: "planning" }
    ],
    11: [
        { id: 11, title: "Friday standup", time: "9:00 AM", color: "bg-gray-100 text-gray-700", type: "standup" },
        { id: 12, title: "Olivia x Riley", time: "10:00 AM", color: "bg-gray-100 text-gray-700", type: "meeting" },
        { id: 13, title: "Product demo", time: "1:30 PM", color: "bg-gray-100 text-gray-700", type: "demo" }
    ],
    12: [
        { id: 14, title: "House inspe...", time: "11:00 AM", color: "bg-red-100 text-red-700", type: "inspection" },
        { id: 15, title: "Ava's engagem...", time: "1:00 PM", color: "bg-purple-100 text-purple-700", type: "event" }
    ],
    16: [
        { id: 16, title: "Amélie's first...", time: "10:00 AM", color: "bg-pink-100 text-pink-700", type: "event" },
        { id: 17, title: "All-hands meeti...", time: "4:00 PM", color: "bg-gray-100 text-gray-700", type: "meeting" }
    ],
    17: [
        { id: 18, title: "Product planning", time: "9:30 AM", color: "bg-blue-100 text-blue-700", type: "planning" }
    ],
    18: [
        { id: 19, title: "Friday standup", time: "9:00 AM", color: "bg-gray-100 text-gray-700", type: "standup" },
        { id: 20, title: "Coffee w/ Amélie", time: "9:30 AM", color: "bg-gray-100 text-gray-700", type: "coffee" },
        { id: 21, title: "Design feedbac...", time: "2:30 PM", color: "bg-gray-100 text-gray-700", type: "feedback" }
    ],
    19: [
        { id: 22, title: "Half marathon...", time: "7:00 AM", color: "bg-green-100 text-green-700", type: "sport" }
    ],
    23: [
        { id: 23, title: "Quarterly review", time: "11:30 AM", color: "bg-gray-100 text-gray-700", type: "review" },
        { id: 24, title: "Lunch with Zahir", time: "1:00 PM", color: "bg-gray-100 text-gray-700", type: "lunch" },
        { id: 25, title: "Dinner with C...", time: "7:00 PM", color: "bg-green-100 text-green-700", type: "dinner" }
    ],
    24: [
        { id: 26, title: "Deep work", time: "9:00 AM", color: "bg-blue-100 text-blue-700", type: "work" },
        { id: 27, title: "Design sync", time: "2:30 PM", color: "bg-blue-100 text-blue-700", type: "meeting" }
    ],
    25: [
        { id: 28, title: "Amélie coffee", time: "10:00 AM", color: "bg-pink-100 text-pink-700", type: "coffee" }
    ],
    26: [
        { id: 29, title: "Friday standup", time: "9:00 AM", color: "bg-gray-100 text-gray-700", type: "standup" },
        { id: 30, title: "Accountant", time: "1:45 PM", color: "bg-gray-100 text-gray-700", type: "meeting" },
        { id: 31, title: "Marketing sit...", time: "2:30 PM", color: "bg-gray-100 text-gray-700", type: "meeting" }
    ],
    29: [
        { id: 32, title: "Content planni...", time: "11:00 AM", color: "bg-gray-100 text-gray-700", type: "planning" },
        { id: 33, title: "Lunch with Alina", time: "12:45 AM", color: "bg-gray-100 text-gray-700", type: "lunch" }
    ],
    30: [
        { id: 34, title: "Product planning", time: "9:30 AM", color: "bg-blue-100 text-blue-700", type: "planning" },
        { id: 35, title: "All-hands meeti...", time: "4:00 PM", color: "bg-gray-100 text-gray-700", type: "meeting" },
        { id: 36, title: "Team dinner", time: "6:30 PM", color: "bg-pink-100 text-pink-700", type: "dinner" }
    ],
    31: [
        { id: 37, title: "Friday standup", time: "9:00 AM", color: "bg-gray-100 text-gray-700", type: "standup" }
    ]
};

export default function CalendarPage() {
    const [currentMonth] = useState("January 2025");
    const [view, setView] = useState("Month view");
    const [activeTab, setActiveTab] = useState("All events");

    const daysOfWeek = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const tabs = ["All events", "Shared", "Public", "Archived"];

    const getDaysInMonth = () => {
        const days = [];
        const startDay = 3;

        for (let i = 0; i < startDay; i++) {
            days.push({ day: 30 - startDay + i + 1, isCurrentMonth: false });
        }

        for (let i = 1; i <= 31; i++) {
            days.push({ day: i, isCurrentMonth: true });
        }

        const remainingDays = 35 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({ day: i, isCurrentMonth: false });
        }

        return days;
    };

    const days = getDaysInMonth();

    return (
        <div className="p-6 max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Calendar</h2>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-16 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                            ⌘K
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-6 border-b border-gray-200">
                <div className="flex gap-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 px-1 text-sm font-medium transition-colors ${activeTab === tab
                                    ? "text-gray-900 border-b-2 border-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-xs text-gray-500 uppercase">JAN</div>
                            <div className="text-2xl font-bold text-gray-800">10</div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{currentMonth}</h3>
                            <p className="text-sm text-gray-500">Jan 1, 2025 – Jan 31, 2025</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Search className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Today
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                        <select
                            value={view}
                            onChange={(e) => setView(e.target.value)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                            <option>Month view</option>
                            <option>Week view</option>
                            <option>Day view</option>
                        </select>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                            <Plus className="w-5 h-5" />
                            Add event
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                    {daysOfWeek.map((day) => (
                        <div
                            key={day}
                            className="bg-gray-50 p-3 text-center text-xs font-semibold text-gray-600 uppercase"
                        >
                            {day}
                        </div>
                    ))}

                    {days.map((dayInfo, index) => {
                        const events = monthEvents[dayInfo.day] || [];
                        const hasMoreEvents = events.length > 3;
                        const displayEvents = events.slice(0, 3);

                        return (
                            <div
                                key={index}
                                className={`bg-white min-h-[120px] p-2 ${!dayInfo.isCurrentMonth ? "text-gray-400" : ""
                                    } ${dayInfo.day === 10 ? "bg-blue-50" : ""}`}
                            >
                                <div className="text-sm font-medium mb-2 text-right">
                                    {dayInfo.day}
                                </div>
                                <div className="space-y-1">
                                    {displayEvents.map((event) => (
                                        <div
                                            key={event.id}
                                            className={`text-xs p-1.5 rounded ${event.color} truncate cursor-pointer hover:opacity-80`}
                                        >
                                            <div className="font-medium">{event.title}</div>
                                            <div className="text-xs opacity-75">{event.time}</div>
                                        </div>
                                    ))}
                                    {hasMoreEvents && (
                                        <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">
                                            {events.length - 3} more...
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}