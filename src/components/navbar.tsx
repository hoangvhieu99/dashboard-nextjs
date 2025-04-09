import { Search } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="font-bold text-xl">
          <span className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={80} height={40} />
          </span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Danh mục
          </a>
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Bán & Xuất hàng
          </a>
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Mua & Nhập hàng
          </a>
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Kho & Sản xuất
          </a>
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Kế toán
          </a>
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Báo cáo & Thống kê
          </a>
          <a href="#" className="hover:bg-blue-800 px-2 py-1 rounded">
            Tiện ích
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="bg-blue-800 text-white rounded-md pl-8 pr-4 py-1 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-2 top-1.5 h-4 w-4 text-blue-300" />
        </div>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="p-1 rounded-full hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
