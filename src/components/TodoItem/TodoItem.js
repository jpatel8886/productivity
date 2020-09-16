import React from "react";
import c from "./TodoItem.module.css";
import ContentEditable from "react-contenteditable";

const TodoItem = (props) => {
	return (
		<div className={c.item}>
			<button
				className={props.item.checked ? c.greenCheckbox : c.redCheckbox}
				onClick={props.checkboxHandler}
			></button>
			<div className={c.content}>
				<ContentEditable
					html={props.item.title}
					onChange={(e) => props.editTitle(props.item.id, e)}
				></ContentEditable>
				<ContentEditable
					className={c.due}
					html={props.item.due}
					onChange={(e) => props.editDue(props.item.id, e)}
				></ContentEditable>
				<button className={c.deleteBtn} onClick={props.deleteItem}>
					X
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
