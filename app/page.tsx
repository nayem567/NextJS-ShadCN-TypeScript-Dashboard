import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:gird-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4">Test</div>
      <div className="bg-primary-foreground p-4">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4">Test</div>
      <div className="bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4">Test</div>
    </div>
  );
}
