import { useForm } from "react-hook-form";
import './Product.css'

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   console.log(data)
      
   };

   
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Product </h2>
      <div className="w-full mx-auto mt-8 addProductWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl ">
            <div className="addproductForm">
              <div>
              <label>Vehicle Name </label>
              <input
               {...register("name", { required: true })}
                name="name"
                placeholder="Vehicle Name"
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
             <div>
              <label>Mileage </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Mileage"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            </div>
          </div>

          <div className="w-[400px] mx-auto ">
            <button className="addProductBtn" type="submit">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
