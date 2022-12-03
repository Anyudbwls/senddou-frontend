import React, { useCallback } from 'react';

function SkillMe1({ data, display }) {

  const createContent = useCallback((item) => {
    return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
  }, []);

  const createElement = useCallback((item) => {
    return item.map(el =>
      (<div key={el.id}>
        <div className='font-bold text-1xl mt-3'>{el.title}</div>
        {createContent(el.content)}
      </div>),
    );
  }, [createContent]);

  return (
    data && <div className='h-full  bg-pink-50 rounded-2xl'>
      <div className={`${display && 'text-4xl'} font-bold  bg-red-100 rounded-xl py-1 pl-1`}>skill</div>
      <div className='h-0.5 bg-gray-500'></div>
      <>
        {display ? createElement(data) : <>
          <div className='font-bold p-2'>소제목</div>

          <div>내용</div>
        </>}
      </>
    </div>
  );
}

SkillMe1.defaultProps = {
  data: [{
    "title": "java",
    "content": ["java를 이용한 간단한 쇼핑몰 제작 가능"]
  }],
};

export default SkillMe1;
