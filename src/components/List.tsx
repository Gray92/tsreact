import React, { FC } from "react";

interface ListPropse<T> {
	items: T[];
	renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListPropse<T>){
	return (
		<div>
			{props.items.map(props.renderItem)}
		</div>
	)
};