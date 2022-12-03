import React, { useCallback } from 'react';
import {FcOvertime} from "react-icons/fc";

function Career1({ data, display }) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className='ml-4 italic' key={el.id}>
                <div className='font-bold text-xl mt-3 text-white '>{el.date}</div>
                {el.content}
            </div>),
        );
    }, []);

    return (<div className='h-full p-2 bg-pink-100 border-none rounded-2xl'>
            <div className='flex justify-between'>
                <div className='border-none rounded-full w-2 h-2 bg-white'></div>
                <div className='border-none rounded-full w-2 h-2 bg-white'></div>
            </div>


            <div className={`${display && 'text-2xl'} flex mt-2 italic border-none rounded-lg ring-offset-2 ring-2 bg-red-300 text-white font-bold p-1 mx-4`}>
                Career
                <div className='mt-1 ml-1'><FcOvertime/></div>
            </div>
            <div className=''></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='font-bold text-md mt-2'>0000-00-00</div>
                        content
                    </div>}


            </>

        </div>

    );
}

Career1.defaultProps = [
    {
        "date": "21.08 ~ now",
        "content": "앞에 "
    },
    {
        "date": "21.07 ~ 21.01",
        "content": "temperature ~~~"
    }
]
export default Career1;
