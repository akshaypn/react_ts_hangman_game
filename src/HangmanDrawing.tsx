const HEAD = (
	<div
		style={{
			width: "50px",
			height: "50px",
			borderRadius: "100%",
			border: "10px solid black",
			position: "absolute",
			top: "50px",
			right: "-30px",
		}}
	/>
);

const BODY = (
	<div
		style={{
			width: "10px",
			height: "100px",
			background: "black",
			position: "absolute",
			top: "120px",
			right: "0px",
		}}
	/>
);

const RIGHT_ARM = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "120px",
			right: "-5px",
			rotate: "30deg",
			transformOrigin: "left bottom",
		}}
	/>
);

const LEFT_ARM = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "120px",
			right: "-85px",
			rotate: "-30deg",
			transformOrigin: "right bottom",
		}}
	/>
);

const LEFT_LEG = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "205px",
			right: "-90px",
			rotate: "120deg",
			transformOrigin: "left bottom",
		}}
	/>
);

const RIGHT_LEG = (
	<div
		style={{
			width: "100px",
			height: "10px",
			background: "black",
			position: "absolute",
			top: "205px",
			right: "0px",
			rotate: "-120deg",
			transformOrigin: "right bottom",
		}}
	/>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
	numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }) {
	return (
		<div
			style={{
				position: "relative",
			}}
		>
			{BODY_PARTS.slice(0, numberOfGuesses)}

			<div
				style={{
					height: "50px",
					width: "10px",
					background: "black",
					position: "absolute",
					top: 0,
					right: 0,
				}}
			/>

			<div
				style={{
					height: "400px",
					width: "10px",
					background: "black",
					marginLeft: "140px",
				}}
			/>

			<div
				style={{
					height: "10px",
					width: "100px",
					background: "black",
					position: "absolute",
					top: 0,
					right: 0,
				}}
			/>

			<div
				style={{
					height: "10px",
					width: "250px",
					background: "black",
				}}
			/>
		</div>
	);
}