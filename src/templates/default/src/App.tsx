import algokitLogo from "/ak-logo.svg";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div className="flex flex-col items-center p-8 gap-8 bg-tk-primary text-tk-primary min-h-screen">
      <div>
        <a href="https://dev.algorand.co" target="_blank">
          <img src={algokitLogo} className="h-16" alt="AlgoKit logo" />
        </a>
      </div>
      <p>Use AlgoKit Utils TypeScript to explore chain concepts</p>
      <DataFetcher />
    </div>
  );
}

export default App;
