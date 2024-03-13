import React from "react";
import { TelIcon } from "../../assets/icons/TelIcon";
import logo from "../../assets/img/logo.png";
import { UserIcom } from "../../assets/icons/UserIcom";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { CarzimkaIcom } from "../../assets/icons/CarzimkaIcom";
import { BurgerIcon } from "../../assets/icons/BurgerIcon";
import { ZoomIcom } from "../../assets/icons/ZoomIcom";
import { Modal } from "../../components/modal/modal";
import { useModal } from "../../hook/useModal";
import { useGetCatigory } from "../../page/home/servese/query/useGetCatigory";
import { Link } from "react-router-dom";
import useDebounce from "../../hook/useDebans";
import { useGetALLdata } from "../../page/home/servese/query/useGetAlldata";
import { RegesterModal } from "../../components/modal/regesterModal";
import { request } from "../../config/request";
import { saveState, loadState } from "../../config/store";
import { Regester } from "./components/regester";
import { Login } from "./components/login";
export const Header = () => {
  const [value, setValue] = React.useState("");
  const search = useDebounce(value);
  const { data } = useGetALLdata(search);
  const { isOpen, setIsopen, close, open } = useModal();
  const { toggle, isOpen: isOpen2 } = useModal();
  const {
    isOpen: modalisopen,
    setIsopen: modalOpen,
    close: isclose,
    open: isopne,
  } = useModal();
  const { data: pradact } = useGetCatigory();
  const user = loadState("user");

  return (
    <div>
      <Modal isOpen={isOpen} close={close}>
        <div className=" flex flex-wrap gap-10">
          {pradact?.map((item) => (
            <Link
              to={`product/${item.datakey}`}
              onClick={() => setIsopen(false)}
              key={item.id}
            >
              <div className=" flex  gap-4 items-center rounded w-[269px] h-auto  pl-4 pr-4 pt-[14px] pb-[14px] bg-[#F6F6F6]">
                <div>
                  <img className="w-24 h-24" src={item.img} alt="img" />
                </div>
                <div className="max-w-[97px]">
                  <h1 className="text-base font-medium">{item.title}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Modal>
      {/* Regester-Modal :) */}
      <RegesterModal isOpen={modalisopen} close={isclose}>
        {!isOpen2 ? (
          <Regester changeModal={toggle} closeModal={close} />
        ) : (
          <Login close={isclose} />
        )}
        <button
          className="pt-2 border pb-2 w-full justify-center"
          onClick={toggle}
        >
          {isOpen2 ? "Regester" : "Login"}
        </button>
      </RegesterModal>

      <div className=" bg-emptiness">
        <div className="container pt-2 pb-2 flex justify-end items-center">
          <div className="flex items-center  gap-6">
            <a
              className="text-base font-normal hover:text-vegan  duration-200"
              href="#"
            >
              Доставка и оплата
            </a>
            <a
              className="text-base font-normal hover:text-vegan  duration-200"
              href="#"
            >
              Пункты выдачи
            </a>
            <a
              className="text-base font-normal hover:text-vegan  duration-200"
              href="#"
            >
              Поддержка
            </a>
            <div className="flex items-center gap-5">
              <div className=" hover:text-vegan   duration-200">
                <TelIcon />
              </div>
              <a
                className="text-base font-normal hover:text-vegan  duration-200"
                href="#"
              >
                +998 90 253 77 53
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="flex relative items-center justify-between">
          {/* logo :) */}
          <a href="#">
            <img className=" w-[88px] h-[50px]" src={logo} alt="logo" />
          </a>
          <div className="flex items-center gap-8 ">
            {/* category-btn :) */}
            <button
              onClick={() => open()}
              className="flex items-center bg-vegan cursor-pointer  pt-[11px] pb-[11px] pr-11 pl-4  gap-4  "
            >
              <BurgerIcon />
              <p className="text-xl text-wayt font-normal">Каталог</p>
            </button>
            {/* Search input :) */}
            <div className="w-[673px]  relative">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border placeholder:text-[#857372] outline-vegan placeholder:text-base w-[100%] border-[#857372] p-3"
                placeholder="Поиск "
                type="text"
              />
              <button className="absolute hover:text-vegan    duration-200  right-4 top-4">
                <ZoomIcom />
              </button>
            </div>
          </div>
          {/* modal Search :) */}
          <div className=" absolute bg-wayt w-full  max-w-[673px] top-[50px] z-50 left-[381px]">
            {value.length >= 2 ? (
              <div className="pt-3 pb-3 pl-5 pr-5 shadow-2xl h-[400px] overflow-y-scroll  rounded-br-lg rounded-bl-lg">
                {data?.map((item) => (
                  <Link
                    to={`product/${item.category}/${item.id}`}
                    onClick={(e) => setValue(e.target.reset())}
                    key={item.id}
                  >
                    <div className=" mb-1 flex border-vegan hover:transition duration-300   hover:scale-105  border rounded  pt-1 pb-1 pl-2 pr-2 justify-between  items-center">
                      <div className=" flex gap-1  items-center">
                        <img className="w-9 h-9" src={item.img} alt="" />
                        <p>{item.title}</p>
                      </div>

                      <div>
                        <p className=" bg-vegan rounded-md pt-0.5 pb-0.5 pl-1 text-wayt pr-1">
                          {item.price} $
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center  gap-8">
            <div className="items-center flex-col   flex  gap-1">
              {!user ? (
                <button
                  onClick={() => isopne()}
                  className=" hover:text-vegan    duration-200"
                >
                  <UserIcom />
                </button>
              ) : (
                <Link to={"/user"}>
                  <h2> User</h2>
                </Link>
              )}
              <p className="text-base font-normal ">Войти</p>
            </div>
            <div className="items-center flex-col flex  gap-1">
              <div className="hover:text-vegan  duration-200">
                <LikeIcon />
              </div>
              <p className="text-base font-normal ">Избранное</p>
            </div>
            <div className="items-center flex-col flex  gap-1">
              <Link to={"carzinka"}>
                <div className="hover:text-vegan   duration-200">
                  <CarzimkaIcom />
                </div>
              </Link>
              <p className="text-base font-normal ">Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
