import Divider from 'components/common/Divider'
import Input from 'components/common/Input'
import LargeButton from 'components/common/LargeButton'
import type { ReactElement } from 'react'
import cn from 'utils/cn'

export default function HomePage(): ReactElement {
	return (
		<div className='mx-auto h-screen max-w-[805px]'>
			<div
				className={cn(
					'h-full px-5 pt-[70px] sm:px-10 sm:pt-[54px]',
					'flex flex-col'
				)}
			>
				<div className='grow'>
					<h2 className='text-2xl/normal'>Search</h2>
					<Input className='mt-4 sm:mt-5' placeholder='Keyword' />
					<Divider className='mt-[30px] hidden sm:block' />
				</div>
				<div
					className={cn(
						'mt-7 pb-[90px] sm:pb-[87px]',
						'flex flex-col items-center sm:items-start'
					)}
				>
					<Divider className='block sm:hidden' />
					<LargeButton className='mt-20'>SEARCH</LargeButton>
				</div>
			</div>
		</div>
	)
}
