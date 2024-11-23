import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Fetchitems from "../Components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  console.log(fetchStatus);
  return (
    <div>
      <Header />
      <Fetchitems />
      {fetchStatus?.CurrentlyFetching ? <LoadingSpinner /> : <Outlet />}
      {/* <LoadingSpinner /> */}
      <Footer />
    </div>
  );
}

export default App;
