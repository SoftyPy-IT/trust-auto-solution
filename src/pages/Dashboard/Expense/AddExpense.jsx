import { useForm } from "react-hook-form";

const AddExpense = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Product </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="flex items-center jsutify-between w-full ">
              <div className="singleForm">
                <label>Reference No</label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Vehicle Name"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm ml-3">
                <label> Expense Category</label>
                <input
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Vehicle No"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex items-center jsutify-between w-full ">
              <div className="singleForm">
                <label>Tax </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Vehicle Name"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm ml-3">
                <label> Total Amount </label>
                <input
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Vehicle No"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex items-center jsutify-between w-full ">
              <div className="mt-1 rounded-md shadow-sm singleForm">
                <label>Attach Document </label>
                <input
                  id="text"
                  type="file"
                  name="image "
                  className="file-input file-input-bordered  w-full  appearance-none block  border border-[#351E98]  rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm ml-3">
                <label> Total Amount </label>
                <input
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Vehicle No"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
