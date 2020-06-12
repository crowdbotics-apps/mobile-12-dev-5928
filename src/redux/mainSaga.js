import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth5457Saga from '../features/EmailAuth5457/redux/sagas';
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
EmailAuth5457Saga,
CalendarView5456Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}