import React, { useCallback } from 'react';

function Education4({ data, display }) {


    const createContent = useCallback((item) => {
        return item.map(el => <div className='text-lg' key={item.id}>{el}</div>);
    }, []);

    const createElement = useCallback((item) => {
        return item.map(el =>
            (<div key={el.id}>
                <table className='mt-6 text-1xl'>
                    <tr>
                        <th className='font-bold'>{el.title}: </th>
                        &nbsp;
                        <td>{createContent(el.content)}</td>
                    </tr>
                </table>
            </div>),
        );
    }, [createContent]);

    return (
        data && <div className='h-full'>
            <div className={`${display && 'text-4xl'} font-bold p-2 text-center bg-blue-200`}>학력사항</div>
            <div className='h-0.5 bg-gray-200'></div>
            <>
                {display ? createElement(data) : <>
                    <table>
                        <tr>
                            <th>학력: </th>
                            &nbsp;
                            <td>졸업</td>
                        </tr>
                        <tr>
                            <th>년도: </th>
                            &nbsp;
                            <td>0000년</td>
                        </tr>
                        <tr>
                            <th>학과: </th>
                            &nbsp;
                            <td>00과</td>
                        </tr>
                        <tr>
                            <th>학점: </th>
                            &nbsp;
                            <td>0.0점</td>
                        </tr>
                    </table>
                </>}
            </>
        </div>
    );
}

Education4.defaultProps = {
    data: [{
        "title": "가로형 학력 항목",
        "content": ["내용 입력"]
    }],
};

export default Education4;
