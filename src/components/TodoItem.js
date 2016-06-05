import React, { PropTypes, Component } from 'react';
// import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';

const style = {
  width: 400,
  margin: 10,
  padding: 10,
  textAlign: 'left',
  display: 'block'
};

const iconStyle = {
  float: 'right',
  marginTop: -2
};

export default class TodoItem extends Component {
  render() {
    const { id, completed, text, deleteTodo, toggleTodo } = this.props;

    return <li className='todos__item'>
      <Paper className={ (completed? 'completed' : '') } 
        style={style} 
        zDepth={2}>
        <span className={ 'todo-text ' + (completed? 'completed' : '') } 
        onClick={() => toggleTodo(id)}>{text}</span>{'   '}
        <DeleteForever onClick={() => deleteTodo(id)} 
          className='delete-button'
          style={iconStyle}
          hoverColor={red500}></DeleteForever>
      </Paper>
    </li>
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};