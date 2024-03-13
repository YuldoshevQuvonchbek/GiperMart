import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleCategory } from "../home/servese/query/useGetSingleCategory";
import { PradactCart } from "../../components/pradactCart/pradactCart";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const { category } = useParams();
  const { data } = useGetSingleCategory(category);
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
            <PradactCart key={item.id} catigory={category} {...item} />
          ))}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Product;
