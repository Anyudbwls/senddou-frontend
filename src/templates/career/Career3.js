import React, { useCallback } from 'react';

function Career3({ data, display }) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className='border-none italic bg-yellow-500 rounded-full text-center' key={el.id}>
                <div className='font-bold text-xl mt-6'>{el.date}</div>
                {el.content}
            </div>),
        );
    }, []);

    return (<div className='h-full p-2'>
            <div className={`${display && 'text-4xl'} font-bold italic pl-1 pb-1 border-none bg-black text-yellow-500 mr-14 rounded-r-full`}>Career</div>
            <div className='h-0.5 bg-gray-200 mt-1'></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='border-none italic bg-yellow-500 rounded-full mt-1 mb-1 text-center'>- - -</div>
                        <div className='border-none italic bg-yellow-500 rounded-full mt-1 mb-1 text-center'>- - -</div>

                    </div>}
            </>
        </div>
    );
}

Career3.defaultProps = [
    {
        "date": "21.08 ~ now",
        "content": "앞에 "
    },
    {
        "date": "21.07 ~ 21.01",
        "content": "temperature ~~~"
    }
]
export default Career3;
