// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toJS } from 'immutable';
import posed, { PoseGroup } from "react-pose";

// Instruments
import Styles from './styles.m.css';
import { todoShape } from '../../bus/forms/shapes';
import { getFilteredTodos } from '../../instruments/helpers';

//Actions
import { todosActions } from "../../bus/todos/actions";
import { filterActions } from "../../bus/filter/actions";

// Components
import Task from '../Task';
import Catcher from '../Catcher';

import Checkbox from '../../theme/assets/Checkbox';

const Item = posed.li({
    flip: {
        transition: {
            scale: {
                type: 'spring',
                velocity: 1
            },
            default: {
                type: 'spring'
            }
        }
    }
});

const mapStateToProps = (state) => {
    return {
        todos: getFilteredTodos(state.todos, state.filter),
        allCompleted: state.todos.every((item) => (item.get("completed") === true)),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todosActions, ...filterActions }, dispatch),
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

    _searchTodo = (event) => {
        this.props.actions.searchTodo(event.target.value);
    };

    _getAllCompletedView = () => {
        const { allCompleted, todos } = this.props;

        return !todos.isEmpty() ? (
            <footer>
                <Checkbox
                    color1 = '#363636'
                    color2 = '#fff'
                    checked = { allCompleted }
                    onClick = { this._allCompletedTodos }
                />
                <span className = { Styles.completeAllTasks } >
                        Все задачи выполнены
                </span>
            </footer> ) : null;
    };
    render () {
        const { actions, todos } = this.props;

        const todoList = todos.map((task) => (
            <Item key={ task.get('id') }>
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
            </Item>
        ));

        const showAllCompletedCheckBox = this._getAllCompletedView();

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' onKeyUp = { this._searchTodo }/>
                    </header>
                    <section>
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
                                                maxLength = { 50 }
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
                            <PoseGroup>{todoList}</PoseGroup>
                        </div>
                    </section>
                        { showAllCompletedCheckBox }
                </main>
            </section>
        );
    }
}
