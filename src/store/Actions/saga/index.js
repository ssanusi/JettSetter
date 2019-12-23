
import { all } from 'redux-saga/effects';
import fetchItemsFromApi from './getAllSaga';

export default function* rootSaga(){
    yield all([fetchItemsFromApi()]);
}