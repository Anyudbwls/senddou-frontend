import React, {useCallback} from 'react';
import {FcCheckmark} from "react-icons/fc";


function MilitaryMe({data, display}) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className='font-mono flex text-center ' key={el.id}>
                <div className='flex  text-xl border-b-2 border-dashed '>
                    <div className='ml-2'><FcCheckmark/></div>
                    {el.title}</div>
                <div className='border-b-2 border-dashed px-4 py-1 ml-3 flex justify-center text-center'>{el.content}</div>
            </div>),
        );
    }, []);

    return (<div className='h-full'>
            <div className={`${display && 'text-4xl'} font-bold p-2  font-mono`}>Military</div>
            <div className='h-6 -mt-7 rotate-8 bg-green-400 mb-4'></div>
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

MilitaryMe.defaultProps = [
    {
    "title": "병역사항",
    "content": ["병장 만기 전역"]
}
]
export default MilitaryMe;
