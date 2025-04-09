import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronDown } from "lucide-react";
import type { ProductionStatus as ProductionStatusType } from "@/types";
import Button from "./ui/button";

interface ProductionStatusProps {
  data?: ProductionStatusType;
}

export default function ProductionStatus({ data }: ProductionStatusProps) {
  const hasData = !!data;

  // Colors for different status types
  const colors = {
    incomplete: "#FF8F0D", // Orange
    inProgress: "#1FC583", // Blue
    complete: "#0375F3", // Green
  };
  // Calculate circle properties
  const calculateCircleProperties = () => {
    if (!data) return null;

    const circumference = 2 * Math.PI * 40; // 2πr where r = 40

    const completeOffset = 0;
    const inProgressOffset = -(data.percentages.complete / 100) * circumference;
    const incompleteOffset =
      -((data.percentages.complete + data.percentages.inProgress) / 100) *
      circumference;

    return {
      circumference,
      completeStroke: (data.percentages.complete / 100) * circumference,
      inProgressStroke: (data.percentages.inProgress / 100) * circumference,
      incompleteStroke: (data.percentages.incomplete / 100) * circumference,
      completeOffset,
      inProgressOffset,
      incompleteOffset,
    };
  };

  const circleProps = hasData ? calculateCircleProperties() : null;
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle className="text-lg font-semibold">
          Tình Hình Sản Xuất
        </CardTitle>
        <Button
          variant="outline"
          showDropdownIcon
          icon={<Calendar className="h-4 w-4" />}
        >
          Hôm nay
        </Button>
      </CardHeader>
      <CardContent className="flex justify-center flex-1 items-center pb-0">
        {hasData && circleProps ? (
          <div className="relative w-48 h-48">
            {/* Donut chart */}

            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#e5e7eb"
                strokeWidth="20"
              />

              {/* Complete segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={colors.inProgress}
                strokeWidth="20"
                strokeDasharray={`${circleProps.completeStroke} ${circleProps.circumference}`}
                strokeDashoffset={circleProps.completeOffset}
                style={{
                  transformOrigin: "center",
                  transform: "rotate(-90deg)",
                }}
              />

              {/* In Progress segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={colors.complete}
                strokeWidth="20"
                strokeDasharray={`${circleProps.inProgressStroke} ${circleProps.circumference}`}
                strokeDashoffset={circleProps.inProgressOffset}
                style={{
                  transformOrigin: "center",
                  transform: "rotate(-90deg)",
                }}
              />

              {/* Incomplete segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={colors.incomplete}
                strokeWidth="20"
                strokeDasharray={`${circleProps.incompleteStroke} ${circleProps.circumference}`}
                strokeDashoffset={circleProps.incompleteOffset}
                style={{
                  transformOrigin: "center",
                  transform: "rotate(-90deg)",
                }}
              />
            </svg>

            {/* Percentage labels */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
              <span className="text-4xl font-bold">{data!.total}</span>
              <span className="text-sm text-gray-500">Lệnh sản xuất</span>
            </div>

            {/* Legend */}
            <div className="absolute top-5 -left-[80px]">
              <div className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-sm">
                {data!.percentages.incomplete}%
              </div>
              <div className="absolute top-[30px]  left-12 w-12 h-px bg-orange-500 rotate-[60deg]" />
              <div className="absolute top-[9px] left-9 w-6 h-px bg-orange-500 rotate-[180deg]" />
            </div>
            <div className="absolute -right-[60px] top-0 transform -translate-y-1/2">
              <div className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm">
                {data!.percentages.complete}%
              </div>
              <div className="absolute right-[44px] top-[34] w-12 h-px bg-green-500 rotate-[-60deg]" />
              <div className="absolute right-9 top-[13px] w-5 h-px bg-green-500 rotate-[180deg]" />
            </div>
            <div className="absolute bottom-0 -right-16 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-sm">
                {data!.percentages.inProgress}%
              </div>
              <div className="absolute bottom-5 right-[53px] w-7 h-px bg-blue-500 rotate-[60deg]" />
              <div className="absolute bottom-2 right-10 w-5 h-px bg-blue-500 rotate-[180deg]" />
            </div>
          </div>
        ) : (
          <EmptyProductionStatus />
        )}
      </CardContent>
      <div className="grid grid-cols-3 text-center m-4 gap-4">
        {hasData ? (
          <>
            <div className="py-3 px-2 border rounded-lg text-center">
              <div className="text-xl font-semibold text-orange-500">
                {data!.incomplete}
              </div>
              <div className="text-xs text-gray-500">Chưa hoàn thành</div>
            </div>
            <div className="py-3 px-2 border rounded-lg text-center border-x">
              <div className="text-xl font-semibold text-blue-500">
                {data!.inProgress}
              </div>
              <div className="text-xs text-gray-500">Đang sản xuất</div>
            </div>
            <div className="py-3 px-2 border rounded-lg text-center">
              <div className="text-xl font-semibold text-green-500">
                {data!.complete}
              </div>
              <div className="text-xs text-gray-500">Hoàn thành</div>
            </div>
          </>
        ) : (
          <>
            <div className="py-3 px-2">
              <div className="text-xl font-semibold text-gray-400">0</div>
              <div className="text-xs text-gray-500">Chưa hoàn thành</div>
            </div>
            <div className="py-3 px-2 border-x">
              <div className="text-xl font-semibold text-gray-400">0</div>
              <div className="text-xs text-gray-500">Đang sản xuất</div>
            </div>
            <div className="py-3 px-2">
              <div className="text-xl font-semibold text-gray-400">0</div>
              <div className="text-xs text-gray-500">Hoàn thành</div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

function EmptyProductionStatus() {
  return (
    <div className="relative w-48 h-48">
      {/* Empty donut chart */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth="20"
        />
      </svg>

      {/* Center text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
        <span className="text-4xl font-bold text-gray-400">0</span>
        <span className="text-sm text-gray-400">Lệnh sản xuất</span>
      </div>
    </div>
  );
}
