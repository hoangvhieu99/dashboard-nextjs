import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import type { ProductionPlanItem } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import Button from "./ui/button";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
    coordinate?: number;
  };
  index?: number;
}
interface ProductionPlanProps {
  data?: ProductionPlanItem[];
}

export default function ProductionPlan({ data }: ProductionPlanProps) {
  const hasData = !!data?.length;

  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
          <p className="text-sm font-semibold">{`${payload[0].value} cái`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle className="text-lg font-semibold">
          Kế Hoạch Sản Xuất
        </CardTitle>
        <Button
          variant="outline"
          showDropdownIcon
          icon={<Calendar className="h-4 w-4" />}
        >
          Quý này
        </Button>
      </CardHeader>
      <CardContent>
        {hasData ? (
          <>
            <div className="flex items-center space-x-4 mb-4 justify-end">
              <div className="flex items-center">
                <div className="w-6 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">Kế hoạch</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Thực hiện</span>
              </div>
            </div>

            <div className="relative h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} accessibilityLayer>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomTick />}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    ticks={[0, 20, 40, 60, 80, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={false} />
                  <Bar
                    dataKey="planned"
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                  <Bar
                    dataKey="actual"
                    fill="#10B981"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <EmptyProductionPlan />
        )}
      </CardContent>
    </Card>
  );
}
const CustomTick = ({ x, y, payload, index }: CustomTickProps) => {
  if (index === 0) {
    return (
      <>
        <text x={x} y={y! + 15} textAnchor="middle" fontSize={12} fill="#666">
          {payload?.value}
        </text>
        <text
          x={x! - 150}
          y={y! + 15}
          textAnchor="start"
          fontSize={12}
          fill="#666"
        >
          Mặt hàng
        </text>
      </>
    );
  }

  return (
    <text x={x} y={y! + 15} textAnchor="middle" fontSize={12} fill="#666">
      {payload?.value}
    </text>
  );
};
function EmptyProductionPlan() {
  return (
    <div className="h-64 flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm">Kế hoạch</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm">Thực hiện</span>
        </div>
      </div>

      <div className="relative flex-1">
        <div className="absolute inset-0">
          {/* Y-axis labels */}
          <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>100</span>
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>0</span>
          </div>

          {/* Chart grid lines */}
          <div className="ml-2 h-full flex flex-col justify-between">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="border-t border-gray-200 w-full h-0"
              ></div>
            ))}
          </div>

          {/* Empty X-axis labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-around mt-2">
            <div className="text-xs text-gray-400 text-center">Mặt hàng</div>
            <div className="text-xs text-gray-400 text-center">-</div>
            <div className="text-xs text-gray-400 text-center">-</div>
            <div className="text-xs text-gray-400 text-center">-</div>
            <div className="text-xs text-gray-400 text-center">-</div>
          </div>
        </div>
      </div>
    </div>
  );
}
