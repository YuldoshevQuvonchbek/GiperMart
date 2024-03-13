import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleanmount } from "../../../assets/redux/redusser/product-redusser";
import { LikeCartIcon } from "../../../assets/icons/LikeCartIcon";
import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
export const CarzinCard = ({ id, title, img, userCount, ram, userPrice }) => {
  const dispach = useDispatch();
  const addCount = () => {
    dispach(toggleanmount({ type: "add", id }));
  };

  const products = useSelector((state) => state.products);
  console.log(products);

  const removeCount = () => {
    dispach(toggleanmount({ type: "remove", id }));
  };
  return (
    <>
      {!products?.length ? (
        <div className="flex  pb-6 border-b pt-6 border-[#EDEDED] max-w-[990px] justify-between ">
          <div className=" flex gap-4">
            <img className="w-[200px] h-[200px] " src={img} alt="" />
            <div>
              <h2 className=" font-medium text-4xl mb-1"> {title}</h2>
              <p className=" mb-4">({ram})</p>
              <div className=" flex items-center gap-10">
                <div className=" flex hover:text-vegan items-center gap-2">
                  <LikeCartIcon />
                  <p className=" text-[#999999] hover:text-vegan">
                    В избранное
                  </p>
                </div>
                <button className="  text-[#999999] hover:text-[#ff5b5bbd] flex items-center gap-2">
                  <DeleteIcon />
                  Удалить
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className=" mb-10 text-2xl font-semibold ">{userPrice} $</p>
            <div className=" h-9 p-0.5 bg-[#EDEDED] flex items-center gap-2">
              <div className="flex items-center border-gray-100">
                <button
                  onClick={addCount}
                  className="cursor-pointer rounded-r bg-gray-100 hover:text-vegan py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +
                </button>

                <span className="h-8 w-8 flex items-center justify-center bg-wayt text-center text-xs outline-none">
                  {userCount}
                </span>
                <button
                  onClick={removeCount}
                  className="cursor-pointer rounded-l hover:text-vegan bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>malumot yo'q</h1>
      )}
    </>
  );
};
