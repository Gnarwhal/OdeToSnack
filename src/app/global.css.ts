import { globalStyle } from "@vanilla-extract/css"

export const global_style = globalStyle('html,body', {
	margin:           '0',
	width:            '100%',
	height:           '100%',
	backgroundImage:  'url("/background.png")',
	backgroundRepeat: 'repeat'
})
