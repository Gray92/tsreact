import React, { FC, useRef, useState } from "react";

const EventsExample:FC = () => {
	const[value, setValue] = useState<string>();
	const[isDrag, setIsDrag] = useState<boolean>();
	const inputRef = useRef<HTMLInputElement>(null)

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}
	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log (inputRef.current?.value)
	}



	const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
		console.log('Drag')
	}

	const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDrag(true)

	}

	const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDrag(false)
	}

	const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDrag(false)
		console.log('Drop')
	}

	
	return(
		<div>
			<input value={value} onChange={changeHandler} type='text' placeholder="Упрравляемый"/>
			<input ref={inputRef} type='text' placeholder="Неупрравляемый"/>
			<button onClick={clickHandler}>Push me!</button>
			<div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
			<div onDrop={dropHandler} 
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 10 }}></div>
			
		</div>
	)
}

export default EventsExample;