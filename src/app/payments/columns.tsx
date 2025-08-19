"use client";

import { ColumnDef } from "@tanstack/react-table";
// Define the Payment type here or import from a dedicated types file
export interface Payment {
  id: string;
  username: string;
  email: string;
  status: "success" | "pending" | "failed";
  amount: number | string;
}
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { Edit, Trash2, Eye } from "lucide-react";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const getBadgeVariant = (status: string) => {
        switch (status) {
          case "success":
            return "default";
          case "pending":
            return "secondary";
          case "failed":
            return "destructive";
          default:
            return "outline";
        }
      };
      const getStatusIcon = (status: string) => {
        switch (status) {
          case "success":
            return <CheckCircle2 className="h-4 w-4 text-green-600" />;
          case "pending":
            return <Clock className="h-4 w-4 text-yellow-500" />;
          case "failed":
            return <XCircle className="h-4 w-4 text-red-600" />;
          default:
            return null;
        }
      };
      return (
        <Badge
          variant={getBadgeVariant(status as string)}
          className="capitalize text-sm text-center w-24 flex justify-center items-center gap-1 shadow-sm border"
        >
          {getStatusIcon(status as string)}
          {status as string}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return <div className="text-right">Amount</div>;
    },
    cell: ({ row, table }) => {
      const amount = parseFloat(row.getValue("amount"));
      // Get currency from table.options.meta if available
      const currency = table.options.meta?.currency || "USD";
      const formatted = new Intl.NumberFormat(
        currency === "JPY" ? "ja-JP" : "en-US",
        {
          style: "currency",
          currency: currency,
          maximumFractionDigits: currency === "JPY" ? 0 : 2,
        }
      ).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Actions</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <Eye className="mr-2 h-4 w-4 text-blue-600" /> View payment
              details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4 text-green-600" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 focus:bg-red-50">
              <Trash2 className="mr-2 h-4 w-4 text-red-600" /> Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
