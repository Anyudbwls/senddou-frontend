import React, { useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { usePickDispatch, usePickState } from '../../contexts/PickContext';
import { useDisplayResumeDispatch } from '../../contexts/DisplayResumeContext';
import { useResumeDispatch, useResumeState } from '../../contexts/ResumeContext';
import { PickTemplate } from '../../templates/PickTemplate';
import { useScroll } from '../../hooks/useScroll';
import * as axios from 'axios';
import useAsync from "../../hooks/useAsync";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Resume({ company, title }) {
  return (
      <>
        <div className="">{company}</div>
        <div className="">{title}</div>
      </>
  );
}

async function getResumeDesign() {
  const response = await axios.get(
      'http://localhost:3001/resume'
  );
  return response.data;
}

async function getResumeContent() {
  const response = await axios.get(
      'http://localhost:3001/users_1_resume'
  );
  return response.data;
}

function Edit() {
  const [state, refetch] = useAsync(getResumeDesign, [], true);
  const [resumeState, resumeRefetch] = useAsync(getResumeContent, [], true);
  const { design, resume } = usePickState();
  const { loading, data: designs, error } = state;
  const { loading: resumeLoading, data: resumes, error: resumeError } = resumeState;
  const { i, name, design_type } = design;
  const pickDispatch = usePickDispatch();
  const displayResumeDispatch = useDisplayResumeDispatch();
  const { scrollY } = useScroll();

  if (loading | resumeLoading) return <div>로딩중..</div>;
  if (error | resumeError) return <div>에러가 발생했습니다</div>;
  if (!designs | !resumes) return <button onClick={refetch}>불러오기</button>;

  const isFixed = () => {
    return scrollY > 95 ? true : false;
  };

  const getDesignByType = () => {
    return designs?.filter((i) => i.type === design_type);
  };

  const pickDesignHandle = (pickedName, pickedType) => {
    displayResumeDispatch({
      type: 'CHANGE_DESIGN',
      i: i,
      name: pickedName,
      design_type: pickedType,
    });
    pickDispatch({
      type: 'SET_DESIGN',
      i: i,
      name: pickedName,
      design_type: pickedType,
    });
  };

  const pickResumeHandle = (id) => {
    pickDispatch({ type: 'SET_RESUME', id: id });
  };

  return (
      <>
        <div className={`w-1/4 ${isFixed() ? 'block':'hidden'}`}></div>
        <div className={`w-1/4 bg-blue-200 rounded-xl shadow ${isFixed() ? 'fixed top-2 left-2':''}`}>
          <Tab.Group>
            <Tab.List className='flex flex-1 p-2 bg-blue-900/20 rounded-xl'>
              {['디자인', '이력서'].map((category) => (
                  <Tab
                      key={category}
                      className={({ selected }) =>
                          classNames(
                              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                              selected
                                  ? 'bg-white shadow'
                                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                          )
                      }
                  >
                    {category}
                  </Tab>
              ))}
            </Tab.List>
            <Tab.Panels as='nav' className="m-1">
              {Object.values([designs, resumes]).map((posts, idx) => (
                  <Tab.Panel
                      key={idx}
                      className={classNames(
                          'bg-white rounded-xl p-3 flex-grow',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      )}
                  >
                    <div
                        className={`grid grid-cols-${idx ===0 ? '2' : '1'} gap-2 min-h-screen content-start overflow-auto`}
                    >
                      {idx === 0 &&
                      (getDesignByType().length !== 0 ? (
                          getDesignByType().map((post) => (
                              <div
                                  key={post.id}
                                  className={`w-full h-40 ring-4 ring-blue-300 rounded-lx ring-inset shadow-lg p-4 rounded-xl shadow-lg ${
                                      post.name === name && 'ring-blue-600'
                                  }`}
                                  onClick={() => pickDesignHandle(post.name, post.type)}
                              >
                                <PickTemplate
                                    key={post.id}
                                    type={post.type}
                                    name={post.name}
                                    data={post.data}
                                />
                              </div>
                          ))
                      ) : (
                          <div className='w-full text-center'>NO CONTENT</div>
                      ))}

                      {idx === 1 &&
                      posts.map((post) => (
                          <div
                              key={post.id}
                              className={`w-full ring-4 ring-blue-300 ring-inset shadow-2xl p-2 mb-2 rounded-xl ${
                                  post.id === resume.id && 'ring-blue-600'
                              }`}
                              onClick={() => pickResumeHandle(String(post.id))}
                          >
                            <Resume company={post.company} title={post.title} />
                          </div>
                      ))}
                    </div>
                  </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </>
  );
}

export default React.memo(Edit);
