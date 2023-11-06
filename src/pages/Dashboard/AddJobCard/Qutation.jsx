import { Link } from "react-router-dom";
import bar from "../../../../public/assets/bar.png";
import logo from "../../../../public/assets/logo.png";
import {
  FaTrashAlt,
  FaEdit,
  FaArrowRight,
  FaArrowLeft,
  FaEye,
} from "react-icons/fa";
import { useState } from "react";
const Qutation = () => {
  const [inputList, setinputList] = useState([
    { flyingFrom: "", flyingTo: "", date: "" },
  ]);



  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { flyingFrom: "", flyingTo: "", date: "" }]);
  };
  return (
    <div className="py-10 px-5">
      <div className=" mb-5 mx-auto text-center border-b-2 border-[#351E98]">
        <h2 className="text-5xl font-bold">Trust Auto Solution </h2>
        <div className="flex items-center justify-between">
          <img className="w-40 h-32" src={logo} alt="logo" />
          <p className="w-3/6 mx-auto ">
            It is trusted computerized Ogranizetion for all the kinds of vehicle
            check up & maintenance such as computerized Engine Analysis Engine
            tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash.
          </p>
          <img className="w-24 h-24" src={bar} alt="logo" />
        </div>
      </div>
      <div>
        <form>
          <div className="qutationForm">
            <div>
              <label className="block">Order Number </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Order Number"
              />
            </div>
            <div>
              <label className="block">Customer Name </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Customer Name "
              />
            </div>

            <div>
              <label className="block">Car Number </label>
              <input autoComplete="off" type="text" placeholder="Car Number" />
            </div>
            <div>
              <label className="block">Mobile Number </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Mobile Number "
              />
            </div>
            <div>
              <label className="block">Date</label>
              <input autoComplete="off" type="text" placeholder="Date" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-center my-5"> Qutation </h3>
          <div className="flex items-center justify-around labelWrap">
            <label className="block">SL No </label>
            <label className="block">Description </label>
            <label className="block">Quantity </label>
            <label className="block">Amount</label>
            <label className="block">Rate </label>
          </div>
          {inputList.map((x, i) => {
            return (
              <div key={i}>
                <div className="qutationForm">
                  <div>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="SL No "
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Quantity "
                    />
                  </div>
                  <div>
                    <input autoComplete="off" type="text" placeholder="Rate " />
                  </div>
                  <div>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Amount"
                    />
                  </div>
                  <div >
                  {inputList.length !== 1 && (
                     <button onClick={() => handleremove(i)} className="btn w-[65px] bg-[#351E98] hover:bg-[#351E98] text-white">
                     Remove
                   </button>
                  )}

                  </div>
                </div>
                <div>
                  
                  {inputList.length - 1 === i && (
                    <div
                      onClick={handleaddclick}
                      className="flex justify-end mt-2"
                    >
                      <button className="btn bg-[#351E98] hover:bg-[#351E98] text-white">
                        Add Items
                      </button>
                    </div>
                  )}
                </div>
             
              </div>
              
            );
          })}
             <div className="submitQutationBtn">
                    <button className="">Add To Qutation </button>
                </div>
          <div className="buttonGroup mt-8">
          <Link to='/dashboard/details'><button>Preview</button></Link>
          <button>Download </button>
          <button>Print </button>
          <button>Invoice </button>
        </div>
        </form>
      </div>
      <div className="overflow-x-auto mt-20">
        <h3 className="text-3xl font-bold mb-3">Qutation List:</h3>
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

export default Qutation;
