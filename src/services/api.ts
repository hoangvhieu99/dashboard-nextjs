import type { DashboardData } from "@/types";
import { fakeData } from "@/data/fake-data";

// Giả lập API service
export const api = {
  // Lấy toàn bộ dữ liệu dashboard
  getDashboardData: async (): Promise<DashboardData> => {
    // Giả lập độ trễ của API thực
    await new Promise((resolve) => setTimeout(resolve, 500));
    return fakeData;
  },

  // Lấy dữ liệu top sản phẩm
  getTopProducts: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fakeData.topProducts;
  },

  // Lấy dữ liệu kế hoạch sản xuất
  getProductionPlan: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fakeData.productionPlan;
  },

  // Lấy dữ liệu top khách hàng
  getTopCustomers: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fakeData.topCustomers;
  },

  // Lấy dữ liệu tình hình sản xuất
  getProductionStatus: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fakeData.productionStatus;
  },

  // Lấy dữ liệu tiến độ sản xuất
  getProductionProgress: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fakeData.productionProgress;
  },

  // Lấy dữ liệu nguyên vật liệu
  getMaterials: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fakeData.materials;
  },
};
