import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/Mobile-sidebar";
import ModeToggle from "@/components/dark-mode-toggle";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex md:pl-28 fixed justify-between items-center left-0 top-0 w-full py-2 gap-4 px-2 bg-background border-b-2">
      <div className="w-full flex justify-start items-center  gap-2">
        <MobileSidebar />
        <div className="">
          <Button variant="" size="sm">
            <Link href={"/tournaments"}>Find tournaments</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-4 w-fit">
        <div className=" mr-0 lg:mr-10 hidden md:flex items-center justify-center md:gap-2 lg:gap-4 ">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="group " size="md">
                <span className="font-bold">Tickets</span>

                <span className="transition font-bold ml-2 px-4 py-1 bg-accent group-hover:bg-primary group-hover:text-background rounded-sm ">
                  3
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Your Tournament Tickets</DialogTitle>
                <DialogDescription>
                  You can click 'Purchase tickets' to add tickets to your
                  account
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="name"
                    className="text-left text-lg font-bold whitespace-nowrap"
                  >
                    Silver Tickets
                  </Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="username"
                    className="text-left text-lg font-bold whitespace-nowrap"
                  >
                    Gold Tickets
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Purchase tickets</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="group " size="md">
                <span className="font-bold">Balance</span>
                <span className="transition font-bold ml-2 px-4 py-1 bg-accent group-hover:bg-primary group-hover:text-background rounded-sm flex gap-1 items-center ">
                  47 <span className="font-sans font-semibold text-xs">C</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Current balance</DialogTitle>
                <DialogDescription>
                  Check your balance, Buy credits, Or cash out
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4 w-full ">
                <div className="flex justify-start grid-cols-4 w-full  items-center gap-4">
                  <span className="my-2  font-bold text-lg">
                    {" "}
                    Credits:
                    <span className=" transition font-bold ml-4 px-4 py-1 bg-accent  rounded-sm whitespace-nowrap">
                      47
                    </span>
                  </span>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" variant="outline">
                  Recharge balance
                </Button>
                <Button type="submit">Cash out</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
