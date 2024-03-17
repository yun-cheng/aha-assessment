import type { ReactElement } from 'react'

type Props = {
	error?: Error
}

export default function LoadingOrError({
	error = undefined
}: Props): ReactElement {
	return (
		<div className='flex min-h-screen items-center justify-center'>
			<h1 className='text-xl' data-testid='LoadingOrError'>
				{error ? error.message : 'Loading...'}
			</h1>
		</div>
	)
}
