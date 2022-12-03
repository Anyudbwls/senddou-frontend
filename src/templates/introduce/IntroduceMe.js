import React, { useCallback } from 'react';

function IntroduceMe({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <div className='font-bold text-2xl mt-6'>{el.title}</div>
                {createContent(el.content)}
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full'>
            <div className={`${display && 'text-4xl'} font-bold p-2`}>Introduce Me</div>
            <div className='h-0.5 bg-gray-200'></div>
            <>
                {display ? createElement(data) : <>
                    <div className='font-bold'>소제목</div>
                    <div>내용</div>
                </>}
            </>
        </div>
    );
}

IntroduceMe.defaultProps = {
    data: [{
        "title": "무엇이든지 해결하고자 하는 마음가짐",
        "content": ["앞에 놓여진 문제는 어떤 방법으로든 해결하고자 하는 마음가짐을 가지고 있습니다.","어떠한 문제에 대해서 다양한 시각으로 관찰하여 좀더 나은 방법으로 해결할 수 있을지 고민합니다."]
    }],
};

export default IntroduceMe;