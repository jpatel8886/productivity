import React, { Component } from "react";
import classes from "./Todo.module.css";

import TodoItem from "../../components/TodoItem/TodoItem";

class Todo extends Component {
	state = {
		todoItems: [
			{
				id: "0",
				title: "Birthday",
				due: "21/01",
				checked: false,
			},
			{
				id: "1",
				title: "Subscription",
				due: "15/03",
				checked: false,
			},
			{
				id: "2",
				title: "Bill",
				due: "05/10",
				checked: false,
			},
		],
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	addDummyItem = () => {
        let key = Math.random();

		let dummyItem = {
			id: "" + key.toFixed(4),
			title: "**dummy**",
            due: "00/00",
            checked: false
		};
		let newItems = [...this.state.todoItems];
		newItems.push(dummyItem);
		this.setState({ todoItems: newItems });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	flipCheckbox = (index) => {
		let newItems = [...this.state.todoItems];
		newItems[index].checked = !newItems[index].checked;
        this.setState({ todoItems: newItems });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	titleChangeHandler = (index, event) => {
		let newItems = [...this.state.todoItems];
		newItems[index].title = event.target.value;
		this.setState({ todoItems: newItems });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	dueChangeHandler = (index, event) => {
		let newItems = [...this.state.todoItems];
		newItems[index].due = event.target.value;
		this.setState({ todoItems: newItems });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	deleteItemHandler = (index) => {
		let newItems = [...this.state.todoItems];
		newItems.splice(index, 1);
		this.setState({ todoItems: newItems });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	render() {
		const todoItems = this.state.todoItems.map((item, index) => {
			return (
				<TodoItem
					key={index}
					item={item}
					checkboxHandler={() => this.flipCheckbox(index)}
					editDue={this.dueChangeHandler}
					editTitle={this.titleChangeHandler}
					deleteItem={() => this.deleteItemHandler(index)}
				/>
			);
		});

		return (
			<div className={classes.Todo}>
				<h1>To-Dos</h1>
				<button className={classes.addItem} onClick={this.addDummyItem}>
					+
				</button>
				{todoItems}
			</div>
		);
	}
}

export default Todo;
