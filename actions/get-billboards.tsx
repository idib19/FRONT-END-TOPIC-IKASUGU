import { Billboard } from "@/types"; 
import { billboard } from "@/lib/statics";


const getBillboard = async (): Promise<Billboard> => {
  return billboard
};

export default getBillboard;

