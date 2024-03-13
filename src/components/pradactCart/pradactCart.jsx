import React from "react";
import { Link } from "react-router-dom";
import { CartCarzinkaIcon } from "../../assets/icons/CartCarzinkaIcon";
import { LikeCartIcon } from "../../assets/icons/LikeCartIcon";
import { useDispatch } from "react-redux";
import { add } from "../../assets/redux/redusser/product-redusser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const PradactCart = ({
  img,
  title,
  memory,
  color,
  ram,
  discount,
  price,
  id,
  catigory,
}) => {
  const dispatch = useDispatch();
  const addproduc = () => {
    toast.success("Success product"), (<ToastContainer />);
    dispatch(add({ img, title, ram, price, id }));
  };
  return (
    <div
      className="relative hover:transition duration-300   hover:scale-105 "
      key={id}
    >
      <Link to={`product/${catigory}/${id}`}>
        <div className="mt-6 p-1  w-[214px]">
          <div className="flex justify-center  mb-4">
            {discount && (
              <p className="absolute  bg-vegan text-wayt rounded-sm top-2 left-2 pt-0.5 pb-0.5 pl-1 pr-1 text-base font-normal">
                {discount}%
              </p>
            )}

            <img className="w-40 h-40  flex-grow-1  " src={img} alt="img" />
          </div>
          <div className="h-[140px] flex pb-2 justify-between flex-col ">
            <p className="max-w-[177px] text-base font-normal">{title}</p>
            <div>
              {discount && (
                <p className="line-through mb-3">
                  {(price * (100 - discount)) / 100} $
                </p>
              )}
              <div>
                <p className="text-lg font-semibold">{price} $</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* like  && carzinka btn :) */}
      <>
        <button
          onClick={() => addproduc()}
          className="bg-vegan absolute top-[284px] right-[57px] cursor-pointer hover:rounded-lg duration-200  p-[6px]"
        >
          <CartCarzinkaIcon />
        </button>
        <div className="absolute  hover:text-vegan  cursor-pointer z-10 top-3 right-8">
          <LikeCartIcon />
        </div>
      </>
    </div>
  );
};
