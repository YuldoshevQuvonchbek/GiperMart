import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";

import React, { Fragment } from "react";

export const RegesterModal = ({ isOpen, close, children }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-all"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-175 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog open={isOpen} onClose={close}>
        <div className="fixed   inset-0 z-50  flex bg-[#00000050] w-screen items-center justify-center p-4">
          <Dialog.Panel className="p-14 rounded-2xl  shadow-2xl  bg-wayt max-w-[400px]">
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};
