import React, { Component } from "react";
import classes from "./Scheduler.module.css";

import axios from "../../axios-instance";
import "react-calendar/dist/Calendar.css";

import CalendarComps from "../../components/CalendarComps/CalendarComps";
import EventsList from "../../components/EventsList/EventsList";

class Scheduler extends Component {
	state = {
		today: new Date(),
		calendarOpen: true,
		selectedDate: new Date(),
		showAllEvents: true,
		allEvents: [],
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	componentDidMount() {
		axios
			.get("/events.json")
			.then((response) => {
				// create new array of objects from the received data
				let arr = response.data;
				let events = Object.keys(arr).map((key) => {
					return {
						key: key,
						title: arr[key].title,
						date: arr[key].date,
						month: arr[key].month,
						time: arr[key].time,
					};
				});

				this.setState({ allEvents: events });
			})
			.catch((error) => console.log(error));
	}

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	dateSelectHandler = (value) => {
		this.setState({ selectedDate: value });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	toggleCalendarHandler = () => {
		this.setState({ calendarOpen: !this.state.calendarOpen });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	jumpToTodayHandler = () => {
		this.setState({ selectedDate: this.state.today });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	showAllEventsHandler = () => {
		this.setState({ showAllEvents: !this.state.showAllEvents });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	editHandler = (event, index, type) => {
		let newEvents = [...this.state.allEvents];

		if (type === "title") newEvents[index].title = event.target.value;
		else if (type === "time") newEvents[index].time = event.target.value;

		// add it to state (causing re-render and displaying firebase fetched events)
		this.setState({ allEvents: newEvents });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	deleteEventHandler = (index) => {
		let toBeDeletedKey = this.state.allEvents[index].key;
		let newEvents = [...this.state.allEvents];
		newEvents.splice(index, 1);

		// post this new events list to firebase
		axios
			.delete("/events/" + toBeDeletedKey + ".json")
			.catch((error) => console.log(error));

		// add it to state to cause re-render and display updated list
		this.setState({ allEvents: newEvents });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	addEventHandler = () => {
		let d = this.state.selectedDate;

		let dummyEvent = {
			key: "dummy",
			title: "Edit this title",
			date: d.getDate(),
			month: d.getMonth(),
			time: "Edit this time",
		};

		let newEvents = JSON.parse(JSON.stringify(this.state.allEvents));
		newEvents.push(dummyEvent);

		// post this dummy event to firebase
		axios.post("/events.json", dummyEvent).catch((error) => console.log(error));

		// add it to state (causing re-render and displaying firebase fetched events)
		this.setState({ allEvents: newEvents });
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	saveHandler = (index) => {

        let key = this.state.allEvents[index].key;
        console.log(key);
        
		// Update this event on firebase
		axios
			.put("/events/" + key + ".json", this.state.allEvents[index])
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	};

	//////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////

	render() {
		return (
			<div className={classes.Scheduler}>
				<CalendarComps
					selectedDate={this.state.selectedDate}
					calendarOpen={this.state.calendarOpen}
					dateSelectHandler={(value) => this.dateSelectHandler(value)}
					toggleCalendarHandler={this.toggleCalendarHandler}
					jumpToTodayHandler={this.jumpToTodayHandler}
				/>

				<EventsList
					showAllEvents={this.state.showAllEvents}
					selectedDate={this.state.selectedDate}
					allEvents={this.state.allEvents}
					saveHandler={this.saveHandler}
					editHandler={this.editHandler}
					addEventHandler={this.addEventHandler}
					showAllEventsHandler={this.showAllEventsHandler}
					deleteEventHandler={(index) => this.deleteEventHandler(index)}
				/>
			</div>
		);
	}
}

export default Scheduler;
