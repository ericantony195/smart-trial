import React from "react";
import Silk from '../components/Waves.jsx';
import ScrollVelocity from '../components/ScrollVelocity.jsx';

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-black font-sans transition-all">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gray-100 p-4 border-r border-gray-200 flex flex-col items-start transition-all duration-300`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-6 p-2 rounded hover:bg-gray-200 transition"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isSidebarOpen ? (
          <nav className="flex flex-col gap-4">
            <span className="text-lg font-semibold mb-4">Smart Trial Room</span>
            <button className="text-left hover:text-blue-600">All Clothes</button>
            <button className="text-left hover:text-blue-600">My Collection</button>
            <button className="text-left hover:text-blue-600">Checkout</button>
            <button className="text-left hover:text-blue-600">Settings</button>
          </nav>
        ) : (
          <nav className="flex flex-col gap-4 items-center w-full">
            <span title="Smart Trial Room" className="text-xs font-bold">S</span>
            <span title="All Clothes">👕</span>
            <span title="My Collection">📁</span>
            <span title="Checkout">💳</span>
            <span title="Settings">⚙️</span>
          </nav>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Centered Heading */}
        <div className="flex justify-center items-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">SMART TRIAL ROOM</h1>
        </div>

        {/* Grid of Clothing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition-all duration-200"
            >
              <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-sm text-gray-500">
                Image Placeholder
              </div>
              <h3 className="text-lg font-medium">Clothing #{i + 1}</h3>
              <p className="text-sm text-gray-500">Scanned details or tags here.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
