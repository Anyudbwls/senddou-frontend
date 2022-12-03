import React, {useCallback} from 'react';
import {FcCheckmark} from "react-icons/fc";


function Education1({data, display}) {
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
            <div className={`${display && 'text-4xl'} font-bold p-2  font-mono`}>Education</div>
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

Education1.defaultProps = [
    {
        "title": "최종 1학력 (대학교)",
        "content": ["4년제 대졸 (한양대학교 에리카캠퍼스)"]
    },
    {
        "title": "졸업년도",
        "content": ["18년 2월"]
    }
]
export default Education1;
