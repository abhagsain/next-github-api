import axios from "axios";
import Cors from "cors";
import middleware from "../../../lib/middleware";
const cors = middleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);
export default async (req, res) => {
  const url = req.url.includes("?") ? req.url.split("/api/positions")[1] : "";
  await cors(req, res);
  const URL = `https://jobs.github.com/positions.json${url}`;
  try {
    const { data } = await axios.get(URL);
    console.log("🚀 - file: index.js - line 16 - data", data);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: "Oops there was an error. Check the URL and params",
      error,
    });
  }
};
