import axios from "axios";
export default async (req, res) => {
  const {
    query: { id },
  } = req;
  if (!id) {
    return res.status(404).json({
      message: "Not Sure what you're looking for 🤷‍♂️",
    });
  }
  const ID = id.includes(".json") ? id.replace(".json", "") : id;
  const URL = `https://jobs.github.com/positions/${ID}`;
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
