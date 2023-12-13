import "./AddJobCard.css";
import car from "../../../../public/assets/car.jpeg";
import logo from "../../../../public/assets/logo.png";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateJobCard = () => {
  const [singleCard, setSingleCard] = useState({})
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
 
  useEffect(() => {
    if (id) {
      fetch(`https://trust-auto-solution-server.vercel.app/api/v1/jobCard/one/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSingleCard(data);
          console.log(data);
        });
    }
  }, [id]);

  const onSubmit = async (data) => {
    
  const values = {
      username: singleCard.username,
      job_no: singleCard.job_no,
      date:  formattedDate || singleCard.date,
      vin_no: data.vin_no || singleCard.vin_no,
      car_registration_no: data.car_registration_no || singleCard.car_registration_no,
      car_model: data.car_model || singleCard.car_model,
      car_make: data.car_make || singleCard.car_make,
      mileage: data.mileage || singleCard.mileage,
      color: data.color || singleCard.color,
      engine_no: data.engine_no || singleCard.engine_no,
      reference_number: data.reference_number || singleCard.reference_number,
      company_name: data.company_name || singleCard.company_name,
      customer_name: data.customer_name || singleCard.customer_name,
      contact_number: data.contact_number || singleCard.contact_number,
      driver_name: data.driver_name || singleCard.driver_name,
      phone_number: data.phone_number || singleCard.phone_number,
      vehicle_interior_parts: value || singleCard.vehicle_interior_parts,
      reported_defect: value2 || singleCard.reported_defect,
      reported_action: value3 || singleCard.reported_action,
      vehicle_body_report: data.vehicle_body_report || singleCard.vehicle_body_report,
      technician_name: data.technician_name || singleCard.technician_name,
      technician_signature: data.technician_signature || singleCard.technician_signature,
      technician_date: data.technician_date || singleCard.technician_date,
      vehicle_owner: data.vehicle_owner || singleCard.vehicle_owner,
    };

    const response = await axios.put(
      `https://trust-auto-solution-server.vercel.app/api/v1/jobCard/one/${id}`,
      values
    );
    if (response.data.message === "Successfully update card.") {
       navigate("/dashboard/addjob")
    }
  };

  const handleDateChange = (event) => {
    const rawDate = event.target.value;
    const parsedDate = new Date(rawDate);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); 
    const year = parsedDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    setFormattedDate(formattedDate);
  };

  return (
    <div className="addJobCardWraps">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="lg:w-[120px] w-[100px]" />
        <h2 className="text-6xl font-bold text-center trustAuto word-sp">
          Trust Auto Solution{" "}
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className=" jobCardFormWrap">
            <div>
              <label>Job No:</label>
              <input
                // {...register("job_no")}
                // name="jobno"
                autoComplete="off"
                type="text"
                placeholder="Job No"
                defaultValue={singleCard.job_no}
                readOnly
              />
            </div>
            <div>
              <div className="vehicleCard">Update Job Card </div>
            </div>
            <div>
              <label>Date </label>
              <input
                onChange={handleDateChange}
                // name="date"
                autoComplete="off"
                type="date"
                placeholder="Date"
                defaultValue={singleCard.date}
              />
            </div>
          </div>
          <div className="jobCardSingleForm jobCardSingleForm2 mt-8">
            <div>
              <label>VIN No </label>
              <input
                {...register("vin_no")}
                // name="vinno"
                autoComplete="off"
                type="text"
                placeholder="VIN No"
                defaultValue={singleCard.vin_no}
              />
            </div>
            <div>
              <label>Car Registration No </label>
              <input
                {...register("car_registration_no")}
                // name="rnumber"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Car Registration No"
                defaultValue={singleCard.car_registration_no}
              />
            </div>
            <div>
              <label>Car Model</label>
              <input
                {...register("car_model")}
                // name="carmodel"
                autoComplete="off"
                type="text"
                placeholder="Car Model"
                defaultValue={singleCard.car_model}
              />
            </div>

            <div>
              <label>Car Make </label>
              <input
                {...register("car_make")}
                // name="carmake"
                autoComplete="off"
                type="text"
                placeholder="Car Make"
                defaultValue={singleCard.car_make}
              />
            </div>
            <div>
              <label>Mileage </label>
              <input
                {...register("mileage")}
                // name="meleage"
                autoComplete="off"
                type="text"
                placeholder="Mileage"
                defaultValue={singleCard.mileage}
              />
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Color</label>
              <input
                {...register("color")}
                // name="color"
                autoComplete="off"
                type="text"
                placeholder="Color "
                defaultValue={singleCard.color}
              />
            </div>
            <div>
              <label>Engine No </label>
              <input
                {...register("engine_no")}
                // name="engine"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Engine No "
                defaultValue={singleCard.engine_no}
              />
            </div>
            <div>
              <label>Reference Number</label>
              <input
                {...register("reference_number")}
                // name="reference"
                autoComplete="off"
                type="text"
                placeholder="Reference Number"
                defaultValue={singleCard.reference_number}
              />
            </div>
            <div>
              <label>Company Name </label>
              <input
                {...register("company_name")}
                // name="cname"
                autoComplete="off"
                type="text"
                placeholder="Company Name"
                defaultValue={singleCard.company_name}
              />
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Customer/User name </label>
              <input
                {...register("customer_name")}
                // name="username"
                autoComplete="off"
                type="text"
                placeholder="Customer/User name "
                defaultValue={singleCard.customer_name}
              />
            </div>
            <div>
              <label>Contact No </label>
              <input
                {...register("contact_number")}
                // name="contact"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Contact No "
                defaultValue={singleCard.contact_number}
              />
            </div>
            <div>
              <label>Driver Name </label>
              <input
                {...register("driver_name")}
                // name="driver"
                autoComplete="off"
                type="text"
                placeholder="Driver Name  "
                defaultValue={singleCard.driver_name}
              />
            </div>
            <div>
              <label>Phone No </label>
              <input
                {...register("phone_number")}
                // name="Phone"
                autoComplete="off"
                type="text"
                placeholder="Contact No"
                defaultValue={singleCard.phone_number}
              />
            </div>
          </div>

          <div className="vehicleReport mt-10">
            <div className="vehicleReportLeftSide">
              <div className=" vehicleTextField">
                <b className="block mb-3">
                  {" "}
                  Vehicle Interior Parts, Papers, Tools, Meter Light & Others{" "}
                </b>
                <ReactQuill
                  value={value || singleCard.vehicle_interior_parts}
                  className="textEditor"
                  onChange={setValue}
                  modules={{
                    toolbar: [
                      [{ font: [] }],
                      [{ size: ["small", false, "large", "huge"] }],
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      [{ color: [] }, { background: [] }],
                      [{ align: [] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["bold", "italic", "underline"],
                      [{ align: [] }],
                      ["link", "image"],
                      ["video"],
                      ["clean"],
                      ["blockquote", "code-block"],
                      ["direction"],
                      ["formula"],
                      ["strike"],
                    ],
                  }}
                />
              </div>
              <div className="mt-5">
                <b className="block mb-1"> Reported Defect </b>
                <ReactQuill
                  value={value2 || singleCard.reported_defect}
                  className="textEditor"
                  onChange={setValue2}
                  modules={{
                    toolbar: [
                      [{ font: [] }],
                      [{ size: ["small", false, "large", "huge"] }],
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      [{ color: [] }, { background: [] }],
                      [{ align: [] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["bold", "italic", "underline"],
                      [{ align: [] }],
                    ],
                  }}
                />
              </div>
              <div className="mt-5">
                <b className="block mb-1"> Reported Action </b>
                <ReactQuill
                  value={value3 || singleCard.reported_action}
                  className="textEditor"
                  onChange={setValue3}
                  modules={{
                    toolbar: [
                      [{ font: [] }],
                      [{ size: ["small", false, "large", "huge"] }],
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      [{ color: [] }, { background: [] }],
                      [{ align: [] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["bold", "italic", "underline"],
                      [{ align: [] }],
                    ],
                  }}
                />
              </div>
            </div>
            <div className="vehicleReportRightSide">
              <b htmlFor="" className="block mb-3">
                {" "}
                Vehicle Body Report (Mark with X where damage )
              </b>
              <div className="imgWrap mt-2">
                <img src={car} alt="car" />
              </div>
              <div className="mt-5">
                <b className="block mb-1 "> Vehicle Body Report Comments</b>
                <textarea defaultValue={singleCard.vehicle_body_report}></textarea>
              </div>
              <b className="carSideBar">LEFT</b>
              <b className="carSideBar2">REAR</b>
              <b className="carSideBar3">FRONT</b>
              <b className="carSideBar4">RIGHT</b>
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Technician Name </label>
              <input
                {...register("technician_name")}
                // name="tname"
                autoComplete="off"
                type="text"
                placeholder="Technician Name"
                defaultValue={singleCard.technician_name}
              />
            </div>
            <div>
              <label>Technician Signature </label>
              <input
                {...register("technician_signature")}
                // name="tsignature"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Technician Signature"
                defaultValue={singleCard.technician_signature}
              />
            </div>
            <div>
              <label>Date </label>
              <input
                {...register("technician_date")}
                // name="tdate"
                autoComplete="off"
                type="text"
                placeholder="Date"
                defaultValue={singleCard.technician_date}
              />
            </div>
            <div>
              <label>For Vehicle Owner</label>
              <input
                {...register("vehicle_owner")}
                // name="vehicleowner"
                autoComplete="off"
                type="text"
                placeholder="For Vehicle Owner"
                defaultValue={singleCard.vehicle_owner}
              />
            </div>
          </div>
          <div className="mt-3">
            <b>This is not an invoice, all estimates are valid for 30 days </b>
          </div>

          <div className="buttonGroup updateJobCardBtn">
            <div className="submitQutationBtn flex items-center justify-center">
              <button type="submit" className="">
                Update Job Card{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateJobCard;
