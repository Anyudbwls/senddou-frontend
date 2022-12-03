import React from 'react';
import Display from '../components/EditDesign/Display';
import Edit from '../components/EditDesign/Edit';
import { DisplayResumeProvider } from '../contexts/DisplayResumeContext';
import { PickProvider } from '../contexts/PickContext';
import { ResumeProvider } from '../contexts/ResumeContext';
import Header from '../components/EditDesign/Header';

function EditDesign() {
  return (
    <>
      <div className='bg-ver2'>
        <Header />
        <div className='w-2/6 mt-3 h-1 bg-white'>
        </div>
        <ResumeProvider>
          <PickProvider>
            <DisplayResumeProvider>
              <div className='flex p-8'>
                <Edit />
                <Display />
              </div>
            </DisplayResumeProvider>
          </PickProvider>
        </ResumeProvider>
      </div>
    </>
  );
}

export default EditDesign;
