import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

export default math.evaluate;

export const symbols = ["-", "+", "/", "*"];
