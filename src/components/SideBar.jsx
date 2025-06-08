import { FiHome, FiList, FiSettings } from "react-icons/fi";


const Sidebar = () => {
    return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
        <h1 className="text-2xl font-bold mb-6">FinDash</h1>
        <nav className="flex flex-col gap-4">
            <a href="#" className="hover:bg gray-700 p-2 rounded flex items-center gap-2">
                <FiHome />Dashboard
            </a>
            <a href="#" className="hover:bg gray-700 p-2 rounded flex items-center gap-2">
                <FiList/> Transactions
            </a>
            
             <a href="#" className="hover:bg gray-700 p-2 rounded flex items-center gap-2">
                <FiSettings/> Settings
            </a>
        </nav>  
    </div>
    );
};

    export default Sidebar;