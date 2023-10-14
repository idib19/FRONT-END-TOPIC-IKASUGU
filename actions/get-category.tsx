// This function fecthes and returns the specifical category with the specifical id passed as a prop to
// whoever calls it !!!

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getCategory;