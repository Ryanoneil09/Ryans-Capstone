const BASE_URL = "https://fakestoreapi.com";

// ---------------- GET ALL PRODUCTS ----------------

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET all products", error);
  }
};

// ------------------- Get Single Product ----------------
export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET single product", error);
  }
};
