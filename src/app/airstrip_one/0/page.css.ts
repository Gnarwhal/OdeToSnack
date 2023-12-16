import { keyframes, style } from "@vanilla-extract/css";

export const center_vertical = style({
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

export const big_brother_style = style({
	width:  '60%',
	height: 'auto',
	border: '0.3em solid purple',
	'@media': {
		'screen and (min-width: 768px)': {
			width: '40%',
		}
	}
})

export const cats_div = style({
	display:        'flex',
	flexDirection:  'row',
	justifyContent: 'space-between',
	width:          '100%',
	borderTop:      '0.3em solid purple'
})

export const subcats_div = style({
	display:        'flex',
	justifyContent: 'flex-start',
	width:          '50%',
	height:         'max-content',
})

export const reverse_subcats_div = style([subcats_div, {
	transform: 'scale(-1, 1)'
}])

export const cat = style({
	display: 'block',
	width:   '25%',
	height:  'auto',
})
