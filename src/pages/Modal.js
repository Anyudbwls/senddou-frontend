import React from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal() {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <div
                        className="inline-block bg rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-auto">
                        <div className="pt-5 pb-4 sm:p-6 sm:pb-4 border-4 border-white bg-gray-700 rounded-2xl">
                            <div className="">

                                <div className="mt-3 sm:mt-0 sm:ml-4 ">
                                    <h3 className=" leading-6 font-medium text-white mb-10 text-3xl mt-6"
                                        id="modal-title">
                                        PW 찾기
                                    </h3>
                                    <div className=" ">
                                        <div className="mb-9 text-xl text-white">가입하신 이메일을 입력해주세요.</div>


                                        <div className="border-b-4 w-14 text-center ml-40 mb-14 border-slate-400"></div>
                                        <form className=" space-y-6" action="#" method="POST">

                                            <input type="hidden" name="remember" value="true"/>
                                            <div className=" px-2  ">
                                                <div className=" ">
                                                    <label htmlFor="email-address"
                                                           className="sr-only">email-address</label>
                                                    <input id="email-address" name="email" type="email"
                                                           autoComplete="email" required
                                                           className="shadow rounded-xl relative pl-4 block pr-56 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                                           placeholder="이메일을 입력해주세요"/>
                                                </div>


                                                <div className=" ml-16 mt-16">
                                                    <button type="submit"
                                                            className=" button group relative w-60 mb-14 flex justify-center text-white py-3  border border-transparent font-medium rounded-xl hover:border-cyan-700 ">
                                                        <span className=" "> </span>
                                                        <div className=" text-lg"><a href="/login/"></a>확인</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

