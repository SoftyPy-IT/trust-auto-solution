import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { useState } from "react"
import { HiOutlinePlus } from "react-icons/hi"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {   TextField } from "@mui/material"


const VehicleDetails = () => {
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

  const jobData = [
    {
      id: 1,
      customerName: "Rahim Ullah",
      carNumber: "33566",
    },
    {
      id: 1,
      customerName: "Rahim Ullah",
      carNumber: "33566",
    },
    {
      id: 1,
      customerName: "Rahim Ullah",
      carNumber: "33566",
    },
    {
      id: 1,
      customerName: "Rahim Ullah",
      carNumber: "33566",
    },
    {
      id: 1,
      customerName: "Rahim Ullah",
      carNumber: "33566",
    },
    {
      id: 1,
      customerName: "Rahim Ullah",
      carNumber: "33566",
    },
  ]

  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
  
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className=" mb-24 mt-10 w-full">
      <div className="flex items-center justify-between mb-5 bg-[#F1F3F6] py-5 px-3">
        <div className="flex items-center">
        <FormControl className="selectForm">
          <InputLabel value={age} id="demo-simple-select-label">
            Page
          </InputLabel>
          <Select
            className="selectForm"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <div>
        <button onClick={handleOpen} className="bg-[#42A1DA] text-white px-2 py-2 rounded-sm ml-2">
          <HiOutlinePlus size={40}/>
        </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <div className="">
             <div className="flex mb-5 items-center justify-between">
             <h3 className="text-2xl  font-bold">Vehicle Information </h3>
            <button  onClick={handleClose}className="bg-red-500 text-white px-3 py-2 rounded-sm ml-2">X</button>
             </div>
              <div>
                <TextField
                  className="addJobInputField"
                  label="Chassis No (T&N)"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center">
                  <FormControl className="productField">
                    <InputLabel htmlFor="grouped-native-select">
                      Car Registration No
                    </InputLabel>
                    <Select
                      native
                      id="grouped-native-select"
                      label="Car Registration No  "
                    >
                      <option value="select">Select Reg </option>
                      <option value="DM KHA">DM KHA</option>
                      <option value="DM KHA">DM KHA</option>
                      <option value="DM KHA">DM KHA</option>
                    </Select>
                  </FormControl>
                  <TextField
                  className="carRegNo"
                    label="Car R (T&N)"
                  />
                </div>
              </div>
              <div className="mt-3">
                <TextField
                  className="addJobInputField"
                  label="Vehicle Model (N)"
                />
              </div>

              <div className="mt-3">
                <TextField
                  className="addJobInputField"
                  label="Vehicle Brand (T&N)"
                />
              </div>
              <div className="mt-3">
                <TextField
                  className="addJobInputField"
                  label="Mileage (N) "
                />
              </div>

              <div className="mt-3">
                <TextField
                  className="addJobInputField"
                  label="Color & Code (T&N) "
                />
              </div>
              <div className="mt-3">
                <TextField
                  className="addJobInputField"
                  label="ENGINE NO & CC (T&N) "
                />
              </div>

              <div className="mt-3">
                <TextField
                  className="addJobInputField"
                  label="Company Name (T)"
                />
              </div>
              <div className="mt-3">
                <FormControl className="addJobInputField">
                  <InputLabel htmlFor="grouped-native-select">
                    Select Vehicle Category{" "}
                  </InputLabel>
                  <Select
                    native
                    defaultValue=""
                    id="grouped-native-select"
                    label="Select Vehicle Category  "
                  >
                    <option value="Select Vehicle Category ">
                      Select Vehicle Category{" "}
                    </option>
                    <option value="Sedans">Sedans</option>
                    <option value="Crossovers">Crossovers</option>
                    <option value="Sports">Sports</option>
                    <option value="Trucks">Trucks</option>
                    <option value="Coupes">Coupes</option>
                    <option value="Convertibles">Convertibles</option>
                    <option value="Diesels">Diesels</option>
                    <option value="SUVs">SUVs</option>
                    <option value="Hybrid/Electric">Hybrid/Electric</option>
                    <option value="Vans/Minivans">Vans/Minivans</option>
                    <option value="Wagons">Wagons</option>
                    <option value="Small Cars ">Small Cars </option>
                    <option value="CPO ">CPO </option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <button className="bg-[#42A1DA] text-white rounded-md px-5 py-2 w-52 mx-auto my-5">Add Job Card </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>

        </div>




        </div>
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
          <button className="bg-[#42A1DA] text-white px-2 py-2 rounded-sm ml-2">
            Search
          </button>
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="table">
          <thead className="tableWrap">
            <tr>
              <th>SL No</th>
              <th>Chassis No </th>
              <th>Engine No </th>
              <th>Vehicle Category </th>
              <th>Car Reg </th>
              <th>Vehicle Model </th>
              <th>Last Service Date </th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((data, i) => (
              <tr key={data.id}>
                <td>{i + 1}</td>
                <td>567 </td>
                <td>555</td>
                <td>478444</td>
                <td>555</td>
                <td> t55 </td>
                <td> 04-01-2024 </td>
                <td>
                  <div className="editIconWrap edit">
                    <Link to="">
                      <FaEye className="editIcon" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VehicleDetails
