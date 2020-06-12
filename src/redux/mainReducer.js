import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5460Reducer from '../features/EmailAuth5460/redux/reducers';
import CalendarView5459Reducer from '../features/CalendarView5459/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5460: EmailAuth5460Reducer,
CalendarView5459: CalendarView5459Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});