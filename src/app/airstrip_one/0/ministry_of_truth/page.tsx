'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import BeegText from '../components/BeegText'
import Marquee from '../components/Marquee'
import {
	center_vertical,
	border,
	big_brother_style,
	message_style,
} from './page.css'

export default function Home() {
	const search_params = useSearchParams()
	const input_ref = useRef<HTMLParagraphElement>(null)

	const set_message = (message: string) => {
		const encoded = btoa(message)
		const new_url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?e=${encoded}`
		window.history.replaceState('', '', new_url)
	}

	const message = search_params.get('e') ?
		atob(search_params.get('e')!) :
		(
			search_params.get('m')
			?? 'At the apex of the pyramid comes Big Brother. Big Brother is infallible and all-powerful. Every success, every achievement, every victory, every scientific discovery, all knowledge, all wisdom, all happiness, all virtue, are held to issue directly from his leadership and inspiration.'
		)

	useEffect(() => {
		set_message(message)
	})

	return (
		<div className={center_vertical}>
			<Marquee>THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU </Marquee>
			<BeegText>THE MINISTRY OF TRUTH</BeegText>
			<div className={border}>
				<Image className={big_brother_style} width={400} height={300} src='/big_brother_screen.gif' alt='Big Brother' />
				<p ref={input_ref} className={message_style} onInput={() => set_message(input_ref.current!.textContent ?? '')} contentEditable>{message}</p>
			</div>
			<Marquee>THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU </Marquee>
		</div>
	)
}
