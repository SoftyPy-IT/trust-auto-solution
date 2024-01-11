import {  FaArrowRight, FaArrowLeft, FaTrashAlt, FaEdit } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import img from "../../../../public/assets/team.jpeg";
const Employee = () => {
    return (
        <div className="mt-5 mb-24 w-full">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <h3 className="text-3xl font-bold">Employee List </h3>
          <div className='addHotel'>
            <Link to='/dashboard/add-employee'>
            <button>
              <span className="text-xl font-bold">+</span> Add Employee
            </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className='tableWrap'>
              <tr>
                <th>SL No</th>
                <th>Image</th>
                <th> Name </th>
                <th>Employee Id </th>
                <th>Department </th>
                <th>Designation </th>
                <th>Total Salary </th>
                <th>Contact Number </th>
                <th>Date of Birth  </th>
                <th>Joining Date  </th>
                <th>Status  </th>
                <th colSpan={2}>Action  </th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Robioul </td>
                <td>56 </td>
                <td>Car Service</td>
                <td>Bkash </td>
                <td>13000</td>
                <td>1000</td>
                <td>Reported </td>
                <td>Reported </td>
                <td>Reported </td>
                <td >
                 <div className='editIconWrap'>
                 <Link to='/dashboard/update-customer'> 
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
              <tr>
                <td>1</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Robioul </td>
                <td>56 </td>
                <td>Car Service</td>
                <td>Bkash </td>
                <td>13000</td>
                <td>1000</td>
                <td>Reported </td>
                <td>Reported </td>
                <td>Reported </td>
                <td >
                 <div className='editIconWrap'>
                 <Link to='/dashboard/update-customer'> 
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
              <tr>
                <td>1</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Robioul </td>
                <td>56 </td>
                <td>Car Service</td>
                <td>Bkash </td>
                <td>13000</td>
                <td>1000</td>
                <td>Reported </td>
                <td>Reported </td>
                <td>Reported </td>
                <td >
                 <div className='editIconWrap'>
                 <Link to='/dashboard/update-customer'> 
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
              <tr>
                <td>1</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Robioul </td>
                <td>56 </td>
                <td>Car Service</td>
                <td>Bkash </td>
                <td>13000</td>
                <td>1000</td>
                <td>Reported </td>
                <td>Reported </td>
                <td>Reported </td>
                <td >
                 <div className='editIconWrap'>
                 <Link to='/dashboard/update-customer'> 
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
              <tr>
                <td>1</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Robioul </td>
                <td>56 </td>
                <td>Car Service</td>
                <td>Bkash </td>
                <td>13000</td>
                <td>1000</td>
                <td>Reported </td>
                <td>Reported </td>
                <td>Reported </td>
                <td >
                 <div className='editIconWrap'>
                 <Link to='/dashboard/update-customer'> 
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

export default Employee;