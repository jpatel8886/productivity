import React from "react";
import classes from "./CalendarNavbar.module.css";

const CalendarNavbar = (props) => {
	let arrow = props.calendarOpen ? <span>&#9650;</span> : <span>&#9660;</span>;

	return (
		<div>
			<button className={classes.calBtn} onClick={props.toggleCalendarHandler}>
				Calendar {arrow}
			</button>

			<button className={classes.jumpBtn} onClick={props.jumpToTodayHandler}>
				Jump to Today <span>&#9873;</span>
			</button>
		</div>
	);
};

export default CalendarNavbar;
