import React, {useCallback, useState} from 'react';
import {Dialog} from "@headlessui/react";
import Header from "../components/EditDesign/Header";
import Modal from "./Modal";


function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState("sns");

    const getCurrentPage = useCallback(() => {
        console.log(page);
        switch (page) {
            case "sns":
                return <SNSBox/>;
            case "email":
                return <EmailBox/>;
            case "signup":
                return <AddBox/>;
        }
    }, [page]);
    const SNSBox = () => {
        return (<div className=" border-4 max-w-md px-4 pt-9  rounded-3xl boxline h-1/5 ">
            <div className="space-y-6 -mt-5 px-2">
                <div className="mb-4">
                    <div className="text-center text-4xl font-medium text-white">LOGIN</div>
                    < div className="text-gray-300 text-xs  text-center flex ml-20 mt-3">
                        아직 회원이 아니신가요?
                        <button onClick={() => setPage("signup")} className="text-xs text-blue-400 ml-2 ">회원가입하기</button>
                    </div>
                </div>
                <div className=" px-11 py-4">
                    <div
                        className=" kakao border-1 border-indigo-500/0 rounded-xl flex w-64 mb-5 h-10 filter drop-shadow-lg ">
                        <button onClick={() => window.open('https://kauth.kakao.com/oauth/authorize?client_id=bb778b6314bd58c77aee20d5565a47e0&redirect_uri=http://localhost:8080/auth/kakao/callback&response_type=code', '_blank')}>
                            <img className="  h-10 rounded-xl" alt="kakao_login_large_narrow.png"
                                 src="img/kakao_login_large_wide (2).png"/> /*카카오로그인*/
                        </button>

                    </div>
                    <divk
                        className=" border-1 border-indigo-500/0 rounded-xl justify-center flex w-64 mb-5 h-10 filter drop-shadow-lg naver ">
                        <div><img className="absolute left-0 h-10 rounded-xl" alt="btnG_아이콘사각.png"
                                  src="img/btnG_아이콘사각.png"/>
                        </div>
                        <div className=" text-sm  mt-2  text-zinc-700 pl-5">네이버 로그인</div>
                    </divk>
                    <div
                        className=" google  border-1 border-indigo-500/0 rounded-xl  justify-center flex w-64 mb-5 h-10 filter drop-shadow-lg">
                        <img className="  absolute  left-0 h-10 rounded-2xl" alt="btn_google_light_focus_ios@3x.png"
                             src="img/btn_google_light_normal_xxxhdpi.9.png"/>
                        <div className=" text-sm  mt-2 text-zinc-700 pl-5">구글 로그인</div>
                    </div>

                    <div className="flex al justify-center mt-10">
                        <hr className="w-14 mt-3 mr-3"/>
                        <div className="text-white">or</div>
                        <hr className="w-14 mt-3 ml-3"/>
                    </div>

                    <div
                        className="border-1 mt-12 border-indigo-500/0 rounded-xl flex bg-google mb-2 w-64 h-10 filter google drop-shadow-lg justify-center">
                        <i className="fas fa-envelope ml-2 mr-2 "></i>
                        <div className="stroke-current text-center flex  ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-9  ml-1 w-12 mr-5 text-red-500 absolute left-0 " fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                            </svg>
                            <button onClick={() => setPage("email")}
                                    className=" text-sm  mt-2 text-zinc-700 ">
                                이메일 로그인
                            </button>
                        </div>
                    </div>
                    <div className="float-right text-xs mb-5 text-gray-300 text-center mt-3">
                        <a onClick={() => setIsOpen(true)} className="font-bold text-gray-500 hover:text-gray-200">
                            비밀번호찾기
                        </a>
                    </div>
                </div>
            </div>
        </div>);
    }
    const EmailBox = () => {
        return (<div className=" border-4 max-w-md px-4 pt-9  rounded-3xl boxline h-1/5 ">
                <div className="-mt-5 mb-4">
                    <div className="text-center text-4xl font-medium text-white">LOGIN</div>
                    <div className=" textlight font-bold  text-xs text-center flex ml-16 mt-8">샌듀회원
                        <div className="text-gray-300 -mb-8 ">님, 환영합니다! 로그인을 해주세요.</div>
                    </div>

                    <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">


                        <form className=" space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true"/>
                            <div className=" px-32  ">
                                <div className=" ">
                                    <label htmlFor="email-address" className="sr-only">email-address</label>
                                    <input id="email-address" name="email" type="email" autoComplete="email" required
                                           className="shadow rounded-xl relative block -mx-28 pr-32 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                           placeholder="이메일을 입력해주세요"/>
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="sr-only">password</label>
                                    <input id="password" name="password" type="password" autoComplete="current-password"
                                           required
                                           className="shadow rounded-xl relative block -mx-28 pr-32  py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                           placeholder="비밀번호를 입력해주세요"/>
                                </div>
                            </div>

                            <div className="flex items-center justify-around">
                                <div className="text-xs mr-16">
                                    <a onClick={() => setIsOpen(true)}
                                       className="font-bold text-gray-500 hover:text-gray-200">
                                        비밀번호찾기
                                    </a>
                                </div>

                                <div className="text-xs">
                                    <button onClick={() => setPage("signup")}
                                            className="font-bold text-gray-500 hover:text-sgray-200">
                                        회원가입하기
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2 px-5 ">
                                <button type="submit"
                                        className=" button group relative w-full  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                  </span>
                                    <div className="text-white text-lg">로그인</div>
                                </button>
                            </div>

                            <div className="flex al justify-center mt-10">
                                <hr className="w-14 mt-3 mr-3"/>
                                <div className="text-white">or</div>
                                <hr className="w-14 mt-3 ml-3"/>
                            </div>

                            <div className="text-lg text-center pb-5 ">
                                <div onClick={() => setPage("sns")}
                                     className="font-medium text-white hover:text-gray-200">
                                    SNS로 로그인
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        );
    }
    const AddBox = () => {
        return (
            <div class=" border-4 max-w-md px-2 pt-9  rounded-3xl boxline h-1/5 ">
                <div class= "grid justify-center">
                    <div class=" flex justify-center py-3 text-2xl ">
                        <div class="text-red-300 font-bold">샌듀</div>
                        <div className="text-white">의 회원가입을 축하합니다!</div>
                    </div>
                    <div class="flex justify-center text-white">
                        <div>이미 회원이신가요? </div>
                        <button onClick={() => setPage("email")} class="ml-2 text-cyan-400">로그인</button>
                    </div>

                    <div class="flex justify-center mt-9">

                        <div className="border-3 bg-gray-300 border-gray-100/0 rounded-t-xl h-5/6">

                            <div className="shrink-0">

                                <svg xmlns="http://www.w3.org/2000/svg" className=" w-20 h-1/2"
                                    viewBox="0 0 20 20" fill="white">
                                <path fill-rule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>

                        <div
                            className="boder-4  rounded-b-xl button border-gray-100/0 text-center min-w-fit max-h-fit">
                            <label className="block">
                                <span className="sr-only"></span>
                                <input type="file" id="files" className="hidden"/>
                                <label htmlFor="files" className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:te
              hover:file:bg-violet-100 ">파일 선택</label>
                            </label>
                        </div>

                    </div>

                        <div class="border-l-4 h-2/4 text-base ml-5 text-white">
                            <div class="px-3">닉네임을 설정해</div>
                            <div class="pl-3">자신을 표현해보세요</div>
                        </div>
                    </div>
                </div>

                <div class="-mt-28">
                    <form class=" space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true"/>
                        <div class=" pl-40 ">
                            <div class="mt-20">
                                <label htmlFor="name" class="sr-only">nickname</label>
                                <input id="nickname" name="name" type="text "
                                       class="shadow rounded-xl relative block pr-8 py-3 mb-4 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                       placeholder="닉네임"/>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="px-36 mt-2 ">
                    <label htmlFor="email-address" class="sr-only">email-address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required
                           class="shadow rounded-xl relative block -mx-24 pr-36 py-3 mb-3 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                           placeholder="이메일을 입력해주세요"/>

                    <label htmlFor="password" class="sr-only">password</label>
                    <input id="password" name="password" type="password"
                           class="shadow rounded-xl relative block -mx-24 pr-36 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                           placeholder="비밀번호를 입력해주세요"/>
                    <input class="hidden js-password-toggle" id="toggle" type="checkbox" />

                </div>
                <div class="pt-2 px-11 pb-10 ">
                    <button type="submit"class=" button group relative w-full  flex justify-center py-3 px-4 text-sm rounded-xl hover:bg-indigo-400 bg-cyan-300">
                 <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                   </span>

                        <div className="text-white text-lg">로그인</div>
                    </button>
                </div>
            </div>
    );
    }

    return (
        <div className="bg h-auto overflow-hidden">
            <Header/>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Overlay/>
                <Modal/>
            </Dialog>
            <th className="line-one "/>
            <th className="line-two"/>
            <tr className="line-three"/>
            <th className="line-four"/>
            <div className="text-center text-3xl font-bold mr-8 py-14  text-white">SENDDOU</div>
            <div className="flex justify-around  ">
                <div className="mt-20 mb-28 ">
                    <div className=" text-3xl mt-5 mr-18 text-white">
                        <div className="mr-2 mb-10 "><b>"</b>첫인상의 판단은 <b>3초</b></div>
                        <div className="ml-4 mb-28 ">나의 모든것을 담아보세요<b>"</b></div>
                    </div>
                    <div className="text-3xl font-bold text-white ">
                        <div className=" leading-loose text-center mt-7 ">우리는 보다 더 나은<br/>당신의 미래를 응원합니다.<br/>당신에게 보내요.
                        </div>
                        <div className="float-right mt-3 ">SENDDOU</div>
                    </div>
                </div>

                {getCurrentPage()}

            </div>
        </div>
    );
}

export default Login;
