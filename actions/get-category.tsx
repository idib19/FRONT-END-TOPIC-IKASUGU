import { categories } from "@/lib/statics";

const getCategory = async (id: string): Promise<any> => {
  const matchingCategory = categories.find((category) => category.id === id);
  return matchingCategory;
};

export default getCategory;
