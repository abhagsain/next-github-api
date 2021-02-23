import axios from "axios";
export default async (req, res) => {
  const url = req.url.includes("?") ? req.url.split("/api/positions")[1] : "";
  const URL = `https://jobs.github.com/positions.json${url}`;
  try {
    const { data } = await axios.get(URL);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: "Oops there was an error. Check the URL and params",
      error,
    });
  }
};
