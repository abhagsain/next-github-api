// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async (req, res) => {
  try {
    const { data } = await axios.get("https://jobs.github.com/positions.json");
    return res.status(200).json({ data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Oopes there was an error", error: err });
  }
};