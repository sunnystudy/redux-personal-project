//Core
import { combineReducers } from 'redux';

//Reducers
import { todosReducer as todos } from '../bus/todos/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { formsReducer as forms } from '../bus/forms/reducer';

export const rootReducer = combineReducers({
    todos,
    ui,
    forms,
});
