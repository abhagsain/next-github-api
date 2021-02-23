import axios from "axios";
import Cors from "cors";
import middleware from "../../../lib/middleware";
const cors = middleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);
export default async (req, res) => {
  const {
    query: { id },
  } = req;
  if (!id) {
    return res.status(404).json({
      message: "Not Sure what you're looking for 🤷‍♂️",
    });
  }
  await cors(req, res);

  const URL = `https://jobs.github.com/positions/${id}`;
  try {
    const { data } = await axios.get(URL);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: "Oops there was an error. Make sure the Job ID exists",
      error,
    });
  }
};
