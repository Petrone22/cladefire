import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "This month": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "This month": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "This month": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "This month": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "This month": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "This month": 1726,
  },
];

const dataFormatter = (number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

export default function GraphCard({ title, subtitle, data }) {
  return (
    <div className="w-3/12">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl -mb-2">{title}</CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent className="-mt-2">
          <p className="text-xl font-bold text-start ">{subtitle}</p>
          <CardDescription>+17% from last month</CardDescription>
        </CardContent>
        <CardFooter>
          <AreaChart
            className="h-36 mt-4"
            data={chartdata}
            index="date"
            categories={["This month"]}
            colors={["indigo", "cyan"]}
            showTooltip={true}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
