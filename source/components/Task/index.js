// Core
import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

//Actions
import { todosActions } from "../../bus/todos/actions";
import { editActions } from "../../bus/edit/actions";

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import Edit from '../../theme/assets/Edit';
import Star from '../../theme/assets/Star';

const mapStateToProps = (state) => {
    return {
        edit: state.edit,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todosActions, ...editActions }, dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Task extends PureComponent {

    textInput = createRef();

    componentDidMount () {
        this.refs.textInput.value = this.refs.textInput.value;
        this.textInput.current.focus()
        //console.log(this.textInput.current.focus());
    }

    _removeTodo = () => {
        const { actions, id } = this.props;

        actions.removeTodoAsync(id);
    };
    _togglePriorityTodo = () => {
        const { actions, id, message, completed, favorite } = this.props;
        const newFavorite = !favorite;

        actions.togglePriorityTodoAsync([{ id, message, completed, favorite: newFavorite }]);
    };
    _toggleCompletedTodo = () => {
        const { actions, id, message, completed, favorite } = this.props;
        const newCompleted = !completed;

        actions.toggleCompletedTodoAsync([{ id, message, favorite, completed: newCompleted }]);
    };

    _editTodo = () => {
        const { actions, id, message, favorite, completed, edit } = this.props;
        if (edit.get("id") === id){
            actions.cancelEditTodo();
        } else {
            this.textInput.current.focus();
            actions.startEditTodo({ id, message, favorite, completed});
        }

    };

    _editingTodo = (event) => {

        console.log('edit', event.target.value);
        const { actions, id, message, favorite, completed, edit, newMessage } = this.props;

        if (event.key === 'Enter') {
            //  actions.editTodo({ id, message, favorite, completed });
        } else if (event.key === 'Escape') {
            actions.cancelEditTodo();
        } else {
            console.log(event.target.value);
            //  actions.startEditTodo({ id, message: event.target.value, favorite, completed, editing: true });
        }

    };

    _changeTodoMessage = (event) => {
        console.log(event.target.value);

    };

    render () {
        const { message, completed, favorite, id, edit } = this.props;
        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });
        const editingTodo = edit.get("id") === id;
        const label = editingTodo ? edit.get("message") : message;
        // if (editingTodo)
        //      console.log(editingTodo, message, label);
        return (
            <section className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        checked = { completed }
                        inlineBlock
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._toggleCompletedTodo }
                    />
                    <input
                        disabled = { !editingTodo }
                        type = 'text'
                        ref = { this.textInput }
                        value={ message }
                        maxLength = { 50 }
                        onChange = { this._changeTodoMessage }
                        onKeyUp = { this._editingTodo }
                    />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        checked = { favorite }
                        inlineBlock
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._togglePriorityTodo }
                    />
                    <Edit
                        inlineBlock
                        checked = { editingTodo }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._editTodo }
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._removeTodo }
                    />
                </div>
            </section>
        );
    }
}
