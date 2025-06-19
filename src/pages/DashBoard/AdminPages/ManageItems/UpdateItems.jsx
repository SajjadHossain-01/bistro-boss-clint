import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  const items = useLoaderData();
  console.log(items);
  const param = useParams()
  console.log(param)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <h1 className="text-center font-Inter text-4xl my-20 uppercase">update Items</h1>
      <div className="max-w-4xl mx-auto bg-gray-100 p-12 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-4">
              Recipe name*
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
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
              <div>
                <select
                  defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={recipe}
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

          <div className="flex justify-center">
            <button
            type="submit"
            className="btn bg-linear-to-r rounded-none font-Inter text-white from-[#835D23] to-[#B58130]"
          >
            Update Recipe Details
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
