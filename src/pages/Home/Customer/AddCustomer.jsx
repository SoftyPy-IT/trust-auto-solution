/* eslint-disable react/jsx-no-undef */

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FaFileInvoice, FaEye, FaReddit, FaTrashAlt} from 'react-icons/fa'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import { Link } from 'react-router-dom'
import img from "../../../../public/assets/service2.png";


const AddCustomer = () => {
	return (
		<section>
			<div className=" addProductWraps">
			<div className="flex items-center mr-[80px]  justify-end topProductBtn">
				<Link to='/dashboard/addjob'><button> Add Job </button></Link>
				<Link to='/dashboard/qutation'><button>Qutation </button></Link>
				<Link to='/dashboard/invoice'><button>Invoice </button></Link>
			</div>
			<div className="productHeadWrap">
				<div className="flex items-center justify-center ">
					<FaFileInvoice className="invoicIcon" />
					<div className="ml-2">
						<h3 className="text-2xl font-bold"> New Customer </h3>
						<span>Add New Customer  </span>
					</div>
				</div>
				<div className="productHome">
					<span>Home / </span>
					<span>Product / </span>
					<span>New Customer </span>
				</div>
			</div>
			<div className="my-3 flex justify-end mr-[80px] ">
				<Link to='/dashboard/product'>
				<div className="manageProduct">
					<FormatListNumberedIcon className="listIcon" />
					<h2>Customer List </h2>
				</div>

				</Link>
				
			</div>
			<div className="addProductWrap">
				<form>
          <div className="flex">
          <div>
            <h3 className="text-xl font-bold">Customer Info </h3>
						<TextField className="productField" fullWidth label="Customer Name" id="Customer Name " />
						<TextField className="productField" fullWidth label="Phone Number " id="Phone Number " />
            <TextField className="productField" fullWidth label="Reference Name " id="Reference Name " />
            <TextField className="productField" fullWidth label="Car Driver Name " id="Car Driver Name " />
            <TextField className="productField" fullWidth label="Address" id="Car address" />
					</div>

          <div>
          <h3 className="text-xl font-bold">Vehicle Info </h3>
						<TextField className="productField" fullWidth label="Chassis No " id="Chassis No  " />
						<TextField className="productField" fullWidth label="Engine No  " id="Engine No  " />
            <TextField className="productField" fullWidth label="Mileage  " id="Mileage  " />
            <TextField className="productField" fullWidth label="Car Registration No  " id="Car Registration No  " />
            <TextField className="productField" fullWidth label="Company Name"/>
            <TextField className="productField" fullWidth label="Color "/>
            <TextField className="productField" fullWidth label="Vehicle Model "/>
            <TextField className="productField" fullWidth label="Vehicle Brand "/>
            <TextField className="productField" fullWidth label="Vehicle Category "/>
					</div>
          </div>
				
				
					
				
				
				
				
				
					{/* <div className="productDetailWrap mt-8">
						<label className="block"> Customer Details </label>
						<textarea
							placeholder="Product Details "
							className="productDetail"
							name=""
							id=""
							cols="30"
							rows="10"
						/>
					</div> */}
					<div className="savebtn mt-2">
						<button>Add Customer </button>
					</div>
				</form>
			</div>
		</div>
		<div className="mt-5 mb-24 w-full">
      
      <div className="flex items-center justify-between  mb-5">
			<h3 className="text-3xl font-bold text-center "> Customer List: </h3>
      <div className="productFieldWrap productSearch">
						<FormControl className="searchProductField">
							<InputLabel htmlFor="grouped-native-select">Select Category </InputLabel>
							<Select native defaultValue="" id="grouped-native-select" label="Select Category ">
								<option aria-label="None" value="" />
								<option value="Select Category  "> Select Category  </option>
								<option value="Product Name "> Product Name </option>
								<option value="Supplier Name "> Supplier Name </option>
								<option value="Product Model "> Product Model </option>
							</Select>
						</FormControl>
        <button className="SearchBtn searchBtn2">
              Search{" "}
            </button>
		</div>
        
      </div>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className='tableWrap'>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product Name </th>
              <th>Product Model </th>
              <th>Supplier Name </th>
              <th>Price </th>
              <th>Supplier Price  </th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>
                <div className="mask   h-[100px] w-[100px] mx-auto ">
                  <img
                    className=" h-full w-full object-cover text-center"
                    src={img}
                    alt="img"
                  />
                </div>
              </td>
              <td>Car  </td>
              <td>BMW2343</td>
              <td>Aminul Hoque </td>
              <td>BDT405</td>
              <td>BDT1005</td>
              <td >
                <div className='editIconWrap edit'>
				<FaEye className='editIcon' />
                </div>
              </td>
              <td >
                <div className='editIconWrap edit'>
                  <Link to='/dashboard/update-product'>
                    <FaReddit className='editIcon' />
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
		</section>
	)
}

export default AddCustomer
