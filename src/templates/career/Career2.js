import React, {useCallback} from 'react';
import {FcCheckmark} from "react-icons/fc";


function Career2({data, display}) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className='font-mono flex text-center ' key={el.id}>
                <div className='flex  text-xl border-b-2 border-dashed '>
                    <div className='ml-2'><FcCheckmark/></div>
                    {el.date}</div>
                <div className='border-b-2 border-dashed px-4 py-1 ml-3 flex justify-center text-center'>{el.content}</div>
            </div>),
        );
    }, []);

    return (<div className='h-full'>
            <div className={`${display && 'text-4xl'} font-bold p-2  font-mono`}>Career</div>
            <div className='h-6 -mt-7 rotate-8 bg-yellow-300 mb-4'></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='flex  text-xl border-b-2 border-dashed '>
                            <div className='mr-2'><FcCheckmark/>
                            </div>
                            <div className='border-none px-12 mb-1 mt-1 bg-gray-400 rounded-2xl'></div>
                        </div>
                        <div className='flex  text-xl border-b-2 border-dashed '>
                            <div className='mr-2'><FcCheckmark/>
                            </div>
                            <div className='border-none px-12 mb-1 mt-1 bg-gray-400 rounded-2xl'></div>
                        </div>
                        <div className='flex  text-xl border-b-2 border-dashed '>
                            <div className='mr-2'><FcCheckmark/>
                            </div>
                            <div className='border-none px-12 mb-1 mt-1 bg-gray-400 rounded-2xl'></div>
                        </div>
                    </div>}
            </>
        </div>
    );
}

Career2.defaultProps = [
    {
        "date": "21.08 ~ now",
        "content": "앞에 "
    },
    {
        "date": "21.07 ~ 21.01",
        "content": "temperature ~~~"
    }
]
export default Career2;
