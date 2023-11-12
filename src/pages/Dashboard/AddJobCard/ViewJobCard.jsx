import { useRef } from "react";
import bar from "../../../../public/assets/bar.png";
import logo from "../../../../public/assets/logo.png";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
const Detail = () => {
  const componentRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div ref={componentRef} className="invoicePrintWrap">
      <div ref={targetRef} className="py-10 px-5 invoicePrint">
        <div className=" mb-5 mx-auto text-center border-b-2 border-[#351E98]">
          <h2 className="text-4xl font-bold">Trust Auto Solution </h2>
          <div className="flex items-center justify-between">
            <img className="w-40 h-32" src={logo} alt="logo" />
            <p className="w-3/6 mx-auto ">
              It is trusted computerized Ogranization for all the kinds of
              vehicle check up & maintenance such as computerized Engine
              Analysis Engine tune up, Denting, Painting, Engine, AC, Electrical
              Works & Car Wash.
            </p>
            <img className="w-24 h-24" src={bar} alt="logo" />
          </div>
        </div>
   

        <div>
        <h3 className="text-3xl font-bold text-center border-b-2 w-[200px] border-[#351E98] mx-auto">
          Job Card{" "}
        </h3>
        <div className="px-5 mb-5 mt-16">
          <div className="flex items-center justify-between">
            <div>
              <b className=" block">Order Number: </b>
              <b className=" block">Customer Name: Jahangir Alom </b>
              <b className=" ">Car Number: </b>
              <b className=" block ">Mobile Number: </b>
            </div>
            <div>
              <b className="block"> JOB CARD NO : 23102901</b>
              <b className="block">JOB CARD DATE : 29-10-2023</b>
              <b>Technician Name </b>
            </div>
          </div>
          <div className="flex justify-between mt-14 ">
            <div>
              <div>
                <b className=" block ">
                  Vehicle Interior Parts, Papers, Tools, Meter Light & Others:{" "}
                </b>
                <ol className="interiorList">
                  <li> Center Console.</li>
                  <li> Glove Compartment.</li>
                  <li>Power Window or Door Lock Control.</li>
                  <li>Interior Door Handle.</li>
                </ol>
              </div>
              <div className="m-3">
                <b className=" block ">Reported Defect: </b>
                <ol className="interiorList">
                  <li> Priority</li>
                  <li> Severity.</li>
                  <li>Category.</li>
                  <li>Defect.</li>
                  <li>Environment.</li>
                </ol>
              </div>
            </div>
            <div>
              <div>
                <b className=" block ">Reported Action : </b>
                <ol className="interiorList">
                  <li> Center Console.</li>
                  <li> Glove Compartment.</li>
                  <li>Power Window or Door Lock Control.</li>
                  <li>Interior Door Handle.</li>
                </ol>
              </div>
              <div className="mt-3">
                <b className=" block ">Vehicle Body Report Comments: </b>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex items-center justify-between signature mt-16 px-5">
          <b>Customer Signature </b>
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
      <div className="printInvoiceBtnGroup">
        <button onClick={handlePrint}>Print </button>
        <button onClick={() => toPDF()}>Pdf </button>
        <button onClick={() => toPDF()}>Edit </button>
        <button>Create Qutation </button>
        <button>Create Invoice </button>
      </div>
    </div>
  );
};

export default Detail;
