import React, { useCallback } from 'react';

function Competition2({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <div><br></br></div>
                <div className='w-2/3 float-right'><br></br>
                <div className='font-style: italic'>{createContent(el.content)}</div>
                </div>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className=''>
            <div className={`${display && 'text-4xl'} font-bold pt-11 float-left`}>공모전 참가이력</div>

            <>
                {display ? createElement(data) : <>
                    <div className='font-style: italic'>내용</div>

                </>}
            </>
        </div>
    );
}

Competition2.defaultProps = {
    data: [{
        "content": ["기울어진 글씨체"]
    }],
};

export default Competition2;
