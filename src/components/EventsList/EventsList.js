import React from "react";
import classes from "./EventsList.module.css";

import EventListItems from "./EventListItems/EventListItems";
import EventListNavbar from "./EventListNavbar/EventListNavbar";

const EventsList = (props) => {
	return (
		<div className={classes.EventsList}>
			<h1>Events List</h1>

			<EventListNavbar
                showAllEvents={props.showAllEvents}
                saveHandler={props.saveHandler}
				addEventHandler={props.addEventHandler}
				showAllEventsHandler={props.showAllEventsHandler}
			/>

			<EventListItems
				selectedDate={props.selectedDate}
                allEvents={props.allEvents}
				showAllEvents={props.showAllEvents}
                editHandler={props.editHandler}
                saveHandler={props.saveHandler}
                deleteEventHandler={props.deleteEventHandler}
			/>

		</div>
	);
};

export default EventsList;
