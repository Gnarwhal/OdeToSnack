import {
	beeg_container,
	beeg_dummy,
	beeg_foreground,
	beeg_background,
} from './BeegText.css'

export default function BeegText({ children }: { children: React.ReactNode }) {
	return (
		<div className={beeg_container}>
			<p className={beeg_background}>{children}</p>
			<p className={beeg_foreground}>{children}</p>
			<p className={beeg_dummy}     >{children}</p>
		</div>
	)
}