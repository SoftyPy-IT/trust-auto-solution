import {
    FaTrashAlt,
    FaEdit,
    FaArrowRight,
    FaArrowLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";
const JobCardList = () => {
    return (
        <div className="py-10">
            <h3 className="text-3xl font-bold text-center mb-3">Job Card List </h3>
            <table className="table ">
            <thead className="tableWrap">
              <tr>
                <th>SL No</th>
                <th>Customer Name</th>
                <th>Order Number </th>
                <th>Car Number </th>
                <th>Mobile Number</th>
                <th>Date</th>
                <th colSpan={2}>Action</th>
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

export default JobCardList;