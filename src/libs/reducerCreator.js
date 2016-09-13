'use strict';

export function reducerCreator (firstState, handlers) {
  return (state = firstState, action) => {
    return handlers[action.type] ? handlers[action.type](state, action) : state;
  };
}
