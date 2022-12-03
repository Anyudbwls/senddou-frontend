import React, { useCallback } from 'react';

function Competition1({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <div><br></br></div>
                <div className=''><b>-</b>{el.content}</div>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full p-1'>
            <div className={`${display && 'text-4xl'} font-bold`}>공모전 참가이력</div>

            <>
                {display ? createElement(data) : <>
                    <div>기본형</div>

                </>}
            </>
        </div>
    );
}

Competition1.defaultProps = {
    data: [{
        "title": "제목",
        "content": ["기본형"]
    }],
};

export default Competition1;
