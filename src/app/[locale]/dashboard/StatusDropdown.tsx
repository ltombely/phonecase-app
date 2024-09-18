'use client'

import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { Check, ChevronsUpDown } from "lucide-react";
import { changeOrderStatus } from "./actions";
import { useRouter } from "next/navigation";

type StatusDropdownProps = {
  id: string;
  orderStatus: OrderStatus;
};

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: "Awaiting shipment",
  fulfilled: "Fullfilled",
  shipped: "Shipped",
};

export default function StatusDropdown({
  id,
  orderStatus,
}: StatusDropdownProps) {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onSuccess: () => router.refresh(),
  });

  return (
    <DropdownMenuItem>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-52 flex justify-between items-center"
        >
          {LABEL_MAP[orderStatus]}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        {Object.keys(orderStatus).map((status) => (
          <DropdownMenuItem
            key={status}
            className={cn(
              "flex text-sm gap-1 items-center p-2.5 cursor-default hover:bg-zinc-100",
              {
                "bg-zinc-100": orderStatus === status,
              }
            )}
            onClick={() => mutate({ id, newStatus: status as OrderStatus })}
          >
            <Check
              className={cn(
                "mr-2 size-4 text-primary",
                orderStatus === status ? "opacity-100" : "opacity-0"
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenuItem>
  );
}
