import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleCategory } from "../home/servese/query/useGetSingleCategory";
import { LikeCartIcon } from "../../assets/icons/LikeCartIcon";
import { CartCarzinkaIcon } from "../../assets/icons/CartCarzinkaIcon";

export const Product = () => {
  const { category } = useParams();
  const { data } = useGetSingleCategory(category);
  console.log(data);
  return (
    <div className="container">
      {/* address :) */}
      <div className="flex items-center mb-6 gap-1">
        <p className="text-base font-normal">Главная</p>
        <p className="text-base font-normal"> / </p>
        <p className="text-base font-medium">{category}</p>
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-6">{category}</h1>
        {/* data :) */}
        <div className="flex gap-12 mb-16  justify-center flex-wrap ">
          {data?.map((item) => (
            <div className="relative" key={item.id}>
              <Link to={`/product/${category}/${item.id}`}>
                <div className="mt-6 p-1 w-[214px]">
                  <div className="flex  justify-center mb-4">
                    {item.discount && (
                      <p className="absolute  bg-vegan text-wayt rounded-sm top-1 left-1 pt-0.5 pb-0.5 pl-1 pr-1 text-base font-normal">
                        {item.discount}%
                      </p>
                    )}

                    <img
                      className="w-40 h-40 flex-grow-1  "
                      src={item.img}
                      alt="img"
                    />
                  </div>
                  <div className="h-[140px] flex justify-between flex-col ">
                    <p className="max-w-[177px] text-base font-normal">
                      {item.title}
                    </p>
                    <div>
                      {item.discount && (
                        <p className="line-through mb-3">
                          {(item.price * (100 - item.discount)) / 100} $
                        </p>
                      )}
                      <div className="flex justify-between items-center ">
                        <p className="text-lg font-semibold">{item.price} $</p>
                        <div className="bg-vegan cursor-pointer hover:rounded-lg duration-200  p-[6px]">
                          <CartCarzinkaIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute  hover:text-vegan  cursor-pointer z-10 top-7 right-3">
                <LikeCartIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
