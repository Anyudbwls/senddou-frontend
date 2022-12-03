import React, { useCallback } from 'react';

function Competition5({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id} className='bg-yellow-500 rounded-lg'>
                <div className='font-bold text-2xl mt-6 p-2'>{el.title} : {el.content}</div>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full bg-yellow-500 rounded-2xl'>
            <div className={`${display && 'text-4xl'} font-bold bg-yellow-200 rounded-xl py-1 pl-1`}>Competitions</div>

            <>
                {display ? createElement(data) : <>
                    <div className='font-bold bg-yellow-500 rounded-lg p-2'>Day : Contents</div>

                </>}
            </>
        </div>
    );
}

Competition5.defaultProps = {
    data: [{
        "content": ["오른쪽 정렬"]
    }],
};

export default Competition5;
