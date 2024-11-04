import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

// const getProducts = async (data) => {
//   const response = await axios.get(
//     `${base_url}product?${data?.brand?`brand=${data?.brand}&&`:""}${
//       data?.tag?`tags=${data?.tag}&&`:""
//     }${data?.category?`category=${data?.category}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`
//   );
//   if (response.data) {
//     return response.data;
//   }
// };

// const getProducts = async (data) => {
//   const response = await axios.get(
//     `${base_url}product/`,
//   );
//   if (response.data) {
//     return response.data;
//   }
// };

const getProducts = async (data) => {
  try {
    const params = new URLSearchParams();

    if (data?.brand) params.append("brand", data.brand);
    if (data?.tag) params.append("tags", data.tag);
    if (data?.category) params.append("category", data.category);
    if (data?.minPrice) params.append("price[gte]", data.minPrice);
    if (data?.maxPrice) params.append("price[lte]", data.maxPrice);
    if (data?.sort) params.append("sort", data.sort);

    // Log the full request URL
    const url = `${base_url}product?${params.toString()}`;
    console.log("Request URL:", url);

    const response = await axios.get(url);

    if (response.status === 200) {
      console.log("Fetched products successfully:", response.data);
      return response.data;
    } else {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};





const getSingleProducts = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (id) => {
  const response = await axios.put(`${base_url}product/${id}`, { prodId });
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating}`, { data });
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProducts,
  rateProduct,
};
