import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProductionProgressItem } from "@/types";
import Button from "./ui/button";

interface ProductionProgressProps {
  data?: ProductionProgressItem[];
}

export default function ProductionProgress({ data }: ProductionProgressProps) {
  const hasData = !!data?.length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle className="text-lg font-semibold">
          Tiến Độ Sản Xuất Theo Nhóm
        </CardTitle>
        <Button variant="outline" showDropdownIcon>
          Hoàn thành
        </Button>
      </CardHeader>
      <CardContent>
        {hasData ? (
          <div className="space-y-4">
            {data!.map((item) => (
              <ProgressItem
                key={item.id}
                label={item.name}
                progress={item.progress}
                value={item.count}
                percentage={item.percentage}
              />
            ))}
          </div>
        ) : (
          <EmptyProductionProgress />
        )}
      </CardContent>
    </Card>
  );
}

function ProgressItem({
  label,
  progress,
  value,
  percentage,
}: {
  label: string;
  progress: number;
  value: string;
  percentage: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm">{label}</span>
        <span className="text-sm">
          {value} <span className="text-gray-500">{percentage}</span>
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

function EmptyProductionProgress() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-400">Chưa có mới hàng</span>
            <span className="text-sm text-gray-400">-</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5"></div>
        </div>
      ))}
    </div>
  );
}
