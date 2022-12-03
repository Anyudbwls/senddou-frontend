import React, { useReducer, createContext, useContext } from 'react';

const initialResumes = [];
function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_ALL_DATA':
      return action.data;
    case 'CREATE':
      return { items: state.items.concat(action.item) };
    case 'CHANGE':
      return {
        items: state.items.map((resume) =>
            resume.i === action.i
                ? {
                  ...resume,
                  name: action.name,
                  type: action.design_type,
                }
                : resume,
        ),
      };
    case 'REMOVE':
      return { items: state.items.filter((resume) => resume.i !== action.i) };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ResumeStateContext = createContext();
const ResumeDispatchContext = createContext();

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialResumes);

  return (
      <ResumeStateContext.Provider value={state}>
        <ResumeDispatchContext.Provider value={dispatch}>
          {children}
        </ResumeDispatchContext.Provider>
      </ResumeStateContext.Provider>
  );
}

export function useResumeState() {
  return useContext(ResumeStateContext);
}

export function useResumeDispatch() {
  return useContext(ResumeDispatchContext);
}