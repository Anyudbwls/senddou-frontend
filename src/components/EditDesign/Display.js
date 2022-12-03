import React, { useCallback, useEffect, useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {
  useDisplayResumeDispatch,
  useDisplayResumeNextId,
  useDisplayResumeState,
} from '../../contexts/DisplayResumeContext';
import { usePickDispatch, usePickState } from '../../contexts/PickContext';
import { PickTemplate } from '../../templates/PickTemplate';
import { useResumeDispatch, useResumeState } from '../../contexts/ResumeContext';
import * as axios from 'axios';
import useAsync from '../../hooks/useAsync';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

async function getDisplayResume() {
  const response = await axios.get(
      'http://localhost:3001/display_resume'
  );
  return response.data;
}

async function getResumeContent() {
  const response = await axios.get(
      'http://localhost:3001/users_1_resume'
  );
  return response.data;
}

function Display(props) {
  const [displayResumeState, displayResumeRefetch] = useAsync(getDisplayResume, [], true);
  const [resumeState, resumeRefetch] = useAsync(getResumeContent, [], true);
  const { loading: displayResumeLoading, data: displayResume, error: displayResumeError } = displayResumeState;
  const { loading: resumeLoading, data: resumes, error: resumeError } = resumeState;

  const items = useDisplayResumeState();
  const resume = useResumeState();

  const { design: pickDesign, resume: pickResume } = usePickState();
  const { i } = pickDesign; //design_type, name
  const [, setLayout] = useState(null);
  const [, setBreakPoint] = useState({
    breakpoint: null,
    cols: 0,
  });
  const dispatch = useDisplayResumeDispatch();
  const resumeDispatch = useResumeDispatch();
  if (!items.items.length && displayResume){
    dispatch({ type: 'SET_ALL_DATA', data: displayResume });
  }
  if (!resume.length && resumes){
    resumeDispatch({ type: 'SET_ALL_DATA', data: resumes });
  }

  const pickDispatch = usePickDispatch();
  // const nextId = useDisplayResumeNextId();
  const data = resume.filter(item => item.id === pickResume.id)?.[0];
  if (data) {
    dispatch({ type: 'SET_DATA', data: data['data'] });
  }


  const getDisplayData = useCallback(() => {
    return items;
  }, [items]);

  const onPick = useCallback(
      (e, i, design_type, name) => {
        e.stopPropagation(); // 부모 엘리먼트 에게로 이벤트가 버블링 되는 현상을 막기 위해 사용
        pickDispatch({ type: 'SET_DESIGN', i, design_type, name });
      },
      [pickDispatch],
  );

  const onNeverPick = useCallback(() => {
    pickDispatch({ type: 'RESET_DESIGN' });
  }, [pickDispatch]);

  // const onAddItem = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     dispatch({
  //       type: 'CREATE',
  //       item: {
  //         type: 'intro',
  //         name: 'intro1',
  //         i: 'new' + nextId.current,
  //         x: 0,
  //         y: 0,
  //         w: 2,
  //         h: 2,
  //       },
  //     });
  //     nextId.current += 1;
  //   },
  //   [nextId, dispatch],
  // );

  // We're using the cols coming back from this to calculate where to add new items.
  const onBreakpointChange = useCallback(
      (breakpoint, cols) => {
        setBreakPoint({
          breakpoint: breakpoint,
          cols: cols,
        });
      },
      [setBreakPoint],
  );

  const onLayoutChange = useCallback(
      (layout) => {
        setLayout({ layout: layout });
      },
      [setLayout],
  );

  const onRemoveItem = useCallback(
      (i) => {
        dispatch({ type: 'REMOVE', i });
      },
      [dispatch],
  );

  const createElement = useCallback(
      (el) => {
        return (
            <div
                key={el.i}
                data-grid={el}
                className={`group box-border ${
                    el.i === i ? 'border-2 border-blue-800' : ''
                }`}
            >
          <span
              className='absolute hidden left-2 top-0 cursor-pointer group-hover:block'
              onClick={(e) => {
                onPick(e, el.i, el.type, el.name);
              }}
          >
            o
          </span>
              <div
                  className='drag-area h-full w-full'
                  onClick={(e) => e.stopPropagation()}
              >
                <PickTemplate key={el.id} type={el.type} name={el.name} data={el.data} display />
              </div>
              <span
                  className='remove hidden absolute right-2 top-0 cursor-pointer group-hover:block'
                  onClick={() => onRemoveItem(el.i)}
              >
            x
          </span>
            </div>
        );
      },
      [i, onPick, onRemoveItem],
  );

  return (
      <div
          className='ml-8 p-4 w-3/4 rounded-xl ring-2 ring-blue-300 ring-inset bg-white focus:outline-none min-h-screen'
          onClick={onNeverPick}
      >
        {/*<button onClick={onAddItem}>Add Item</button>*/}
        <ResponsiveReactGridLayout
            onLayoutChange={onLayoutChange}
            onBreakpointChange={onBreakpointChange}
            {...props}
        >
          {getDisplayData().items.map((el) => createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
  );
}

Display.defaultProps = {
  className: 'layout',
  cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
  rowHeight: 50,
  compactType: 'vertical',
};

export default React.memo(Display);