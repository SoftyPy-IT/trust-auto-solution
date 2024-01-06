// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// import { useEffect, useRef, useState } from "react";
// import logo from "../../../../public/assets/logo.png";
// import { useReactToPrint } from "react-to-print";
// import { usePDF } from "react-to-pdf";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// const Details = () => {
//   const componentRef = useRef();
//   const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const id = new URLSearchParams(location.search).get("id");
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const [qutation, setQutation] = useState()
//   useEffect(() => {
//     fetch('https://trust-auto-solution-server.vercel.app/api/v1/invoice/all')
//     .then(res=>res.json())
//     .then(data=>{
//       setQutation(data)
//     })
//   }, []);

//   return (
//     <main className="invoicePrintWrap">
//       <div ref={componentRef}>
//         <div ref={targetRef}>
//         <div  className="py-5 px-5 invoicePrint">
//          <div className="headerContainer">
//          <div className=" mb-2 mx-auto text-center border-b-2 border-[#351E98] pb-2">
//             <div className="flex  justify-between items-center mb-2">
//               <img className="w-[150px] " src={logo} alt="logo" />
//               <h2 className="trustAutoTitle ">Trust Auto Solution </h2>
//             </div>
//             <p className="text-[#426EA0] italic text-sm">It's trusted computerized Organization for all kinds of vehicle check up & maintenance such as computerized Engine Analysis, Engine tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash. </p>
//           </div>

//           <div>
//            <div className="flex items-center justify-between">
//            <button className="invoiceOrderBtn">SL No:40</button>
//            <b>Date: 12/12/23 </b>
//            </div>
//            <table className="invoicTable mt-5">
//             <tr>
//               <th>  Order Number</th>
//               <th>  Customer Name </th>
//               <th> Car Number </th>
//               <th> Mobile Number</th>
//             </tr>
//             <tbody>
//               <tr>
//                 <td>03</td>
//                 <td>Jahid Hasan</td>
//                 <td>554444</td>
//                 <td>019747444</td>
//               </tr>
//             </tbody>
//            </table>
        
           
//           </div>

//           <table className=" invoiceTable2 qutationTables mt-5">
//             <thead className="tableWrap">
//               <tr>
//                 <th>SL No</th>
//                 <th>Description</th>
//                 <th>Quantity </th>
//                 <th>Rate</th>
//                 <th>Amount </th>
//               </tr>
//             </thead>
//           <tbody>
//           {
//             qutation?.map(data=> <tr key={data.id}>
//               <td>01</td>
//                <td>{data.descriptions} </td>
//                <td>{data.quantity} </td>
//                <td>{data.rate} </td>
//                <td>{data.total_amount}/= </td>
//               </tr>)
//           }
//           <tr>
//             <td colSpan={2}> <b>Vat</b> </td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//           <tr>
//             <td colSpan={2}> <b>Total Amount</b> </td>
//             <td></td>
//             <td></td>
//             <td>145000/=</td>
//           </tr>

//           </tbody>
//           </table>
//           <p className="mt-1"><b>In words:</b> Forty Four Thousand Tow Hundred Taka Only</p>
//          </div>
//          <div className="footerContainer">
//          <div className="customerSignatureWrap">
//             <b className="customerSignatur">Customer Signature : </b>
//             <b className="customerSignatur">Trust Auto Solution</b>
//           </div>
//           <hr className="my-3" />
//           <div className="text-center mt-3 text-sm">
//             <p>
//               <b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229,
//               www.trustautosolution.com
//             </p>
//             <p>
//               {" "}
//               <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b>{" "}
//               trustautosolution@gmail.com{" "}
//             </p>
//           </div>
//          </div>
//         </div>
//         </div>
       
//       </div>
//       <div className="printInvoiceBtnGroup">
//         <button onClick={handlePrint}>Print </button>
//         <button onClick={() => toPDF()}>Pdf </button>
 

//         <Link to="/dashboard/invoice">
//           <button> Edit </button>
//         </Link>
     
//        <Link to='/dashboard/qutation'> <button> Qutation </button></Link>
 
//       </div>
//     </main>
//   );
// };

// export default Details;
