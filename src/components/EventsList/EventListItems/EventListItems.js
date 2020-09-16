import React from "react";
import classes from "./EventListItems.module.css";

import EventListItem from "./EventListItem/EventListItem";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventItems = (props) => {

	const arr = props.allEvents;
	const currDay = props.selectedDate.getDay();
	const currDate = props.selectedDate.getDate();
	const currMonth = props.selectedDate.getMonth();

	const selectEvents = (
		<div className={classes.EventItems}>
			<div className={classes.dateDisplay}>
				<div className={classes.date}>{currDate}</div>
				{"" + WEEKDAYS[currDay]}
			</div>

			<div className={classes.items}>
				{Object.keys(arr).map((key, index) => {
					return arr[key].date === currDate && arr[key].month === currMonth ? (
						<EventListItem
                            key={index}
							index={index}
                            event={arr[key]}
                            editHandler={props.editHandler}
                            saveHandler={props.saveHandler}
							deleteEventHandler={props.deleteEventHandler}
						/>
					) : null;
				})}
			</div>
		</div>
	);

	////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////

	return (
		<React.Fragment>{props.showAllEvents ? selectEvents : null}</React.Fragment>
	);
};

export default EventItems;
