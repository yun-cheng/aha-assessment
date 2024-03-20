import type { ReactElement } from 'react'
import cn from 'utils/cn'
import Logo from '../Logo'
import NavButton from './NavButton'

export default function NavBar(): ReactElement {
	return (
		<>
			<div
				className={cn(
					'fixed z-[1100] h-[70px] w-full sm:hidden',
					'flex items-center bg-background'
				)}
			>
				<Logo className='ml-[21px]' />
			</div>
			<div className='hidden min-w-20 bg-[#1b1b1b] sm:block'>
				<div className='ml-[1px] mt-[37px] flex justify-center'>
					<Logo />
				</div>
				<NavButton className='ml-[2px] mt-[43px]' to='/' name='Home' isActive />
				<NavButton
					className='ml-[2px] mt-[22px]'
					to='/tags'
					name='Tags'
					isActive={false}
					hasNotification
				/>
			</div>
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
		</>
	)
}
