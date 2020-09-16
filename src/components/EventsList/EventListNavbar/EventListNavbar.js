import React from "react";
import classes from "./EventListNavbar.module.css";

const EventListNavbar = (props) => {

	return (
		<div className={classes.EventsListNavbar}>
			<div>
				<button
					className={classes.showEventsBtn}
					onClick={props.showAllEventsHandler}>
					{props.showAllEvents ? "Hide Events" : "Show Events"}
				</button>
                <button 
                    className={classes.addEventBtn} 
                    onClick={props.addEventHandler}>
					+ Add Event
				</button>
			</div>
		</div>
	);
};

export default EventListNavbar;
