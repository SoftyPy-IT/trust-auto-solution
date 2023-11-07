import { useForm } from "react-hook-form";


const AddEmployee = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   console.log(data)
      
   };

   
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Employee </h2>
      <div className="w-full mx-auto mt-8 addProductWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl ">
            <div className="addproductForm">
              <div>
              <label>Name </label>
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
              <label>Employee Id </label>
              <input
               {...register("title", { required: true })}
                name="title"
                placeholder="Employee Id"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
              </div>
            </div>
            <div className="addproductForm">
             <div>
             <label>Department </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Department"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
             </div>
             <div>
              <label>Designation </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Designation "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            </div>
            <div className="addproductForm">
             <div>
             <label>Total Salary </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Total Salary"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
             </div>
             <div>
              <label>Contact Number </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Contact Number "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            </div>
            <div className="addproductForm">
             <div>
             <label>Status </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Status"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
             </div>
             <div>
              <label>Joining Date </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Joining Date "
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

export default AddEmployee;
