import Loading from "./Loading";
import "./styles.css";
import { useEffect, useState } from "react";
const LoadingFunctinality = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3300);
  // }, []);
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div className="loading">
      <Home />
      <About />
      <Contact />
    </div>
  );
};
export default LoadingFunctinality;