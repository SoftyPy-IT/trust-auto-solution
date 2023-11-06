import "./AddJobCard.css";
import car from "../../../../public/assets/car.png";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddJobCard = () => {
  const [value, setValue] = useState("");
  return (
    <div className="addJobCardWraps">
      <h2 className="text-4xl font-bold text-center">Trust Auto Solution </h2>
      <form>
        <div className=" jobCardFormWrap">
          <div>
            <label>Job No:</label>
            <input autoComplete="off" type="text" placeholder="Job No" />
          </div>
          <div>
            <div className="vehicleCard">Vehicle Job Card </div>
          </div>
          <div>
            <label>Date </label>
            <input autoComplete="off" type="text" placeholder="Job No" />
          </div>
        </div>
        <div className="jobCardSingleForm jobCardSingleForm2 mt-8">
          <div>
            <label>VIN No </label>
            <input autoComplete="off" type="text" placeholder="VIN No" />
          </div>
          <div>
            <label>Car Registration No </label>
            <input
              className="registrationForm"
              autoComplete="off"
              type="text"
              placeholder="Car Registration No"
            />
          </div>
          <div>
            <label>Car Model</label>
            <input autoComplete="off" type="text" placeholder="Car Model" />
          </div>
          <div>
            <label>Referance Number</label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Referance Number"
            />
          </div>
          <div>
            <label>Car Make </label>
            <input autoComplete="off" type="text" placeholder="Car Make" />
          </div>
        </div>
        <div className="jobCardSingleForm">
          <div>
            <label>Mileage </label>
            <input autoComplete="off" type="text" placeholder="Mileage" />
          </div>
          <div>
            <label>Engine No </label>
            <input
              className="registrationForm"
              autoComplete="off"
              type="text"
              placeholder="Engine No "
            />
          </div>
          <div>
            <label>Color</label>
            <input autoComplete="off" type="text" placeholder="Color " />
          </div>
          <div>
            <label>Comapny Name </label>
            <input autoComplete="off" type="text" placeholder="Company Name" />
          </div>
        </div>
        <div className="jobCardSingleForm">
          <div>
            <label>Customer/User name </label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Customer/User name "
            />
          </div>
          <div>
            <label>Contact No </label>
            <input
              className="registrationForm"
              autoComplete="off"
              type="text"
              placeholder="Contact No "
            />
          </div>
          <div>
            <label>Driver Name </label>
            <input autoComplete="off" type="text" placeholder="Driver Name  " />
          </div>
          <div>
            <label>Contact No </label>
            <input autoComplete="off" type="text" placeholder="Contact No" />
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
              ],
            }}
          />
            </div>
            <div>
              <b className="block"> Reported Action </b>
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
              autoComplete="off"
              type="text"
              placeholder="Technician Name"
            />
          </div>
          <div>
            <label>Technician Signature </label>
            <input
              className="registrationForm"
              autoComplete="off"
              type="text"
              placeholder="Technician Signature"
            />
          </div>
          <div>
            <label>Date </label>
            <input autoComplete="off" type="text" placeholder="Date" />
          </div>
          <div>
            <label>For Vehicle Owner</label>
            <input
              autoComplete="off"
              type="text"
              placeholder="For Vehicle Owner"
            />
          </div>
        </div>
        <div>
          <b>This is not an invoice, all estimates are valid for 30 days </b>
        </div>
        <div className="buttonGroup">
          <button>Preview</button>
          <button>Download </button>
          <button>Print </button>
          <button>Qutation</button>
          <button>Invoice </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobCard;
