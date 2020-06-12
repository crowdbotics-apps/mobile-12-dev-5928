import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView5468Saga from '../features/CalendarView5468/redux/sagas';
import EmailAuth5466Saga from '../features/EmailAuth5466/redux/sagas';
import EmailAuth5460Saga from '../features/EmailAuth5460/redux/sagas';
import CalendarView5459Saga from '../features/CalendarView5459/redux/sagas';
import CalendarView5456Saga from '../features/CalendarView5456/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView5468Saga,
EmailAuth5466Saga,
EmailAuth5460Saga,
CalendarView5459Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}