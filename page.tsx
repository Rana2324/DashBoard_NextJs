import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AppBarChart } from "@/components/AppBarChart";
import ChartAreaLegend from "@/components/chart-area-legend";
import ChartPieDonutText from "@/components/chart-pie-donut-text";
import CardList from "@/components/cardList";
import TodoList from "@/components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your dashboard!</p>
          <Link
            href="/payments"
            className="inline-block mt-2 text-blue-600 hover:underline font-medium"
          >
            Go to Payments Page
          </Link>
        </header>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          {/* <CardList title="Latest Transactions" /> */}
          <CardList title="Latest Transactions" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <ChartPieDonutText />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <TodoList />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <ChartAreaLegend />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Popular Content" />
        </div>
      </div>
    </div>
  );
}
