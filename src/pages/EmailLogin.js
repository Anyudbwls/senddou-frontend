import React, {useState} from 'react';
import Navbar from "../components/Common/Navbar";
import {Dialog} from '@headlessui/react';
import Modal from "./Modal";

function EmailLogin() {
    let [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <Navbar/>

            <Dialog open={(isOpen)} onClose={() => setIsOpen(false)}>
                <Dialog.Overlay />
               <Modal/>
            </Dialog>



            <div class="bg h-full">
                <th className="line-one "/>
                <th className="line-two"/>
                <tr className="line-three"/>
                <th className="line-four"/>
                <div class="text-center text-3xl font-bold mr-8 py-14  text-white">SENDDOU</div>

                <div class="flex justify-around h-full  ">
                    <div class="mt-20 mb-28">
                        <div class=" text-3xl mt-5 mr-18 text-white">
                            <div class="mr-2 mb-10 "><b>"</b>첫인상의 판단은 <b>3초</b></div>
                            <div class="ml-4 mb-28 ">나의 모든것을 담아보세요<b>"</b></div>
                        </div>

                        <div class="text-3xl font-bold text-white ">
                            <div class=" leading-loose text-center mt-7 ">우리는 보다 더 나은<br/>당신의 미래를 응원합니다.<br/>당신에게 보내요.</div>
                            <div class="float-right mt-3 ">SENDDOU</div>
                        </div>
                    </div>
                    <div class=" border-4 max-w-md px-4 pt-9  rounded-3xl boxline h-1/5 ">
                        <div class="-mt-5 mb-4">
                            <div class="text-center text-4xl font-medium text-white">LOGIN</div>
                            <div class=" textlight font-bold  text-xs text-center flex ml-16 mt-8">샌듀회원
                                <div class="text-gray-300 -mb-8 ">님, 환영합니다! 로그인을 해주세요.</div>
                            </div>

                            <div class="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">


                                <form class=" space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" value="true"/>
                                    <div class=" px-32  ">
                                        <div class=" ">
                                            <label htmlFor="email-address" class="sr-only">email-address</label>
                                            <input id="email-address" name="email" type="email" autoComplete="email" required
                                                   class="shadow rounded-xl relative block -mx-28 pr-32 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                                   placeholder="이메일을 입력해주세요"/>
                                        </div>
                                        <div class="">
                                            <label htmlFor="password" class="sr-only">password</label>
                                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                                   class="shadow rounded-xl relative block -mx-28 pr-32  py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                                   placeholder="비밀번호를 입력해주세요"/>
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-around">
                                        <div class="text-xs mr-16">
                                            <a onClick={() => setIsOpen(true)} class="font-bold text-gray-500 hover:text-gray-200">
                                                비밀번호찾기
                                            </a>
                                        </div>

                                        <div class="text-xs">
                                            <a href="/login/add" class="font-bold text-gray-500 hover:text-gray-200">
                                                회원가입하기
                                            </a>
                                        </div>
                                    </div>

                                    <div class="pt-2 px-5 ">
                                        <button type="submit"
                                                class=" button group relative w-full  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                  </span>
                                            <div className="text-white text-lg">로그인</div>
                                        </button>
                                    </div>

                                    <div class=" flex first-letter:justify-center pt-2  ">
                                        <hr class="w-2/4 mt-3 mr-3"/>
                                        <div className="text-white">or</div>
                                        <hr class="w-2/4 mt-3 ml-3"/>
                                    </div>
                                    <div class="text-lg text-center pb-6 ">
                                        <button class="font-medium text-white hover:text-gray-200">
                                            SNS로 로그인
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default EmailLogin;
