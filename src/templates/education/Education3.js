import React, { useCallback } from 'react';

function Education3({ data, display }) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className='border-2 italic bg-gray-300 rounded-b-xl text-center mt-1' key={el.id}>
                <div className='font-bold text-sm mt-2'>{el.title}</div>
                {el.content}
            </div>),
        );
    }, []);

    return (<div className='h-full p-2'>
            <div className={`${display && 'text-2xl'} font-bold italic pl-1 pb-1 border-none button rounded-t-xl `}>Education</div>
            <div className='h-0.5 bg-gray-200 mt-1'></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='border-none italic bg-gray-300 rounded-b-xl mt-1 mb-1 text-center'>- - -</div>

                    </div>}
            </>
        </div>
    );
}

Education3.defaultProps = [
    {
        "date": "21.08 ~ now",
        "content": "앞에 "
    },
    {
        "date": "21.07 ~ 21.01",
        "content": "temperature ~~~"
    }
]
export default Education3;
