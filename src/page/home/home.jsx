import React from "react";
import { Banner } from "../../components/banner/banner";
import { Pradactbanner } from "../../components/banner/pradactbanner";
import { TavarBanner } from "../../components/banner/tavarBanner";
import { AksiyaBanner } from "./components/aksiyaBanner";
import { VertikalBanner } from "./components/vertikalBanner";
import { Brand } from "./components/brendCart";
import { useGetCatigory } from "./servese/query/useGetCatigory";
import { useGetCatigorySmartfon } from "./servese/query/useGetCatigorySmartfon";
import { useGetCatigorydiscount } from "./servese/query/useGetCatigorydiscount";
import { useGetCatigorylaptop } from "./servese/query/useGetCatigorylaptop";
import { useGetbrand } from "./servese/query/useGetbrand";
import { useGetTodo } from "./servese/query/useGetTodo";
import img from "../../assets/img/icegif-281.gif";
import { ToastContainer } from "react-toastify";

export const Home = () => {
  const { data } = useGetTodo();
  const { data: pradact, isLoading } = useGetCatigory();
  const { data: smartfonData } = useGetCatigorySmartfon();
  const { data: discountData } = useGetCatigorydiscount();
  const { data: laptopData } = useGetCatigorylaptop();
  const { data: brand } = useGetbrand();
  return (
    <>
      <div className="container">
        {/* hero-Banner :) */}
        <div className="mb-8">
          <Banner>
            {data?.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </Banner>
        </div>
        {/* Pradactbanner :) */}
        <div className="mb-12 ">
          {isLoading ? (
            <img
              className="absolute top-0 left-0  w-[100vw] h-[100vh]"
              src={img}
              alt=""
            />
          ) : (
            <Pradactbanner dataCatigory={pradact} />
          )}
        </div>
        {/* TavarBanner-phone :) */}
        <div className="mb-12">
          <div>
            <h1 className="mb-6 font-semibold text-4xl">
              Смартфоны и планшеты
            </h1>
          </div>

          <TavarBanner catigory={"phone"} dataPradackt={smartfonData} />
          <ToastContainer />
        </div>
      </div>
      <div className=" container"></div>
      {/* Aksiya-Banner :) */}
      <div className="bg-vegan h-[336px] pt-4 mb-8">
        <div className="container">
          <h2 className="text-wayt mb-6 rounded-3xl font-semibold">Акции</h2>
          <div>
            <AksiyaBanner>
              {discountData?.map((item) => (
                <div key={item.id}>
                  <img
                    className="w-[430px] h-[240px]"
                    src={item.img}
                    alt="img"
                  />
                </div>
              ))}
            </AksiyaBanner>
          </div>
        </div>
      </div>
      <div className="container">
        {/* VertikalBanner :) */}
        <div className="flex gap-7 mb-20">
          <div className="max-w-[417px] ">
            <h2 className="text-2xl font-normal mb-8 border-b border-[#EDEDED] pb-3">
              Смартфоны и планшеты
            </h2>
            <div>
              <VertikalBanner category={"phone"} dataProducts={smartfonData} />
            </div>
          </div>

          <div className="max-w-[417px] ">
            <h2 className="text-2xl font-normal mb-8 border-b border-[#EDEDED] pb-3">
              Ноутбуки, планшеты и компьютеры
            </h2>
            <div>
              <VertikalBanner category={"laptop"} dataProducts={laptopData} />
            </div>
          </div>

          <div className="max-w-[417px] ">
            <h2 className="text-2xl font-normal mb-8 border-b border-[#EDEDED] pb-3">
              Смартфоны и планшеты
            </h2>
            <div>
              <VertikalBanner category={"phone"} dataProducts={smartfonData} />
            </div>
          </div>
        </div>
        {/* TavarBanner-phone :) */}
        <div className="mb-16">
          <div>
            <h1 className="mb-6 font-semibold text-4xl">
              Смартфоны и планшеты
            </h1>
          </div>
          <TavarBanner catigory={"phone"} dataPradackt={smartfonData} />
        </div>
        {/* TavarBanner-laptop :) */}
        <div className="mb-16">
          <div>
            <h1 className="mb-6 font-semibold text-4xl">
              Ноутбуки, планшеты и компьютеры
            </h1>
          </div>
          <TavarBanner catigory={"laptop"} dataPradackt={laptopData} />
        </div>
        {/* Brand-list :) */}
        <div className="mb-28">
          <h2 className="mb-6 text-2xl font-semibold">Популярные бренды</h2>
          <div className="flex gap-4 flex-wrap">
            {brand?.map((item) => (
              <Brand key={item.id} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
