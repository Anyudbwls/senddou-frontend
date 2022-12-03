import Navbar from "../components/Common/Navbar";
import Header from "../components/EditDesign/Header";
import React from 'react';
import Modal from '../components/Modal/Modal';
import Modal2 from '../components/Modal/Modal2';

/*밑줄*/

const ColoredLine2 = ({ color }) => (
    <hr  style={{
      color: 'mediumpurple',
      backgroundColor: 'mediumpurple',
      height: 5,
      borderColor : 'mediumpurple'
    }}/>
);

const color1 = "#522F63";
const color2 = "#463265";
const color3 = "#FFFFFF";

function Resume() {
  return (
      <>

        <div style={{background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`}}>
          <Header/>

          {/*-----------------------------------------------------------------------------*/}
          {/*추천 이력서*/}

          <Modal/>

          {/*설명*/}
          <div className="flex justify-center py-7 mt-48 mx-auto text-center text-white">
            <div className="w-6/12" style={{zIndex:5}}>
              <h1 className="text-5xl"><b className="text-purple-100">태그</b>를 이용해서</h1>
              &nbsp;&nbsp;
              <h1 className="text-5xl"><b className="text-yellow-100">원하는 디자인</b>의 <b className="text-purple-100">이력서</b>를 찾아보세요!</h1>
            </div>
          </div>

          {/*동그라미*/}
          <div className="flex justify-end mx-auto text-left text-white">
            <div>
              <div className="rounded-full bg-pink-200 h-12 w-12 flex justify-center relative" style={{top:-580, left:-1700,zIndex:3}}></div>
              <div className="rounded-full bg-pink-300 h-20 w-20 flex justify-center relative" style={{top:-400, left:-1600,zIndex:3}}></div>
              <div className="rounded-full bg-pink-300 h-20 w-20 flex justify-center relative" style={{top:-470, left:-1610,zIndex:3,
                background: 'repeating-linear-gradient(-45deg, white, white 1px,#00ff0000 2px, #00ff0000 6px)'}}></div>
            </div>
            <div>
              <div className="rounded-full bg-purple-400 h-20 w-20 flex justify-center relative" style={{top:-580, left:-50,zIndex:3}}></div>
              <div className="rounded-full bg-purple-200 h-12 w-12 flex justify-center relative" style={{top:-420, left:-150,zIndex:3}}></div>
              <div className="rounded-full bg-purple-200 h-12 w-12 flex justify-center relative" style={{top:-460, left:-160,zIndex:3,
                background: 'repeating-linear-gradient(-45deg, white, white 1px,#00ff0000 2px, #00ff0000 6px)'}}></div>
            </div>
          </div>

          <img
              className="absolute h-full"
              style={{top:770, width:2122, height:2060, zIndex:1}}
              src="/img/temimg2.png"
              alt=""
          />

          {/*검색창*/}
          <div className="flex items-center relative mx-80 -mt-24 bg-purple-200 rounded-full"  style={{zIndex:5}}>
            &nbsp;&nbsp;
            <div>
            <span className="flex items-center justify-center w-12 h-12 text-black rounded-full"
            >
              <svg className="w-10 h-10 bg-gray-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
              </svg>
            </span>
            </div>

            <div className="w-full">
              <input
                  type="text"
                  id="inputID"
                  placeholder="검색어를 입력해주세요"
                  className="w-full rounded-full py-6 px-6 font-bold bg-purple-200" />
            </div>

            <div>
              <button type="submit" className="flex items-center justify-center w-12 h-12 text-black rounded-full"
              >
                <svg className="w-10 h-10 bg-gray-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                &nbsp;&nbsp;
              </button>
            </div>
          </div>


          {/*설명*/}
          <div className="flex justify-end py-7 mx-auto text-left text-white mt-24 " >
            <div className="text-5xl w-5/12 py-14"  style={{zIndex:5}}>
              <h1 className="bg-purple-500 skew-x-12 transform bg-opacity-50 py-2 px-2 mx-4">
                <div className="-skew-x-12 transform">
                  <b>샌듀</b>의 <b>유저들</b>에게
                </div>
              </h1>

              <div className="relative py-2 px-8"  style={{zIndex:5}}>
                <h1>가장 <b>인기</b> 있는 <b>이력서</b>에요!</h1>
              </div>
              <ColoredLine2/>
            </div>
          </div>

          {/*사진 슬라이드 쭈르륵*/}
          <Modal2/>

        </div>



      </>
  );
}

export default Resume;