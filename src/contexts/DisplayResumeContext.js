import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialDisplayResumes = {
  items: [],
};
function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_ALL_DATA':
      return action.data;
    case 'CHANGE_DESIGN':
      return {
        items: state.items.map((item) => {
          return item.i === action.i
              ? {
                ...item,
                name: action.name,
                type: action.design_type,
              }
              : {
                ...item,
              };
        }),
      };
    case 'SET_DATA':
      const keys = Object.keys(action.data);
      state.items = state.items.map(item => {
            return keys.includes(item.type)? {...item, data: action.data[item.type]}:{ ...item, data: null };
          },
      );
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const DisplayResumeStateContext = createContext();
const DisplayResumeDispatchContext = createContext();
const DisplayResumeNextIdContext = createContext();

export function DisplayResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialDisplayResumes);
  const nextId = useRef(0);

  return (
      <DisplayResumeStateContext.Provider value={state}>
        <DisplayResumeDispatchContext.Provider value={dispatch}>
          <DisplayResumeNextIdContext.Provider value={nextId}>
            {children}
          </DisplayResumeNextIdContext.Provider>
        </DisplayResumeDispatchContext.Provider>
      </DisplayResumeStateContext.Provider>
  );
}

export function useDisplayResumeState() {
  return useContext(DisplayResumeStateContext);
}

export function useDisplayResumeDispatch() {
  return useContext(DisplayResumeDispatchContext);
}

export function useDisplayResumeNextId() {
  return useContext(DisplayResumeNextIdContext);
}