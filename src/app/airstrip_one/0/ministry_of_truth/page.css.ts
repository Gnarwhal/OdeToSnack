import { keyframes, style } from "@vanilla-extract/css";

export const center_vertical = style({
	boxSizing:     'border-box',
	position:      'relative',
	display:       'flex',
	flexDirection: 'column',
	alignItems:    'center',
	margin:        'auto',
	width:         '100%',
	border:        '0.3em solid purple',
	'@media': {
		'screen and (min-width: 768px)': {
			width: '50%',
		}
	}
})

export const border = style({
	width:        '61%',
	marginBottom: '4em',
	border:       '0.3em solid purple',
})

export const big_brother_style = style({
	display: 'block',
	width:   '100%',
	height:  'auto',
})

export const message_style = style({
	boxSizing:       'border-box',
	width:           '100%',
	height:          'max-content',
	margin:          0,
	border:          'none',
	padding:         '0.5em',
	fontSize:        '1em',
	color:           'magenta',
	backgroundColor: 'black',
	overflowWrap:    'break-word',
	textAlign:       'center',
	':focus': {
		outline: 'none',
	},
	'@media': {
		'screen and (min-width: 768px)': {
			fontSize: '2em'
		}
	}
})
