import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Ticket } from "lucide-react";

export default function TeamAccordion({ styles, memberData }) {
  return (
    <div className={`group  ${cn(styles)}`}>
      <Table>
        <TableCaption>Overview of your team.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] hidden md:flex items-center justify-center text-center ">
              Badge
            </TableHead>
            <TableHead>Member Name</TableHead>
            <TableHead>Ready</TableHead>
            <TableHead className="text-right">Ticket</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberData.map((member) => {
            return (
              <TableRow
                key={member.name}
                className="cursor-pointer group/item "
              >
                <TableCell className={`font-medium hidden md:block group/item`}>
                  <Avatar className={`group-hover/item:scale-110 duration-150`}>
                    <AvatarImage src={member.badge} alt="Badge" />
                  </Avatar>
                </TableCell>
                <TableCell
                  className={`group-hover/item:text-primary duration-150`}
                >
                  {member.name}
                </TableCell>
                <TableCell
                  className={`group-hover/item:text-primary duration-150`}
                >
                  {member.ready}
                </TableCell>
                <TableCell className="text-right">
                  <div className="w-full h-6 flex justify-end pr-2">
                    <Ticket color={member.ticket}></Ticket>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
