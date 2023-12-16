import { style, keyframes } from '@vanilla-extract/css'

export const marquee_container = style({
	display:         'flex',
	width:           '100%',
	height:          'max-content',
	overflow:        'hidden',
	backgroundColor: 'black',
})

const scroll_marquee = keyframes({
	'0%':   { left: '   0%' },
	'100%': { left: '-100%' },
})

export const marquee_content = style({
	position:                'relative',
	fontSize:                '1em',
	color:                   'magenta',
	whiteSpace:              'nowrap',
	animationName:            scroll_marquee,
	animationDuration:       '8s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
})
