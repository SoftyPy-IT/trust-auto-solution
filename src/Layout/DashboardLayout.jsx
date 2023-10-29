
import { Link, Outlet, } from "react-router-dom";
import { FaCarAlt,FaProjectDiagram,FaProductHunt,FaUserTie,FaCriticalRole,FaAlipay,FaUsers,FaUsersCog,FaDatabase,FaHeadset,FaDyalog} from "react-icons/fa";
const DashboardLayout = () => {
  return (
    <div>
      

      <div className="drawerflex  dashboardWrap">
       
        <div className="drawer-content">
        
          <Outlet></Outlet>
          
        </div>
        <div className="fixed overflow-y-scroll overflow-x-hidden  drawwerLeftSide h-screen text-lg font-semibold  bg-red-700 text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 ">
            <li>
              <Link to="/" className="shadow-md z-10">
                {/* <img src={logo} className="h-20"/> */}
                <h3 className="text-3xl font-bold">T A Solutions </h3>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" >
                Dashboard
              </Link>
            </li>
            <li>
              
              <Link to="/dashboard/services" >
              <FaCarAlt/>
               <span> Services</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
              <FaProjectDiagram/>
              <span> Projects </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaProductHunt/>
              <span>  Products List</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
               <FaUserTie/>
              <span>Customer List</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
              <FaCriticalRole/>
              <span>  Expense </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
              <FaCriticalRole/>
              <span>  Role </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaAlipay/>
              <span>  Bill Pay</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaUsers/>
                <span>Employee</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaUsersCog/>
               <span> Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaDatabase/>
              <span>  Data Backup </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaHeadset/>
                <span>Support</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" >
                <FaDyalog/>
           <span>     Log Out</span>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
