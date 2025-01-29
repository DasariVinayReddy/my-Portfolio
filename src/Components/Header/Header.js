import { Disclosure, Menu } from "@headlessui/react";
import img from "../../asstes/vinay1.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Section } from "./Main/Main2";
import "./header.css";

const navigation = [
  { name: "HOME", href: "#home", current: false },
  { name: "ABOUT ME", href: "#resume", current: false },
  { name: "PORTFOLIO", href: "#Portfolio", current: false },
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
      <Disclosure as="nav" className="Nav fixed z-10 w-full bg-white shadow-md">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between items-center">
                <div className="flex items-center">
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center focus:outline-none">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={img}
                        alt="Profile"
                      />
                      <span className="ml-2 font-bold text-gray-800">DVR</span>
                    </Menu.Button>
                  </Menu>
                </div>
                <div className="hidden md:flex space-x-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-gray-700 hover:text-orange-700 font-medium",
                        item.current ? "text-orange-700" : ""
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="md:hidden">
                  <Disclosure.Button className="p-2 text-gray-700 hover:bg-gray-200 rounded-md">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-white shadow-md">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-orange-700 hover:bg-gray-100"
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
