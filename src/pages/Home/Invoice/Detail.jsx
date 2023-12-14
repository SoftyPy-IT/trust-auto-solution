import { useEffect, useRef, useState } from "react";
import logo from "../../../../public/assets/logo.png";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const componentRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [quotationPreview, setQuotationPreview] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://trust-auto-solution-server.vercel.app/api/v1/invoice/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQuotationPreview(data);
        });
    }
  }, [id]);

  const handleAddToQuotation = async (e) => {
    e.preventDefault();

    const values = {
      username: quotationPreview.username,
      job_no: quotationPreview.job_no,
      date: quotationPreview.date,
      car_registration_no: quotationPreview.car_registration_no,
      customer_name: quotationPreview?.customer_name,
      contact_number: quotationPreview?.contact_number,
      descriptions: quotationPreview.descriptions,
      quantity: quotationPreview.quantity,
      rate: quotationPreview.rate,
      amount: quotationPreview.total,
      total_amount: quotationPreview.total_amount,
      discount: quotationPreview.discount,
      vat: quotationPreview.vat,
      net_total: quotationPreview.net_total,
    };

    const response = await axios.post(
      "https://trust-auto-solution-server.vercel.app/api/v1/quotation",
      values
    );

    if (response.data.message === "Successfully quotation post") {
      navigate("/dashboard/qutation-view");
    }
  };
  return (
    <main className="invoicePrintWrap">
      <div ref={componentRef}>
        <div ref={targetRef} className="py-10 px-5 invoicePrint">
          <div className=" mb-5 mx-auto text-center border-b-2 border-[#351E98] pb-2">
            <div className="flex  justify-between items-center mb-3">
              <img className="w-[110px] " src={logo} alt="logo" />
              <h2 className="trustAutoTitle ">Trust Auto Solution </h2>
            </div>
          </div>
          <div></div>
          <div>
            <h3 className="text-3xl font-bold text-center border-b-2 w-[130px] border-[#351E98] mx-auto">
              Invoice
            </h3>
            <div className="px-5 mb-5">
              <div className="flex items-center justify-between">
                <div>
                  <small className=" block">
                    Order Number: {quotationPreview?.job_no}{" "}
                  </small>
                  <small className=" block">
                    Customer Name: {quotationPreview?.customer_name}{" "}
                  </small>
                  <small className=" ">
                    Car Number: {quotationPreview?.car_registration_no}{" "}
                  </small>
                  <small className=" block ">
                    Mobile Number: {quotationPreview?.contact_number}
                  </small>
                </div>
                <div>
                  <small className="block"> QUOTATION NO : 23102901</small>
                  <small>QUOTATION DATE : {quotationPreview?.date}</small>
                </div>
              </div>
            </div>
          </div>

          <table className="table ">
            <thead className="tableWrap">
              <tr>
                <th>SL No</th>
                <th>Description</th>
                <th>Quantity </th>
                <th>Rate</th>
                <th>Amount </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {Array.isArray(quotationPreview?.descriptions) &&
                    quotationPreview?.descriptions.map((description, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                </td>
                <td>
                  {Array.isArray(quotationPreview?.descriptions) &&
                    quotationPreview?.descriptions.map((description, index) => (
                      <div key={index}>{description}</div>
                    ))}
                </td>

                <td>
                  {Array.isArray(quotationPreview.quantity) &&
                    quotationPreview.quantity.map((quantity, index) => (
                      <div key={index}>{quantity}</div>
                    ))}
                </td>
                <td>
                  {Array.isArray(quotationPreview.rate) &&
                    quotationPreview.rate.map((rate, index) => (
                      <div key={index}>{rate}</div>
                    ))}
                </td>
                <td>
                  {Array.isArray(quotationPreview.amount) &&
                    quotationPreview.amount.map((amount, index) => (
                      <div key={index}>{amount}</div>
                    ))}
                </td>
              </tr>
              <tr>
                <td className="hideBorder"></td>
                <td className="hideBorder"></td>
                <td className="hideBorder2"></td>
                <td>Total</td>
                <td>{quotationPreview.total_amount}</td>
              </tr>
              <tr>
                <td className="hideBorder"></td>
                <td className="hideBorder"></td>
                <td className="hideBorder2"></td>
                <td>Discount</td>
                <td>{quotationPreview.discount}</td>
              </tr>
              <tr>
                <td className="hideBorder"></td>
                <td className="hideBorder"></td>
                <td className="hideBorder2"></td>
                <td>Vat</td>
                <td>{quotationPreview.vat}</td>
              </tr>
              <tr>
                <td className="hideBorder"></td>
                <td className="hideBorder"></td>
                <td className="hideBorder2"></td>
                <td>Net Total </td>
                <td>{quotationPreview.net_total}</td>
              </tr>
            </tbody>
          </table>

          <div className="customerSignature">
            <b>Customer Signature : </b>
            <b>Trust Auto Solution</b>
          </div>
          <hr className="my-3" />
          <div className="text-center mt-5">
            <p>
              <b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229,
              www.trustautosolution.com
            </p>
            <p>
              {" "}
              <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b>{" "}
              trustautosolution@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="printInvoiceBtnGroup">
        <button onClick={handlePrint}>Print </button>
        <button onClick={() => toPDF()}>Pdf </button>
 

        <Link to="/dashboard/invoice">
          <button> Edit </button>
        </Link>
     
       <Link to='/dashboard/qutation'> <button> Create Qutation </button></Link>
 
      </div>
    </main>
  );
};

export default Detail;
