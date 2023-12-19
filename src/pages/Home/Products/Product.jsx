import { FaTrashAlt, FaEdit, FaArrowRight, FaArrowLeft, FaEye } from "react-icons/fa";
import './Product.css'
import img from "../../../../public/assets/service2.png";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Select } from "@mui/material";

const Product = () => {
  return (
    <div className="mt-5 mb-24 w-full">
      <h3 className="text-3xl font-bold text-center ">All Products List </h3>
      <div className="flex items-center justify-between  mb-5">
      <div className="productFieldWrap productSearch">
						<FormControl className="searchProductField">
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
        <button className="SearchBtn searchBtn2">
              Search{" "}
            </button>
					</div>
        
        <div className='addHotel'>
          <Link to='/dashboard/add-product'>
            <button>
              <span className="text-xl font-bold">+</span> Add Product
            </button>
          </Link>
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
                  <Link to='/dashboard/update-product'>
                    <FaEye className='editIcon' />
                  </Link>
                </div>
              </td>
              <td >
                <div className='editIconWrap edit'>
                  <Link to='/dashboard/update-product'>
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
      <div className='pagination'>
        <div className='paginationBtn'>
          <button>
            <FaArrowLeft className='arrowLeft' />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <FaArrowRight className='arrowRight' />

          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;