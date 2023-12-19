/* eslint-disable react/jsx-no-undef */
import './Product.css'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FaRegTrashAlt, FaPlus, FaFileInvoice } from 'react-icons/fa'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const AddProduct = () => {
	const [ inputList, setInputList ] = useState([ { supplier: '', priice : '', addbtn: '', deleteBtn: '' } ])
	const handleRemove = (index) => {
		if (!index) {
			const list = [ ...inputList ]

			setInputList(list)
		} else {
			const list = [ ...inputList ]
			list.splice(index, 1)
			setInputList(list)
		}
	}
	const handleAddClick = () => {
		setInputList([ ...inputList,  { supplier: '', priice : '', addbtn: '', deleteBtn: '' } ])
	}

	return (
		<div className=" addProductWraps">
			<div className="flex items-center justify-center topProductBtn">
				<Link to='/dashboard/addjob'><button> Add Job </button></Link>
				<Link to='/dashboard/qutation'><button>Qutation </button></Link>
				<Link to='/dashboard/invoice'><button>Invoice </button></Link>
			</div>
			<div className="productHeadWrap">
				<div className="flex items-center justify-center ">
					<FaFileInvoice className="invoicIcon" />
					<div className="ml-2">
						<h3 className="text-2xl font-bold"> New Product </h3>
						<span>Add New Product </span>
					</div>
				</div>
				<div className="productHome">
					<span>Home / </span>
					<span>Product / </span>
					<span>New Product </span>
				</div>
			</div>
			<div className="my-3 flex justify-end mr-[80px] ">
				<Link to='/dashboard/product'>
				<div className="manageProduct">
					<FormatListNumberedIcon className="listIcon" />
					<h2>Product List </h2>
				</div>

				</Link>
				
			</div>
			<div className="addProductWrap">
				<form>
					<div className="productFieldWrap">
						<TextField className="productField" fullWidth label="Product Name" id="Product Name " />
						<TextField className="productField" fullWidth label="Serial Number " id="Serial Number " />
					</div>
					<div className="productFieldWrap">
						<TextField className="productField" fullWidth label="Model" id="Model " />
						<FormControl className="productField">
							<InputLabel htmlFor="grouped-native-select">Select Category </InputLabel>
							<Select native defaultValue="" id="grouped-native-select" label="Select Category ">
								<option aria-label="None" value="" />
								<option value="First Category "> First Category </option>
								<option value="First Category "> First Category </option>
								<option value="First Category "> First Category </option>
								<option value="First Category "> First Category </option>
								<option value="First Category "> First Category </option>
							</Select>
						</FormControl>
					</div>
					<div className="productFieldWrap">
						<TextField className="productField" fullWidth label="Sale Price" id="Price " />
						<FormControl className="productField">
							<InputLabel htmlFor="grouped-native-select">Unit</InputLabel>
							<Select native defaultValue="" id="grouped-native-select" label="Select Category ">
								<option aria-label="None" value="" />
								<option value="First Category "> KG</option>
								<option value="First Category "> PCS </option>
								<option value="First Category ">Quantity </option>
							</Select>
						</FormControl>
					</div>
					<div className="productFieldWrap">
						<TextField className="productField" type="file" fullWidth label="" id="Image " />
						<TextField className="productField" fullWidth label="Tax" id="Tax" />
					</div>
					<div className="productFieldWrap">
						<TextField className="productField" fullWidth label="Minimum Stock" id="Minimum Stock " />
						<TextField className="productField" fullWidth label="Re Order Level" id="Re Order Level" />
					</div>
					<div className="productFieldWrap">
						<TextField className="productField" fullWidth label="Product Location" id="Product Location " />
						<TextField className="productField" fullWidth label="Global Markup" id="Global Markup" />
					</div>
					<div className="productFieldWrap">
						<TextField
							className="productField"
							fullWidth
							label="Individual Markup"
							id="Individual Markup "
						/>
						<TextField className="productField" fullWidth label="Note" id="Note" />
					</div>
					<div className="supplierBox mt-8">
						<div className="flex items-center justify-between px-5">
							<b>Supplier </b>
							<b className="ml-5">Supplier Price</b>
							<b>Action </b>
						</div>
						{inputList.map((x, i) => {
							return (
								<div key={i} className=" addItemsWrap">
									<FormControl className="productField productField2">
										<InputLabel htmlFor="grouped-native-select">Select Price</InputLabel>
										<Select
											native
											defaultValue=""
											id="grouped-native-select"
											label="Select Category "
										>
											<option aria-label="None" value="" />
											<option value="First Category "> KG</option>
											<option value="First Category "> PCS </option>
											<option value="First Category ">Quantity </option>
										</Select>
									</FormControl>
									<TextField className="productField productField2" fullWidth label="" id="" />
									<div className="actionIcon ">
										<div className="flex items-center">
										{inputList.length - 1 === i && (
												<FaPlus onClick={handleAddClick} className="addIcon" />
											)}
											

											{inputList.length !== 0 && (
												<FaRegTrashAlt onClick={() => handleRemove(i)} className="addIcon2" />
											)}

											
										</div>
									</div>
								</div>
							)
						})}
					</div>
					<div className="productDetailWrap mt-8">
						<label className="block"> Product Details </label>
						<textarea
							placeholder="Product Details "
							className="productDetail"
							name=""
							id=""
							cols="30"
							rows="10"
						/>
					</div>
					<div className="savebtn mt-2">
						<button>Save</button>
						<button>Save & Add Another</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddProduct
