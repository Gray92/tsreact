import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ITodo } from "../types/types";

interface TodoItemPageParams {
	id: string;
}

const TodoItemPage: FC = () => {
	const [todo, setTodo] = useState<ITodo | null>(null)

	const params = useParams<TodoItemPageParams>()

	useEffect(() => {
		fetchTodo()
	}, [])

	async function fetchTodo() {
		try {
			const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
			setTodo(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (

		<div>
			<button>Back</button>
			<h1>Страница таски {todo?.title}</h1>
			<div>
				{todo?.completed}
			</div>
		</div>

	)
}

export default TodoItemPage;