import { style } from '@vanilla-extract/css'

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