"use server"; 

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export async function changeOrderStatus({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}): Promise<void> {
  await db.order.update({
    where: {
      id,
    },
    data: {
      status: newStatus,
    },
  });
}
