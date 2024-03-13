import React from "react";
import logo from "../../assets/img/logo.png";
import { FasebookIcon } from "../../assets/icons/FasebookIcon";
import { OkIcon } from "../../assets/icons/OkIcon";
import { WkIcon } from "../../assets/icons/WkIcon";
import { YotubeIcon } from "../../assets/icons/YotubeIcon";
import { InstaIcon } from "../../assets/icons/InstaIcon";
import { PaymeyIcon } from "../../assets/icons/PaymeyIcon";
import { UzcartIcon } from "../../assets/icons/UzcartIcon";
import { HumoIcon } from "../../assets/icons/HumoIcon";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F6] pb-9 pt-10">
        <div className="container">
          <div className="flex justify-between pr-14">
            <div>
              <img className="w-[112px] h=[63] mb-4" src={logo} alt="" />
              <p className="text-xl font-medium  hover:text-vegan duration-150 cursor-pointer mb-0.5 ">
                +99 893 374-66-44
              </p>
              <p className="text-sm font-normal  hover:text-vegan duration-150 cursor-pointer mb-3">
                справочная служба
              </p>
              <p className="text-xl font-medium  hover:text-vegan duration-150 cursor-pointer mb-0.5 ">
                +99 890 253-77-53
              </p>
              <p className="text-sm font-normal  hover:text-vegan duration-150 cursor-pointer mb-4">
                интернет-магазин
              </p>
              <p className="text-sm mb-2  hover:text-vegan duration-150 cursor-pointer  font-semibold">
                Оставайтесь на связи
              </p>
              <div className="flex items-center gap-4 ">
                <FasebookIcon />
                <OkIcon />
                <WkIcon />
                <YotubeIcon />
                <InstaIcon />
              </div>
            </div>
            <ul>
              <li className="mb-4 font-normal  hover:text-vegan duration-150 cursor-pointer text-sm">
                Условия обмена и возврата
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Каталог
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                О компании
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Контакты
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Доставка
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Оплата
              </li>
            </ul>
            <ul>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Клиентам
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Личный кабинет
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Блог
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Обратная связь
              </li>
            </ul>
            <ul>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Информация
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Пользовательское соглашение
              </li>
              <li className="mb-4 font-normal hover:text-vegan duration-150 cursor-pointer text-sm">
                Политика конфиденциальности и оферта
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-6   bg-[#EAEAEA] ">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className=" hover:text-vegan duration-150 cursor-pointer text-sm font-normal">
              © 2022 Любое использование контента без письменного разрешения
              запрещено
            </p>
            <div className="flex gap-6 items-center ">
              <PaymeyIcon />
              <UzcartIcon />
              <HumoIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
