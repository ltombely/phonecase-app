import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Progress } from "@/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { formatPrice } from "@/lib/utils";
import StatusDropdown from "./StatusDropdown";
import { Order, ShippingAddress, User } from "@prisma/client";
import Link from "next/link";
import { GearIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";

interface ExtendedOrder extends Order {
  shippingAddress: ShippingAddress | null;
  user: User;
}

type DashboardProps = {
  orders: ExtendedOrder[];
  lastWeekSumAmount: number | null;
  lastMonthSumAmount: number | null;
};

const WEEKLY_GOAL = 1500;
const MONTHLY_GOAL = 7500;

export default function Dashboard({
  orders,
  lastWeekSumAmount,
  lastMonthSumAmount,
}: DashboardProps) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4 ">
        <div className="flex justify-end hover:opacity-80 font-medium">
          <Link className="flex gap-2" href="/dashboard/admin-config">
            Configurações do Administrador
            <ArrowRight className="size-6 text-zinc-700" />
          </Link>
        </div>
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Últimos 7 dias</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastWeekSumAmount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                de {formatPrice(WEEKLY_GOAL)}
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastWeekSumAmount ?? 0) * 100) / WEEKLY_GOAL}
                />
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Últimos 30 dias</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastMonthSumAmount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                de {formatPrice(MONTHLY_GOAL)}
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastMonthSumAmount ?? 0) * 100) / MONTHLY_GOAL}
                />
              </CardFooter>
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Pedidos Recebidos
          </h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>

                <TableHead className="hidden sm:table-cell">Status</TableHead>

                <TableHead className="hidden sm:table-cell">
                  Data da Compra
                </TableHead>

                <TableHead className="text-right">Quantia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-accent">
                  <TableCell>
                    <div className="font-medium">
                      {order.shippingAddress?.name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {order.user.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusDropdown id={order.id} orderStatus={order.status} />
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {order.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell>{formatPrice(order.amount)} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
