import React, {useCallback} from 'react';
import {FcLibrary} from "react-icons/fc";

function Competition({data, display}) {
    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div className="px-3" key={el.id}>
                <div className='font-mono border-none bg-gray-200 text-red-400 text-sm px-2'>{el.title}</div>
                {el.content}
            </div>),
        );
    }, []);

    return (<div className='h-full border-2 border-gray-300 rounded-xl px-2 py-2 '>
            <div className={`${display && 'text-3xl'} flex font-bold font-mono p-2`}><FcLibrary/>Competition</div>
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

Competition.defaultProps = [
    {
        "title":"2019-08-02",
        "content": "대전 사이언스 페스티벌 디지털 뉴딜 사이언스 공모전 금상"

    }
]
export default Competition;
