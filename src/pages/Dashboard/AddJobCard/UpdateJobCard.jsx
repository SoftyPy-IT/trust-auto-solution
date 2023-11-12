import "./AddJobCard.css";
import car from "../../../../public/assets/car.png";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FaTrashAlt,
  FaEdit,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const UpdateJobCard = () => {
  const [select, setSelect] = useState(null)
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="addJobCardWraps">
      <h2 className="text-4xl font-bold text-center">Trust Auto Solution </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className=" jobCardFormWrap">
            <div>
              <label>Job No:</label>
              <input
                {...register("jobno", { required: true })}
                name="jobno"
                autoComplete="off"
                type="text"
                placeholder="Job No"
              />
            </div>
            <div>
              <div className="vehicleCard">Vehicle Job Card </div>
            </div>
            <div>
              <label>Date </label>
              <input
                {...register("date", { required: true })}
                name="date"
                autoComplete="off"
                type="text"
                placeholder="Job No"
              />
            </div>
          </div>
          <div className="jobCardSingleForm jobCardSingleForm2 mt-8">
            <div>
              <label>VIN No </label>
              <input
                {...register("vinno", { required: true })}
                name="vinno"
                autoComplete="off"
                type="text"
                placeholder="VIN No"
              />
            </div>
            <div>
              <label>Car Registration No </label>
              <input
                {...register("rnumber", { required: true })}
                name="rnumber"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Car Registration No"
              />
            </div>
            <div>
              <label>Car Model</label>
              <input
                {...register("carmodel", { required: true })}
                name="carmodel"
                autoComplete="off"
                type="text"
                placeholder="Car Model"
              />
            </div>
            <div>
              <label>Referance Number</label>
              <input
                {...register("referance", { required: true })}
                name="referance"
                autoComplete="off"
                type="text"
                placeholder="Referance Number"
              />
            </div>
            <div>
              <label>Car Make </label>
              <input
                {...register("carmake", { required: true })}
                name="carmake"
                autoComplete="off"
                type="text"
                placeholder="Car Make"
              />
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Mileage </label>
              <input
                {...register("meleage", { required: true })}
                name="meleage"
                autoComplete="off"
                type="text"
                placeholder="Mileage"
              />
            </div>
            <div>
              <label>Engine No </label>
              <input
                {...register("engine", { required: true })}
                name="engine"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Engine No "
              />
            </div>
            <div>
              <label>Color</label>
              <input
                {...register("color", { required: true })}
                name="color"
                autoComplete="off"
                type="text"
                placeholder="Color "
              />
            </div>
            <div>
              <label>Comapny Name </label>
              <input
                {...register("cname", { required: true })}
                name="cname"
                autoComplete="off"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Customer/User name </label>
              <input
                {...register("username", { required: true })}
                name="username"
                autoComplete="off"
                type="text"
                placeholder="Customer/User name "
              />
            </div>
            <div>
              <label>Contact No </label>
              <input
                {...register("contact", { required: true })}
                name="contact"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Contact No "
              />
            </div>
            <div>
              <label>Driver Name </label>
              <input
                {...register("driver", { required: true })}
                name="driver"
                autoComplete="off"
                type="text"
                placeholder="Driver Name  "
              />
            </div>
            <div>
              <label>Phone No </label>
              <input
                {...register("Phone", { required: true })}
                name="Phone"
                autoComplete="off"
                type="text"
                placeholder="Contact No"
              />
            </div>
          </div>
          <div className="mt-5 vehicleTextField">
            <b className="block">
              {" "}
              Vehicle Interior Parts, Papers, Tools, Meter Light & Others{" "}
            </b>
            <ReactQuill
              value={value}
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
          <div className="vehicleReport">
            <div className="vehicleReportLeftSide">
              <div>
                <b className="block"> Reported Defect </b>
                <ReactQuill
                  value={value2}
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
              <div>
                <b className="block"> Reported Action </b>
                <ReactQuill
                  value={value3}
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
              <b htmlFor="" className="block">
                {" "}
                Vehicle Body Report (Mark with X where damage )
              </b>
              <div className="imgWrap mt-2">
                <img src={car} alt="car" />
              </div>
              <div>
                <b className="block"> Vehicle Body Report Comments</b>
                <textarea></textarea>
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
                {...register("tname", { required: true })}
                name="tname"
                autoComplete="off"
                type="text"
                placeholder="Technician Name"
              />
            </div>
            <div>
              <label>Technician Signature </label>
              <input
                {...register("tsignature", { required: true })}
                name="tsignature"
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Technician Signature"
              />
            </div>
            <div>
              <label>Date </label>
              <input
                {...register("tdate", { required: true })}
                name="tdate"
                autoComplete="off"
                type="text"
                placeholder="Date"
              />
            </div>
            <div>
              <label>For Vehicle Owner</label>
              <input
               {...register("vehicleowner", { required: true })}
               name='vehicleowner'
                autoComplete="off"
                type="text"
                placeholder="For Vehicle Owner"
              />
            </div>
          </div>
          <div className="mt-3">
            <b>This is not an invoice, all estimates are valid for 30 days </b>
          </div>
         
          <div className="buttonGroup mt-5">
          <div className="submitQutationBtn">
            <button type='submit' className="">Update Job Card </button>
          </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-20">
        <div className="flex items-center justify-between mb-5">
        </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateJobCard;
