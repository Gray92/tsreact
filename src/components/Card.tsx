import React, {FC, useState} from "react";

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
} 

interface CardProps {
	width: string;
	height: string;
	variant: CardVariant;
};



const Card:FC<CardProps> = ({
	width, 
	height,
	variant, 
	children}) => {
	
	const [state, setState] = useState(0);
	
	return (
		<div style={{width, height, 
			border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
			backgroundColor: variant === CardVariant.primary ? 'green' : 'none'
		}}
		>
			{children}
		</div>
	)
}

export default Card;