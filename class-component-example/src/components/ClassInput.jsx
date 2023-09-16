/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../ClassInput.css';
import { v4 as uuidv4 } from 'uuid';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example', 'More tasks'],
      inputVal: '',
    };
    this.count = this.state.todos.length;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.count++;
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(e) {
    const targetItem = e.target.previousElementSibling.textContent;
    const array = this.state.todos;
    this.count--;
    const newArray = array.filter((el) => el !== targetItem);
    this.setState((state) => ({
      ...state,
      todos: newArray,
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <h4>Count: {this.count}</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <div className="tasks" key={uuidv4()}>
              <li key={todo}>{todo}</li>
              <button onClick={(e) => this.handleDelete(e)}>Delete</button>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
