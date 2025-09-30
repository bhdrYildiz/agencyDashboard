"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { name: "1 Aug", Clicked: 60, View: 40 },
    { name: "8 Aug", Clicked: 75, View: 50 },
    { name: "15 Aug", Clicked: 90, View: 70 },
    { name: "22 Aug", Clicked: 80, View: 65 },
    { name: "29 Aug", Clicked: 95, View: 75 },
    { name: "5 Sep", Clicked: 110, View: 85 },
];

export default function EarningChart() {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} barSize={30}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Clicked" fill="#f97316" radius={[4, 4, 0, 0]} />
                <Bar dataKey="View" fill="#9ca3af" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
