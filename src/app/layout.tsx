import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './global.css'

const comic_sans = localFont({
	src:    './comic.ttf',
	weight: '100',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={comic_sans.className}>{children}</body>
		</html>
	)
}
