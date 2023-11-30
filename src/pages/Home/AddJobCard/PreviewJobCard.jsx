import './AddJobCard.css'
import car from '../../../../public/assets/car.jpeg'
import logo from '../../../../public/assets/logo.png'
import { useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useReactToPrint } from 'react-to-print'
import { usePDF } from 'react-to-pdf'
import { Link } from 'react-router-dom'
const PreviewJobCard = () => {
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const componentRef = useRef()
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' })
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    return (
        <main ref={componentRef}>
            <div ref={targetRef} className="addJobCardWraps">
                <div className=" mb-5 mx-auto text-center border-b-2 border-[#351E98] pb-2">
                    <div className="flex items-center justify-between">
                        <img className="w-[130px] mr-5" src={logo} alt="logo" />
                        <div>
                            <h2 className="text-5xl font-bold">Trust Auto Solution </h2>
                            <p className="text-sm">
                                It is trusted computerized Ogranization for all the kinds of vehicle check up &
                                maintenance such as computerized Engine Analysis Engine tune up, Denting, Painting,
                                Engine, AC, Electrical Works & Car Wash.
                            </p>
                        </div>
                        {/* <img className="w-24 h-24" src={bar} alt="logo" /> */}
                    </div>
                </div>
                <div>
                    <div>
                        <div className=" jobCardFormWrap">
                            <div>
                                <label>Job No:</label>
                                <input name="jobno" autoComplete="off" type="text" placeholder="Job No" />
                            </div>
                            <div>
                                <div className="vehicleCard">Vehicle Job Card </div>
                            </div>
                            <div>
                                <label>Date </label>
                                <input name="date" autoComplete="off" type="text" placeholder="Job No" />
                            </div>
                        </div>
                        <div className="jobCardSingleForm jobCardSingleForm2 mt-8">
                            <div>
                                <label>VIN No </label>
                                <input name="vinno" autoComplete="off" type="text" placeholder="VIN No" />
                            </div>
                            <div>
                                <label>Car Registration No </label>
                                <input
                                    name="rnumber"
                                    className="registrationForm"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Car Registration No"
                                />
                            </div>
                            <div>
                                <label>Car Model</label>
                                <input name="carmodel" autoComplete="off" type="text" placeholder="Car Model" />
                            </div>

                            <div>
                                <label>Car Make </label>
                                <input name="carmake" autoComplete="off" type="text" placeholder="Car Make" />
                            </div>
                            <div>
                                <label>Mileage </label>
                                <input name="meleage" autoComplete="off" type="text" placeholder="Mileage" />
                            </div>
                        </div>
                        <div className="jobCardSingleForm">
                            <div>
                                <label>Color</label>
                                <input name="color" autoComplete="off" type="text" placeholder="Color " />
                            </div>
                            <div>
                                <label>Engine No </label>
                                <input
                                    name="engine"
                                    className="registrationForm"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Engine No "
                                />
                            </div>
                            <div>
                                <label>Referance Number</label>
                                <input name="referance" autoComplete="off" type="text" placeholder="Referance Number" />
                            </div>
                            <div>
                                <label>Comapny Name </label>
                                <input name="cname" autoComplete="off" type="text" placeholder="Company Name" />
                            </div>
                        </div>
                        <div className="jobCardSingleForm">
                            <div>
                                <label>Customer/User name </label>
                                <input
                                    name="username"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Customer/User name "
                                />
                            </div>
                            <div>
                                <label>Contact No </label>
                                <input
                                    name="contact"
                                    className="registrationForm"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Contact No "
                                />
                            </div>
                            <div>
                                <label>Driver Name </label>
                                <input name="driver" autoComplete="off" type="text" placeholder="Driver Name  " />
                            </div>
                            <div>
                                <label>Phone No </label>
                                <input name="Phone" autoComplete="off" type="text" placeholder="Contact No" />
                            </div>
                        </div>

                        <div className="vehicleReport mt-10">
                            <div className="vehicleReportLeftSide">
                                <div className=" vehicleTextField">
                                    <b className="block mb-3">
                                        {' '}
                                        Vehicle Interior Parts, Papers, Tools, Meter Light & Others{' '}
                                    </b>
                                    <ReactQuill
                                        value={value}
                                        className="textEditor"
                                        onChange={setValue}
                                        modules={{
                                            toolbar: [
                                                [{ font: [] }],
                                                [{ size: ['small', false, 'large', 'huge'] }],
                                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                [{ color: [] }, { background: [] }],
                                                [{ align: [] }],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                                ['bold', 'italic', 'underline'],
                                                [{ align: [] }],
                                                ['link', 'image'],
                                                ['video'],
                                                ['clean'],
                                                ['blockquote', 'code-block'],
                                                ['direction'],
                                                ['formula'],
                                                ['strike']
                                            ]
                                        }}
                                    />
                                </div>
                                <div className="mt-5">
                                    <b className="block mb-1"> Reported Defect </b>
                                    <ReactQuill
                                        value={value2}
                                        className="textEditor"
                                        onChange={setValue2}
                                        modules={{
                                            toolbar: [
                                                [{ font: [] }],
                                                [{ size: ['small', false, 'large', 'huge'] }],
                                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                [{ color: [] }, { background: [] }],
                                                [{ align: [] }],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                                ['bold', 'italic', 'underline'],
                                                [{ align: [] }]
                                            ]
                                        }}
                                    />
                                </div>
                                <div className="mt-5">
                                    <b className="block mb-1"> Reported Action </b>
                                    <ReactQuill
                                        value={value3}
                                        className="textEditor"
                                        onChange={setValue3}
                                        modules={{
                                            toolbar: [
                                                [{ font: [] }],
                                                [{ size: ['small', false, 'large', 'huge'] }],
                                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                [{ color: [] }, { background: [] }],
                                                [{ align: [] }],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                                ['bold', 'italic', 'underline'],
                                                [{ align: [] }]
                                            ]
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="vehicleReportRightSide">
                                <b htmlFor="" className="block mb-3">
                                    {' '}
                                    Vehicle Body Report (Mark with X where damage )
                                </b>
                                <div className="imgWrap mt-2">
                                    <img src={car} alt="car" />
                                </div>
                                <div className="mt-5">
                                    <b className="block mb-1 "> Vehicle Body Report Comments</b>
                                    <textarea />
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
                                <input name="tname" autoComplete="off" type="text" placeholder="Technician Name" />
                            </div>
                            <div>
                                <label>Technician Signature </label>
                                <input
                                    name="tsignature"
                                    className="registrationForm"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Technician Signature"
                                />
                            </div>
                            <div>
                                <label>Date </label>
                                <input name="tdate" autoComplete="off" type="text" placeholder="Date" />
                            </div>
                            <div>
                                <label>For Vehicle Owner</label>
                                <input
                                    name="vehicleowner"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="For Vehicle Owner"
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <b>This is not an invoice, all estimates are valid for 30 days </b>
                        </div>
                        <div>
                            <div className="flex items-center justify-between signature mt-16 px-5">
                                <b>Customer Signature </b>
                                <b>Trust Auto Solution</b>
                            </div>
                            <hr className="my-3" />
                            <div className="text-center mt-5">
                                <p>
                                    <b>Office: </b>Ka-93/4/C, Kuril Bishawroad, Dhaka-1229, www.trustautosolution.com
                                </p>
                                <p>
                                    {' '}
                                    <b>Mobile:</b> 01821-216465, 01972-216465 , <b>Email:</b>{' '}
                                    trustautosolution@gmail.com{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="printInvoiceBtnGroup">
                <button className="btn btn-primary mr-2" onClick={handlePrint}>
                    Print{' '}
                </button>
                <button className="btn btn-primary mr-2" onClick={() => toPDF()}>
                    Pdf{' '}
                </button>
                <button className="btn btn-primary mr-2" onClick={() => toPDF()}>
                    Edit{' '}
                </button>
                <Link to="/dashboard/qutation">
                    <button className="btn btn-primary mr-1">Create Qutation </button>{' '}
                </Link>
                <Link to="/dashboard/invoice">
                    <button className="btn btn-primary">Create Invoice </button>{' '}
                </Link>
            </div>
        </main>
    )
}

export default PreviewJobCard
