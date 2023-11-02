import { Link } from "react-router-dom";

const Invoice = () => {
    return (
      <div className="py-10">
        <div className="w-9/12 mb-5 mx-auto text-center ">
          <h2 className="text-4xl font-bold">Trust Auto Solution </h2>
          <p>It is trusted computerized Ogranizetion for all the kinds of vehicle check up & maintenance such as computerized Engine Analysis Engine tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash.</p>
        </div>
        <div className="px-5 pb-3">
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">SL: 440</h3>
           <span> Date: 20/10/23</span>
        </div>
        <div className="flex items-center justify-between">
            <div>
                <b className=" block">Customer Name: Jahangir Alom </b>
                <b className=" ">Address: Banani, Dhaka </b>
                <div>
                <b className=" block ">Vehicle No: </b>
                <b className=" ">Mileage: </b>
            </div>
            </div>
            <Link to="/dashboard/add-invoice">
            <div className="addInvoic">
                <button> + Add Invoice Card</button>
            </div>
            </Link>
            
        </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#654FC3] text-white ">
              <tr>
                <th>SL No</th>
                <th>Description </th>
                <th>QTY</th>
                <th>Rate </th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-base-200">
                <th>1</th>
                <td>A T trust is the best Partner</td>
                <td>55</td>
                <td>500</td>
                <td>100000</td>
              </tr>
              <tr className="bg-base-200">
                <th>1</th>
                <td>A T trust is the best Partner</td>
                <td>55</td>
                <td>500</td>
                <td>100000</td>
              </tr>
              <tr className="bg-base-200">
                <th>1</th>
                <td>A T trust is the best Partner</td>
                <td>55</td>
                <td>500</td>
                <td>100000</td>
              </tr>
              <tr className="bg-base-200">
                <th>1</th>
                <td>A T trust is the best Partner</td>
                <td>55</td>
                <td>500</td>
                <td>100000</td>
              </tr>
              <tr className="bg-base-200">
                <th>1</th>
                <td>A T trust is the best Partner</td>
                <td>55</td>
                <td>500</td>
                <td>100000</td>
              </tr>
              <tr className="bg-base-200">
                <th>1</th>
                <td>A T trust is the best Partner</td>
                <td>55</td>
                <td>500</td>
                <td>100000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between signature mt-10 px-5">
            <b>Customer Signature </b>
            <b>Trust Auto Solution</b>
        </div>
        <hr className="my-3" />
        <div className="text-center mt-5">
            <p><b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229, www.trustautosolution.com</p>
            <p> <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b> trustautosolution@gmail.com </p>
        </div>
      </div>
    );
  };
  
  export default Invoice;
  