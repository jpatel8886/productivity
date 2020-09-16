import React from "react";

import Calendar from "react-calendar";

const CalendarView = (props) => {
	let calendarDisplay = props.calendarOpen ? (
		<Calendar
			minDetail="decade"
			value={props.selectedDate}
			onClickDay={props.dateSelectHandler}
		/>
	) : null;

	return <div>{calendarDisplay}</div>;
};

export default CalendarView;
