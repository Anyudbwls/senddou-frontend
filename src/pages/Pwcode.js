import React, {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";


function Pwcode(){
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    return(
        <>
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
                            <div class="border-b-4 w-14 text-center ml-40 mb-14 border-slate-400"></div>
                            <form class=" space-y-6" action="#" method="POST">

                                <input type="hidden" name="remember" value="true"/>
                                <div class=" px-2  ">
                                    <div class=" ">
                                        <label htmlFor="pw-code" class="sr-only">pw-code</label>
                                        <input id="pw-code" name="code" type="one-time-code" autoComplete="one-time-code" required class="shadow rounded-xl relative pl-4 block pr-56 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs" placeholder="인증코드를 입력해주세요"/>
                                    </div>


                                    <div class=" ml-16 mt-16">
                                        <button type="submit" class=" button group relative w-60 flex justify-center mb-12 text-white py-3  border border-transparent font-medium rounded-xl hover:border-cyan-700 ">
                                            <span class=" "> </span>
                                            <div className=" text-lg">확인</div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
export default Pwcode