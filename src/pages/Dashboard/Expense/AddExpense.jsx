import { useForm } from "react-hook-form";


const AddExpense = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   console.log(data)
      
   };

   
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Expense </h2>
      <div className="w-full mx-auto mt-8 addProductWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl ">
            <div className="addproductForm">
              <div>
              <label>Reference No </label>
              <input
               {...register("name", { required: true })}
                name="name"
                placeholder="Reference No "
                type="text"
                className="inputField"
                autoComplete="off"
              />
              
              </div>
              <div>
              <label> Vehicle No </label>
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
            <div className="addproductForm">
             <div>
             <label>Tax </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Tax"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
             </div>
             <div>
              <label>Total Amount </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Total Amount "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            </div>
          </div>

          <div className="w-[400px] mx-auto mt-8">
            <button className="addProductBtn" type="submit">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
