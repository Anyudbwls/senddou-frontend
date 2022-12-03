import React, { useCallback } from 'react';

function Competition4({ data, display }) {

    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <div className='font-bold text-2xl mt-6 bg-red-300'>{el.title}</div>
                <div className='font-bold'>∎{el.content}</div>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full bg-gray-100 rounded-2xl p-2'>
            <div className={`${display && 'text-4xl'} font-bold bg-gray-200 rounded-2xl`}>Competitions</div>

            <>
                {display ? createElement(data) : <>
                    <div className='bg-red-300 font-bold'>Day</div>
                    <div className='font-bold'>∎ Contents</div>

                </>}
            </>
        </div>
    );
}

Competition4.defaultProps = {
    data: [{
        "content": ["가운데 정렬"]
    }],
};

export default Competition4;
