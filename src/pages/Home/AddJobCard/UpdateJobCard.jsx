import "./AddJobCard.css";
import car from "../../../../public/assets/car2.jpeg";
import logo from "../../../../public/assets/logo.png";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateJobCard = () => {
  const [carRegNo, setCarRegNo] = useState(null);
  const [vehicleCategory, setVehicleCategory] = useState(null);
  const [singleCard, setSingleCard] = useState({});
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(false);
  const [dateSelect, setDateSelect] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:5000/api/v1/jobCard/one/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSingleCard(data);
          setLoading(false);
        });
    }
  }, [id]);

  const onSubmit = async (data) => {
    const values = {
      username: singleCard.username,
      job_no: singleCard.job_no,
      date: formattedDate || singleCard.date,
      chassis_no: data.chassis_no || singleCard.chassis_no,
      carReg_no: carRegNo || singleCard.carReg_no,
      car_registration_no:
        data.car_registration_no || singleCard.car_registration_no,
      car_model: data.car_model || singleCard.car_model,
      car_make: data.car_make || singleCard.car_make,
      mileage: data.mileage || singleCard.mileage,
      color: data.color || singleCard.color,
      engine_no: data.engine_no || singleCard.engine_no,
      reference_name: data.reference_name || singleCard.reference_name,
      company_name: data.company_name || singleCard.company_name,
      vehicle_category: vehicleCategory || singleCard.vehicle_category,
      customer_name: data.customer_name || singleCard.customer_name,
      contact_number: data.contact_number || singleCard.contact_number,
      driver_name: data.driver_name || singleCard.driver_name,
      phone_number: data.phone_number || singleCard.phone_number,
      vehicle_interior_parts: value || singleCard.vehicle_interior_parts,
      reported_defect: value2 || singleCard.reported_defect,
      reported_action: value3 || singleCard.reported_action,
      vehicle_body_report:
        data.vehicle_body_report || singleCard.vehicle_body_report,
      technician_name: data.technician_name || singleCard.technician_name,
      technician_signature:
        data.technician_signature || singleCard.technician_signature,
      technician_date: data.technician_date || singleCard.technician_date,
      vehicle_owner: data.vehicle_owner || singleCard.vehicle_owner,
    };
    setLoading(true);
    const response = await axios.put(
      `http://localhost:5000/api/v1/jobCard/one/${id}`,
      values
    );
    if (response.data.message === "Successfully update card.") {
      navigate("/dashboard/addjob");
      setLoading(false);
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

  const handleSelectReg = () => {
    setSelect(true);
  };
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="addJobCardWraps">
      <div className=" mb-5 pb-5 mx-auto text-center border-b-2 border-[#42A1DA]">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[70px] md:w-[210px]" />
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className=" jobCardFormWrap">
            <div>
              <label>
                Job No: <span className="requiredStart">*</span>{" "}
              </label>
              <input
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
              <label>
                Date <span className="requiredStart">*</span>{" "}
              </label>

              {!dateSelect && (
                <>
                  <div
                    onClick={() => setDateSelect(true)}
                    className=" cursor-pointer"
                  >
                    {singleCard.date}{" "}
                  </div>
                  <div>Calender icon</div>
                </>
              )}

              {dateSelect && (
                <input
                  onChange={handleDateChange}
                  autoComplete="off"
                  type="date"
                  placeholder="Date"
                  defaultValue={singleCard.date}
                  max={currentDate}
                />
              )}
            </div>
          </div>
          <div className="jobCardSingleForm jobCardSingleForm2 mt-8">
            <div>
              <label>
                Chassis No <span className="requiredStart">*</span>{" "}
              </label>
              <input
                {...register("chassis_no")}
                autoComplete="off"
                type="text"
                placeholder="Chassis No"
                defaultValue={singleCard.chassis_no}
              />
            </div>
            <div>
              <label>
                Car Registration No <span className="requiredStart">*</span>{" "}
              </label>

              <div className="flex items-center inputSelectWrap">
                {!select && !carRegNo && (
                  <div onClick={handleSelectReg} className="px-7 text-sm">
                    {singleCard.carReg_no}
                  </div>
                )}
                {select && (
                  <select value={singleCard.carReg_no} onChange={(e) => setCarRegNo(e.target.value)}>
                    <option value="Reg">Select </option>
                    <option value="Reg">DM KHA</option>
                    <option value="Reg">DM KHA</option>
                    <option value="Reg">DM KHA</option>
                  </select>
                )}

                <input
                  className="registrationForm"
                  autoComplete="off"
                  type="text"
                  placeholder="Car Registration"
                  defaultValue={singleCard.car_registration_no}
                />
              </div>
            </div>
            <div>
              <label>
                Vehicle Model <span className="requiredStart">*</span>{" "}
              </label>
              <input
                {...register("car_model")}
                // name="carmodel"
                autoComplete="off"
                type="text"
                placeholder="Vehicle Model"
                defaultValue={singleCard.vehicle_model}
              />
            </div>

            <div>
              <label>
                Vehicle Brand <span className="requiredStart">*</span>{" "}
              </label>
              <input
                {...register("car_make")}
                // name="carmake"
                autoComplete="off"
                type="text"
                placeholder="Cehicle Brand"
                defaultValue={singleCard.vehicle_brand}
              />
            </div>
            <div>
              <label>
                Mileage <span className="requiredStart">*</span>{" "}
              </label>
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
          <div className="jobCardSingleForm jobCardSingleForm2">
            <div>
              <label>
                Color & Code <span className="requiredStart">*</span>{" "}
              </label>
              <input
                {...register("color")}
                // name="color"
                autoComplete="off"
                type="text"
                placeholder="Color & Code "
                defaultValue={singleCard.color}
              />
            </div>
            <div>
              <label>Engine No & CC </label>
              <input
                {...register("engine_no")}
                // name="engine"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Engine No & CC"
                defaultValue={singleCard.engine_no}
              />
            </div>
            <div>
              <label>Reference Name </label>
              <input
                {...register("reference_name")}
                // name="reference"
                autoComplete="off"
                type="text"
                placeholder="Reference Name "
                defaultValue={singleCard.reference_name}
              />
            </div>
            <div>
              <label>Company Name </label>
              <input
                {...register("company_name")}
                // name="reference"
                autoComplete="off"
                type="text"
                placeholder="Company Name "
                defaultValue={singleCard.company_name}
              />
            </div>
            <div>
              <label>
                Vehicle Category <span className="requiredStart">*</span>{" "}
              </label>
              {/* <input
                {...register("company_name")}
                // name="cname"
                autoComplete="off"
                type="text"
                placeholder="Company Name"
                defaultValue={singleCard.company_name}
              /> */}
              <select
                value={
                  vehicleCategory
                    ? vehicleCategory
                    : singleCard.vehicle_category
                }
                onChange={(e) => setVehicleCategory(e.target.value)}
                autoComplete="off"
              >
                <option value="Select Vehicle Category ">
                  Select Vehicle Category{" "}
                </option>
                <option value="Sedans">Sedans</option>
                <option value="Crossovers">Crossovers</option>
                <option value="Sports">Sports</option>
                <option value="Trucks">Trucks</option>
                <option value="Coupes">Coupes</option>
                <option value="Convertibles">Convertibles</option>
                <option value="Diesels">Diesels</option>
                <option value="SUVs">SUVs</option>
                <option value="Hybrid/Electric">Hybrid/Electric</option>
                <option value="Vans/Minivans">Vans/Minivans</option>
                <option value="Wagons">Wagons</option>
                <option value="Small Cars ">Small Cars </option>
                <option value="CPO ">CPO </option>
              </select>
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Customer name </label>
              <input
                {...register("customer_name")}
                // name="username"
                autoComplete="off"
                type="text"
                placeholder="Customer name "
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
              <div className="mt-3">
                <h4 className="text-xl font-bold capitalize">Legend</h4>
                <div className="legend">
                  <ol>
                    <li>Scratch</li>
                    <li>Chip</li>
                    <li>Respainted</li>
                    <li>New Panel Filter </li>
                    <li>Scratch</li>
                  </ol>
                  <ol>
                    <li>Scratch</li>
                    <li>Chip</li>
                    <li>Respainted</li>
                    <li>New Panel Filter </li>
                    <li>Scratch</li>
                  </ol>
                </div>
              </div>
              <div className="mt-5">
                <b className="block mb-1 "> Vehicle Body Report Comments</b>
                <textarea
                  defaultValue={singleCard.vehicle_body_report}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>
                Technician Name <span className="requiredStart">*</span>{" "}
              </label>
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
              <label>
                Technician Signature <span className="requiredStart">*</span>{" "}
              </label>
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
              <label>
                Date <span className="requiredStart">*</span>{" "}
              </label>
              <input
                {...register("technician_date")}
                autoComplete="off"
                type="date"
                placeholder="Date"
                defaultValue={singleCard.technician_date}
                min={currentDate}
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
              <button disabled={loading} type="submit" className="">
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
