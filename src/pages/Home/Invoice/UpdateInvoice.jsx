import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../public/assets/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
const UpdateInvoice = () => {
  const [specificInvoice, setSpecificInvoice] = useState({});
  const [orderNo, setOrderNo] = useState(null)
  const [customerName, setCustomerName] = useState(null)
  const [carNumber, setCarNumber] = useState(null)
  const [mobileNumber, setMobileNumber] = useState(null)
  const [date, setDate] = useState(null)
  const [descriptions, setDescriptions] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [rate, setRate] = useState([]);
  const [total, setTotal] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVAT] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [inputList, setinputList] = useState([
    { flyingFrom: "", flyingTo: "", date: "" },
  ]);

  const handleRemove = (index) => {
    if (!index) {
      const list = [...inputList];

      setinputList(list);
    } else {
      const list = [...inputList];
      list.splice(index, 1);
      setinputList(list);
    }
  };

  const handleAddClick = () => {
    setinputList([...inputList, { flyingFrom: "", flyingTo: "", date: "" }]);
  };

  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/invoice/one/${id}`)
      .then((res) => res.json())
      .then((data) => setSpecificInvoice(data));
  }, [id]);

  const handleDescriptionChange = (index, value) => {
    if (value === "") {
      const newDescriptions = [...descriptions];
      newDescriptions[index] = "";
      setDescriptions(newDescriptions);
    } else {
      const newDescriptions = [...descriptions];
      newDescriptions[index] = value;
      setDescriptions(newDescriptions);
    }
  };
  const handleQuantityChange = (index, value) => {
    const parsedValue = value === "" ? "" : parseFloat(value);

    if (!isNaN(parsedValue)) {
      const newQuantity = [...quantity];
      newQuantity[index] = parsedValue;
      setQuantity(newQuantity);
      updateTotal(index, parsedValue, rate[index]);
    }
  };
  const handleRateChange = (index, value) => {
    const parsedValue = value === "" ? "" : parseFloat(value);

    if (!isNaN(parsedValue)) {
      const newRate = [...rate];
      newRate[index] = parsedValue;
      setRate(newRate);
      updateTotal(index, quantity[index], parsedValue);
    }
  };

  const updateTotal = (index, quantityValue, rateValue) => {
    const newTotal = [...total];
    // const rateAsPercentage = rateValue / 100; // Convert rate to percentage
    newTotal[index] = quantityValue * rateValue;
    setTotal(newTotal);
    const newGrandTotal = newTotal.reduce((sum, value) => sum + value, 0);
    setGrandTotal(newGrandTotal);
  };

  const handleDiscountChange = (value) => {
    const parsedValue = value === "" ? 0 : parseFloat(value);

    if (!isNaN(parsedValue)) {
      setDiscount(parsedValue);
    }
  };

  const handleVATChange = (value) => {
    const parsedValue = value === "" ? 0 : parseFloat(value);

    if (!isNaN(parsedValue)) {
      setVAT(parsedValue);
    }
  };

  const calculateFinalTotal = () => {
    const discountAsPercentage = discount;
    const totalAfterDiscount = grandTotal - discountAsPercentage;

    const vatAsPercentage = vat / 100;
    const finalTotal =
      totalAfterDiscount + totalAfterDiscount * vatAsPercentage;

    return finalTotal;
  };

  const handleUpdateInvoice = async (e) => {
    e.preventDefault();

    try {
      const values = {
        username: specificInvoice.username,
        // serial_no: formattedSerialNo,
        job_no: orderNo || specificInvoice.job_no,
        date: date||  specificInvoice.date,
        car_registration_no: carNumber || specificInvoice.car_registration_no,
        customer_name: customerName|| specificInvoice?.customer_name,
        contact_number: mobileNumber || specificInvoice?.contact_number,
        descriptions: descriptions,
        quantity: quantity,
        rate: rate,
        amount: total,
        total_amount: grandTotal,
        discount: discount,
        vat: vat,
        net_total: calculateFinalTotal(),
      };
      const hasPreviewNullValues = Object.values(values).some(
        (val) => val === null
      );

      if (hasPreviewNullValues) {
        setError("Please fill in all the required fields.");

        return;
      }
      const response = await axios.put(
        `http://localhost:5000/api/v1/invoice/one/${id}`,
        values
      );
 
      if (response.data.message === "Successfully update card.") {
        setError("");
        navigate("/dashboard/invoice-view")
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="py-10 px-5">
      <div className=" mb-5 pb-5 mx-auto text-center border-b-2 border-[#351E98]">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[70px] md:w-[160px]" />
          <div className="invoiceHead">
            <h2 className=" font-bold text-center trustAuto word-sp">
              Trust Auto Solution{" "}
            </h2>
            <p className=" text-sm">
              It is trusted computerized Ogranizetion for all the kinds of
              vehicle check up & maintenance such as computerized Engine
              Analysis Engine tune up, Denting, Painting, Engine, AC, Electrical
              Works & Car Wash.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <form onSubmit={handleUpdateInvoice}>
          <div className="qutationForm invoicForm">
            <div>
              <label className="block">Order Number </label>
              <input
              onChange={(e)=> setOrderNo(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder="Order Number"
                defaultValue={specificInvoice.job_no}
              />
            </div>
            <div>
              <label className="block">Customer Name </label>
              <input
              onChange={(e)=> setCustomerName(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder="Customer Name "
                defaultValue={specificInvoice.customer_name}
              />
            </div>

            <div>
              <label className="block">Car Number </label>
              <input
              onChange={(e)=> setCarNumber(e.target.value)}
                defaultValue={specificInvoice.car_registration_no}
                autoComplete="off"
                type="text"
                placeholder="Car Number"
              />
            </div>
            <div>
              <label className="block">Mobile Number </label>
              <input
              onChange={(e)=> setMobileNumber(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder="Mobile Number "
                defaultValue={specificInvoice.contact_number}
              />
            </div>
            <div>
              <label className="block">Date</label>
              <input
              onChange={(e)=> setDate(e.target.value)}
                defaultValue={specificInvoice.date}
                autoComplete="off"
                type="text"
                placeholder="Date"
              />
            </div>
          </div>

          <div className="vehicleCard">Update Invoice </div>
          <div className="flex items-center justify-around labelWrap">
            <label>SL No </label>
            <label>Description </label>
            <label>Quantity </label>
            <label>Rate</label>
            <label>Amount </label>
          </div>
          {inputList.map((x, i) => {
            return (
              <div key={i}>
                <div className="qutationForm">
                  <div>
                    {inputList.length !== 0 && (
                      <button
                        onClick={() => handleRemove(i)}
                        className="  bg-[#351E98] hover:bg-[#351E98] text-white rounded-md px-2 py-2"
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
                      defaultValue={`${i + 1 < 10 ? `0${i + 1}` : i + 1}`}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="secondInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Description"
                      onChange={(e) =>
                        handleDescriptionChange(i, e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="firstInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Quantity "
                      onChange={(e) => handleQuantityChange(i, e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="thirdInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Rate "
                      onChange={(e) => handleRateChange(i, e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="thirdInputField"
                      autoComplete="off"
                      type="text"
                      placeholder="Amount"
                      defaultValue={total[i]}
                    />
                  </div>
                </div>

                <div className="addInvoiceItem">
                  {inputList.length - 1 === i && (
                    <div
                      onClick={handleAddClick}
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
              {/* <input
                autoComplete="off"
                type="text"
                placeholder="Total Amount ccvcv"
                defaultValue={grandTotal}
                readOnly
              /> */}
              <span className="border border-blue-900 rounded-md px-[87px] bg-[#3B3B3B] py-[6px]">
                {grandTotal}
              </span>
            </div>
            <div>
              <b> Discount: </b>
              <input
                className="text-center py-1"
                onChange={(e) => handleDiscountChange(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder="Discount"
              />
            </div>
            <div>
              <b>Vat: </b>
              <input
                className="text-center"
                onChange={(e) => handleVATChange(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder="Vat"
              />
            </div>
            <div>
              <div className="ml-3">
                <strong>
                  Final Total:{" "}
                  <span className="border border-blue-900 rounded-md px-[87px] bg-[#3B3B3B] py-[6px]">
                    {calculateFinalTotal()}
                  </span>
                </strong>
                {/* <b>Net Total: </b> */}
                {/* <input autoComplete="off" type="text" placeholder="Net" /> */}
              </div>
            </div>
          </div>

          <div className="buttonGroup updateJobCardBtn mt-8">
            <div className="submitQutationBtn">
              <button className="">Update Invoice </button>
            </div>
          </div>
          {error && (
            <div className="pt-6 text-red-400 text-center">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateInvoice;
