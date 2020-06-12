import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView5468Reducer from '../features/CalendarView5468/redux/reducers';
import EmailAuth5466Reducer from '../features/EmailAuth5466/redux/reducers';
import CalendarView5459Reducer from '../features/CalendarView5459/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView5468: CalendarView5468Reducer,
EmailAuth5466: EmailAuth5466Reducer,
CalendarView5459: CalendarView5459Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});