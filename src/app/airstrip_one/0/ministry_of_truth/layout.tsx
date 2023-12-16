import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'The Ministry of Truth',
	description: 'The Ministry of Truth',
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}