import type { DashboardData } from "@/types";

// Dữ liệu giả cho dashboard
export const fakeData: DashboardData = {
  topProducts: [
    {
      id: "1",
      name: "Áo sơ mi dài tay",
      count: 48,
      percentage: "8.2%",
      increasing: true,
    },
    {
      id: "2",
      name: "Quần tây",
      count: 18,
      percentage: "5%",
      increasing: false,
    },
    {
      id: "3",
      name: "Áo hoodie",
      count: 40,
      percentage: "12%",
      increasing: true,
    },
    {
      id: "4",
      name: "Đầm maxi",
      count: 23,
      percentage: "3.5%",
      increasing: true,
    },
    {
      id: "5",
      name: "Áo thun có trơn",
      count: 48,
      percentage: "4.7%",
      increasing: true,
    },
  ],

  productionPlan: [
    {
      id: "1",
      name: "Áo ba lỗ",
      planned: 40,
      actual: 30,
    },
    {
      id: "2",
      name: "Áo sơ mi",
      planned: 90,
      actual: 40,
    },
    {
      id: "3",
      name: "Áo thun polo",
      planned: 70,
      actual: 20,
      highlight: true,
    },
    {
      id: "4",
      name: "Quần baggy",
      planned: 60,
      actual: 40,
    },
    {
      id: "5",
      name: "Quần jogger",
      planned: 80,
      actual: 40,
    },
  ],

  topCustomers: [
    {
      id: "1",
      name: "Công ty Đất Mây Happy Place",
      value: 1800,
      highlight: false,
      // percentage: 70,
    },
    {
      id: "2",
      name: "Công ty May mặc Sunny",
      value: 1700,
      highlight: false,
      // percentage: 65,
    },
    {
      id: "3",
      name: "Outlet Lemon Express",
      value: 2200,
      highlight: false,
      // percentage: 85,
    },
    {
      id: "4",
      name: "Shop quần áo thể thao Max",
      value: 2100,
      // percentage: 75,
      highlight: true,
    },
    {
      id: "5",
      name: "Shop thời trang công sở Basic Office",
      value: 1600,
      highlight: false,
      // percentage: 60,
    },
  ],

  productionStatus: {
    total: 16,
    incomplete: 5,
    inProgress: 6,
    complete: 5,
    percentages: {
      incomplete: 30,
      inProgress: 40,
      complete: 30,
    },
  },

  productionProgress: [
    {
      id: "1",
      name: "Áo sơ mi dài tay",
      progress: 50,
      count: "123 cái",
      percentage: "(50%)",
    },
    {
      id: "2",
      name: "Áo sơ mi cụt tay",
      progress: 75,
      count: "321 cái",
      percentage: "(75%)",
    },
    {
      id: "3",
      name: "Quần baggy",
      progress: 45,
      count: "231 cái",
      percentage: "(45%)",
    },
    {
      id: "4",
      name: "Quần tây",
      progress: 60,
      count: "999 cái",
      percentage: "(60%)",
    },
    {
      id: "5",
      name: "Đầm maxi",
      progress: 90,
      count: "678 cái",
      percentage: "(90%)",
    },
    {
      id: "6",
      name: "Áo hoodie",
      progress: 15,
      count: "765 cái",
      percentage: "(15%)",
    },
    {
      id: "7",
      name: "Áo khoác bomber",
      progress: 24,
      count: "543 cái",
      percentage: "(24%)",
    },
  ],

  materials: [
    {
      id: 1,
      name: "Chỉ cotton",
      code: "NVL_00014",
      unit: "Cuộn",
      quantity: 8,
    },
    {
      id: 2,
      name: "Vải lụa",
      code: "NVL_00024",
      unit: "Mét",
      quantity: 8,
    },
    {
      id: 3,
      name: "Vải lót",
      code: "NVL_00024",
      unit: "Mét",
      quantity: 8,
    },
    {
      id: 4,
      name: "Vải chống thấm",
      code: "NVL_00024",
      unit: "Mét",
      quantity: 8,
    },
    {
      id: 5,
      name: "Vải nỉ",
      code: "NVL_00024",
      unit: "Mét",
      quantity: 8,
    },
  ],
};
