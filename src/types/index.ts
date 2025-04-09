// Định nghĩa các kiểu dữ liệu

// Top sản phẩm
export interface TopProduct {
  id: string;
  name: string;
  count: number;
  percentage: string;
  increasing: boolean;
}

// Kế hoạch sản xuất
export interface ProductionPlanItem {
  id: string;
  name: string;
  planned: number;
  actual: number;
  highlight?: boolean;
}

// Khách hàng
export interface Customer {
  id: string;
  name: string;
  value: number;
  // percentage: number;
  highlight?: boolean;
}

// Tình hình sản xuất
export interface ProductionStatus {
  total: number;
  incomplete: number;
  inProgress: number;
  complete: number;
  percentages: {
    incomplete: number;
    inProgress: number;
    complete: number;
  };
}

// Tiến độ sản xuất
export interface ProductionProgressItem {
  id: string;
  name: string;
  progress: number;
  count: string;
  percentage: string;
}

// Nguyên vật liệu
export interface Material {
  id: number;
  name: string;
  code: string;
  unit: string;
  quantity: number;
  image?: string;
}

// Dữ liệu tổng hợp
export interface DashboardData {
  topProducts: TopProduct[];
  productionPlan: ProductionPlanItem[];
  topCustomers: Customer[];
  productionStatus: ProductionStatus;
  productionProgress: ProductionProgressItem[];
  materials: Material[];
}
