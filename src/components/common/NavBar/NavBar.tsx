import { hasTagsNotificationAtom } from 'atoms/core'
import { useAtom } from 'jotai'
import { useEffect, type ReactElement } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import cn from 'utils/cn'
import ArrowBackSvg from '../../../icons/ArrowBack.svg?react'
import Logo from '../Logo'
import NavButton from './NavButton'

export default function NavBar(): ReactElement {
	const { pathname } = useLocation()
	const [searchParams] = useSearchParams()

	const [hasTagsNotification, setHasTagsNotification] = useAtom(
		hasTagsNotificationAtom
	)

	useEffect(() => {
		if (pathname === '/tags') {
			setHasTagsNotification(false)
		}
	}, [pathname, setHasTagsNotification])

	useEffect(() => {
		let title = 'Aha Front-End Assessment'
		if (pathname === '/tags') {
			title = `Tags - ${title}`
		} else if (pathname === '/results') {
			title = `${searchParams.get('keyword')} - ${title}`
		}
		document.title = title
	}, [pathname, searchParams])

	return (
		<>
			<div
				className={cn(
					'fixed z-[1100] h-[70px] w-full sm:hidden',
					'flex items-center bg-background'
				)}
			>
				{pathname === '/' && <Logo className='ml-[21px]' />}
				{pathname !== '/' && (
					<Link className='flex translate-y-px items-center pl-[24.5px]' to='/'>
						<ArrowBackSvg />
						<div className='ml-[19.88px] text-2xl/normal'>Home Page</div>
					</Link>
				)}
			</div>
			<div className='hidden min-w-20 bg-[#1b1b1b] sm:block'>
				<div className='ml-px mt-[37px] flex justify-center'>
					<Logo />
				</div>
				<NavButton
					className='ml-0.5 mt-[43px]'
					to='/'
					name='Home'
					isActive={['/', '/results'].includes(pathname)}
				/>
				<NavButton
					className='ml-0.5 mt-[22px]'
					to='/tags'
					name='Tags'
					isActive={pathname === '/tags'}
					hasNotification={hasTagsNotification}
				/>
			</div>
			{pathname === '/' && (
				<div
					className={cn(
						'fixed bottom-0 h-[66px] w-full sm:hidden',
						'bg-background/20 shadow-[inset_0_0.5px_0_0_rgba(0,0,0,0.8)] backdrop-blur-[27.1828px]'
					)}
				>
					<div className='flex h-full items-center justify-center'>
						<NavButton className='' to='/' isActive />
						<NavButton className='ml-[50px]' to='/tags' isActive={false} />
					</div>
				</div>
			)}
		</>
	)
}
