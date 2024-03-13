import React from "react";
import { useSelector } from "react-redux";
import { CarzinCard } from "./card/carzinCard";
import img from "../../assets/img/8c7a.gif";

const Carzinka = () => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  return (
    <div>
      <div className=" shadow-2xl bg-wayt">
        <div className=" container ">
          {/* top bar :) */}
          <ul className="flex mb-8 pt-3 items-center pb-3 gap-10">
            <li className="text-base font-normal">Смартфоны и планшеты</li>
            <li className="text-base font-normal">
              Ноутбуки, планшеты и компьютеры
            </li>
            <li className="text-base font-normal">Техника для дома</li>
            <li className="text-base font-normal">Игры и развлечения</li>
            <li className="text-base font-normal">
              Телевизоры, Аудио-видео, Hi-Fi
            </li>
            <li className="text-base font-normal">Фото и видеотехника</li>
            <li className="text-base font-normal">Еще</li>
          </ul>
          {/* carzinka  */}
        </div>
      </div>
      <div className="container">
        <h2 className="text-4xl font-medium mb-6">Корзина</h2>

        <div>
          {!products.length ? (
            <div className=" flex relative justify-center">
              <img
                className=" w-[700px] h-auto object-cover"
                src={img}
                alt="img"
              />

              <h1 className=" absolute top-5 left-auto text-4xl text-[#999999e1] bg-transparent">
                No product
              </h1>
            </div>
          ) : (
            <div>
              {" "}
              {products.map((item) => (
                <CarzinCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carzinka;
