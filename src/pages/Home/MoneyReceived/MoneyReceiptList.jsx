/* eslint-disable react/no-unescaped-entities */
import './MoneyReceived.css'
import logo from '../../../../public/assets/logo.png'
import { Email,Home,WhatsApp,LocalPhone } from '@mui/icons-material'
const MoneyReceiptList = () => {
    return (
       <section className="moneyReceivedWrap">
         <section className='moneyFormWrap'>
            <div className="moneyRecieved">
             <div className="logoWrap">
             <img className="" src={logo} alt="logo" />
             </div>
              <div className='moneyHead'>
              <h2 className="receivedTitle ">Trust Auto Solution </h2>
              <small>It's trusted computerized Organization for all kinds of vehicle check up & maintenance such as computerized Engine Analysis, Engine tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash. </small>
              </div>
              <div>
                <h3>Hotline</h3>
                <div className='flex items-center mt-1'>
                    <LocalPhone hotlineIcon/>
                <b className='ml-1'>+880 1821-216465</b>
                </div>
               <div className="flex items-center mt-1">
                <Email hotlineIcon/>
               <small className='ml-1'>trustautosolution@gmail.com</small>
               </div>
               <div className="flex items-center mt-1">
                <Home hotlineIcon/>
               <small className='ml-1'>Ka-93/4/C Kuril Bishawroad, <br /> Dhaka-1212</small>
               </div>
               <div className="flex items-center mt-1">
                <WhatsApp hotlineIcon/>
               <small className='ml-1'>+88 1972-216465</small>
               </div>
              </div>
            </div>
            <div className='receivedBtn'>
                <button>Receipt</button>
            </div>
            <div className="flex justify-between ">
                <b>Serial No: 01</b>
                <b>Date: 12-12-21</b>
            </div>
            <div className='flex receivedField mt-3'>
                <label className='receivedMoneyText'>Received with thanks from </label>
                <input  type="text" autoComplete='off' />
            </div>
           <div className=" payAdvance mt-5">
           <div className='flex  receivedField'>
                <label className='advance'>Advance/Final Payment agint bill no:  </label>
                <input className='' type="text" autoComplete='off' />
            </div>
            <div className='flex receivedField'>
                <label className='vehicleText'>Vehicle No: </label>
                <input className='' type="text" autoComplete='off' />
            </div>
           </div>
           <div className="payAdvance mt-5">
           <div className='flex  receivedField'>
                <label className='checqueText'>Cash/Checque No: </label>
                <input className='cashInput' type="text" autoComplete='off' />
            </div>
            <div className='flex receivedField'>
                <b className='date'>Date: </b>
                <input className='dateInput' type="text" autoComplete='off' />
            </div>
           </div>
           <div className=" payAdvance mt-5">
           <div className='flex  receivedField'>
                <label className='backText'>Bank : </label>
                <input className='' type="text" autoComplete='off' />
            </div>
            <div className='flex receivedField'>
                <label className='date'>Date : </label>
                <input className='' type="text" autoComplete='off' />
            </div>
           </div>
           <div className="amount mt-5">
            <div>
                <label>Total Amount Tk:</label>
                <input type="text" />
            </div>
            <div>
                <label>Advance:</label>
                <input type="text" />
            </div>
            <div>
                <label>Remaining:</label>
                <input type="text" />
            </div>
           </div>
           <div className='wordTaka mt-5'> 
            <label>in word (takta) </label>
            <input type="text" />
           </div>
           <div className=''>
            <small className='signature'>Authorized Signature</small>
           </div>
        </section>
       </section>
    );
};

export default MoneyReceiptList;