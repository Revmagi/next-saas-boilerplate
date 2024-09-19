import Chart from "@/components/dashboard/Chart";
import RecentSubscribers from "@/components/dashboard/RecentSubscribers";
import Stats from "@/components/dashboard/Stats";

const Dashboard = () => {
  return (<>
   {/* Main Content Title */}
    <div className='flex items-center'>
        <h1 className='text-lg font-semibold md:2xl'>Dashboard</h1>
    </div>
   {/* Main Div for Page Content */}
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
     {/* Stats Div Top included from Stats.tsx and Cards from StatCard.tsx */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <Stats />
      </div>
      {/* Recent Subscriber include from RecentSubscribers.tsx  */}
      <div className="grid gap-4 md:gap-8 xl:grid-cols-2">
        <Chart />

        <RecentSubscribers />

      </div>
    </div>
     </>
  );
};

export default Dashboard