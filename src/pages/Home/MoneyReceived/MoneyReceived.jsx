/* eslint-disable react/no-unescaped-entities */
import './MoneyReceived.css'
import logo from '../../../../public/assets/logo.png'
import { Email,Home,WhatsApp,LocalPhone } from '@mui/icons-material'
const MoneyReceiptView = () => {

    
    return (
      <div className='moneyReceptWrap '>
      <div className="moneyRecieved ">
       <div className="logoWrap ">
       <img className="" src={logo} alt="logo" />
       </div>
        <div className='moneyHead '>
        <h2 className="receivedTitle ">Trust Auto Solution </h2>
        <small>It's trusted computerized Organization for all kinds of vehicle check up & maintenance such as computerized Engine Analysis, Engine tune up, Denting, Painting, Engine, AC, Electrical Works & Car Wash. </small>
        </div>
        <div>
          <div className='flex items-center mt-1'>
              <LocalPhone className='hotlineIcon'/>
          <b className='ml-1'>+880 1821-216465</b>
          </div>
         <div className="flex items-center mt-1">
          <Email className='hotlineIcon'/>
         <small className='ml-1'>trustautosolution@gmail.com</small>
         </div>
         <div className="flex items-center mt-1">
          <Home className='hotlineIcon'> </Home>
         <small className='ml-1'>Ka-93/4/C Kuril Bishawroad, <br /> Dhaka-1212</small>
         </div>
         <div className="flex items-center mt-1">
          <WhatsApp className='hotlineIcon'/>
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
          <input className='moneyViewInputField'  type="text" autoComplete='off' />
      </div>
     <div className=" payAdvance mt-5">
     <div className='flex  receivedField'>
          <label className='advance'>Advance/Final Payment agint bill no:  </label>
          <input className=' moneyViewInputField' type="text" autoComplete='off' />
      </div>
      <div className='flex receivedField'>
          <label className='vehicleText'>Vehicle No: </label>
          <input className=' moneyViewInputField' type="text" autoComplete='off' />
      </div>
     </div>
     <div className="payAdvance mt-5">
     <div className='flex  receivedField'>
          <label className='checqueText'>Cash/Checque No: </label>
          <input className='cashInput moneyViewInputField' type="text" autoComplete='off' />
      </div>
      <div className='flex receivedField'>
          <b className='date2 mr-2'>Date: </b>
          <input className='dateInput moneyViewInputField' type="text" autoComplete='off' />
      </div>
     </div>
     <div className=" payAdvance mt-5">
     <div className='flex  receivedField'>
          <label className='backText'>Bank: </label>
          <input className=' moneyViewInputField' type="text" autoComplete='off' />
      </div>
      <div className='flex receivedField'>
          <label className='date2 '> Date:</label>
          <input className=' moneyViewInputField' type="text" autoComplete='off' />
      </div>
     </div>
     <div className="amount2 mt-5">
      <div className='flex '>
          <label className='totalAmountText2'>Total Amount Tk:</label>
          <input className='moneyViewInputField' type="text" />
      </div>
      <div className='flex '>
          <label>Advance:</label>
          <input className='moneyViewInputField' type="text" />
      </div>
      <div className='flex '>
          <label>Remaining:</label>
          <input className='moneyViewInputField' type="text" />
      </div>
     </div>
     <div className='wordTaka mt-5'> 
      <label>in word (takta) </label>
      <input className='moneyViewInputField' type="text" />
     </div>
     <div >
      <small className='signature'>Authorized Signature</small>
     </div>
     <div className="customerSignature flex items-center justify-between mt-5">
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
    );
};

export default MoneyReceiptView;