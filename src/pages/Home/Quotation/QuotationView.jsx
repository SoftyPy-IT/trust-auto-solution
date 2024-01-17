/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import logo from "../../../../public/assets/logo.png";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Invoice/Invoice.css'; // Add a separate CSS file for print styles

const QuotationView = () => {
  const componentRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [quotationPreview, setQuotationPreview] = useState({});
  console.log(quotationPreview);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:5000/api/v1/quotation/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQuotationPreview(data);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <main className="invoicePrintWrap">
      <div ref={componentRef}>
        <div
          ref={targetRef}
          className="py-5 px-5 invoicePrint print-mode"
        >
          {/* Add 'print-mode' class to apply print styles */}
          <div>
            <div className=" mb-2 mx-auto text-center border-b-2 border-[#351E98] pb-2">
              <div className="flex justify-between items-center mb-2">
                <img className="w-[150px] " src={logo} alt="logo" />
                <h2 className="trustAutoTitle">Trust Auto Solution </h2>
              </div>
              <p className="text-[#426EA0] italic text-sm">
                It's trusted computerized Organization for all kinds of vehicle
                check up & maintenance such as computerized Engine Analysis,
                Engine tune up, Denting, Painting, Engine, AC, Electrical Works &
                Car Wash.{" "}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mt-5 ">
                <button className="invoiceOrderBtn">
                  SL: {quotationPreview.job_no}
                </button>
                <b>Date: {quotationPreview.date} </b>
              </div>
              <div className="flex items-center justiyf-between">
                <table className="invoicTable inVoiceTables mt-5">
                  <tr>
                    <th>Name </th>
                    <th>Address </th>
                  </tr>
                  <tbody>
                    <tr className="borderNone">
                      <td> {quotationPreview.customer_name} </td>
                    </tr>
                    <tr>
                      <td>Kuril Bishawroad, Dhaka-1229 </td>
                    </tr>
                  </tbody>
                </table>
                <table className="invoicTable mt-5">
                  <tr>
                    <th> Vehicle No </th>
                    <th> Mileage </th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>{quotationPreview.car_registration_no}</td>
                    </tr>
                    <tr>
                      <td> {quotationPreview.mileage} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <table className=" invoiceTable2 qutationTables mt-5">
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
                {quotationPreview?.input_data?.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data.description}</td>
                    <td>{data.quantity}</td>
                    <td>{data.rate}</td>
                    <td>{data.total}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2}>
                    {" "}
                    <b>Vat=</b>{" "}
                  </td>
                  <td></td>
                  <td></td>
                  <td> {quotationPreview.total_amount}/=</td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    {" "}
                    <b>Total Amount=</b>{" "}
                  </td>
                  <td> {quotationPreview.total_amount}/=</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-1 ">
              <b>In words:</b> Forty Four Thousand Tow Hundred Taka Only
            </p>
          </div>
          <div>
            <div className="customerSignatureWrap">
              <b className="customerSignatur">Customer Signature : </b>
              <b className="customerSignatur">Trust Auto Solution</b>
            </div>
            <hr className="my-3" />
            <div className="text-center mt-3 text-sm">
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
      </div>
      <div className="printInvoiceBtnGroup">
        <button onClick={handlePrint}>Print </button>
        <button onClick={() => toPDF()}>Pdf </button>

        <Link to="/dashboard/invoice">
          <button> Edit </button>
        </Link>

        <Link to="/dashboard/qutation">
          {" "}
          <button> Qutation </button>
        </Link>
      </div>
    </main>
  );
};

export default QuotationView;
