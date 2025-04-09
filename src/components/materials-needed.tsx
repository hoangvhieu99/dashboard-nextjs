"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Material } from "@/types";
import Button from "./ui/button";
import { Calendar } from "lucide-react";

interface MaterialsNeededProps {
  data?: Material[];
}

export default function MaterialsNeeded({ data }: MaterialsNeededProps) {
  const hasData = !!data?.length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle className="text-lg font-semibold">
          Nguyên Vật Liệu Cần Mua
        </CardTitle>
        <Button
          variant="outline"
          showDropdownIcon
          icon={<Calendar className="h-4 w-4" />}
        >
          Tuần này
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        {hasData ? (
          <div className="overflow-y-auto">
            {/* Header */}
            <div className=" bg-[#f3f3f4]">
              <div className="grid grid-cols-12 py-2 px-4 gap-2 font-medium text-gray-700 border-b border-gray-200 pb-2 mb-2">
                <div className="col-span-1 ">STT</div>
                <div className="col-span-5">Nguyên vật liệu</div>
                <div className="col-span-3">Đơn vị tính</div>
                <div className="col-span-3 text-center">Số lượng</div>
              </div>
            </div>
            {/* Items */}
            {data.map((material, index) => (
              <div
                key={material.id}
                className="grid grid-cols-12 px-4 border-b border-[#f3f3f4] hover:bg-gray-50 last:border-b-0"
              >
                <div className="col-span-1 pl-3 flex items-center font-bold">
                  {index + 1}
                </div>
                <div className="col-span-5 my-1">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-md p-2 mr-3">
                      <svg
                        width="18"
                        height="23"
                        viewBox="0 0 18 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.23007 0.405025L9.74007 0.915024C10.5051 1.68002 10.9251 2.69502 10.9251 3.77002C10.9251 4.84502 10.5101 5.85502 9.75507 6.61502L5.88007 10.49C5.68007 10.69 5.57007 10.955 5.57007 11.24C5.57007 11.525 5.68007 11.795 5.88007 11.995L10.9501 17.065C11.8851 17.96 13.3651 17.945 14.2801 17.03L11.5801 19.73L9.22507 22.08L2.50507 15.36C1.31007 14.165 0.710069 12.575 0.810069 10.88C0.895069 9.46002 1.53007 8.10002 2.59007 7.03502L9.22507 0.400024L9.23007 0.405025Z"
                          fill="#52575E"
                        />
                        <path
                          d="M13.0801 4.26L15.9501 7.13C17.0501 8.23 17.6551 9.69 17.6551 11.25C17.6551 12.805 17.0501 14.265 15.9501 15.365L14.2801 17.035C13.3651 17.95 11.8801 17.965 10.9501 17.07L9.2301 15.35L12.5851 11.995C12.7851 11.795 12.8951 11.525 12.8951 11.245C12.8951 10.96 12.7851 10.69 12.5851 10.49C11.8101 9.715 11.3901 8.7 11.3901 7.62C11.3901 6.54 11.8101 5.52501 12.5751 4.76501L13.0851 4.255L13.0801 4.26Z"
                          fill="#667085"
                        />
                        <path
                          d="M9.23413 8.85162L11.2034 10.8209C11.4368 11.0543 11.4368 11.4361 11.2034 11.6694L9.23413 13.6387L7.26484 11.6694C7.03149 11.4361 7.03149 11.0543 7.26484 10.8209L9.23413 8.85162Z"
                          fill="#52575E"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{material.name}</div>
                      <div className="text-xs text-gray-500">(none)</div>
                      <div className="text-xs text-blue-500">
                        {material.code}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 flex items-center pl-4 font-bold">
                  {material.unit}
                </div>
                <div className="col-span-3 flex items-center justify-center font-bold">
                  {material.quantity}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyMaterialsNeeded />
        )}
      </CardContent>
    </Card>
  );
}

function EmptyMaterialsNeeded() {
  return (
    <div className="h-64 flex flex-col items-center justify-center text-center p-4">
      <div className="w-32 h-32 border border-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <div className="text-gray-400 text-sm">Chưa có dữ liệu</div>
    </div>
  );
}
