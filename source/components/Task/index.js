// Core
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import Edit from '../../theme/assets/Edit';
import Star from '../../theme/assets/Star';

export default class Task extends PureComponent {

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
    render () {
        const { message, completed, favorite } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

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
                        disabled
                        type = 'text'
                        value = { message }
                        onKeyUp = { this._editTodo }
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
                        checked = { false }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._startEditTodo }
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
