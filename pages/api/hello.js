import axios from "axios";

export const fetchProducts = async (
  pageNumberParam = 1,
  pageSizeParam = 10,
) => {
  const { data } = await axios.get(
    `https://localhost:7063/api/Product/Details?PageNumber=${pageNumberParam}&PageSize=${pageSizeParam}`,
  );
  return data;
};

