import React from "react";
import classes from "./CalendarComps.module.css";

import CalendarView from "./CalendarView/CalendarView";
import CalendarNavbar from "./CalendarNavbar/CalendarNavbar";

const CalendarComps = (props) => {
	return (
		<div className={classes.CalendarComps}>
			<h1>Calendar</h1>

			<CalendarNavbar
				calendarOpen={props.calendarOpen}
				toggleCalendarHandler={props.toggleCalendarHandler}
				jumpToTodayHandler={props.jumpToTodayHandler}
			/>

			<CalendarView
				calendarOpen={props.calendarOpen}
				selectedDate={props.selectedDate}
				dateSelectHandler={props.dateSelectHandler}
			/>
		</div>
	);
};

export default CalendarComps;
