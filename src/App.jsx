import React from "react";
import CardList from "./components/ShoppingCard/CardList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartList from "./components/ShoppingCart/CartList";
import Loading from "./components/Loading/Loading";
export default function App() {
  return (
    <>
      <Loading />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container m-auto max-w-7xl pt-6 bg-[#F9F8F4]">
        <CardList />
        <CartList />
      </div>
    </>
  );
}
