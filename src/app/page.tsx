"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import TopProducts from "@/components/top-products";
import ProductionPlan from "@/components/production-plan";
import TopCustomers from "@/components/top-customers";
import ProductionStatus from "@/components/production-status";
import ProductionProgress from "@/components/production-progress";
import MaterialsNeeded from "@/components/materials-needed";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/services/api";
import type { DashboardData } from "@/types";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await api.getDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
        toast({
          title: "Lỗi khi tải dữ liệu",
          description: "Không thể tải dữ liệu. Vui lòng thử lại sau.",
          variant: "destructive",
        });
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [toast]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container max-w-full mx-auto px-4 py-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Đang tải dữ liệu...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <p className="text-gray-600">{error}</p>
            </div>
          </div>
        ) : (
          <>
            <TopProducts data={dashboardData?.topProducts} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ProductionPlan data={dashboardData?.productionPlan} />
              <TopCustomers data={dashboardData?.topCustomers} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <ProductionStatus data={dashboardData?.productionStatus} />
              <ProductionProgress data={dashboardData?.productionProgress} />
              <MaterialsNeeded data={dashboardData?.materials} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
