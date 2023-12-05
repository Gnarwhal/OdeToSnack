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

export const beeg_container = style({
	position: 'relative',
	width:    'max-content',
	height:   'max-content',
})

const beeg = style({
	position: 'absolute',
	fontSize: '3em',
})

export const beeg_dummy = style([beeg, {
	position: 'static',
	color:    'transparent',
}])

export const beeg_foreground = style([beeg, {
	background:     'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 16%, rgba(0,255,0,1) 33%, rgba(0,255,255,1) 50%, rgba(0,0,255,1) 66%, rgba(255,0,255,1) 83%, rgba(255,0,0,1) 100%)',
	backgroundClip: 'text',
	color:          'transparent',
}])

export const beeg_background = style([beeg, {
	left:           '-0.1em',
	top:            ' 0.1em',
	color:          'black',
}])

export const big_brother_style = style({
	width:  '40%',
	height: 'auto',
	border: '0.3em solid purple'
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
