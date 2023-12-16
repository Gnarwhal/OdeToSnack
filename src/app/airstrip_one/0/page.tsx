import { Metadata } from 'next'
import Image from 'next/image'
import Marquee from './components/Marquee'
import BeegText from './components/BeegText'
import {
	center_vertical,
	big_brother_style,
	cats_div,
	subcats_div,
	reverse_subcats_div,
	cat,
} from './page.css'

export const metadata: Metadata = {
	title: 'The Snack is Watching You',
	description: 'The Snack is Watching You',
}

export default function Home() {
	return (
		<div className={center_vertical}>
			<Marquee>THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU </Marquee>
			<BeegText>THE SNACK IS</BeegText>
			<Image className={big_brother_style} width={256} height={256} src='/big_brother.png' alt='Big Brother' />
			<BeegText>WATCHING YOU</BeegText>
			<div className={cats_div}>
				<div className={subcats_div}>
					<Image className={cat} width={128} height={128} src='/praising_cat.gif' alt='Cat praising Big Brother' />
					<Image className={cat} width={128} height={128} src='/praising_cat.gif' alt='Cat praising Big Brother' />
					<Image className={cat} width={128} height={128} src='/praising_cat.gif' alt='Cat praising Big Brother' />
				</div>
				<div className={reverse_subcats_div}>
					<Image className={cat} width={128} height={128} src='/praising_cat.gif' alt='Cat praising Big Brother' />
					<Image className={cat} width={128} height={128} src='/praising_cat.gif' alt='Cat praising Big Brother' />
					<Image className={cat} width={128} height={128} src='/praising_cat.gif' alt='Cat praising Big Brother' />
				</div>
			</div>
			<Marquee>THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU THE SNACK IS WATCHING YOU </Marquee>
		</div>
	)
}
