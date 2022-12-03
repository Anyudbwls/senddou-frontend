import React, {useCallback} from 'react';
import {FcFolder} from "react-icons/fc";

function Project ({data, display}) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className="px-3" type={el.type}>
                <div className='font-mono border-none bg-gray-200 text-red-400 text-sm px-2'>{el.date}</div>
                {el.content}
            </div>),
        );
    }, []);

    return (<div className='h-full border-2 border-gray-300 rounded-xl px-2 py-2 '>
            <div className={`${display && 'text-3xl'} flex font-bold font-mono p-2`}><FcFolder/>Project</div>
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

Project.defaultProps = [
    {
        "date": "2021.09",
        "content": "semi project"
    },
    {
        "date": "2022.01",
        "content": "final project"
    }
]
export default Project;
