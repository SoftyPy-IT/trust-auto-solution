/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import logo from "../../../../public/assets/logo.png";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../Invoice/Invoice.css'

const Details = () => {
  const componentRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [qutation, setQutation] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/invoice/all')
      .then(res => res.json())
      .then(data => {
        setQutation(data);
      });
  }, []);

  return (
    <main className="invoicePrintWrap">
      <div ref={componentRef}>
        <div ref={targetRef}>
          <div className="py-5 px-5 invoicePrint">
            {/* Rest of your code */}
          </div>
        </div>
      </div>
      <div className="printInvoiceBtnGroup">
        <button onClick={handlePrint}>Print </button>
        <button onClick={() => toPDF()}>Pdf </button>

        <Link to="/dashboard/invoice">
          <button> Edit </button>
        </Link>

        <Link to='/dashboard/qutation'> <button> Qutation </button></Link>
      </div>


      

    </main>
  );
};

export default Details;
