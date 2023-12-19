/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import './MoneyReceived.css'
import logo from '../../../../public/assets/logo.png'
import { Email,Home,WhatsApp,LocalPhone } from '@mui/icons-material'
import {  useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";
import { Link } from 'react-router-dom';
const MoneyReceived = () => {
    const componentRef = useRef();
    const { targetRef } = usePDF({ filename: "page.pdf" });
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const options = {
        filename: "advanced-example.pdf",
        method: "save",
        page: {
          format: "letter",
          orientation: "landscape"
        },
        canvas: {
          mimeType: "image/jpeg",
          qualityRatio: 1
        },
        overrides: {
          pdf: {
            compress: true
          },
          canvas: {
            useCORS: true
          }
        }
      };
      
    const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement, options);




    return (
      <section className='viewMoneyReceiptWrap'>
         <div className="moneyWraps">
        <div id='container' ref={targetRef}>
        <div ref={componentRef} className='moneyFormWrap'>
            <div className="moneyRecieved">
             <div className="logoWrap logoWrap2">
             <img className="" src={logo} alt="logo" />
             </div>

              <div className='moneyHead moneyHead2'>
              <h2 className="receivedTitle receivedTitle2">Trust Auto Solution </h2>
              <span>It's trusted computerized Organization for all kinds of vehicle check up & maintenance such as computerized Engine Analysis, Engine tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash. </span>
              </div>
              <div className='hotlineWrap'>
                <div className='flex items-center'>
                    <LocalPhone className='hotlineIcon'/>
                <small className='ml-1'>+880 1821-216465</small>
                </div>
               <div className="flex items-center">
                <Email className='hotlineIcon'/>
               <small className='ml-1'>trustautosolution@gmail.com</small>
               </div>
               <div className="flex items-center">
                <Home className='hotlineIcon'> </Home>
               <small className='ml-1'>Ka-93/4/C Kuril Bishawroad, <br /> Dhaka-1212</small>
               </div>
               <div className="flex items-center">
                <WhatsApp className='hotlineIcon'/>
               <small className='ml-1'>+88 1972-216465</small>
               </div>
              </div>
            </div>
            <div className='receivedBtn receivedBtn2'>
                <button>Receipt</button>
            </div>
            <div className="flex justify-between ">
                <small>Serial No: 01</small>
                <small>Date: 12/01/2023 </small>
            </div>
           <div className="allInputWraps">
           <div className='flex items-center justify-center receivedField '>
                <label className='receivedMoneyText2'>Received with thanks from </label>
                {/* <input disabled  type="text" autoComplete='off' /> */}
                <span></span>
            </div>
           <div className=" payAdvance mt-2">
           <div className='flex items-center justify-center  receivedField'>
                <label className='advance2'>Advance/Final Payment agint bill no:  </label>
                <span></span>
            </div>
            <div className='flex items-center justify-center receivedField'>
                <label className='vehicleText2'>Vehicle No: </label>
                <span></span>   </div>
           </div>
           <div className="payAdvance mt-2">
           <div className='flex items-center justify-center  receivedField'>
                <label className='checqueText2'>Cash/Checque No: </label>
                <span></span>            </div>
            <div className='flex items-center justify-center receivedField'>
                <label className='date'>Date: </label>
               <span></span>
            </div>
           </div>
           <div className=" payAdvance mt-2">
           <div className='flex items-center justify-center  receivedField'>
                <label className='backText2'>Bank : </label>
               <span></span>    </div>
            <div className='flex items-center justify-center receivedField'>
                <label className='date'>Date : </label>
                <span></span>   </div>
           </div>
           <div className="amount moneyReceiptAmount mt-2">
            <div className='flex items-center justify-center receivedField'>
                <label className='totalAmountText'>Total Amount Tk:</label>
               <input readOnly className='amountTextBG' type="text" />
            </div>
            <div className='flex items-center justify-center receivedField'>
                <label>Advance:</label>
              <input readOnly className='amountTextBG' type="text" />
            </div>
            <div className='flex items-center justify-center receivedField'>
                <label>Remaining:</label>
               <input readOnly className='amountTextBG' type="text" />
            </div>
           </div>
           <div className='wordTaka mt-2 receivedField flex items-center justify-center'> 
            <label className='tkText'>in word (taka) </label>
            <span></span>    
            </div>
           </div>
           <div className='mt-5'>
            <small className='signature'>Authorized Signature</small>
           </div>
        </div>
        </div>
       
       </div>
       <div className="moneyReceiptBtnGroup mt-5">
        <button onClick={handlePrint}>Print </button>
        <button onClick={downloadPdf}>Pdf </button>
        <Link to="/dashboard/money-receive">
          <button> Edit </button>
        </Link>
 
      </div>
      </section>
    );
};

export default MoneyReceived;