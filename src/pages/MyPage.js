import Header from '../components/EditDesign/Header';
import React, {useState} from 'react';
import {Dialog} from "@headlessui/react";
import MyPage_Modal from "./MyPage_Modal";





function MyPage() {
    const [isModal, setIsModal] = useState(false);
    const [click, setClick] = useState(false);

    const MyWriteListBox = () =>{
        return (
            <div className="grid relative">
                <div className="flex justify-center rounded-xl py-10 mt-10 max-w-7xl">
                    <div className="-ml-44 mr-14  flex flex-col mt-3 font-bold">
                        <button onClick={() => setClick(true)}
                            className="border-2 bg-white text-black hover:bg-gray-300  border-white rounded-3xl mb-4 py-1 px-3 ">
                            이력서 관리
                        </button>
                        <button onClick={() => setClick(true)}
                            className="border-2 hover:bg-white hover:  hover:text-black border-white rounded-3xl mb-4 py-1 px-3 text-white">
                            글 목록
                        </button>
                    </div>
                    <div className="bg-white rounded-lg w-1/2">
                        <ul className="divide-gray-300">
                            <li className="p-4 hover:bg-gray-50 cursor-pointer flex">
                                <svg onClick={() => setIsModal(true)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                A기업 이력서
                            </li>
                            <li className="p-4 hover:bg-gray-50 cursor-pointer flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                B기업 이력서
                            </li>
                            <li className="p-4 hover:bg-gray-50 cursor-pointer flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                C기업 이력서
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
        };
    const MypageBox = () => {
        return(
            <div className="grid relative">
                <div className="flex justify-center rounded-xl py-10 mt-10 max-w-7xl">
                    <div className="-ml-44 mr-14  flex flex-col mt-3 font-bold">
                        <button  onClick={() => setClick(false)}
                                 className="border-2 hover:bg-white hover:  hover:text-black border-white rounded-3xl mb-4 py-1 px-3 text-white">
                            이력서 관리
                        </button>
                        <button onClick={() => setClick(false)}
                                className="border-2 bg-white text-black hover:bg-gray-300  border-white rounded-3xl mb-4 py-1 px-3 ">
                            글 목록
                        </button>
                    </div>
                    <div className="bg-white rounded-lg w-1/2">
                        <ul className="divide-gray-300">
                            <li className="p-4 hover:bg-gray-50 cursor-pointer flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                자기소개
                            </li>
                            <li className="p-4 hover:bg-gray-50 cursor-pointer flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                프로젝트
                            </li>
                            <li className="p-4 hover:bg-gray-50 cursor-pointer flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                내 정보
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        )
    }

    return (


    <>
        <Dialog open={isModal} onClose={() => setIsModal(false)}>
            <Dialog.Overlay/>
            <MyPage_Modal/>
        </Dialog>
        <div className='header'>
            <Header/>
        </div>

        <div className=" bg-ver2  h-screen overflow-hidden"   >
            <div className="py-12"  ></div>
            <div className='absolute -mt-28 '>
                <img className=' h-screen w-screen '
                     src="img/final_my page bgimg.png" alt="final_my page bgimg.png" />
            </div>
            <div className="mt-10" >

                <div className=" relative text-white grid justify-items-center text-4xl justify-self-center">
                    <div className="pb-10">$$님,</div>
                    <div><b>샌듀</b>와 함께</div>
                    <div>자신을 <b>소개</b>해보세요.</div>
                </div>


                {click ? <MypageBox/> : <MyWriteListBox/>}

            </div>
        </div>



</>
  );
}

export default MyPage;
