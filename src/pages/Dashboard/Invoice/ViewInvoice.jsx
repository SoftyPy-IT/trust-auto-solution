import { useState } from "react";
import {
    FaTrashAlt,
    FaEdit,
    FaArrowRight,
    FaArrowLeft,
    FaEye
  } from "react-icons/fa";
import { Link } from "react-router-dom";
const ViewInvoice = () => {
    const [select, setSelect] = useState(null)
    return (
        <div>
           <div className="overflow-x-auto mt-20">
        <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl font-bold mb-3">Invoice List:</h3>
        <div className="flex items-center searcList">
          <select
          onChange={(e)=>setSelect(e.target.value)}
          >
            <option value="SL No"> SL No</option>
            <option value="Customer Name"> Customer Name</option>
            <option value="Order Number"> Order Number</option>
            <option value="Car Number"> Car Number</option>
            <option value="Mobile Number"> Mobile Number</option>
          </select>
        <div className="searchGroup">
          <input autoComplete="off" type="text" placeholder={select} />
        </div>
        <button className="SearchBtn ">Search </button>
        </div>
        </div>
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>SL No</th>
              <th>Customer Name</th>
              <th>Order Number </th>
              <th>Car Number </th>
              <th>Mobile Number</th>
              <th>Date</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Aminul</td>
              <td>055</td>
              <td>79797</td>
              <td>018575585 </td>
              <td>10-05-2023</td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/detail">
                    <FaEye className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <Link to="">
                    <FaEdit className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <FaTrashAlt className="deleteIcon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Aminul</td>
              <td>055</td>
              <td>79797</td>
              <td>018575585 </td>
              <td>10-05-2023</td>
              <td>
                <div className="editIconWrap">
                  <Link to="/">
                    <FaEye className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <Link to="/">
                    <FaEdit className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <FaTrashAlt className="deleteIcon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Aminul</td>
              <td>055</td>
              <td>79797</td>
              <td>018575585 </td>
              <td>10-05-2023</td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/update-customer">
                    <FaEye className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/update-customer">
                    <FaEdit className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <FaTrashAlt className="deleteIcon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Aminul</td>
              <td>055</td>
              <td>79797</td>
              <td>018575585 </td>
              <td>10-05-2023</td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/update-customer">
                    <FaEye className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/update-customer">
                    <FaEdit className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <FaTrashAlt className="deleteIcon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Aminul</td>
              <td>055</td>
              <td>79797</td>
              <td>018575585 </td>
              <td>10-05-2023</td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/update-customer">
                    <FaEye className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <Link to="/dashboard/update-customer">
                    <FaEdit className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <FaTrashAlt className="deleteIcon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="paginationBtn">
          <button>
            <FaArrowLeft className="arrowLeft" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <FaArrowRight className="arrowRight" />
          </button>
        </div>
      </div> 
        </div>
    );
};

export default ViewInvoice;