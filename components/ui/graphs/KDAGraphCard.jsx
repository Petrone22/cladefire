import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { AreaChart } from "@tremor/react";

export default function KDAGraphCard({ title, subtitle, data, styles }) {
  return (
    <div className={`group  ${cn(styles)}`}>
      <Card>
        <CardHeader>
          <CardTitle className="">{title}</CardTitle>
          <CardDescription className="group-hover:text-primary transition">
            This month
          </CardDescription>
        </CardHeader>
        <CardContent className="-mt-2">
          <p className=" font-bold text-start ">{subtitle}</p>
          <CardDescription className="group-hover:text-primary transition">
            +17% from last month
          </CardDescription>
        </CardContent>
        <CardFooter className="p-1">
          <AreaChart
            className="h-36 mt-4 "
            data={data}
            index="date"
            categories={["Kills", "K/DA"]}
            colors={["indigo", "cyan", "red"]}
            showTooltip={true}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
