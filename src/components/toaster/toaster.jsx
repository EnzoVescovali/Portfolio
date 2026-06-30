import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  return <ToastContainer position="bottom-right" autoClose={3000} />;
};

export default Toaster;