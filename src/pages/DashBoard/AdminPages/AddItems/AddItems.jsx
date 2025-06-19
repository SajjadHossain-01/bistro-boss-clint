
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axsiosPublic = useAxiosPublic();
  const axsiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axsiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url)
    if (res.data.success) {
      const menuData = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axsiosSecure.post("/menu", menuData);
      if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    }
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={"ADD AN ITEM"}
          subheading={"Whats New"}
        ></SectionTitle>
      </div>
      <div className="max-w-4xl mx-auto bg-gray-100 p-12 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-4">
              Recipe name*
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full text-lg py-6"
            />
            {errors.recipeName && (
              <p className="text-red-500 text-lg">This field is required</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center">
            <div>
              <label className="block text-lg font-medium mb-4 ">
                Category*
              </label>
              <div >
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select  select-bordered w-full text-lg "
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="drinks">drinks</option>
                  <option value="dessert">dessert</option>
                  <option value="salad">salad</option>
                </select>
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium mb-4">Price*</label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full text-lg "
              />
              {errors.price && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block textarea-lg font-medium mb-4">
              Recipe Details*
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-full text-lg"
              rows="4"
              placeholder="Recipe Details"
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-lg">This field is required</p>
            )}
          </div>

          <div className="mb-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input  file-input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500 text-lg">Image is required</p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-linear-to-r rounded-none font-Inter text-white from-[#835D23] to-[#B58130]"
          >
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
