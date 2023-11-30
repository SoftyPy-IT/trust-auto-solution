import { useRef } from "react";
import logo from "../../../../public/assets/logo.png";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
const PreviewJobCard = () => {
    const componentRef = useRef();
    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div ref={componentRef} className="invoicePrintWrap">
            <div ref={targetRef} className="py-10 px-5 invoicePrint">
                <div className=" mb-5 mx-auto text-center border-b-2 border-[#351E98] pb-2">

                    <div className="flex  justify-between">
                        <img className="w-[90px] " src={logo} alt="logo" />
                        <div className="text-justify ml-8">
                            <h2 className="text-4xl font-bold">Trust Auto Solution </h2>
                            <p >
                                It is trusted computerized Ogranization for all the kinds of
                                vehicle check up & maintenance such as computerized Engine
                                Analysis Engine tune up, Denting, Painting, Engine, AC, Electrical
                                Works & Car Wash.
                            </p>
                        </div>

                    </div>
                </div>
                <div></div>
                <div>
                    <h3 className="text-3xl font-bold text-center border-b-2 w-[130px] border-[#351E98] mx-auto">
                        Invoice{" "}
                    </h3>
                    <div className="px-5 mt-20 mb-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <small className=" block">Order Number: </small>
                                <small className=" block">Customer Name: Jahangir Alom </small>
                                <small className=" ">Car Number: </small>
                                <small className=" block ">Mobile Number: </small>
                            </div>
                            <div>
                                <small className="block"> INVOICE NO : 23102901</small>
                                <small>INVOICE DATE : 29-10-2023</small>
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
                            <th>Amount </th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>02</td>
                            <td>BMW</td>
                            <td>50</td>
                            <td>46000</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td className="hideBorder"></td>
                            <td className="hideBorder"></td>
                            <td className="hideBorder2"></td>
                            <td>Total</td>
                            <td>55500</td>
                        </tr>
                        <tr>
                            <td className="hideBorder"></td>
                            <td className="hideBorder"></td>
                            <td className="hideBorder2"></td>
                            <td>Discount</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td className="hideBorder"></td>
                            <td className="hideBorder"></td>
                            <td className="hideBorder2"></td>
                            <td>Vat</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td className="hideBorder"></td>
                            <td className="hideBorder"></td>
                            <td className="hideBorder2"></td>
                            <td>Net Total </td>
                            <td>444789</td>
                        </tr>
                    </tbody>
                </table>

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
            </div>
        </div>
    );
};

export default PreviewJobCard;
