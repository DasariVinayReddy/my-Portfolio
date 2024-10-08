import { Disclosure, Menu } from "@headlessui/react";
import img from "../../asstes/vinay1.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Section } from "./Main/Main2";
import "./header.css";

const navigation = [
  { name: "HOME", href: "#home", current: true },
  { name: "ABOUT ME", href: "#", current: false },
  { name: "PORTFOLIO", href: "#", current: false },
  { name: "RESUME", href: "#resume", current: false },
  { name: "BLOG", href: "#blog", current: false },
  { name: "CONTACT ME", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  return (
    <>
      <Disclosure as="nav" className="Nav fixed  z-10 w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between ">
                <div className="absolute inset-y-0   right-0 flex items-center  lg:hidden md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="menu00 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center order-1">
                    <Menu as="div" className="relative ml-3">
                      <div className="flex">
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={img}
                            alt=""
                          />
                        </Menu.Button>
                        <span className="dvr">DVR</span>
                      </div>
                    </Menu>
                  </div>
                  <div className="hidden  sm:ml-6  sm:block order-1 ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            "Navbar text-black-300  hover:text-orange-700 rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900"
                        : "text-black hover:text-red-700",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Section />
    </>
  );
};
