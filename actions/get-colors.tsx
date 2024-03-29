import { Color } from "@/types";
import { colors } from "@/lib/statics";
const URL = ``;

const getColors = async (): Promise<Color[]> => {

    return colors;
};

export default getColors;