import { useContext, useEffect, useState } from "react";
import logo from "../../../../../public/assets/logo.png";
import "./PreviewJobCard.css";
import './PreviewPrint.css'
import { PrintContext } from "../../../context/PrintProvider";
import CommonButton from "../../../../components/CommonButton/CommonButton";
import car from "../../../../../public/assets/car3.jpeg";
import { useLocation } from "react-router-dom";
const PreviewJobCard = () => {
  const { componentRef, targetRef } = useContext(PrintContext);
  const [previewData, setPreviewData] = useState({});
  console.log(previewData)
  // const componentRef = useRef();
  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  // const handlePrint = useReactToPrint({
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/v1/jobCard/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPreviewData(data);
          // console.log(data)
        });
    }
  }, [id]);

  const [vehicleInterior, setVehicleInterior] = useState("");
  const [reportedDefect, setReportedDefect] = useState("");
  const [reportedAction, setReportedAction] = useState("");

  const extractTextFromHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };

  useEffect(() => {
    if (previewData && previewData.vehicle_interior_parts) {
      const extractedText = extractTextFromHTML(previewData.reported_defect);
      setVehicleInterior(extractedText);
    }
    if (previewData && previewData.reported_defect) {
      const extractedText = extractTextFromHTML(previewData.reported_defect);
      setReportedDefect(extractedText);
    }
    if (previewData && previewData.vehicle_interior_parts) {
      const extractedText = extractTextFromHTML(previewData.reported_defect);
      setReportedAction(extractedText);
    }
  }, [previewData]);

  return (
    <main className="jobCardViewWrap">
      <div ref={componentRef}>
        <div ref={targetRef} className=" jobCardPrint">
         <div className="headerContainer">
         <div className="mx-auto text-center border-b-2 border-[#110255]">
            <div className="flex  justify-between items-center">
              <img className="w-[150px] " src={logo} alt="logo" />
              <h2 className="trustAutoTitle ">
                Trust Auto Solution
              </h2>
            </div>
          </div>
          <div>
          <div className=" flex text-[12px] justify-between items-center my-2">
            <div>
              <b>
                Job No: <span>{previewData.job_no}</span>
              </b>
              <div><b>Customer ID:</b> TAS000</div>
            
            </div>
            <div>
              <div className="vehicleCard previwCard2">Vehicle Job Card </div>
            </div>
            <div>
              <b>
                Date: <span>{previewData.date}</span>
              </b>
              
            </div>
          </div>

          <div className="flex  justify-between">
                <div className="inputGroup">
                <h6 className="mb-2 font-bold">Vehicle Information </h6>
                  <div className="flex">
                  <div>
                  <div>
                      <label className="block">chassis_no</label>
                      <input
                        type="text"
                        placeholder="VIN No"
                        defaultValue={previewData.chassis_no}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block">Car Registration No</label>
                      <input
                        type="text"
                        placeholder="Registration"
                        defaultValue={previewData.car_registration_no}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block">Vehicle Model </label>
                      <input
                        type="text"
                        placeholder="Vehicle Model"
                        defaultValue={previewData.vehicle_model}
                        disabled
                      />
                    </div>
                  </div>
                    <div>
                    <div>
                      <label className="block">Engine No</label>
                      <input
                        type="text"
                        placeholder="Engine No"
                        defaultValue={previewData.engine_no}
                        disabled
                      />
                    </div>
                  
                    <div>
                      <label className="block">Company Name </label>
                      <input
                        type="text"
                        placeholder="Company Name "
                        defaultValue={previewData.company_name}
                        disabled
                      />
                    </div>
                    <div>
                        <label className="block">Vehicle Brand </label>
                        <input
                          type="text"
                          placeholder="Vehicle Brand "
                          defaultValue={previewData.vehicle_brand}
                          disabled
                        />
                      </div>
                    </div>                  
                      
                    <div>
                   
                   
                    <div>
                      <label className="block">Mileage</label>
                      <input
                        type="text"
                        placeholder="Mileage"
                        defaultValue={previewData.mileage}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block">Color</label>
                      <input
                        type="text"
                        placeholder="Color"
                        defaultValue={previewData.color}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block">Vehicle Category </label>
                      <input
                        type="text"
                        placeholder="Vehicle Category "
                        defaultValue={previewData.mileage}
                        disabled
                      />
                    </div>

                    </div>
                  </div>
                </div>
                <div className=" inputGroup">
                  <h6 className=" mb-2 font-bold ">Customer Information </h6>
                  <div className="flex">
                  <div>
                 <div>
                    <label className="block">Customer Name</label>
                    <input
                      type="text"
                      placeholder="Customer Name"
                      defaultValue={previewData.customer_name}
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block">Contact No</label>
                    <input
                      type="text"
                      placeholder="Contact No"
                      defaultValue={previewData.contact_number}
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block">Car Driver Name </label>
                    <input
                      type="text"
                      placeholder="Car Driver Name"
                      defaultValue={previewData.driver_name}
                      disabled
                    />
                  </div>
                
                 </div>
                  <div>
                  <div>
                    <label className="block">Phone Number </label>
                    <input
                      type="text"
                      placeholder="Phone"
                      defaultValue={previewData.phone_number}
                      disabled
                    />
                  </div>
                  <div>
                      <label className="block">Reference Name </label>
                      <input
                        type="text"
                        placeholder="Reference Number"
                        defaultValue={previewData.reference_number}
                        disabled
                      />
                    </div>
                    <div>
                    <label className="block">Car Driver Name </label>
                    <input
                      type="text"
                      placeholder="Customer Address "                  
                      disabled
                    />
                  </div>
                  </div>
                  </div>
                
                </div>
              </div>
              <div className="fullTextArea mt-2">
                  <label>
                    {" "}
                    Vehicle Interior Parts, Papers, Tools, Meter Light & Others
                  </label>                 
                  <textarea disabled  defaultValue={vehicleInterior} ></textarea>
                </div>
            <div className="flex  justify-between ">
           
              <div className="leftSide">
                
                <div>
                  <label>                   
                    Reported Defect
                  </label>

                  <textarea defaultValue={reportedDefect} readOnly />
                </div>
                <div>
                  <label> Reported Action
                  </label>
                  <textarea defaultValue={reportedAction} readOnly></textarea>
                </div>
                <div className="mt-">
                  <label>
                    {/* Vehicle Interior Parts, */}
                   Vehicle Body Report Comments
                  </label>
                  <textarea
                    defaultValue={previewData.vehicle_body_report}
                    readOnly
                  ></textarea>
                </div>
              </div>
              <div className="rightSide">
                <div className="carImgWrap">
                  <img src={car} alt="car" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-3 justify-between inputGroup2">
            <div>
              <label className="block ">Technician Name</label>
              <input
                // defaultValue={previewData.technician_name}
               disabled
                type="text"
                // placeholder="Technician Name"
              />
            </div>
            <div>
              <label className="block">Technician Signature </label>
              <input
                // defaultValue={previewData.technician_signature}
                disabled
                type="text"
                // placeholder="Technician Signature"
              />
            </div>
            <div>
              <label className="block">Date </label>
              <input
                defaultValue={previewData.technician_date}
                readOnly
                type="text"
                placeholder="Date"
              />
            </div>
            <div>
              <label className="block">For Vehicle Owner </label>
              <input
                // defaultValue={previewData.vehicle_owner}
                disabled
                type="text"
               
              />
            </div>
          </div>
         </div>

         <div className="footerContainer">
         <div className="customerSignatureWrap2">
            <b className="customerSignatur">Customer Signature : </b>
            <b className="customerSignatur">Trust Auto Solution</b>
          </div>
        <div className="px-[8px]">
        <hr className="my-3 border border-[#110255]" />
        </div>
          <div className="text-center  ">
            <p className="text-xs">
              <b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229,
              www.trustautosolution.com
            </p>
            <p className="text-xs">
              {" "}
              <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b>{" "}
              trustautosolution@gmail.com{" "}
            </p>
          </div>
         </div>
        </div>
      </div>
      <CommonButton />
    </main>
  );
};

export default PreviewJobCard;
