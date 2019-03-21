/* Setup files module.
**
** This module will be executed before each test.
**
** This module contains a code to configure or set up the
** testing environment before each test. Since every test
** runs in its own environment, these scripts will be
** executed in the testing environment immediately before
** executing the test code itself.
**
** This module excutes before setupFramework module.
**
*/

import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const todo = {
    id:        'TEST_ID',
    message:   'TEST_MESSAGE',
    favorite:  false,
    completed: false,
};

const query = 'test';

const todoMessage = 'message';

const singleTodo = {
    "data": [
        {
            "id":        "xjh",
            "message":   "Успешно пройти React-интенсив компании Lectrum",
            "completed": false,
            "favorite":  false,
        }
    ],
};

const todosList = {
    "data": [
        {
            "id":        "xjh",
            "message":   "Успешно пройти React-интенсив компании Lectrum",
            "completed": false,
            "favorite":  true,
        },
        {
            "id":        "xjr",
            "message":   "Взять автограф у Джареда Лето",
            "completed": false,
            "favorite":  false,
        },
        {
            "id":        "xrh",
            "message":   "Зарегестрировать бабушку в Твиче",
            "completed": true,
            "favorite":  true,
        },
        {
            "id":        "rjh",
            "message":   "Записать собаку на груминг",
            "completed": true,
            "favorite":  false,
        }
    ],
};

const responseDataSuccess = {
    data:    todo,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

global.__ = {
    todo,
    singleTodo,
    todosList,
    errorMessage,
    token,
    error,
    query,
    todoMessage,
    responseDataSuccess,
    fetchResponseSuccess204,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
};
global.fetch = fetch;

global.localStorage = new LocalStorage();

global.__ENV__ = global.__PROD__ = process.env.NODE_ENV;
