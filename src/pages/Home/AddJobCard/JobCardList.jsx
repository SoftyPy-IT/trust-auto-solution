/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaTrashAlt,
  FaEdit,
  FaArrowRight,
  FaArrowLeft,
  FaEye,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const JobCardList = () => {
  const [select, setSelect] = useState(null);
  const [allJobCard, setAllJobCard] = useState([]);
  const [noMatching, setNoMatching] = useState(null);
  const [filterType, setFilterType] = useState("");
  const navigate = useNavigate();
  const username = "683231669175";
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/jobCard/all/${username}`)
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
        setAllJobCard(data);
      });
  }, [username]);

  const handleIconPreview = async (e) => {
    navigate(`/dashboard/preview?id=${e}`);
  };
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
          `http://localhost:5000/api/v1/jobCard/one/${id}`,
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
      fetch(`http://localhost:5000/api/v1/jobCard/all/${username}`)
        .then((res) => res.json())
        .then((data) => {
          setAllJobCard(data);
          setNoMatching(null);
        });
    } else {
      const data = {
        select,
        filterType,
      };
      const response = await axios.post(
        `http://localhost:5000/api/v1/jobCard/all/${username}`,
        data
      );
      console.log(response.data);
      if (response.data.message === "Filter successful") {
        setAllJobCard(response.data.result);
        setNoMatching(null);
      }
      if (response.data.message === "No matching found") {
        setNoMatching(response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="overflow-x-auto mt-20">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-3xl font-bold mb-3">Qutation List:</h3>
          <div className="flex items-center searcList">
            <select onChange={(e) => setSelect(e.target.value)}>
              <option value="SL No"> SL No</option>
              <option value="Customer Name"> Customer Name</option>
              <option value="Order Number"> Order Number</option>
              <option value="Car Number"> Car Number</option>
              <option value="Mobile Number"> Mobile Number</option>
            </select>
            <div className="searchGroup">
              <input onChange={(e) => setFilterType(e.target.value)} autoComplete="off" type="text" placeholder={select} />
            </div>
            <button onClick={handleFilterType}  className="SearchBtn ">Search </button>
          </div>
        </div>
        <div>
        {allJobCard?.length === 0 || currentItems.length === 0 || noMatching ? (
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
                    currentPage === pages[0] ? "text-gray-600" : "text-gray-300"
                  }
                >
                  Previous
                </button>
                <span className={minPageNumberLimit < 5 ? "hidden" : "inline"}>
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
      </div>

      {/* <div className="pagination">
        <div className="paginationBtn">
          <button>
            <FaArrowLeft className="arrowLeft" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <FaArrowRight className="arrowRight" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default JobCardList;
