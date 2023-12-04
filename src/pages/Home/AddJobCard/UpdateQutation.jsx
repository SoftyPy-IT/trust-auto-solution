import { Link } from "react-router-dom";
import logo from "../../../../public/assets/logo.png";
import {
  FaTrashAlt,
  FaEdit,
  FaArrowRight,
  FaArrowLeft,
  FaEye
} from "react-icons/fa";
import { useState } from "react";
const UpdateQutation = () => {
  const [select, setSelect] = useState(null)
  const [inputList, setinputList] = useState([
    { flyingFrom: "", flyingTo: "", date: "" },
  ]);

  const handleremove = (index) => {
    if (!index) {
      const list = [...inputList];

      setinputList(list);
    } else {
      const list = [...inputList];
      list.splice(index, 1);
      setinputList(list);
    }
  };

  const handleaddclick = () => {
    setinputList([...inputList, { flyingFrom: "", flyingTo: "", date: "" }]);
  };
  return (
    <div className="py-10 px-5">
      <div className=" mb-5 pb-5 mx-auto text-center border-b-2 border-[#351E98]">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[70px] md:w-[160px]" />
          <div className="invoiceHead">
            <h2 className=" font-bold text-center trustAuto word-sp">Trust Auto Solution </h2>
            <p className=" text-sm">
              It is trusted computerized Ogranizetion for all the kinds of vehicle
              check up & maintenance such as computerized Engine Analysis Engine
              tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <form>
          <div className="qutationForm invoicForm">
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

          <div className="vehicleCard">Update Qutation Card </div>
          <div className="flex items-center justify-around labelWrap">
            <label>SL No </label>
            <label >Description </label>
            <label>Quantity </label>
            <label>Rate</label>
            <label>Amount </label>
          </div>
          {inputList.map((x, i) => {
            return (
              <div key={i}>
                <div className="qutationForm  ">

                  <div>
                    {inputList.length !== 0 && (
                      <button
                        onClick={() => handleremove(i)}
                        className="btn w-[65px] bg-[#351E98] hover:bg-[#351E98] text-white"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div>
                    <input
                      className="firstInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="SL No "
                    />
                  </div>
                  <div>
                    <input
                      className="secondInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                  <div>
                    <input
                      className="firstInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Quantity "
                    />
                  </div>
                  <div>
                    <input className="thirdInputField" autoComplete="off" type="text" placeholder="Rate " />
                  </div>
                  <div>
                    <input
                      className="thirdInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Amount"
                    />
                  </div>

                </div>

                <div className="addInvoiceItem">
                  {inputList.length - 1 === i && (
                    <div
                      onClick={handleaddclick}
                      className="flex justify-end mt-2"
                    >
                      <button className="btn bg-[#351E98] hover:bg-[#351E98] text-white">
                        Add
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
          <div className="discountFieldWrap">
            <div>
              <b> Total Amount: </b>
              <input
                autoComplete="off"
                type="text"
                placeholder="Total Amount"
              />
            </div>
            <div>
              <b> Discount: </b>
              <input
                autoComplete="off"
                type="text"
                placeholder="Discount"
              />
            </div>
            <div>
              <b>Vat: </b>
              <input
                autoComplete="off"
                type="text"
                placeholder="Vat"
              />
            </div>
            <div>

              <div className="ml-3">
                <b>Net Total: </b>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Net"
                />
              </div>
            </div>
          </div>

          <div className="buttonGroup updateJobCardBtn mt-8">

            <div className="submitQutationBtn">
              <button className="">Update Qutation </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQutation;
