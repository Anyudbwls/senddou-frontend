import React, {useCallback} from 'react';
import {FcGraduationCap} from "react-icons/fc";

function Education({data, display}) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className="px-3" key={el.id}>
                <div className='font-mono border-none bg-gray-200 text-red-400 text-sm px-2'>{el.title}</div>
                {el.content}
            </div>),
        );
    }, []);

    return (<div className='h-full border-2 border-gray-300 rounded-xl px-2 py-2 '>
            <div className={`${display && 'text-3xl'} flex font-bold font-mono p-2`}><FcGraduationCap/>Education</div>
            <div className='h-0.5 '></div>
            <>
                {data ? (display && createElement(data)) :
                    <div>
                        <div className='border-none px-12 mb-1 mt-1 bg-gray-200 rounded-lg'>
                            <div className='font-bold text-xs text-center text-red-300 '>- - -</div>
                        </div>

                    </div>}
            </>
        </div>
    );
}

Education.defaultProps = [
    {
        "date": "21.08 ~ now",
        "content": "앞에 "
    },
    {
        "date": "21.07 ~ 21.01",
        "content": "temperature ~~~"
    }
]
export default Education;