import Image from 'next/image'
import {
	center_vertical,
	marquee_container,
	marquee_content,
	beeg_container,
	beeg_foreground,
	beeg_background,
	big_brother_style,
	cats_div,
	subcats_div,
	reverse_subcats_div,
	cat,
	beeg_dummy,
} from './page.css'

function BeegText({ children }: { children: React.ReactNode }) {
	return (
		<div className={beeg_container}>
			<p className={beeg_background}>{children}</p>
			<p className={beeg_foreground}>{children}</p>
			<p className={beeg_dummy}     >{children}</p>
		</div>
	)
}

function Marquee({ children }: { children: React.ReactNode }) {
	return (
		<div className={marquee_container}>
			<p className={marquee_content}>{children}</p>
			<p className={marquee_content}>{children}</p>
		</div>
	)
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
