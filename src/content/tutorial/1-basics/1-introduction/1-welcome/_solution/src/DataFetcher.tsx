import { useState } from "react";
import { getLastRound } from "./utils";

const DataFetcher = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData("");
    setError("");

    try {
      const lastRound = await getLastRound();
      setData(lastRound.toString());
    } catch (err) {
      console.error(`Error fetching data: `, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md flex flex-col gap-8 text-center">
      <button
        onClick={handleFetchData}
        disabled={loading}
        className="btn m-auto"
      >
        Fetch Latest Round
      </button>
      <div className="flex">
        {loading && <p>Loading data...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <div>{`Latest MainNet block: ${data}`}</div>}
      </div>
    </div>
  );
};

export default DataFetcher;
