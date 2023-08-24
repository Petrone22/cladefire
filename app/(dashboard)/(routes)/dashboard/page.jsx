"use client";

import { useUser } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MoneyGraphCard from "@/components/ui/graphs/MoneyGraphCard";
import MatchGraphCard from "@/components/ui/graphs/matchGraphCard";
import KDAGraphCard from "@/components/ui/graphs/KDAGraphCard";
import TournamentGraphCard from "@/components/ui/graphs/TournamentGraphCard";
import TeamAccordion from "@/components/ui/accordions/TeamAccordion";

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const tournament_data = [
  {
    date: "Aug 1",
    Tournaments: 0,
  },
  {
    date: "Aug 3",
    Tournaments: 2,
  },
  {
    date: "Aug 7",
    Tournaments: 1,
  },
  {
    date: "Aug 11",
    Tournaments: 3,
  },
  {
    date: "Aug 19",
    Tournaments: 3,
  },
  {
    date: "Aug 23",
    Tournaments: 1,
  },
];
const match_data = [
  {
    date: "Aug 1",
    Games: 0,
  },
  {
    date: "Aug 3",
    Games: 8,
  },
  {
    date: "Aug 7",
    Games: 4,
  },
  {
    date: "Aug 11",
    Games: 9,
  },
  {
    date: "Aug 19",
    Games: 10,
  },
  {
    date: "Aug 23",
    Games: 4,
  },
];
const money_data = [
  {
    date: "Aug 1",
    Earnings: 14,
  },
  {
    date: "Aug 3",
    Earnings: 5,
  },
  {
    date: "Aug 7",
    Earnings: 17,
  },
  {
    date: "Aug 11",
    Earnings: 23,
  },
  {
    date: "Aug 19",
    Earnings: 10,
  },
  {
    date: "Aug 23",
    Earnings: 78,
  },
];
const revenue_data = [
  {
    date: "Aug 1",
    Games: 0,
  },
  {
    date: "Aug 3",
    Games: 68,
  },
  {
    date: "Aug 7",
    Games: 34,
  },
  {
    date: "Aug 11",
    Games: 101,
  },
  {
    date: "Aug 19",
    Games: 92,
  },
  {
    date: "Aug 23",
    Games: 32,
  },
];
const kda_data = [
  {
    date: "Aug 1",
    "K/DA": 0.416,
    Kills: 5,
    Deaths: 12,
  },
  {
    date: "Aug 3",
    Kills: 11,
    Deaths: 9,
    "K/DA": 1.222,
  },
  {
    date: "Aug 7",
    Kills: 24,
    Deaths: 7,
    "K/DA": 3.428,
  },
  {
    date: "Aug 11",
    Kills: 32,
    Deaths: 13,
    "K/DA": 2.461,
  },
  {
    date: "Aug 19",
    Kills: 9,
    Deaths: 11,
    "K/DA": 0.818,
  },
  {
    date: "Aug 23",
    Kills: 40,
    Deaths: 21,
    "K/DA": 1.904,
  },
];
const teamData = [
  {
    name: "Petrone",
    badge: "https://github.com/shadcn.png",
    ready: "No",
    ticket: "white",
  },
  {
    name: "Petrone",
    badge: "https://github.com/shadcn.png",
    ready: "No",
    ticket: "gold",
  },
  {
    name: "Petrone",
    badge: "https://github.com/shadcn.png",
    ready: "No",
    ticket: "white",
  },
  {
    name: "Petrone",
    badge: "https://github.com/shadcn.png",
    ready: "No",
    ticket: "gold",
  },
  {
    name: "Petrone",
    badge: "https://github.com/shadcn.png",
    ready: "No",
    ticket: "gold",
  },
];
export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="w-full pt-20">
      <div className="w-full h-full flex gap-10 flex-col pt-8 px-6">
        <div className="w-full flex flex-col items-center md:items-start gap-1 ">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Hello, {user?.firstName}
          </h1>
          <span className="text-lg text-muted-foreground">
            Here is your CladeFire overview
          </span>
        </div>
        <div className="h-full  w-full items-center justify-center flex flex-col gap-2">
          <div className=" flex  flex-col  w-full">
            <Tabs defaultValue="Overview" className="w-full">
              <TabsList className="w-full md:w-6/12 lg:w-4/12">
                <TabsTrigger value="Overview" className="w-full">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="Revenue" className="w-full">
                  Revenue
                </TabsTrigger>
                <TabsTrigger value="Your_team" className="w-full">
                  Your team
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Overview">
                <div className="w-full flex flex-wrap gap-4 items-center justify-center md:justify-start  mt-4">
                  <MatchGraphCard
                    title={"Match Count"}
                    subtitle={"43"}
                    data={match_data}
                    styles={"w-full md:w-2/5 lg:w-4/12 text-sm md:text-xl"}
                  />
                  <KDAGraphCard
                    title={"KD/A"}
                    subtitle={"1.413"}
                    data={kda_data}
                    styles={"w-full md:w-2/5 lg:w-5/12 text-sm md:text-xl"}
                  />
                  <TournamentGraphCard
                    title="Tournaments played"
                    subtitle={7}
                    data={tournament_data}
                    styles={"w-full md:w-2/5 lg:w-5/12 text-sm md:text-xl"}
                  />
                </div>
              </TabsContent>
              <TabsContent value="Revenue">
                <div className="w-full flex flex-wrap gap-4 items-center justify-center md:justify-start  mt-4">
                  <MoneyGraphCard
                    title="Total Earnings"
                    subtitle={"$137"}
                    data={money_data}
                    styles={"w-full md:w-4/5 lg:w-2/5 text-sm md:text-xl"}
                  />
                  <MoneyGraphCard
                    title="Total Team Earnings"
                    subtitle={"$1037"}
                    data={money_data}
                    styles={"w-full md:w-4/5 lg:w-2/5 text-sm md:text-xl"}
                  />
                </div>
              </TabsContent>
              <TabsContent value="Your_team">
                <div className="w-full flex flex-wrap gap-4 items-center justify-center md:justify-start  mt-4">
                  <TeamAccordion styles={"w-full"} memberData={teamData} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
