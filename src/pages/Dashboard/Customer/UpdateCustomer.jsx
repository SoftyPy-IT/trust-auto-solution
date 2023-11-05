import { useForm } from "react-hook-form";


const UpdateCustomer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   console.log(data)
      
   };

   
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update Customer </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Customer Name </label>
              <input
               {...register("name", { required: true })}
                name="name"
                placeholder="Customer Name"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Email</label>
              <input
               {...register("title", { required: true })}
                name="title"
                placeholder="Email"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Address </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Address"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="mt-1 rounded-md shadow-sm">
            <label>Image Upload </label>
                  <input
                    id="text"
                    type="file"
                    name="image "
                    className="file-input file-input-bordered  w-full  appearance-none block  border border-[#351E98]  rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    autoComplete="off"
                  />
                </div>
            <div className="singleForm">
                <label> Description </label> 
                <textarea
                 {...register("description", { required: true })}
                name="description" placeholder="Description" id="" cols="30" rows="10"  autoComplete="off"></textarea>
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCustomer;
