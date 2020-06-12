import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5476Reducer from '../features/EmailAuth5476/redux/reducers';
import CalendarView25474Reducer from '../features/CalendarView25474/redux/reducers';
import EmailAuth45472Reducer from '../features/EmailAuth45472/redux/reducers';
import CalendarView5468Reducer from '../features/CalendarView5468/redux/reducers';
import EmailAuth5466Reducer from '../features/EmailAuth5466/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5476: EmailAuth5476Reducer,
CalendarView25474: CalendarView25474Reducer,
EmailAuth45472: EmailAuth45472Reducer,
CalendarView5468: CalendarView5468Reducer,
EmailAuth5466: EmailAuth5466Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});