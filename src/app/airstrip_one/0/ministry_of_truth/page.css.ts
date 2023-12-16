import { keyframes, style } from "@vanilla-extract/css";

export const center_vertical = style({
	position:      'relative',
	display:       'flex',
	flexDirection: 'column',
	alignItems:    'center',
	margin:        'auto',
	width:         '50%',
	border:        '0.3em solid purple'
})

export const border = style({
	width:  '60%',
	marginBottom: '4em',
	border: '0.3em solid purple',
})

export const big_brother_style = style({
	display: 'block',
	width:  '100%',
	height: 'auto',
})

export const message_style = style({
	boxSizing: 'border-box',
	width: '100%',
	height: 'max-content',
	margin: 0,
	border: 'none',
	padding: '0.5em',
	fontSize: '2em',
	color: 'magenta',
	backgroundColor: 'black',
	overflowWrap: 'break-word',
	textAlign: 'center',
	':focus': {
		outline: 'none',
	}
})
