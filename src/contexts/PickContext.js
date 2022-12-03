import React, { useReducer, createContext, useContext } from 'react';

const initialPick = {
  design: { i: '', design_type: '', name: '' },
  resume: { id: '0' },
};
function pickReducer(state, action) {
  switch (action.type) {
    case 'SET_DESIGN':
      return {
        ...state,
        design: {
          i: action.i,
          design_type: action.design_type,
          name: action.name,
        },
      };
    case 'RESET_DESIGN':
      return {
        ...state,
        design: {
          i: '',
          design_type: '',
          name: '',
        },
      };
    case 'SET_RESUME':
      return {
        ...state,
        resume: { id: action.id },
      };
    case 'RESET_RESUME':
      return {
        ...state,
        resume: { id: '0' },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const PickStateContext = createContext();
const PickDispatchContext = createContext();

export function PickProvider({ children }) {
  const [state, dispatch] = useReducer(pickReducer, initialPick);

  return (
      <PickStateContext.Provider value={state}>
        <PickDispatchContext.Provider value={dispatch}>
          {children}
        </PickDispatchContext.Provider>
      </PickStateContext.Provider>
  );
}

export function usePickState() {
  return useContext(PickStateContext);
}

export function usePickDispatch() {
  return useContext(PickDispatchContext);
}