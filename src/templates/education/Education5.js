import React, { useCallback } from 'react';

function Education5({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <div className='text-1xl mt-6'><b className="font-bold">▶ </b>{el.content}</div>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full'>
            <div className={`${display && 'text-4xl'} font-bold p-2`}>학력사항(요약)</div>
            <div className='h-0.5 bg-gray-200'></div>
            <>
                {display ? createElement(data) : <>
                    <div><b>▶</b> 내용</div>
                </>}
            </>
        </div>
    );
}

Education5.defaultProps = {
    data: [{
        "title": "가로형 학력 항목",
        "content": ["내용 입력"]
    }],
};

export default Education5;
