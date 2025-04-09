import { Calendar, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TopProduct } from "@/types";
import Button from "./ui/button";

interface TopProductsProps {
  data?: TopProduct[];
}

export default function TopProducts({ data }: TopProductsProps) {
  const hasData = !!data?.length;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </h2>
        <Button
          variant="outline"
          icon={<Calendar className="h-4 w-4" />}
          showDropdownIcon
        >
          Tháng này
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {hasData ? (
          <>
            {data!.map((product) => (
              <ProductCard
                key={product.id}
                number={product.count.toString()}
                label={product.name}
                percentage={product.percentage}
                color="text-blue-500"
                increasing={product.increasing}
              />
            ))}
          </>
        ) : (
          <>
            <EmptyProductCard />
            <EmptyProductCard />
            <EmptyProductCard />
            <EmptyProductCard />
            <EmptyProductCard />
          </>
        )}
      </div>
    </div>
  );
}

function ProductCard({
  number,
  label,
  percentage,
  color,
  increasing,
}: {
  number: string;
  label: string;
  percentage: string;
  color: string;
  increasing: boolean;
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-3xl font-bold ${color}`}>{number}</span>
          <span
            className={`text-xs px-1.5 py-0.5 rounded ${
              increasing
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {increasing ? "↑" : "↓"} {percentage}
          </span>
        </div>
        <p className="text-sm text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
}

function EmptyProductCard() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-3xl font-bold text-gray-400">0</span>
        </div>
        <p className="text-sm text-gray-400">Chưa có mới hàng</p>
      </CardContent>
    </Card>
  );
}
