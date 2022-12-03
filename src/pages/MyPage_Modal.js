import React from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MyPage_Modal() {
    const [MyOpen, setMyOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={MyOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setMyOpen}>
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
                        <div class="inline-block bg rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-auto">
                            <div class="pt-5 pb-4 sm:p-6 sm:pb-4 border-2 border-gray-100/0 bg-gray-700 rounded-xl">
                                <div class="">

                                    <div class="mt-3 sm:mt-0 sm:ml-4 ">
                                        <h3 class=" leading-6 font-medium text-white mb-10 text-3xl mt-6"
                                            id="modal-title">
                                            공유 되었습니다!
                                        </h3>
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

