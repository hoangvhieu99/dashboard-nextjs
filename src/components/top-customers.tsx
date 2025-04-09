import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import type { Customer } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Button from "./ui/button";

interface TopCustomersProps {
  data?: Customer[];
}

export default function TopCustomers({ data }: TopCustomersProps) {
  const hasData = !!data?.length;
  // Default data if none is provided
  const defaultData: Customer[] = [
    {
      id: "1",
      name: "Công ty Dệt may Happy Polla",
      value: 2900,
    },
    {
      id: "2",
      name: "Công ty May mặc Saigon Trendy",
      value: 2700,
    },
    {
      id: "3",
      name: "Outlet Lemon squeeze",
      value: 3100,
    },
    {
      id: "4",
      name: "Shop quần áo streetwear News",
      value: 2500,
    },
    {
      id: "5",
      name: "Shop thời trang công sở Basic Office",
      value: 2400,
    },
  ];

  const chartData = hasData ? data : defaultData;

  // Custom formatter for X axis ticks to show values with thousands separator
  const formatXAxis = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const highlighted = payload[0].payload.highlighted;

      return (
        <div
          className={`bg-gray-800 text-white px-3 py-2 rounded shadow-lg ${
            highlighted ? "font-medium" : ""
          }`}
        >
          <p className="text-sm">{payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };
  const CustomizedLabel = (props: any) => {
    const { x, y, width, height, value, highlighted } = props;

    if (!highlighted) {
      return null;
    }

    return (
      <g>
        <rect
          x={x + width + 5}
          y={y + height / 2 - 12}
          width={60}
          height={24}
          fill="#18181B"
          rx={4}
          ry={4}
        />
        <text
          x={x + width + 35}
          y={y + height / 2 + 5}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize={12}
        >
          {value.toLocaleString()}
        </text>
      </g>
    );
  };
  const CustomTick = ({ x, y, payload, index }: any) => {
    if (index === 0) {
      return (
        <>
          <text x={x} y={y + 15} textAnchor="middle" fontSize={12} fill="#666">
            {payload.value}
          </text>
          <text
            x={x - 70}
            y={y + 14}
            textAnchor="start"
            fontSize={12}
            fill="#666"
          >
            Sản lượng
          </text>
        </>
      );
    }

    return (
      <text x={x} y={y + 15} textAnchor="middle" fontSize={12} fill="#666">
        {payload.value}
      </text>
    );
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle className="text-lg font-semibold">
          Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất
        </CardTitle>
        <Button
          variant="outline"
          showDropdownIcon
          icon={<Calendar className="h-4 w-4" />}
        >
          Năm nay
        </Button>
      </CardHeader>
      <CardContent>
        {hasData ? (
          <>
            <div className="flex text-sm text-gray-600 mb-2 ml-14">
              <div className="w-40">Khách hàng</div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={chartData}
                  barSize={20} // Increased bar size to match your image
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                  />
                  <XAxis
                    type="number"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={formatXAxis}
                    domain={[0, 3200]}
                    tickCount={5}
                    tick={CustomTick}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                    width={140}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "transparent" }}
                  />
                  <Bar dataKey="value" fill="#2196F3" radius={[0, 4, 4, 0]}>
                    <LabelList
                      dataKey="value"
                      position="right"
                      content={CustomizedLabel}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <EmptyTopCustomers />
        )}
      </CardContent>
    </Card>
  );
}

function EmptyTopCustomers() {
  return (
    <div className="h-64 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-32 text-sm text-gray-400">Khách hàng</div>
        <div className="flex-1 ml-4">
          <div className="h-4 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Chưa có dữ liệu</div>
      </div>

      <div className="flex items-center mt-6">
        <div className="w-32 text-sm text-gray-400">Sản lượng</div>
        <div className="flex-1 ml-4">
          <div className="flex justify-between text-xs text-gray-400">
            <span>0</span>
            <span>800</span>
            <span>1,600</span>
            <span>2,400</span>
            <span>3,200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
