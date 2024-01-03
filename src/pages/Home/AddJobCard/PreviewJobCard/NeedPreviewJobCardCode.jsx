// import { useContext, useEffect, useState } from "react";
// import logo from "../../../../../public/assets/logo.png";
// import "./PreviewJobCard.css";
// import { PrintContext } from "../../../context/PrintProvider";
// import CommonButton from "../../../../components/CommonButton/CommonButton";
// import car from "../../../../../public/assets/car2.jpeg";
// import { useLocation } from "react-router-dom";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const PreviewJobCard = () => {
//   const { componentRef, targetRef } = useContext(PrintContext);
//   const [previewData, setPreviewData] = useState({});
//   // const componentRef = useRef();
//   // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
//   // const handlePrint = useReactToPrint({
//   const location = useLocation();
//   const id = new URLSearchParams(location.search).get("id");

//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost:5000/api/v1/jobCard/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setPreviewData(data);
//           // console.log(data)
//         });
//     }
//   }, [id]);

//   return (
//     <main className="jobCardViewWrap">
//       <div ref={componentRef}>
//         <div ref={targetRef} className="p-5 jobCardPrint">
//           <div className="mx-auto text-center border-b-2 border-[#351E98]">
//             <div className="flex  justify-between items-center">
//               <img className="w-[120px] " src={logo} alt="logo" />
//               <h2 className="trustAutoTitle">Trust Auto Solution </h2>
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center justify-between mt-3 mb-2">
//               <input
//                 readOnly
//                 type="text"
//                 placeholder="Job No"
//                 autoComplete="off"
//                 className="jobInput text-white"
//                 defaultValue={previewData.job_no}
//               />
//               <div className="vehicleJobCard">Vehicle Job Card </div>
//               <input
//                 readOnly
//                 type="text"
//                 placeholder="Date"
//                 autoComplete="off"
//                 className="jobInput text-white"
//                 defaultValue={previewData.date}
//               />
//             </div>
//             <div className="flex items-center justify-between inputGroup mt-5">
//             <TextField className="textInputFields"  defaultValue={previewData.vin_no} label="VIN No" color="" disabled />
//             <TextField className="textInputFields"    defaultValue={previewData.car_registration_no} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields"     defaultValue={previewData.car_model}label="VIN No" color="primary" focused />
//             <TextField className="textInputFields" defaultValue={previewData.car_make} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields" defaultValue={previewData.mileage} label="VIN No" color="primary" focused />
//             </div>
//             <div className="flex items-center justify-between inputGroup mt-8">
//             <TextField className="textInputFields"  defaultValue={previewData.color} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields" defaultValue={previewData.engine_no} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields"  defaultValue={previewData.reference_number} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields"   defaultValue={previewData.company_name} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields" defaultValue={previewData.mileage} label="VIN No" color="primary" focused />
//             </div>

//             <div className="flex items-center mb-3  inputGroup mt-8">
//             <TextField className="textInputFields"  defaultValue={previewData.customer_name} label="VIN No" color="primary" focused />
//             <TextField className="textInputFields" defaultValue={previewData.contact_number} label="Contact No" color="primary" focused />
//             <TextField className="textInputFields" defaultValue={previewData.driver_name} label="Car Driver Name" color="primary" focused />
//               {/* <div>
//                 <label className="block">Company Name </label>
//                 <input
//                   type="text"
//                   placeholder="Company Name "
//                   defaultValue={previewData.phone_number}
//                   readOnly
//                 />
//               </div> */}
//                <TextField className="textInputFields" defaultValue={previewData.phone_number} label="Phone" color="primary" focused />
//             </div>
//             <div className="flex items-center justify-between ">
//               <div className="leftSide">
//                 <div>
//                   <label>
//                     {" "}
//                     Vehicle Interior Parts, Papers, Tools, Meter Light & Others
//                   </label>
//                   <textarea
//                     className="text-white"
//                     defaultValue={previewData.vehicle_interior_parts}
//                     readOnly
//                   ></textarea>
//                 </div>
//                 <div>
//                   <label>
//                     {" "}
//                     {/* Vehicle Interior Parts, Papers, Tools, Meter Light & Others */}
//                     reported_defect
//                   </label>
//                   <textarea
//                     className="text-white"
//                     defaultValue={previewData.reported_defect}
//                     readOnly
//                   ></textarea>
//                 </div>
//                 <div>
//                   <label>
//                     {" "}
//                     {/* Vehicle Interior Parts, Papers, Tools, Meter Light & Others */}
//                     reported_action
//                   </label>
//                   <textarea
//                     className="text-white"
//                     defaultValue={previewData.reported_action}
//                     readOnly
//                   ></textarea>
//                 </div>
//                 <div className="mt-3">
//                   <label>
//                     {/* Vehicle Interior Parts, */}
//                     vehicle_body_report
//                   </label>
//                   <textarea
//                     className="text-white"
//                     defaultValue={previewData.vehicle_body_report}
//                     readOnly
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="rightSide">
//                 <div className="carImgWrap">
//                   <img src={car} alt="car" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center mb-3 justify-between inputGroup">
//             <div>
//               <label className="block">Technician Name</label>
//               <input
//                 className="text-white"
//                 defaultValue={previewData.technician_name}
//                 readOnly
//                 type="text"
//                 placeholder="Technician Name"
//               />
//             </div>
//             <div>
//               <label className="block">Technician Signature </label>
//               <input
//                 className="text-white"
//                 defaultValue={previewData.technician_signature}
//                 readOnly
//                 type="text"
//                 placeholder="Technician Signature"
//               />
//             </div>
//             <div>
//               <label className="block">Date </label>
//               <input
//                 className="text-white"
//                 defaultValue={previewData.technician_date}
//                 readOnly
//                 type="text"
//                 placeholder="Date"
//               />
//             </div>
//             <div>
//               <label className="block">For Vehicle Owner </label>
//               <input
//                 className="text-white"
//                 defaultValue={previewData.vehicle_owner}
//                 readOnly
//                 type="text"
//                 placeholder="For Vehicle Owner "
//               />
//             </div>
//           </div>

//           <div className="flex items-center text-xs justify-between signature mt-10 px-5">
//             <b>Customer Signature </b>
//             <b>Trust Auto Solution</b>
//           </div>
//           <hr className="my-3" />
//           <div className="text-center mt-3 ">
//             <p className="text-xs">
//               <b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229,
//               www.trustautosolution.com
//             </p>
//             <p className="text-xs">
//               {" "}
//               <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b>{" "}
//               trustautosolution@gmail.com{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//       <CommonButton />
//     </main>
//   );
// };

// export default PreviewJobCard;
