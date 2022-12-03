import React, { useCallback } from 'react';

function Competition3({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <div className='bg-blue-100 rounded-2xl'><br></br></div>
                <div className='font-style: italic font-bold p-2'>{createContent(el.content)}</div>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full bg-blue-100 rounded-2xl'>
            <div className={`${display && 'text-4xl'} font-bold rounded-2xl bg-blue-300 p-2`}>Competitions</div>

            <>
                {display ? createElement(data) : <>
                    <div className='font-bold font-style: italic p-2'>Contents</div>

                </>}
            </>
        </div>
    );
}

Competition3.defaultProps = {
    data: [{
        "content": ["기울고 진한 글씨체"]
    }],
};

export default Competition3;
