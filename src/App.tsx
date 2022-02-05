import React from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
	
	return (
		<BrowserRouter>
			<div>
				<NavLink to='/users'>Пользователи</NavLink>
				<NavLink to='todos'>Таски</NavLink>
			</div>
			<div>
				<Route path={'/users'} exact>
					<UsersPage/>
				</Route>
				<Route path={'/todos'} exact>
					<TodosPage/>
				</Route>
				<Route path={'/users/:id'}>
					<UserItemPage/>
				</Route>
				<Route path={'/todos/:id'}>
					<TodoItemPage/>
				</Route>
			</div>
		</BrowserRouter>
		
		
		/*<div>
			<EventsExample/>
			<Card width='300px' height="300px" variant={CardVariant.primary} >
				<button>Кнопка</button>
			</Card>
		</div>*/
	)
}

export default App;