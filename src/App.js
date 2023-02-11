import "./App.css";
import Foot from "./components/foot";
import Head from "./components/header";

function App() {
  return (
    <div className="main-container flex flex-column">
      <div className="header">
        <Head></Head>
      </div>
      <div className="footer">
        <Foot></Foot>
      </div>
    </div>
  );
}

export default App;
