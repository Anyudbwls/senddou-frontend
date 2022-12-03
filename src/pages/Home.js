import React, {useState} from 'react';
import SimpleSlider from "./SimpleSlider";
import Fade from 'react-reveal/Fade';
import MultipleItems from "./MultipleItems";
import Multibottom from "./Multibottom";
import particlesOptions from "../config/particles";
import Particles from "react-tsparticles";

const Home = () => {
    return (
        <>
            <Particles options={particlesOptions}/>
            <div className="bg-black">
                <div className="text-center text-4xl py-8 text-white font-bold"> SENDDOU</div>
            </div>
            <div className="relative overflow-hidden">
                <div className="home-bg absolute w-full h-full z-0" style={{zIndex: -2}}></div>
                <div className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto mb-24">
                        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl w-2/4 lg:pb-28 xl:pb-32">
                            <svg
                                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            </svg>
                            <div id="particles-js">
                                <Fade bottom>
                                    <main
                                        className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                        <div className="sm:text-center lg:text-left bg-black rounded-3xl">
                                            <h1 className="text-4xl tracking-tight font-extrabold text-indigo-600 sm:text-5xl md:text-6xl">
                                                <span className="block xl:inline">SENDDOU</span> <br/>
                                                <span className="block text-indigo-400 mt-3 text-3xl xl:inline">Simplicity, everything is sent for you.</span>
                                            </h1>
                                            <p className="mt-3  py-2 px-2 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                                이력서는 보다 간편하게 제작되어야 합니다. <br/>누구나 쉽게 자신의 이력서를 완성시켜보세요!<br/>
                                                또한, 당신을 표현할수있는 개성 넘치는 디자인으로 이력서를 장식해보세요. </p>
                                        </div>
                                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                            <div className="rounded-md shadow">
                                                <a href="/login"
                                                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> 시작하기 </a>
                                            </div>
                                        </div>
                                    </main>
                                </Fade>
                            </div>
                        </div>
                        <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img className="h-full w-3/5 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                                 src="/img/01.png"
                                 alt="01.png"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" w-full bg-black p-28 text-white  py-40  ">
                        <Fade bottom>
                            <h1 className=" -mt-24 text-5xl font-bold text-center leading-normal">누구나 자신을 쉽게 소개할 수
                                있습니다.</h1>
                            <p className="text-2xl py-12 text-center ">손쉽게 디자인 템플릿을 통해 이력서를 생성할수 있습니다. 편리하게 이력서를
                                생성해보세요</p>
                        </Fade>
                    </div>
                    <Fade>
                        <div
                            className=" pb-24 -mt-28 px-40">
                            <div className=" border-4 bg-indigo-200 rounded-xl border-none py-10 md:px-10 sm:px-5">
                                <SimpleSlider/>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="-mt-28 mb-10">
                    <div className="relative mt-28">
                        <div className="flex ">
                            <div className="absolute top-36 left-44">
                                <div className="border-none roundOne w-20 h-20 rounded-full"></div>
                            </div>
                            <div className="absolute right-52 ">
                                <div className="border-none roundThree w-32 h-32 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="absolute top-56 left-60">
                                <div className="border-none w-36 h-36 rounded-full roundTwo"></div>
                            </div>
                            <div className="absolute top-32 right-36">
                                <div className="border-none roundFour w-20 h-20 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-64 ">
                        <div className="">
                            <Fade bottom>
                                <div className="py-36">
                                    <h1 className="text-6xl px-20 relative font-bold text-center leading-normal text-white">컴포넌트
                                        기반 디자인</h1>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="sm:flex italic align-text-top font-bold ">
                        <Fade left>
                            <div className="w-6/12">
                                <img className="bg-cover rounded-r-3xl"
                                     src="img/KakaoTalk_20220111_012512711.jpg"
                                     alt="KakaoTalk_20220111_012512711.jpg"/>
                            </div>
                        </Fade>
                        <div className="pl-5 w-6/12 text-white">
                            <h1 className="mt-10 text-5xl mb-12">#drag-drop</h1>
                            <p className="mb-2 md:mb-6 text-2xl px-10 ml-10 border-2 rounded-l-lg  py-32">유저들이 디자인한 컴포넌트를 쉽게 배치하세요<br/>
                                드래그를 이용하여 컴포넌트를 옮길수 있습니다.<br/>
                                컴포넌트의 크기를 자유롭게 조정하여 다양한 이력서의 형식으로 재탄생 시켜보세요!</p>
                        </div>
                    </div>
                    <div className="z-100">
                        <Fade bottom>
                            <div className="py-40">
                                <h1 className="text-5xl font-bold text-center leading-normal py-12 text-white">다양한 디자인의
                                    이력서로<br/>
                                    자신을 소개해보세요.</h1>
                            </div>
                        </Fade>
                    </div>
                    <div className="pb-40 z-100">
                        <Fade right>
                            <div
                                className="z-20 max-w-md max-h-min border-none chOne ml-56 rounded-l-xl mb-8">
                                <MultipleItems/>
                            </div>
                        </Fade>
                        <Fade left>
                            <div
                                className="z-20 max-w-md max-h-min border-none chTwo  rounded-r-xl mr-24 mb-10 py-5">
                                <Multibottom/>
                            </div>
                        </Fade>
                    </div>
                    <div className="absolute  bottom-48 -left-56 bgRound1" style={{zIndex: -1}}></div>
                    <div className="absolute bottom-48 -right-56 border-none bgRound2 z-0" style={{zIndex: -1}}></div>
                </div>
            </div>
        </>
    );
};

export default Home;