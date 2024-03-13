import React from "react";
import { useParams } from "react-router-dom";
import { useGetALLPadact } from "../home/servese/query/useGetALLPadact";
import { StarIcon } from "../../assets/icons/StarIcon";
import { LikeIcon } from "../../assets/icons/LikeIcon";
export const ShopPaje = () => {
  const { id, category } = useParams();

  const { data } = useGetALLPadact(category, id);

  return (
    <div className="container">
      <div className=" mb-8">
        <div className="pt-3 mb-3 pb-3">
          <ul className="flex items-center gap-10">
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
        </div>
        {/* name :) */}
        <div>
          <h1 className="text-4xl  font-semibold mb-4">{data?.title}</h1>
          <div className="flex items-center justify-between border-b-2 pb-4 border-[#EDEDED] ">
            <div className="flex items-center ">
              <div className="mr-3">
                <StarIcon />
              </div>

              <p className="mr-9 text-[#76BC21]">(0)</p>
              <LikeIcon />
              <p className="text-base ml-3 font-normal">В избранное</p>
            </div>
            <div className="flex items-center ">
              <p className="text-[#999999] font-normal text-base">арт.</p>
              <p className=" font-normal text-base">14979</p>
            </div>
          </div>
        </div>
        <div className=" flex mt-12 mb-8 justify-between ">
          {/* img :) */}
          <div>
            <img className=" w-[435px] h-[435px]" src={data?.img} alt="img" />
          </div>
          {/* Характеристики :) */}
          <div>
            <p className="text-xl  mb-2 font-medium">Объем памяти</p>
            <p className="pt-2 border-4 inline-block border-[#E44542] pb-2 text-base mb-12 font-normal pl-3 pr-3 ">
              {data?.memory ? data?.memory : "no reference"}
            </p>
            <p className="text-xl mb-4  font-medium">Характеристики</p>
            <div className=" mb-3 flex items-center gap-2 ">
              <p className="text-xl font-normal  text-[#999999]">Цвет:</p>
              <p className="text-xl font-normal">
                {data?.color ? data?.color : "no reference"}
              </p>
              {/*        {data?.price ? data?.price : "no reference"} */}
            </div>
            <div className=" mb-3 flex items-center gap-2 ">
              <p className="text-xl font-normal  text-[#999999]">экран:</p>
              <p className="text-xl font-normal">64/12/12</p>
            </div>
            <div className=" mb-3 flex items-center gap-2 ">
              <p className="text-xl font-normal  text-[#999999]">
                оперативная память:
              </p>
              <p className="text-xl font-normal">
                {data?.ram ? data?.ram : "no reference"}
              </p>
            </div>
            <div className=" mb-3 flex items-center gap-2 ">
              <p className="text-xl font-normal  text-[#999999]">память:</p>
              <p className="text-xl font-normal">
                {data?.memory ? data?.memory : "no reference"}
              </p>
            </div>
            <div className=" mb-3 flex items-center gap-2 ">
              <p className="text-xl font-normal  text-[#999999]">4 камеры:</p>
              <p className="text-xl font-normal">64/12/12</p>
            </div>
            <div className=" mb-3 flex items-center gap-2 ">
              <p className="text-xl font-normal  text-[#999999]">
                беспроводные интерфейсы:
              </p>
              <p className="text-xl font-normal">NFC, Wi-Fi, Bluetooth 5.0</p>
            </div>
            <p className="text-base font-medium text-[#E44542]">
              Все характеристики
            </p>
          </div>
          {/* price :) */}
          <div className=" w-full inline-block  max-w-[340px] ">
            <div className="border-2 border-[#EDEDED] p-3">
              <div className="flex mb-2 items-center justify-between">
                {data?.discount && (
                  <p className=" text-xl font-medium text-[#999999] line-through mb-3">
                    {(data?.price * (100 - data?.discount)) / 100} $
                  </p>
                )}
                {data?.discount && (
                  <p className="  bg-vegan text-wayt rounded-sm  pt-0.5 pb-0.5 pl-1 pr-1 text-base font-normal">
                    {data?.discount}%
                  </p>
                )}
              </div>
              <p className="mb-5   font-semibold text-4xl">{data?.price} $</p>
              <button className="bg-vegan pt-3 pb-3 w-full text-wayt text-base  font-normal">
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" text-2xl font-medium mb-9">Характеристики</h2>
        <div className="mb-12 flex items-center justify-between">
          <div className="max-w-[580px]">
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">Цвет</p>
              <p className=" w-[390px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">
                {data?.color ? data?.color : "no reference"}
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">оперативная память</p>
              <p className=" w-[286px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">
                {data?.ram ? data?.ram : "no reference"}
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">4 камеры</p>
              <p className=" w-[357px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">64/12/12</p>
            </div>
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">интернет</p>
              <p className=" w-[362px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">5G LTE</p>
            </div>
          </div>
          <div className="max-w-[680px]">
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">экран</p>
              <p className=" w-[383px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">
                6.2"/2400x1080 Пикс
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">память</p>
              <p className=" w-[378px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">
                {data?.memory ? data?.memory : "no reference"}
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base font-normal ">беспроводные интерфейсы</p>
              <p className=" w-[231px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">
                NFC, Wi-Fi, Bluetooth 5.0
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-4  w-full">
              <p className="text-base  font-normal ">вес</p>
              <p className=" w-[400px] border-b-2 border-[#999999]"></p>
              <p className="text-xl  flex  text-end font-normal">205 г</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
