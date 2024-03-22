import ResultItem from 'components/result/ResultItem'
import ResultItemSkeleton from 'components/result/ResultItemSkeleton'
import useFetchResults from 'hooks/useFetchResults'
import { useEffect, useRef, type ReactElement } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import cn from 'utils/cn'
import ArrowBackSvg from '../icons/ArrowBack.svg?react'

export default function ResultsPage(): ReactElement {
	const containerRef = useRef<HTMLDivElement>(null)

	const { ref, inView } = useInView({
		root: containerRef.current,
		rootMargin: '0px 0px 250px'
	})

	const { data, isFetching, fetchNextPage } = useFetchResults()

	useEffect(() => {
		if (inView) {
			void fetchNextPage()
		}
	}, [fetchNextPage, inView])

	return (
		<div className={cn('h-screen px-[7px] sm:px-[14px]', 'flex flex-col')}>
			<div ref={containerRef} className='mt-[70px] overflow-y-auto sm:mt-0'>
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
						{data?.map(result => (
							<ResultItem key={result.id} result={result} />
						))}
						{!!isFetching &&
							Array.from({ length: 9 }).map((_, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<ResultItemSkeleton key={index} />
							))}
					</div>
				</div>
				<div ref={ref} className={cn('w-full', { hidden: isFetching })} />
			</div>
		</div>
	)
}
