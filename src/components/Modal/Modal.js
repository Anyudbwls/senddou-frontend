import React from "react";
import { white } from 'tailwindcss/colors';
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <>

      <div className="bg-purple-900 rounded-3xl bg-opacity-40 mx-60">
        <Fade bottom>
          <div
              className="pb-24 mt-24 px-40">
            <div className=" md:px-10 sm:px-5">
              <div>
                <Slider {...settings}>
                  <div >
                    <button
                        className="py-20"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                      <img
                          className="imgbox3"
                          src="img/temimg.png"
                          alt=""
                      />
                      <div className="flex justify-between">
                        <h1 className="text-white text-left"><b className="text-blue-300" style={{background:white}}>#</b>애플</h1>

                      <div className="flex justify-right">
                        <h1 className="text-white text-right">
                          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                          </svg>
                          </h1>
                        <h1 className="text-white">59</h1>
                      </div>
                      </div>

                    </button>
                  </div>
                  <div >
                    <button
                        className="py-20"
                        type="button"
                        onClick={() => setShowModal2(true)}
                    >
                      <img
                          className="imgbox3"
                          src="img/temimg.png"
                          alt=""
                      />
                      <div className="flex justify-between">
                        <h1 className="text-white text-left"><b className="text-blue-300" style={{background:white}}>#</b>삼성</h1>
                        <div className="flex justify-right">
                          <h1 className="text-white text-right">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                          </h1>
                          <h1 className="text-white">48</h1>
                        </div>
                      </div>

                    </button>
                  </div>
                  <div>
                    <button
                        className="py-20"
                        type="button"
                        onClick={() => setShowModal3(true)}
                    >
                      <img
                          className="imgbox3"
                          src="img/temimg.png"
                          alt=""
                      />
                      <div className="flex justify-between">
                        <h1 className="text-white text-left"><b className="text-blue-300" style={{background:white}}>#</b>LG</h1>
                        <div className="flex justify-right">
                          <h1 className="text-white text-right">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                          </h1>
                          <h1 className="text-white">32</h1>
                        </div>
                      </div>

                    </button>
                  </div>
                  <div >
                    <button
                        className="py-20"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                      <img
                          className="imgbox3"
                          src="img/temimg.png"
                          alt=""
                      />
                      <div className="flex justify-between">
                        <h1 className="text-white text-left"><b className="text-blue-300" style={{background:white}}>#</b>애플</h1>
                        <div className="flex justify-right">
                          <h1 className="text-white text-right">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                          </h1>
                          <h1 className="text-white">59</h1>
                        </div>
                      </div>

                    </button>
                  </div>
                  <div >
                    <button
                        className="py-20"
                        type="button"
                        onClick={() => setShowModal2(true)}
                    >
                      <img
                          className="imgbox3"
                          src="img/temimg.png"
                          alt=""
                      />
                      <div className="flex justify-between">
                        <h1 className="text-white text-left"><b className="text-blue-300" style={{background:white}}>#</b>삼성</h1>
                        <div className="flex justify-right">
                          <h1 className="text-white text-right">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                          </h1>
                          <h1 className="text-white">48</h1>
                        </div>
                      </div>

                    </button>
                  </div>
                  <div>
                    <button
                        className="py-20"
                        type="button"
                        onClick={() => setShowModal3(true)}
                    >
                      <img
                          className="imgbox3"
                          src="img/temimg.png"
                          alt=""
                      />
                      <div className="flex justify-between">
                        <h1 className="text-white text-left"><b className="text-blue-300" style={{background:white}}>#</b>LG</h1>
                        <div className="flex justify-right">
                          <h1 className="text-white text-right">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                          </h1>
                          <h1 className="text-white">32</h1>
                        </div>
                      </div>

                    </button>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </Fade>
      </div>


      {/*모달*/}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-1xl font-semibold">
                    000님
                  </h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <h3 className="text-2xl font-semibold">
                    애플 지원 이력서
                  </h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex justify-center">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <img
                      className="modal01"
                        src="img/temimg.png"
                      alt=""
                    />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-white text-white active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => alert("공유되었습니다.")}
                  >
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <p className="text-black">59</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModal2 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    000님
                  </h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <h3 className="text-1xl font-semibold">
                    삼성 지원 이력서
                  </h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="text-black"
                    onClick={() => setShowModal2(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex justify-center">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <img
                      className="modal01"
                        src="img/temimg.png"
                      alt=""
                    />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-white text-white active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => alert("공유되었습니다.")}
                  >
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <p className="text-black">48</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModal3 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    000님
                  </h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <h3 className="text-1xl font-semibold">
                    LG 지원 이력서
                  </h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="text-black"
                    onClick={() => setShowModal3(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex justify-center">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <img
                      className="modal01"
                        src="img/temimg.png"
                      alt=""
                    />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-white text-white active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => alert("공유되었습니다.")}
                  >
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <p className="text-black">32</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );


}