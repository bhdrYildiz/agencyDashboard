"use client";

import { useState } from "react";
import {
    Search,
    Filter,
    Grid3X3,
    List,
    Plus,
    CheckCircle,
    Circle,
    Paperclip,
    MessageCircle,
    MoreHorizontal,
    User
} from "lucide-react";

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

interface Task {
    id: number;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    assignees: string[];
    progress: { completed: number; total: number };
    attachments: number;
    comments: number;
    status: "todo" | "in-progress" | "done";
}

const mockTasks: Task[] = [
    {
        id: 1,
        title: "Müşteri için yeni web sitesi şablonu tasarla",
        description: "Modern ve responsive tasarım oluştur",
        priority: "low",
        assignees: ["Ahmet", "Mehmet", "Ayşe"],
        progress: { completed: 0, total: 10 },
        attachments: 10,
        comments: 5,
        status: "todo"
    },
    {
        id: 2,
        title: "Rezervasyon sistemi güncellemesi",
        description: "Yeni özellikler ekle ve hataları düzelt",
        priority: "medium",
        assignees: ["Fatma", "Ali"],
        progress: { completed: 0, total: 10 },
        attachments: 8,
        comments: 3,
        status: "todo"
    },
    {
        id: 3,
        title: "Mobil uygulama testleri",
        description: "iOS ve Android uyumluluğunu kontrol et",
        priority: "high",
        assignees: ["Zeynep", "Can", "Elif"],
        progress: { completed: 0, total: 10 },
        attachments: 15,
        comments: 7,
        status: "todo"
    },
    {
        id: 4,
        title: "Veritabanı optimizasyonu",
        description: "Performans iyileştirmeleri yap",
        priority: "high",
        assignees: ["Oğuz", "Selin"],
        progress: { completed: 3, total: 10 },
        attachments: 5,
        comments: 2,
        status: "in-progress"
    },
    {
        id: 5,
        title: "Kullanıcı arayüzü iyileştirmeleri",
        description: "UX/UI tasarım güncellemeleri",
        priority: "low",
        assignees: ["Deniz"],
        progress: { completed: 10, total: 10 },
        attachments: 12,
        comments: 4,
        status: "done"
    },
    {
        id: 6,
        title: "API dokümantasyonu hazırla",
        description: "Geliştiriciler için kapsamlı dokümantasyon",
        priority: "medium",
        assignees: ["Burak", "Cemre"],
        progress: { completed: 10, total: 10 },
        attachments: 20,
        comments: 8,
        status: "done"
    }
];

const priorityColors = {
    low: "bg-green-100 text-green-700",
    medium: "bg-orange-100 text-orange-700",
    high: "bg-red-100 text-red-700"
};

const priorityLabels = {
    low: "Düşük Öncelik",
    medium: "Orta Öncelik",
    high: "Yüksek Öncelik"
};

const statusConfig = {
    todo: { label: "Yapılacaklar", color: "border-blue-500", count: 0 },
    "in-progress": { label: "Devam Ediyor", color: "border-orange-500", count: 0 },
    done: { label: "Tamamlandı", color: "border-green-500", count: 0 }
};

export default function TasksPage() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        priority: "medium" as "low" | "medium" | "high"
    });

    // Task'ları durumlarına göre grupla
    const groupedTasks = mockTasks.reduce((acc, task) => {
        if (!acc[task.status]) {
            acc[task.status] = [];
        }
        acc[task.status].push(task);
        return acc;
    }, {} as Record<string, Task[]>);

    // Arama filtresi
    const filteredTasks = Object.keys(groupedTasks).reduce((acc, status) => {
        acc[status] = groupedTasks[status].filter(task =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return acc;
    }, {} as Record<string, Task[]>);

    // Yeni görev ekleme fonksiyonu
    const handleAddTask = () => {
        if (newTask.title.trim() && newTask.description.trim()) {
            const task: Task = {
                id: Date.now(), // Basit ID oluşturma
                title: newTask.title,
                description: newTask.description,
                priority: newTask.priority,
                assignees: ["Sen"], // Varsayılan olarak "Sen"
                progress: { completed: 0, total: 10 },
                attachments: 0,
                comments: 0,
                status: "todo"
            };

            mockTasks.push(task);
            setNewTask({ title: "", description: "", priority: "medium" });
            setIsModalOpen(false);
        }
    };

    // Modal kapatma fonksiyonu
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewTask({ title: "", description: "", priority: "medium" });
    };

    const TaskCard = ({ task }: { task: Task }) => (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                    {priorityLabels[task.priority]}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.description}</p>
        </div>
    );

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Görevler</h2>
                </div>

                <div className="flex items-center gap-4">
                    {/* Arama */}
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
                        />
                    </div>

                    {/* Filtre */}
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        <span>Filtre</span>
                    </button>

                    {/* Görünüm Modları */}
                    <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 ${viewMode === "grid" ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}
                        >
                            <Grid3X3 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 ${viewMode === "list" ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Kullanıcılar ve Yeni Görev */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            <Plus className="w-4 h-4" />
                            Yeni Görev
                        </button>
                    </div>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {Object.entries(statusConfig).map(([status, config]) => {
                    const tasks = filteredTasks[status] || [];
                    const count = tasks.length;

                    return (
                        <div key={status} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-gray-800">{config.label}</h3>
                                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                                        {count}
                                    </span>
                                </div>
                                <div className={`w-8 h-1 rounded-full ${config.color.replace('border-', 'bg-')}`}></div>
                            </div>

                            <div className="space-y-4">
                                {tasks.map((task) => (
                                    <TaskCard key={task.id} task={task} />
                                ))}
                                {count === 0 && (
                                    <div className="text-center text-gray-500 py-8">
                                        <Circle className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                                        <p className="text-sm">Henüz görev yok</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Yeni Görev Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Yeni Görev Ekle</h3>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Görev Başlığı */}
                                <FloatingLabelInput
                                    label="Görev Başlığı *"
                                    name="title"
                                    value={newTask.title}
                                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                />

                                {/* Görev Açıklaması */}
                                <FloatingLabelTextarea
                                    label="Açıklama *"
                                    name="description"
                                    value={newTask.description}
                                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                />

                                {/* Öncelik Seviyesi */}
                                <FloatingLabelSelect
                                    label="Öncelik Seviyesi"
                                    name="priority"
                                    value={newTask.priority}
                                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as "low" | "medium" | "high" })}
                                    options={[
                                        { value: "low", label: "Düşük Öncelik" },
                                        { value: "medium", label: "Orta Öncelik" },
                                        { value: "high", label: "Yüksek Öncelik" }
                                    ]}
                                />
                            </div>

                            {/* Modal Butonları */}
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 cursor-pointer text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    İptal
                                </button>
                                <button
                                    onClick={handleAddTask}
                                    disabled={!newTask.title.trim() || !newTask.description.trim()}
                                    className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                                >
                                    Görev Ekle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
