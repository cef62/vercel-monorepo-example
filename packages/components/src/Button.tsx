import { type ReactNode } from 'react'

export interface ButtonProps {
	children?: ReactNode
	onClick?: () => void
}

export function Button(props: ButtonProps) {
	const { children, onClick } = props

	return <button onClick={onClick}>{children}</button>
}
