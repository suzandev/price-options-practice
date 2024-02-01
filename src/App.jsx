import LineChart from "./Components/LineChart/LineChart";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PriceOptions />
      <LineChart />
    </div>
  );
}

export default App;
