/* eslint-disable react/jsx-no-undef */
import './Product.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaRegTrashAlt,FaPlus  } from "react-icons/fa";



const AddProduct = () => {
 

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Product </h2>
      <div className=" mt-8 addProductWrap">
        <form>
       <div className="productFieldWrap">
       <TextField className='productField' fullWidth label="Product Name" id="Product Name " />
       <TextField className='productField'  fullWidth label="Serial Number " id="Serial Number " />
       </div>
       <div className="productFieldWrap">
       <TextField className='productField' fullWidth label="Model" id="Model " />
      <FormControl className='productField'>
        <InputLabel htmlFor="grouped-native-select">Select Category </InputLabel>
        <Select  native defaultValue="" id="grouped-native-select" label="Select Category ">
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
       <TextField className='productField' fullWidth label="Sale Price" id="Price " />
       <FormControl className='productField'>
        <InputLabel htmlFor="grouped-native-select">Unit</InputLabel>
        <Select  native defaultValue="" id="grouped-native-select" label="Select Category ">
          <option aria-label="None" value="" />
         <option value="First Category "> KG</option>
         <option value="First Category "> PCS </option>
         <option value="First Category ">Quantity </option>
        </Select>
      </FormControl>
       </div>
       <div className="productFieldWrap">
       <TextField className='productField' type='file' fullWidth label="" id="Image " />
       <TextField className='productField'  fullWidth label="Tax" id="Tax" />
       
       </div>
       <div className="productFieldWrap">
       <TextField className='productField' fullWidth label="Minimum Stock" id="Minimum Stock " />
       <TextField className='productField'  fullWidth label="Re Order Level" id="Re Order Level" />
       
       </div>
       <div className="productFieldWrap">
       <TextField className='productField' fullWidth label="Product Location" id="Product Location " />
       <TextField className='productField'  fullWidth label="Global Markup" id="Global Markup" />
       </div>
       <div className="productFieldWrap">
       <TextField className='productField' fullWidth label="Individual Markup" id="Individual Markup " />
       <TextField className='productField'  fullWidth label="Note" id="Note" />
       </div>
       <div className="supplierBox mt-8">
        <div className="flex items-center justify-between px-5">
          <b>Supplier </b>
          <b className='ml-5'>Supplier Price</b>
          <b>Action </b>
        </div>
        <div className=" addItemsWrap">
        <FormControl className='productField productField2'>
        <InputLabel htmlFor="grouped-native-select">Select Price</InputLabel>
        <Select  native defaultValue="" id="grouped-native-select" label="Select Category ">
          <option aria-label="None" value="" />
         <option value="First Category "> KG</option>
         <option value="First Category "> PCS </option>
         <option value="First Category ">Quantity </option>
        </Select>
      </FormControl>
        <TextField className='productField productField2'  fullWidth label="" id="" />
      <div className="actionIcon ">
       <div className="flex items-center">
       <FaPlus className='addIcon2' />
        <FaRegTrashAlt className='addIcon'/>
       </div>
      </div>
        </div>
       </div>
       <div className="productDetailWrap mt-8">
        <label className='block'> Product Details </label>
     <textarea placeholder='Product Details ' className='productDetail' name="" id="" cols="30" rows="10"></textarea>
       </div>
       <div className="savebtn mt-2">
        <button>Save</button>
        <button >Save & Add Another</button>
       </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
