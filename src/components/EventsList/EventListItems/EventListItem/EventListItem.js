import React from "react";
import classes from "./EventListItem.module.css";

import ContentEditable from "react-contenteditable";

const EventListItem = (props) => {
	return (
		<div className={classes.EventListItem}>
			<div className={classes.titleRow}>
				<ContentEditable
					className={classes.title}
					html={props.event.title}
					onChange={(e) => props.editHandler(e, props.index, "title")}
				/>
				<div className={classes.buttons}>
					<button
						onClick={() => props.saveHandler(props.index)}
						className={classes.save}
					>
						&#10004;
					</button>
					<button
						onClick={() => props.deleteEventHandler(props.index)}
						className={classes.deleteEvent}
					>
						X
					</button>
				</div>
			</div>
			<div className={classes.bottomRow}>
				<span>at </span>
				<ContentEditable
					className={classes.time}
					html={props.event.time}
					onChange={(e) => props.editHandler(e, props.index, "time")}
				/>
			</div>
		</div>
	);
};

export default EventListItem;
