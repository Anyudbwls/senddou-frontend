import React, { useCallback } from 'react';
import {FcTemplate} from "react-icons/fc";


function Career4({ data, display }) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className='  border-t-2 border-b-2 mx-2' key={el.id}>
                <div className='font-bold text-xl px-2 bg-gray-200 rounded-xl my-2'>{el.date}</div>
                <div className=''>{el.content} </div>

            </div>),
        );
    }, []);

    return (<div className='h-full flex text-center'>
                <div className={`${display && 'text-4xl'}  rounded-l-xl flex border-2 bg-blue-200 px-2 font-bold p-2`}>
                    <div className='px-2'><FcTemplate/>
                    </div>
                    Career
                </div>

            <div className='border-l-2 mx-1 border-dashed '></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='bg-gray-200 border-2 py-7 my-1 px-2 rounded-xl'></div>
                        <div className='bg-gray-200 border-2 py-7 my-1 px-2 rounded-xl'></div>
                    </div>}
            </>
        </div>
    );
}

Career4.defaultProps = [
    {
        "date": "21.08 ~ now",
        "content": "앞에 "
    },
    {
        "date": "21.07 ~ 21.01",
        "content": "temperature ~~~"
    }
]
export default Career4;
