"use client";

import { FaCheckCircle } from "react-icons/fa";

interface Activity {
    id: number;
    message: string;
    date: string;
}

const mockActivities: Activity[] = [
    { id: 1, message: "Yarın 2 pax bölge turu.", date: "28 Eyl 2025" },
    { id: 2, message: "Yıldız Otele balayı girişi 202 nolu oda, 3 gece.", date: "28 Eyl 2025" },
    { id: 3, message: "Yeni bir yorum aldınız.", date: "27 Eyl 2025" },
    { id: 4, message: "Birisi turunuzu favorilere ekledi.", date: "27 Eyl 2025" },
    { id: 5, message: "Yeni tur listelenmeniz onaylandı.", date: "26 Eyl 2025" },
];

export default function RecentActivities() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h3>
            <ul className="space-y-4 text-sm text-gray-600">
                {mockActivities.map((activity) => (
                    <li key={activity.id} className="flex items-start justify-between">
                        <div className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                            <span>{activity.message}</span>
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{activity.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}