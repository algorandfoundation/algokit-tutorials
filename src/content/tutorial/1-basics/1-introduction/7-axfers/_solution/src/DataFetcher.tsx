import { useState } from "react";
import { JSONTreeView } from "./JSONTreeView";
import { getAssetTransfer } from "./utils";

const DataFetcher = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData(null);
    setError("");

    try {
      const id = "KUZ5F72S2FR7YTC4TFNTKOCSPD6YAWKOFOKPOSRJS7I6HVJMKZUA";
      const asset = await getAssetTransfer(id);
      setData(asset);
    } catch (err) {
      console.error(`Error fetching data: `, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md flex flex-col gap-8">
      <button
        onClick={handleFetchData}
        disabled={loading}
        className="btn m-auto"
      >
        Fetch Asset Transfer
      </button>
      <div className="flex overflow-scroll">
        {loading && <p>Loading data...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <JSONTreeView data={data} />}
      </div>
    </div>
  );
};

export default DataFetcher;
