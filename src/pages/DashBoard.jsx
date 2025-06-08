import Sidebar from "../components/SideBar";

const Dashboard = () =>{
    return (
        <div className="flex min-h-screen">
        <Sidebar />
         <div className="flex-1 bg-gray-100 p-6">
                <h2 className="text-2xl font-semibold">Dashboard Content</h2>
         </div>
         </div>
    );
};

export default Dashboard;