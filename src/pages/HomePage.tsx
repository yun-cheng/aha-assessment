import Divider from 'components/common/Divider'
import Input from 'components/common/Input'
import LargeButton from 'components/common/LargeButton'
import PageSizeSlider from 'components/search/PageSizeSlider'
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
					<h2 className='mt-[30px] text-2xl/normal'># Of Results Per Page</h2>
					<div className='mt-4 flex h-[50px] sm:mt-5'>
						<div className='text-5xl font-bold'>30</div>
						<div className='ml-[10px] mt-[22px] tracking-15'>results</div>
					</div>
					<div className='mt-[5px]'>
						<PageSizeSlider />
					</div>
					<Divider className='mt-[21px] hidden sm:block' />
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
