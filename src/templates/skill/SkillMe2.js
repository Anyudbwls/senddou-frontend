import React, { useCallback } from 'react';

function SkillMe2({ data, display }) {

  const createContent = useCallback((item) => {
    return item.map(el => <div className='text-s' key={item.id}>{el}</div>);
  }, []);

  const createElement = useCallback((item) => {
    return item.map(el =>
      (<div key={el.id}>
        <div className='font-bold text-1xl mt-1'>{el.title}</div>
        {createContent(el.content)}
      </div>),
    );
  }, [createContent]);

  return (
    data && <div className='h-full  rounded-2xl'>
      <div className={`${display && 'text-4xl'} font-bold rounded-xl bg-blue-200 `}>skill</div>
      <div className='h-0.5 bg-gray-500'></div>
      <>
        {display ? createElement(data) : <>
          <div className='font-bold  p-1'>소제목</div>

          <div className='font-bold  p-1'>내용</div>
        </>}
      </>
    </div>
  );
}

SkillMe2.defaultProps = {
  data: [{
    "title": "java",
    "content": ["java를 이용한 간단한 쇼핑몰 제작 가능"]
  }],
};

export default SkillMe2;
