import {  FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const Expense = () => {
    return (
        <div className="mt-5 mb-24 w-full">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <h3 className="text-3xl font-bold">Expense List </h3>
          <div className='addHotel'>
            <Link to='/dashboard/add-expense'>
            <button>
              <span className="text-xl font-bold">+</span> Add Expense
            </button>
            </Link>
          </div>
          
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className='tableWrap'>
              <tr>
                <th>Date</th>
                <th>Reference No  </th>
                <th>Expense Category </th>
                <th>Payment Status </th>
                <th>Tax </th>
                <th>Total Amount </th>
                <th>Payment Due </th>
                <th>Expense For </th>
                <th>Expense Note  </th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20/10/23</td>
                <td>56 </td>
                <td>Car Service</td>
                <td>Bkash </td>
                <td>13000</td>
                <td>1000</td>
                <td>Reported </td>
                <td>Reported </td>
                <td>Reported </td>
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

export default Expense;