/* eslint-disable no-unused-vars */
import "./AddJobCard.css";
import car from "../../../../public/assets/car2.jpeg";
import logo from "../../../../public/assets/logo.png";
import swal from "sweetalert";
import { useEffect, useRef, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FaTrashAlt,
  FaEdit,
  FaEye,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const AddJobCard = () => {
  const [previousPostData, setPreviousPostData] = useState({});
  const [jobNo, setJobNo] = useState(previousPostData.job_no);
  const [allJobCard, setAllJobCard] = useState([]);
  const [noMatching, setNoMatching] = useState(null);
  const [chassisNo, setChassisNo] = useState(null);
  const [registration, setRegistration] = useState(null);
  const [carRegNo, setCarReg] = useState(null);
  const [vehicleModel, setCarModel] = useState(null);
  const [vehiclebrand, setCarMake] = useState(null);
  const [mileage, setMileage] = useState(null);
  const [color, setColor] = useState(null);
  const [engineNo, setEngineNo] = useState(null);
  const [reference, setReference] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [vehicleCategory, setVehicleCategory] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [contactNo, setContactNo] = useState(null);
  const [driverName, setDriverName] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [vehicleBody, setVehicleBody] = useState(null);
  const [technicianName, setTechnicianName] = useState(null);
  const [technicianSignature, setTechnicianSignature] = useState(null);
  const [technicianDate, setTechnicianDate] = useState(null);
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState(null);

  const [select, setSelect] = useState("SL No");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [reload, setReload] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [formattedDate, setFormattedDate] = useState("");
  const [filterType, setFilterType] = useState("");

  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const username = "683231669175";

  const handleAddToCard = async (e) => {
    e.preventDefault();
    const values = {
      username: username,
      job_no: jobNo,
      date: formattedDate,
      chassis_no: chassisNo,
      carReg_no: carRegNo,
      car_registration_no: registration,
      vehicle_model: vehicleModel,
      vehicle_brand: vehiclebrand,
      mileage: mileage,
      color: color,
      engine_no: engineNo,
      reference_number: reference,
      company_name: companyName,
      vehicle_category: vehicleCategory,
      customer_name: customerName,
      contact_number: contactNo,
      driver_name: driverName,
      phone_number: phoneNo,
      vehicle_interior_parts: value,
      reported_defect: value2,
      reported_action: value3,
      vehicle_body_report: vehicleBody,
      technician_name: technicianName,
      technician_signature: technicianSignature,
      technician_date: technicianDate,
      vehicle_owner: owner,
    };
    console.log(values)
    const hasQuotationNullValues = Object.values(values).some(
      (val) => val === null
    );

    if (hasQuotationNullValues) {
      setError("Please fill in all the required fields.");
      return;
    }
    setLoading(true);
    const response = await axios.post(
      "http://localhost:5000/api/v1/jobCard",
      values
    );
    console.log(response);
    if (response.data.message === "Successfully add to card post") {
      setLoading(false);
      const newJobNo = jobNo + 1;
      setJobNo(newJobNo);
      setReload(!reload);
      toast.success("Add to job card successful.");
      formRef.current.reset();
      // reset();
    }
    // console.log(response);
  };

  const navigate = useNavigate();

  const handlePreview = async (e) => {
    e.preventDefault();
    const values = {
      username: username,
      job_no: jobNo,
      date: formattedDate,
      chassis_no: chassisNo,
      carReg_no: carRegNo,
      car_registration_no: registration,
      vehicle_model: vehicleModel,
      vehicle_brand: vehiclebrand,
      mileage: mileage,
      color: color,
      engine_no: engineNo,
      reference_number: reference,
      company_name: companyName,
      vehicle_category:vehicleCategory,
      customer_name: customerName,
      contact_number: contactNo,
      driver_name: driverName,
      phone_number: phoneNo,
      vehicle_interior_parts: value,
      reported_defect: value2,
      reported_action: value3,
      vehicle_body_report: vehicleBody,
      technician_name: technicianName,
      technician_signature: technicianSignature,
      technician_date: technicianDate,
      vehicle_owner: owner,
    };
    const hasPreviewNullValues = Object.values(values).some(
      (val) => val === null
    );

    if (hasPreviewNullValues) {
      setError("Please fill in all the required fields.");
      return;
    }
   
    const response = await axios.post(
      "http://localhost:5000/api/v1/jobCard",
      values
    );
    if (response.data.message === "Successfully add to card post") {
     
      const newJobNo = jobNo + 1;
      setJobNo(newJobNo);
      setReload(!reload);
      fetch(
        "http://localhost:5000/api/v1/jobCard/recent"
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            navigate(`/dashboard/preview?id=${data._id}`);
          }
        });

      // formRef.current.reset()
      reset();
    }
    console.log(response);
  };
  const handleQuotation = async (e) => {
    e.preventDefault();
    const values = {
      username: username,
      job_no: jobNo,
      date: formattedDate,
      chassis_no: chassisNo,
      carReg_no: carRegNo,
      car_registration_no: registration,
      vehicle_model: vehicleModel,
      vehicle_brand: vehiclebrand,
      mileage: mileage,
      color: color,
      engine_no: engineNo,
      reference_number: reference,
      company_name: companyName,
      vehicle_category:vehicleCategory,
      customer_name: customerName,
      contact_number: contactNo,
      driver_name: driverName,
      phone_number: phoneNo,
      vehicle_interior_parts: value,
      reported_defect: value2,
      reported_action: value3,
      vehicle_body_report: vehicleBody,
      technician_name: technicianName,
      technician_signature: technicianSignature,
      technician_date: technicianDate,
      vehicle_owner: owner,
    };

    const hasQuotationNullValues = Object.values(values).some(
      (val) => val === null
    );

    if (hasQuotationNullValues) {
      setError("Please fill in all the required fields.");
      return;
    }
    setLoading(true);
    const response = await axios.post(
      "http://localhost:5000/api/v1/jobCard",
      values
    );
    if (response.data.message === "Successfully add to card post") {
      const newJobNo = jobNo + 1;
      setJobNo(newJobNo);
      setReload(!reload);
      navigate(`/dashboard/qutation?order_no=${jobNo}`);
      // formRef.current.reset()
      setLoading(false);
    }
  };
  const handleInvoice = async (e) => {
    e.preventDefault();
    const values = {
      username: username,
      job_no: jobNo,
      date: formattedDate,
      chassis_no: chassisNo,
      carReg_no: carRegNo,
      car_registration_no: registration,
      vehicle_model: vehicleModel,
      vehicle_brand: vehiclebrand,
      mileage: mileage,
      color: color,
      engine_no: engineNo,
      reference_number: reference,
      company_name: companyName,
      vehicle_category:vehicleCategory,
      customer_name: customerName,
      contact_number: contactNo,
      driver_name: driverName,
      phone_number: phoneNo,
      vehicle_interior_parts: value,
      reported_defect: value2,
      reported_action: value3,
      vehicle_body_report: vehicleBody,
      technician_name: technicianName,
      technician_signature: technicianSignature,
      technician_date: technicianDate,
      vehicle_owner: owner,
    };

    const hasQuotationNullValues = Object.values(values).some(
      (val) => val === null
    );

    if (hasQuotationNullValues) {
      setError("Please fill in all the required fields.");
      return;
    }
    setLoading(true);
    const response = await axios.post(
      "http://localhost:5000/api/v1/jobCard",
      values
    );
    if (response.data.message === "Successfully add to card post") {
      const newJobNo = jobNo + 1;
      setJobNo(newJobNo);
      setReload(!reload);
      setLoading(false);
      navigate(`/dashboard/invoice?order_no=${jobNo}`);
      // formRef.current.reset()
    }
  };
  const handleIconPreview = async (e) => {
    navigate(`/dashboard/preview?id=${e}`);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/jobCard`)
      .then((res) => res.json())
      .then((data) => {
        setPreviousPostData(data);
        setLoading(false);
        // console.log(data);
      });
  }, [jobNo, reload]);
  useEffect(() => {
    if (previousPostData.job_no && !jobNo) {
      setJobNo(previousPostData.job_no + 1);
    }
  }, [previousPostData, jobNo, reload]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/api/v1/jobCard/all/${username}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAllJobCard(data);
      });
  }, [username, reload]);

  const handleDateChange = (event) => {
    const rawDate = event.target.value;
    const parsedDate = new Date(rawDate);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    setFormattedDate(formattedDate);
  };

  // pagination

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("job")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const deletePackage = async (id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this card?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      try {
        
        const res = await fetch(
          `https://trust-auto-solution-server.vercel.app/api/v1/jobCard/one/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();

        if (data.message == "Job card delete successful") {
          setAllJobCard(allJobCard?.filter((pkg) => pkg._id !== id));
         
        }
        swal("Deleted!", "Card delete successful.", "success");
      } catch (error) {
        swal("Error", "An error occurred while deleting the card.", "error");
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem("job", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("job")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  // ...

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("job", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(allJobCard?.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-green-500 text-white px-3 rounded-md cursor-pointer"
              : "cursor-pointer text-black border border-green-500 px-3 rounded-md"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;

  let currentItems;
  if (Array.isArray(allJobCard)) {
    currentItems = allJobCard.slice(startIndex, lastIndex);
  } else {
    currentItems = [];
  }

  // ...

  const renderData = (allJobCard) => {
    return (
      <table className="table">
        <thead className="tableWrap">
          <tr>
            <th>SL No</th>
            <th>Customer Name</th>
            <th>Order Number </th>
            <th>Car Number </th>
            <th>Mobile Number</th>
            <th>Date</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {allJobCard?.map((card, index) => (
            <tr key={card._id}>
              <td>{index + 1}</td>
              <td>{card.customer_name}</td>
              <td>{card.job_no}</td>
              <td>{card.car_registration_no}</td>
              <td> {card.phone_number} </td>
              <td>{card.date}</td>
              <td>
                <div
                  onClick={() => handleIconPreview(card._id)}
                  className="editIconWrap"
                >
                  {/* <Link to="/dashboard/preview"> */}
                  <FaEye className="editIcon" />
                  {/* </Link> */}
                </div>
              </td>
              <td>
                <div className="editIconWrap">
                  <Link to={`/dashboard/update-jobcard?id=${card._id}`}>
                    <FaEdit className="editIcon" />
                  </Link>
                </div>
              </td>
              <td>
                <div
                  onClick={() => deletePackage(card._id)}
                  className="editIconWrap"
                >
                  <FaTrashAlt className="deleteIcon" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("job", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("job", newPage.toString());

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-black pl-1"
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-black pr-1"
      >
        &hellip;
      </li>
    );
  }

  const handleFilterType = async () => {
    if (select === "SL No") {
      setLoading(true);
      fetch(
        `https://trust-auto-solution-server.vercel.app/api/v1/jobCard/all/${username}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllJobCard(data);
          setNoMatching(null);
          setLoading(false);
        });
    } else {
      const data = {
        select,
        filterType,
      };
      setLoading(true);
      const response = await axios.post(
        `https://trust-auto-solution-server.vercel.app/api/v1/jobCard/all/${username}`,
        data
      );

      if (response.data.message === "Filter successful") {
        setAllJobCard(response.data.result);
        setNoMatching(null);
        setLoading(false);
      }
      if (response.data.message === "No matching found") {
        setNoMatching(response.data.message);
      }
    }
  };
  return (
    <div className="addJobCardWraps">
      <div className=" mb-5 pb-5 mx-auto text-center border-b-2 border-[#351E98]">
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
      <form ref={formRef}>
        <div>
          <div className=" jobCardFormWrap">
            <div>
              <label>Job No: <span className="requiredStart">*</span></label>
              <input
                value={jobNo}
                // name="jobNo"
                autoComplete="off"
                type="text"
                placeholder="Job No"
              />
            </div>
            <div>
              <div className="vehicleCard">Vehicle Job Card </div>
            </div>
            <div>
              <label>Date <span className="requiredStart">*</span></label>
              <input
                onChange={handleDateChange}
                autoComplete="off"
                type="date"
                placeholder="Date"
              />
            </div>
          </div>
          <div className="jobCardSingleForm jobCardSingleForm2 mt-8">
            <div>
              <label>Chassis No  <span className="requiredStart">*</span></label>
              <input
                onChange={(e) => setChassisNo(e.target.value)}
                required
                // {...register("chassis_no", { required: true })}
                // name="chassis_no"
                autoComplete="off"
                type="text"
                placeholder="Chassis No (T&N)"
              />
            </div>
            <div>
              <label>Car Registration No  <span className="requiredStart">*</span></label>
              
              <div className="flex items-center inputSelectWrap">
                <select  onChange={(e) => setCarReg(e.target.value)} >
                  <option value="Reg">Select </option>
                  <option value="Reg">DM KHA</option>
                  <option value="Reg">DM KHA</option>
                  <option value="Reg">DM KHA</option>
                </select>
               <input
                onChange={(e) => setRegistration(e.target.value)}
                required
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Car R (T&N)"
              />
              </div>
            </div>
            <div>
              <label>Vehicle Model <span className="requiredStart">*</span></label>
              <input
                onChange={(e) => setCarModel(e.target.value)}
                required
                // name="car_model"
                autoComplete="off"
                type="text"
                placeholder="Vehicle Model (N)"
              />
            </div>

            <div>
              <label>Vehicle Brand <span className="requiredStart">*</span> </label>
              <input
                onChange={(e) => setCarMake(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Vehicle Brand (T&N)"
              />
            </div>
            <div>
              <label>Mileage <span className="requiredStart">*</span> </label>
              <input
                // {...register("mileage", { required: true })}
                onChange={(e) => setMileage(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Mileage (N)"
              />
            </div>
          </div>
          <div className="jobCardSingleForm jobCardSingleForm2">
            <div>
              <label>Color & Code <span className="requiredStart">*</span> </label>
              <input
                // {...register("color", { required: true })}
                onChange={(e) => setColor(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Color & Code (T&N)"
              />
            </div>
            <div>
              <label>Engine No & CC  <span className="requiredStart">*</span></label>
              <input
                onChange={(e) => setEngineNo(e.target.value)}
                required
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="ENGINE NO & CC (T&N)"
              />
            </div>
            <div>
              <label>Reference Name</label>
              <input
                // {...register("reference_number", { required: true })}
                onChange={(e) => setReference(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Reference Name (T)"
              />
            </div>
            <div>
              <label>Company Name</label>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Company Name (T)"
              />
            </div>
            <div>
              <label>Vehicle Category  <span className="requiredStart">*</span></label>
              <select autoComplete="off"  onChange={(e) => setVehicleCategory(e.target.value)}>
                <option value="Select Vehicle Category ">Select Vehicle Category </option>
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
              <label>Customer Name <span className="requiredStart">*</span> </label>
              <input
                // {...register("customer_name", { required: true })}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Customer Name (T)"
              />
            </div>
            <div>
              <label>Contact No <span className="requiredStart">*</span></label>
              <input
                // {...register("contact_number", { required: true })}
                onChange={(e) => setContactNo(e.target.value)}
                required
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Contact No (N)"
              />
            </div>
            <div>
              <label>Driver Name </label>
              <input
                // {...register("driver_name", { required: true })}
                onChange={(e) => setDriverName(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Driver Name (T)"
              />
            </div>
            <div>
              <label>Phone No </label>
              <input
                // {...register("phone_number", { required: true })}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Contact No (N)"
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
                  value={value}
                  className="textEditor"
                  onChange={(e) => setValue(e.target.value)}
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
                  value={value2}
                  className="textEditor"
                  onChange={(e) => setValue2(e.target.value)}
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
                  value={value3}
                  className="textEditor"
                  onChange={(e) => setValue3(e.target.value)}
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
                  // {...register("vehicle_body_report", { required: true })}
                  onChange={(e) => setVehicleBody(e.target.value)}
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              {/* <b className="carSideBar">LEFT</b>
              <b className="carSideBar2">REAR</b>
              <b className="carSideBar3">FRONT</b>
              <b className="carSideBar4">RIGHT</b> */}
            </div>
          </div>
          <div className="jobCardSingleForm">
            <div>
              <label>Technician Name </label>
              <input
                // {...register("technician_name", { required: true })}
                onChange={(e) => setTechnicianName(e.target.value)}
                required
                autoComplete="off"
                type="text"
                placeholder="Technician Name"
              />
            </div>
            <div>
              <label>Technician Signature </label>
              <input
                // {...register("technician_signature", { required: true })}
                onChange={(e) => setTechnicianSignature(e.target.value)}
                required
                className="registrationForm"
                autoComplete="off"
                type="text"
                placeholder="Technician Signature"
              />
            </div>
            <div>
              <label>Date </label>
              <input
                // {...register("technician_date", { required: true })}
                onChange={(e) => setTechnicianDate(e.target.value)}
                required
                autoComplete="off"
                type="date"
                placeholder="Date"
              />
            </div>
            <div>
              <label>For Vehicle Owner</label>
              <input
                // {...register("vehicle_owner", { required: true })}
                onChange={(e) => setOwner(e.target.value)}
                required
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
            <div>
              {/* <Link to={`/dashboard/preview?${id}`}> */}
              <button onClick={handlePreview}>Preview</button>
              {/* </Link> */}
              {/* <Link to="/dashboard/preview"> */}
             <Link  to="/dashboard/preview"> <button>Download</button></Link>
              {/* </Link>
              <Link to="/dashboard/preview"> */}
              <Link  to="/dashboard/preview"> <button>Print</button></Link>
              {/* </Link> */}
              {/* <Link to={`/dashboard/qutation?order_no=${jobNo}`}> */}{" "}
              <button onClick={handleQuotation}>Quotation</button>
              {/* </Link> */}
              {/* <Link to="/dashboard/invoice"> */}{" "}
              <button onClick={handleInvoice}>Invoice</button>
              {/* </Link> */}
            </div>
            <div className="submitQutationBtn">
              <button onClick={handleAddToCard} type="submit" className="">
                Add To Job Card{" "}
              </button>
            </div>
          </div>
          <div className="pt-6 text-red-400 text-center">{error}</div>
        </div>
      </form>
      <div className="overflow-x-auto mt-20">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm lg:text-3xl font-bold mb-3">Job Card List:</h3>
          <div className="flex items-center searcList">
            <select onChange={(e) => setSelect(e.target.value)}>
              <option value="SL No">SL No</option>
              <option value="Customer Name"> Customer Name</option>
              <option value="Order Number"> Order Number</option>
              <option value="Car Number"> Car Number</option>
              <option value="Mobile Number"> Mobile Number</option>
            </select>
            <div className="searchGroup">
              <input
                onChange={(e) => setFilterType(e.target.value)}
                autoComplete="off"
                type="text"
                placeholder={select}
              />
            </div>
            <button onClick={handleFilterType} className="SearchBtn ">
              Search{" "}
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center text-xl">
          Loading...
        </div>
      ) : (
        <div>
          {allJobCard?.length === 0 ||
          currentItems.length === 0 ||
          noMatching ? (
            <div className="text-xl text-center flex justify-center items-center h-full">
              No matching card found.
            </div>
          ) : (
            <>
              <section>
                {renderData(currentItems)}
                <ul
                  className={
                    minPageNumberLimit < 5
                      ? "flex justify-center gap-2 md:gap-4 pb-5 mt-6"
                      : "flex justify-center gap-[5px] md:gap-2 pb-5 mt-6"
                  }
                >
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === pages[0] ? true : false}
                    className={
                      currentPage === pages[0]
                        ? "text-gray-600"
                        : "text-gray-300"
                    }
                  >
                    Previous
                  </button>
                  <span
                    className={minPageNumberLimit < 5 ? "hidden" : "inline"}
                  >
                    {pageDecrementBtn}
                  </span>
                  {renderPagesNumber}
                  {pageIncrementBtn}
                  <button
                    onClick={handleNext}
                    disabled={
                      currentPage === pages[pages?.length - 1] ? true : false
                    }
                    className={
                      currentPage === pages[pages?.length - 1]
                        ? "text-gray-700"
                        : "text-gray-300 pl-1"
                    }
                  >
                    Next
                  </button>
                </ul>
              </section>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AddJobCard;
