//Core
import { combineReducers } from 'redux';

//Reducers
import { todosReducer as todos } from '../bus/todos/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { formsReducer as forms } from '../bus/forms/reducer';
import { filterReducer as filter } from '../bus/filter/reducer';
import { editReducer as edit } from '../bus/edit/reducer';

export const rootReducer = combineReducers({
    todos,
    ui,
    forms,
    filter,
    edit,
});
