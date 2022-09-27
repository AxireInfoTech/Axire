import { useEffect, useState } from "react";
import "./App.scss";
import Layout from "./layout/Layout";
import Routes from "./Routes";

function App() {
  const [preLoading, setPreLoading] = useState(true);
  useEffect(() => {
    const preloadingTimeout = setTimeout(() => {
      setPreLoading(false);
    }, 2320);
  }, []);

  return (
    <>
      {preLoading && (
        <div className="preloading-logo">
          <img style={{ width: "200px" }} src="loading/AXIRE_2.gif" alt="" />
        </div>
      )}
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
