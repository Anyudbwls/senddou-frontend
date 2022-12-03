/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {  MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'SENDDOU', to: '/', current: true },
  { name: '이력서', to: '/resume', current: false },
  // { name: '이력서편집', to: '/edit/resume', current: false },
  { name: '디자인편집', to: '/edit/design', current: false },
  { name: '마이페이지', to: '/my-page', current: false },
  // { name: '로그인', to: '/login', current: false },
  // { name: '마이페이지', to: '/my-page', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (

          <div className="">
            <Disclosure as="nav" >
              {({ open }) => (

            <div className="max-w-3/4 mx-auto text-white ">
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative  pt-3 flex justify-between items-center justify-between h-16">
                  <div className=" absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                          <XIcon class="block h-6 w-6" aria-hidden="true"/>
                      ) : (
                          <MenuIcon class="block h-6 w-6" aria-hidden="true"/>
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1  flex items-center justify-center sm:items-stretch sm:justify-start">


                    <div className=" sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <Link //senddou 홈
                                key={item.name}
                                to={item.to}
                                class={classNames(
                                    item.current
                                        ? 'font-bold text-2xl text-white'
                                        : 'text-gray-300 ',
                                    'px-3 py-2 rounded-md text-sm font-medium',
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                        ))}
                      </div>
                        <div className="absolute border-t-4 w-36 -ml-6"></div>
                    </div>
                  </div>
                  <div
                      className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                    {/* Profile dropdown */}
                    <Menu as="div" class="ml-3 relative">
                      <div>
                        <Menu.Button
                            class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                              className="h-8 w-8 rounded-full" aria-hidden="true"
                              src="http://k.kakaocdn.net/dn/boUztd/btrpeIn6Ffj/0WdzLHkHFaitg4vBjjfPp0/img_110x110.jpg"
                              alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                            class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({active}) => (
                                <link
                                    to="/login"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                >
                                  Your Profile
                                </link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({active}) => (
                                <link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                >
                                  Settings
                                </link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({active}) => (
                                <link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                >
                                  Sign out
                                </link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

              </div>

              <Disclosure.Panel class="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                      <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          class={classNames(
                              item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'block px-3 py-2 rounded-md text-base font-medium',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>


            )}
    </Disclosure>
          </div>
  );
}
