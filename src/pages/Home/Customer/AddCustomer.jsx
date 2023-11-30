import { useForm } from "react-hook-form";


const AddCustomer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)

  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Customer </h2>
      <div className="w-full mx-auto mt-8 addProductWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl ">
            <div className="addproductForm">
              <div>
                <label> Name </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  placeholder=" Name"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />

              </div>
              <div>
                <label> Email </label>
                <input
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Email"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="addproductForm">
              <div>
                <label>Phone Number </label>
                <input
                  {...register("productsDescription", { required: true })}
                  name="productsDescription"
                  placeholder="Phone Number"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div>
                <label>Role </label>
                <input
                  {...register("productsDescription", { required: true })}
                  name="productsDescription"
                  placeholder="Role"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
            </div>
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
          <div className="w-[400px] mx-auto mt-8">
            <button className="addProductBtn" type="submit">
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
