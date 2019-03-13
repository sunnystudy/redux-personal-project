// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toJS } from 'immutable';

// Instruments
import Styles from './styles.m.css';
import { tasks } from './tasks';
import { todoShape } from '../../bus/forms/shapes';

//Actions
import { todosActions } from "../../bus/todos/actions";

// Components
import Task from '../Task';
import Catcher from '../Catcher';

import Checkbox from '../../theme/assets/Checkbox';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        allCompleted: state.todos.every((item) => (item.get("completed") === true)),
        showAllCompletedCheckBox: !state.todos.isEmpty()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todosActions }, dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Scheduler extends Component {

    formikForm = createRef();

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchTodosAsync();
    }

    _submitForm = (formData, actions) => {
        this._createTodo(formData);
        actions.resetForm();
    };

    _createTodo = ({ todoText }) => {
        if (!todoText) {
            return null;
        }

        this.props.actions.createTodoAsync(todoText);
    };
    _allCompletedTodos = () => {
        const { allCompleted, todos } = this.props;

        if (allCompleted) {
            return null;
        }
        this.props.actions.allCompletedTodosAsync((todos).map((item)=> ((item.update("completed", value => true)).toJS())).toArray());
    };
    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    render () {
        const { actions, todos, allCompleted, showAllCompletedCheckBox } = this.props;

        const todoList = todos.map((task) => (
            <Catcher key = { task.get('id') }>
            <Task
                actions = { actions }
                completed = { task.get('completed') }
                favorite = { task.get('favorite') }
                id = { task.get('id') }
                key = { task.get('id') }
                message = { task.get('message') }
                { ...task }
            />
            </Catcher>
        ));

        const allDoneCheckBox = <div>
            <Checkbox
                color1 = '#363636'
                color2 = '#fff'
                checked = { allCompleted }
                onClick = { this._allCompletedTodos }
            />
            <span className = { Styles.completeAllTasks } >
                            Все задачи выполнены
                            </span>
        </div>


        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        {/* <form>
                            <input
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                placeholder = 'Описание моей новой задачи'
                                type = 'text'
                            />
                            <button>Добавить задачу</button>
                        </form> */}
                        <Formik
                            initialValues = { todoShape.shape }
                            ref = { this.formikForm }
                            render = { () => {
                                return (
                                    <section>
                                        <Form>
                                            <Field
                                                className = { Styles.createTask }
                                                component = 'input'
                                                name = 'todoText'
                                                placeholder = 'Описание моей новой задачи'
                                                type = 'text'
                                                onKeyPress = { this._submitFormOnEnter }
                                            />
                                            <input type = 'submit' value = 'Добавить задачу' />
                                        </Form>
                                    </section>
                                );
                            } }
                            validationSchema = { todoShape.schema }
                            onSubmit = { this._submitForm }
                        />
                        <div className = { Styles.overlay }>
                            <ul>{todoList}</ul>
                        </div>
                    </section>
                    <footer>
                        { showAllCompletedCheckBox ?         allDoneCheckBox          : null }
                    </footer>
                </main>
            </section>
        );
    }
}
