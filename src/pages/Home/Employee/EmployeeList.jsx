import { FaTrashAlt, FaEdit,  FaUserTie, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NotificationAdd } from "@mui/icons-material";
import { FaUserGear } from "react-icons/fa6";
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
const EmployeeList = () => {

  
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }))

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }))



  return (
    <div className="mt-5 mb-24 w-full">
       <div className="flex justify-between border-b-2 pb-3">
    <div className="flex items-center mr-[80px]  justify-center topProductBtn">
				<Link to='/dashboard/addjob'><button> Add Job </button></Link>
				<Link to='/dashboard/qutation'><button>Qutation </button></Link>
				<Link to='/dashboard/invoice'><button>Invoice </button></Link>
			</div>
      <div className="flex  justify-end items-end">
        <NotificationAdd size={30} className="mr-2"/>
        <FaUserGear size={30} />
      </div>
    </div>
      <div className="flex items-center justify-between my-3 mb-8">
				<div className="flex items-center justify-center ">
          <FaUsers className="invoicIcon" />
					<div className="ml-2">
						<h3 className="text-2xl font-bold"> Employee </h3>
						<span>Manage Customer </span>
					</div>
				</div>
				<div className="productHome">
					<span>Home / </span>
					<span>Customer / </span>
					<span>New Customer </span>
				</div>
			</div>
      <div className="flex items-center justify-between mb-5 bg-[#F1F3F6] py-5 px-3">
          <h3 className="text-3xl font-bold mb-3"> Employee List:</h3>
          <div className="flex items-center">
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon className="searchIcon" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                 <button className="bg-[#42A1DA] text-white px-2 py-2 rounded-sm ml-2">Search</button>
                </div>
        </div>
   
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className='tableWrap'>
            <tr>
              <th>SL</th>
              <th>Employee Name </th>
              <th>Phone Number </th>
              <th>Email</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Car  </td>
              <td>BMW2343</td>
              <td>BDT1005</td>
              <td >
                <div className='editIconWrap '>
                  <Link >
                  <FaUserTie className="invoicIcon" />
                  </Link>
                </div>
              </td>
              <td >
                <div className='editIconWrap edit'>
                  <Link to='/dashboard/update-employee'>
                    <FaEdit className='editIcon' />
                  </Link>
                </div>
              </td>
              <td>
                <div className='editIconWrap'>
                  <FaTrashAlt className='deleteIcon' />
                </div>

              </td>
            </tr>

          </tbody>
        </table>
      </div>
   
    </div>
  );
};

export default EmployeeList;