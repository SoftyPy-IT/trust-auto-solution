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
const Main = () => {
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
                <Link to="/">
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
                        <Link to="/addjob">Add job card</Link>
                      </span>
                    </Typography>
                    <Typography className="dashboardItemList">
                      <span className="flex items-center">
                        <FaThLarge className="mr-2" />
                        <Link to="/jobcard-list">
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
                        <Link to="/qutation">
                          Add Qutation Card
                        </Link>
                      </span>
                    </Typography>
                    <Typography className="dashboardItemList">
                      <span className="flex items-center">
                        <FaThLarge className="mr-2" />
                        <NavLink to="/qutation-view">
                          View Qutation List
                        </NavLink>
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
                        <NavLink to="/invoice">
                          Add Invoice Card
                        </NavLink>
                      </span>
                    </Typography>
                    <Typography className="dashboardItemList">
                      <span className="flex items-center">
                        <FaThLarge className="mr-2" />
                        <NavLink to="/invoice-view">
                          View Invoice List{" "}
                        </NavLink>
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
                      <NavLink to="/addjob">Add job card</NavLink>
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
                      <NavLink to="/product">All Product List </NavLink>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Link to="/services">
                  <FaUserTie />
                  <NavLink to="/customer">Customer List </NavLink>
                </Link>
              </li>
              <li>
                <Link to="/expense">
                  <FaCriticalRole />
                  <span> Expense </span>
                </Link>
              </li>
              <li>
                <Link to="/role">
                  <FaCriticalRole />
                  <span> Role </span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FaAlipay />
                  <span> Bill Pay</span>
                </Link>
              </li>
              <li>
                <Link to="/employee">
                  <FaUsers />
                  <span>Employee</span>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FaUsersCog />
                  <span> Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FaDatabase />
                  <span> Data Backup </span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FaHeadset />
                  <span>Support</span>
                </Link>
              </li>
              <li>
                <Link to="/services">
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
        </aside>
      </div>

    </main>
  );
};

export default Main;