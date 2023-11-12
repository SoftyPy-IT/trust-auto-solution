import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaCarAlt,
  FaProjectDiagram,
  FaProductHunt,
  FaUserTie,
  FaCriticalRole,
  FaAlipay,
  FaUsers,
  FaUsersCog,
  FaDatabase,
  FaHeadset,
  FaDyalog,
  FaPlus,
  FaThLarge
} from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaHome } from "react-icons/fa";
const DashboardLayout = () => {
  return (
    <div>
      <div className="drawerflex  dashboardWrap">
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="fixed overflow-y-scroll overflow-x-hidden  drawwerLeftSide h-screen text-lg font-semibold  bg-[#351E98] text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <Link to="/" className="shadow-md z-10">
            {/* <img src={logo} className="h-20"/> */}
            <h3 className="text-3xl font-bold mt-3 ml-3">T A Solutions </h3>
          </Link>
          <ul className="menu p-4 w-80 ">
            <li></li>
            <li className="ml-1">
              <Link to="/dashboard">
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography className="accordionName">
                    <div className="flex items-center justify-center">
                      <FaCarAlt />
                      <span className="ml-2">Vehicle Job Card</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="dashboardAccordionDetails">
                  <Typography className="dashboardItemList">
                   <span className="flex items-center">
                   <FaPlus className="mr-2"/>
                    <NavLink to="/dashboard/addjob">Add job card</NavLink>
                   </span>
                  </Typography>
                  <Typography className="dashboardItemList">
                    <span className="flex items-center">
                    <FaThLarge className="mr-2"/>
                    <NavLink to="/dashboard/view-job">View Job Card</NavLink>
                    </span>
                  </Typography>
                  <Typography className="dashboardItemList">
                    <span className="flex items-center">
                    <FaThLarge className="mr-2"/>
                    <NavLink to="/dashboard/jobcard-list">Job Card List </NavLink>
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
                <li>
                <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography className="accordionName">
                    <div className="flex items-center justify-center">
                      <FaCarAlt />
                      <span className="ml-2">Invoice Card</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="dashboardAccordionDetails">
                  <Typography className="dashboardItemList">
                    <span className="flex items-center">
                    <FaPlus className="mr-2"/>
                    <NavLink to="/dashboard/invoice">Add Invoice Card</NavLink>
                    </span>
                  </Typography>
                  <Typography className="dashboardItemList">
                   <span className="flex items-center">
                   <FaThLarge className="mr-2"/>
                    <NavLink to="/dashboard/invoice-view">View Invoice List </NavLink>
                   </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </li>
                <li>
                <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography className="accordionName">
                    <div className="flex items-center justify-center">
                      <FaCarAlt />
                      <span className="ml-2">Qutation Card</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="dashboardAccordionDetails">
                  <Typography className="dashboardItemList">
                    <span className="flex items-center">
                    <FaPlus className="mr-2"/>
                    <NavLink to="/dashboard/qutation">Add Qutation Card</NavLink>
                    </span>
                  </Typography>
                  <Typography className="dashboardItemList">
                    <span className="flex items-center">
                    <FaThLarge className="mr-2"/>
                    <NavLink to="/dashboard/details">View Qutation </NavLink>
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </li>
            <li>
              <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography className="accordionName projects">
                    <div className="flex items-center justify-center">
                      <FaProjectDiagram />
                      <span className="ml-2"> Projects</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="dashboardAccordionDetails">
                  <Typography className="dashboardItemList">
                    <NavLink to="/dashboard/addjob">Add job card</NavLink>
                  </Typography>
                  <Typography className="dashboardItemList">
                    View Job Card
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
            <li>
              <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography className="accordionName2">
                  <span className="flex items-center justify-center">
                        <FaProductHunt />
                        <span className="ml-2"> Product List </span>
                      </span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="dashboardAccordionDetails">
                  <Typography className="dashboardItemList">
                     <NavLink to="/dashboard/product">All Product List </NavLink>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
            <li>
              <Link to="/dashboard/services">
                <FaUserTie />
                <NavLink to="/dashboard/customer">Customer List </NavLink>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/expense">
                <FaCriticalRole />
                <span> Expense </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/role">
                <FaCriticalRole />
                <span> Role </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services">
                <FaAlipay />
                <span> Bill Pay</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/employee">
                <FaUsers />
                <span>Employee</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <FaUsersCog />
                <span> Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services">
                <FaDatabase />
                <span> Data Backup </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services">
                <FaHeadset />
                <span>Support</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services">
                <FaDyalog />
                <span> Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
