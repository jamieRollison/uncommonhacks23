import { Link } from "../models";
const monkeylearn = require("monkeylearn");

export const shortenLink = async (long: string) =>
  await Link.create({ long })
    .then((link: any) => link.short)
    .catch((err: any) => {
      throw err;
    });

export const negativeSentiment = async (text: string[]) => {
  const ml = new monkeylearn(process.env.AI_KEY);
  const model_id = "cl_pi3C7JiL";
  const data = text;
  const res = await ml.classifiers.classify(model_id, data);
  const classification = res.body[0].classifications[0];
  return (
    classification.tag_name === "Negative" && classification.confidence > 0.5
  );
};
