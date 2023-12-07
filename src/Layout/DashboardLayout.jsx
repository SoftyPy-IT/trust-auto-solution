import { Link, Outlet } from "react-router-dom";
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
    FaThLarge,
} from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaHome } from "react-icons/fa";
import { useRef, useState } from "react";
import './Layout.css'
import { Home } from "@mui/icons-material";
const DashboardLayout = () => {
    const navRef = useRef();
    const [toggle, setToggle] = useState(true)
    const toggleSideBar = () => {
        setToggle((toggle) => !toggle)
    }
    return (
        <main>
            <div className=" ">
                <div className={`${toggle ? `drawer-content` : `activeDrawer`}`}>
                    <Outlet />
                </div>

                <aside className="flex ">
                    <div className={`${toggle ? `fixed overflow-y-scroll overflow-x-hidden drawwerLeftSide  h-screen text-lg font-semibold  bg-[#351E98] text-white` : `fixed overflow-y-scroll overflow-x-hidden sideBarActive h-screen text-lg font-semibold  bg-[#351E98] text-white`}`}>


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
                                                <FaPlus className="mr-2" />
                                                <Link to="/dashboard/addjob">Add job card</Link>
                                            </span>
                                        </Typography>
                                        <Typography className="dashboardItemList">
                                            <span className="flex items-center">
                                                <FaThLarge className="mr-2" />
                                                <Link to="/dashboard/jobcard-list">
                                                    Job Card List
                                                </Link>
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
                                                <FaPlus className="mr-2" />
                                                <Link to="/dashboard/qutation">
                                                    Add Qutation Card
                                                </Link>
                                            </span>
                                        </Typography>
                                        <Typography className="dashboardItemList">
                                            <span className="flex items-center">
                                                <FaThLarge className="mr-2" />
                                                <Link to="/dashboard/qutation-view">
                                                    View Qutation List
                                                </Link>
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
                                                <FaPlus className="mr-2" />
                                                <Link to="/dashboard/invoice">
                                                    Add Invoice Card
                                                </Link>
                                            </span>
                                        </Typography>
                                        <Typography className="dashboardItemList">
                                            <span className="flex items-center">
                                                <FaThLarge className="mr-2" />
                                                <Link to="/dashboard/invoice-view">
                                                    View Invoice List{" "}
                                                </Link>
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
                                            <Link to="/dashboard/addjob">Running Project</Link>
                                        </Typography>
                                        <Typography className="dashboardItemList">
                                            Completed Project
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
                                            <Link to="/dashboard/product">All Product List </Link>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Link to="/dashboard/services">
                                    <FaUserTie />
                                    Customer List
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/expense">
                                    <FaCriticalRole />
                                    <span> Expense </span>
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
                                                <FaCriticalRole />
                                                <span className="ml-2">Role</span>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="dashboardAccordionDetails">
                                        <Typography className="dashboardItemList">
                                            <span className="flex items-center">
                                                <FaPlus className="mr-2" />
                                                <Link to="/dashboard/add-role">
                                                    Add Role
                                                </Link>
                                            </span>
                                        </Typography>
                                        <Typography className="dashboardItemList">
                                            <span className="flex items-center">
                                                <FaThLarge className="mr-2" />
                                                <Link to="/dashboard/role">
                                                    View Role
                                                </Link>
                                            </span>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
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
                    <div className={`${toggle ? `activeToggle` : `active`}`} ref={navRef} onClick={toggleSideBar}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className={`${toggle ? `rightSideBarWrap` : `activeRightSideBarWrap`}`}>

                        <div className="mt-14">
                            <div>
                                <div className="toolTipWrap">
                                    <Home className="tooltipIcon" />
                                    <b className="toolTip">Dashboard </b>
                                </div>
                            </div>


                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaCarAlt className="tooltipIcon" />
                                    <b className="toolTip">Job Card</b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaCarAlt className="tooltipIcon" />
                                    <b className="toolTip">Qutation Card</b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaCarAlt className="tooltipIcon" />
                                    <b className="toolTip">Invoice Card</b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaProjectDiagram className="tooltipIcon" />
                                    <b className="toolTip">Project</b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaProductHunt className="tooltipIcon" />
                                    <b className="toolTip">Product</b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaUserTie className="tooltipIcon" />
                                    <b className="toolTip">Customer</b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaCriticalRole className="tooltipIcon" />
                                    <b className="toolTip">Expense </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaCriticalRole className="tooltipIcon" />
                                    <b className="toolTip">Role </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaAlipay className="tooltipIcon" />
                                    <b className="toolTip">Bill Pay </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaUsers className="tooltipIcon" />
                                    <b className="toolTip">Employee </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaUsersCog className="tooltipIcon" />
                                    <b className="toolTip">Profile </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaDatabase className="tooltipIcon" />
                                    <b className="toolTip">Data Backup </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaHeadset className="tooltipIcon" />
                                    <b className="toolTip">Support </b>
                                </div>
                            </div>
                            <div className="mt-[14px]">
                                <div className="toolTipWrap">
                                    <FaDyalog className="tooltipIcon" />
                                    <b className="toolTip">Log Out </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

        </main>
    );
};

export default DashboardLayout;