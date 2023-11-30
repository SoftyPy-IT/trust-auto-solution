import { useContext } from "react";
import logo from "../../../../../public/assets/logo.png";
import './PreviewJobCard.css'
import { PrintContext } from "../../../context/PrintProvider";
import CommonButton from "../../../../components/CommonButton/CommonButton";
import car from "../../../../../public/assets/car.jpeg";
const PreviewJobCard = () => {
    const { componentRef, targetRef } = useContext(PrintContext)
    // const componentRef = useRef();
    // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    // });
    return (
        <div ref={componentRef} className="invoicePrintWrap" >
            <div ref={targetRef} className="py-10 px-5 invoicePrint" >
                <div className=" mb-5 mx-auto text-center border-b-2 border-[#351E98] pb-2">

                    <div className="flex  justify-between items-center mb-3">
                        <img className="w-[110px] " src={logo} alt="logo" />
                        <h2 className="trustAutoTitle ">Trust Auto Solution </h2>

                    </div>
                </div>
                <div></div>
                <div>
                    <div className="flex items-center justify-between">
                        <input type="text" placeholder="Job No" className="input w-[150px]  input-bordered input-primary " />
                        <div className="vehicleCard2 mx-2 uppercase">Vehicle Job Card </div>
                        <input type="text" placeholder="Date" className="input w-[150px] input-bordered input-primary" />
                    </div>
                    <div className="flex items-center my-8 justify-between inputGroup">

                        <div>
                            <label className="block">VIN No</label>
                            <input type="text" placeholder="VIN No" />
                        </div>
                        <div>
                            <label className="block">Car Registration No</label>
                            <input type="text" placeholder="Registration" />
                        </div>
                        <div>
                            <label className="block">Car Model </label>
                            <input type="text" placeholder="Car Model" />
                        </div>
                        <div>
                            <label className="block">Car Make </label>
                            <input type="text" placeholder="Car Make" />
                        </div>
                        <div>
                            <label className="block">Mileage</label>
                            <input type="text" placeholder="Mileage" />
                        </div>




                    </div>
                    <div className="flex items-center my-8 justify-between ">

                        <div>
                            <label className="block">Color</label>
                            <input type="text" placeholder="Color" className="input w-[150px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Engine No</label>
                            <input type="text" placeholder="Engine No" className="input w-[270px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Referance Number </label>
                            <input type="text" placeholder="Referance Number" className="input w-[200px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Comapny Name</label>
                            <input type="text" placeholder="Comapny Name" className="input w-[150px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Mileage</label>
                            <input type="text" placeholder="Mileage" className="input w-[150px]  input-bordered input-primary " />
                        </div>




                    </div>
                    <div className="flex items-center my-8 justify-between ">

                        <div>
                            <label className="block">Customer Name</label>
                            <input type="text" placeholder="Customer Name" className="input w-[150px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Contact No</label>
                            <input type="text" placeholder="Contact No" className="input w-[270px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Car Driver Name </label>
                            <input type="text" placeholder="Car Driver Name " className="input w-[200px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Comapny Name</label>
                            <input type="text" placeholder="Comapny Name" className="input w-[150px]  input-bordered input-primary " />
                        </div>
                        <div>
                            <label className="block">Phone No</label>
                            <input type="text" placeholder="Phone No" className="input w-[150px]  input-bordered input-primary " />
                        </div>




                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="leftSide">

                            <div>
                                <label> Vehicle Interior Parts, Papers, Tools, Meter Light & Others</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <label> Vehicle Interior Parts, Papers, Tools, Meter Light & Others</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <label> Vehicle Interior Parts, Papers, Tools, Meter Light & Others</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="rightSide">
                            <div className="carImgWrap">
                                <img src={car} alt="car" />
                            </div>
                            <div className="mt-3">
                                <label> Vehicle Interior Parts,</label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between signature mt-16 px-5">
                    <b>Customer Signature </b>
                    <b>Trust Auto Solution</b>
                </div>
                <hr className="my-3" />
                <div className="text-center mt-5">
                    <p>
                        <b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229,
                        www.trustautosolution.com
                    </p>
                    <p>
                        {" "}
                        <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b>{" "}
                        trustautosolution@gmail.com{" "}
                    </p>
                </div>
            </div>
            <CommonButton />
        </div>
    );
};

export default PreviewJobCard;
