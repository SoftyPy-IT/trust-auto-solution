import img from "../../../../public/assets/team.png";
import { FaCheckCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      {/* new cosw */}
      <div className="border-gray-700 bg-opacity-25 mt-14">
        <div className="lg:w-full bg-[#654FC3] mb-8">
          <div className="flex flex-wrap items-center justify-evenly p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-[#fff] p-1"
                src={img}
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0 text-white">
                  {/* {userInfo.name} */}
                </h2>
                <a href="#" className="text-white text-xl">
                  <FaCheckCircle></FaCheckCircle>
                </a>
              </div>
              <div className="hidden md:block text-white">
                <h1 className="font-semibold">MD. ALAMIN</h1>
                <span>Managing Director</span>
                <p>
                  I am so grateful that you have taken the time to consider
                  partnering with T A Solution to serve you. While we are
                  proud of our work and the results we will help you achieve.
                  it is the relationships we build that will endure. I look
                  forward to working closely with you and your team.
                </p>
              </div>
            </div>
            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
      {/* form  */}
      <div className="flex items-center justify-center px-6 w-full">
        <div className="w-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* <a href="#" className="flex justify-center font-bold text-4xl"> LOGO </a> */}

            <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">
              Update Your Information
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form>
              <div>
                <label className="block text-sm font-medium leading-5">
                  {" "}
                  Name{" "}
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="text"
                    name="name"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-[#351E98] rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 leading-5">
                  {" "}
                  Image{" "}
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="text"
                    type="file"
                    name="image "
                    className="file-input file-input-bordered  w-full  appearance-none block  border border-[#351E98]  rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 leading-5">
                  {" "}
                  About{" "}
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="text"
                    type="text"
                    name="about"
                    className="appearance-none block resize-none w-full px-3 py-2 border border-[#351E98]  rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#654FC3] border border-transparent rounded-md hover:bg-primary focus:outline-none transition duration-150 ease-in-out mb-24 ">
                    Update
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
