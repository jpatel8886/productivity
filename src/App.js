import React, { Component } from "react";
import classes from "./App.module.css";

import Todo from "./containers/Todo/Todo";
import Scheduler from "./containers/Scheduler/Scheduler";

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				{/* <Todo /> */}
                <Scheduler />
			</div>
		);
	}
}

export default App;
