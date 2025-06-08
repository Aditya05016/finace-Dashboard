import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Statscard from "../components/StatsCard";
import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign } from "react-icons/fi";
import Charts from "../components/Charts";
import TransactionsTable from "../components/Transaction";
import { transactions, chartData } from "../data/Dummydata";

const Dashboard = () =>{
    return (
        <div className="flex min-h-screen">
        <Sidebar />
         <div className="flex-1 bg-gray-100 p-6">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <Statscard
            title="Income"
            amount="₹80,000"
            icon={<FiArrowUpCircle size={24} />}
            bgColor="bg-green-500"
          />
          <Statscard
            title="Expense"
            amount="₹45,000"
            icon={<FiArrowDownCircle size={24} />}
            bgColor="bg-red-500"
          />
          <Statscard
            title="Balance"
            amount="₹35,000"
            icon={<FiDollarSign size={24} />}
            bgColor="bg-blue-500"
          />
        </div>
        {/* Charts */}
        <Charts data={chartData} />

        {/* Transactions Table */}
        <TransactionsTable transactions={transactions} />

               
         </div>
         </div>
    );
};

export default Dashboard;