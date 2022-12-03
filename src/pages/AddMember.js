import React from 'react';



function AddMember() {
    return (
        <>

            <div className="bg">
                <th className="line-one "/>
                <th className="line-two"/>
                <tr className="line-three"/>
                <th className="line-four"/>
                <div className="text-center text-3xl font-bold mr-8 py-14  text-white">SENDDOU</div>

                <div className="flex justify-around  ">
                    <div className="mt-20 mb-28">
                        <div className=" text-3xl mt-5 mr-18 text-white">
                            <div className="mr-2 mb-10 "><b>"</b>첫인상의 판단은 <b>3초</b></div>
                            <div className="ml-4 mb-28 ">나의 모든것을 담아보세요<b>"</b></div>
                        </div>

                        <div className="text-3xl font-bold text-white ">
                            <div className=" leading-loose text-center mt-7 ">우리는 보다 더 나은<br/>당신의 미래를 응원합니다.<br/>당신에게
                                보내요.
                            </div>
                            <div className="float-right mt-3 ">SENDDOU</div>
                        </div>
                    </div>
                    <div className="py-14 flex justify-center">
                        <div className=" border-2 w-2/4 px-9 rounded-xl">
                            <div className="flex justify-center py-10 text-2xl ">
                                <div className="text-red-300 font-bold">샌듀</div>
                                <div>의 회원가입을 축하합니다!</div>
                            </div>

                            <div className="flex justify-evenly">

                                <div className="border-3 bg-gray-300 border-gray-100/0 rounded-t-3xl max-h-32">

                                    <div className="shrink-0">

                                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-32 h-fit"
                                             viewBox="0 0 20 20" fill="white">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </div>

                                    <div
                                        className="boder-4 bg-cyan-200 rounded-b-3xl border-gray-100/0 text-center min-w-fit max-h-fit">
                                        <label className="block">
                                            <span className="sr-only"></span>
                                            <input type="file" id="files" className="hidden"/>
                                            <label htmlFor="files" className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:te
              hover:file:bg-violet-100">파일 선택</label>
                                        </label>
                                    </div>
                                </div>

                                <div className="border-l-4 h-1/3 text-lg">
                                    <div className="px-3">닉네임을 설정해 자신을
                                        <div>표현해보세요</div>
                                    </div>
                                </div>
                            </div>
                            <form className=" space-y-6" action="#" method="POST">
                                <div className=" px-56">

                                    <input type="hidden" name="remember" value="true"/>
                                    <div className="  ">
                                        <div className="-mt-14 ">
                                            <label htmlFor="name" className="sr-only">nickname</label>
                                            <input id="nickname" name="name" type="text "
                                                   className="shadow rounded-xl relative block pr-14 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                                   placeholder="닉네임"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-36 mt-9 ">
                                    <label htmlFor="email-address" className="sr-only">email-address</label>
                                    <input id="email-address" name="email" type="email" autoComplete="email" required
                                           className="shadow rounded-xl relative block -mx-24 pr-60 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                           placeholder="이메일을 입력해주세요"/>

                                    <label htmlFor="password" className="sr-only">password</label>
                                    <input id="password" name="password" type="password"
                                           className="shadow rounded-xl relative block -mx-24 pr-60 py-3 mb-5 border  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs"
                                           placeholder="비밀번호를 입력해주세요"/>
                                    <input className="hidden js-password-toggle" id="toggle" type="checkbox"/>

                                </div>
                                <div className="pt-2 px-11 pb-10">
                                    <button type="submit"
                                            className=" button group relative w-full  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3"/>


                                        <div className="text-white text-lg">로그인</div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>



</>


                    );
}
export default AddMember;


