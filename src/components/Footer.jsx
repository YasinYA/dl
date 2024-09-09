'use client'
const Footer = () => (
	<div className='row mt-5 pb-5 text-center' id='contact'>
		<div className='col-md-4'>
			<p>&copy; 2021. All rights are reserved</p>
		</div>
		<div className='col-md-4'>
			<p>
				<a href='tel:+252634105689' className='text-black'>
					{' '}
					+252634105689{' '}
				</a>
			</p>
		</div>
		<div className='col-md-4'>
			<p>
				<a href='mailto:yaad1970@gmail.com' className='text-black'>
					{' '}
					yaad1970@gmail.com{' '}
				</a>{' '}
				/{' '}
				<a href='mailto:dualehshipping1@outlook.com' className='text-black'>
					{' '}
					dualehshipping1@outlook.com{' '}
				</a>
			</p>
		</div>
	</div>
)

export { Footer }
