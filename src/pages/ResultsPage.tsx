import LargeButton from 'components/common/LargeButton'
import ResultItem from 'components/result/ResultItem'
import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import cn from 'utils/cn'
import ArrowBackSvg from '../icons/arrowBack.svg?react'

export default function ResultsPage(): ReactElement {
	return (
		<div className={cn('h-screen px-[7px] sm:px-[14px]', 'flex flex-col')}>
			<div className='mt-[70px] overflow-y-auto sm:mt-0'>
				<div className='mx-auto max-w-[814px]'>
					<div
						className={cn(
							'pl-[13px] pr-2 pt-5 sm:pb-10 sm:pl-12 sm:pr-[41px] sm:pt-[92px]',
							'grid grid-cols-[repeat(auto-fit,minmax(219px,1fr))] justify-center gap-x-[34px] gap-y-10'
						)}
					>
						<div className='relative col-span-full -mb-4'>
							<Link
								className='absolute -left-[38px] top-3 hidden sm:block'
								to='/'
							>
								<ArrowBackSvg />
							</Link>
							<h2
								className={cn(
									'translate-y-[1px]',
									'text-2xl/normal sm:pl-[7px] sm:text-[30px] sm:tracking-25'
								)}
							>
								Results
							</h2>
						</div>
						{Array.from({ length: 9 }).map((_, index) => (
							<ResultItem
								// eslint-disable-next-line react/no-array-index-key
								key={index}
								result={{
									id: index.toString(),
									name: 'This is a title',
									username: 'username',
									avater: 'https://i.imgur.com/DqZcJvD.png',
									isFollowing: false
								}}
							/>
						))}
						<LargeButton className='col-span-full mb-10'>MORE</LargeButton>
					</div>
				</div>
			</div>
		</div>
	)
}
