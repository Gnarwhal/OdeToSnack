import {
	marquee_container,
	marquee_content,
} from './Marquee.css'

export default function Marquee({ children }: { children: React.ReactNode }) {
	return (
		<div className={marquee_container}>
			<p className={marquee_content}>{children}</p>
			<p className={marquee_content}>{children}</p>
		</div>
	)
}