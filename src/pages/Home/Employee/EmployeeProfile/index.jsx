import { HiLocationMarker } from "react-icons/hi"
import { HiEnvelope, HiMiniPhone } from "react-icons/hi2"
import { ImUserTie } from "react-icons/im";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import EmployeeAccount from "./EmployeeAccount";

const CustomerProfile = () => {
  return (
    <div>
      <div className="w-full h-32 mt-5 bg-[#37A248] text-white flex items-center  ">
        <div>
          <div className="bg-[#0A9396] border rounded-md py-5 px-3 relative top-20 left-5 ">
            <div className="flex  ml-5">
              <div className="w-24 h-24 bg-[#37A248] border rounded-xl mr-3 p-3 ">
                <ImUserTie size="80" className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl">Ariful Islam</h3>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center">
                    <HiMiniPhone size="20" className="mr-2" />
                    <span>45996-0789777</span>
                  </div>
                  <div className="flex items-center">
                    <HiEnvelope size="20" className="mr-2" />
                    <span>arif@gmail.com </span>
                  </div>
                  <div className="flex items-center">
                    <HiLocationMarker size="20" className="mr-2" />
                    <span> Kuril Bishawroad, Dhaka-1212 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 text-black">
        <Tabs className="tabList">
          <TabList>
            <Tab>Account</Tab>
          </TabList>

          <TabPanel>
            <EmployeeAccount />
          </TabPanel>
         
        </Tabs>

        <div>
          <p className="text-center my-5">
            © Copyright 2024 | Trust Auto Solution | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile
