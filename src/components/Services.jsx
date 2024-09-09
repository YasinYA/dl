import {
	FaShippingFast,
	FaShip,
	FaDolly,
	FaWarehouse,
	FaBriefcase,
	FaFileAlt,
} from 'react-icons/fa'

const Services = () => (
	<>
		<div className='row mt-5' id='services'>
			<div className='col-md-12 px-5 py-5 bg-success'>
				<h1 className='text-center text-white'>SERVICES</h1>
				<div className='row mt-5 text-center'>
					<div className='col-md-2'>
						<FaDolly className='mb-4 text-white' size='40' />
						<p className='text-white lead'>Shipping</p>
					</div>
					<div className='col-md-2'>
						<FaShip className='mb-4 text-white' size='40' />
						<p className='text-white lead'>Port Operations</p>
					</div>
					<div className='col-md-2'>
						<FaShippingFast className='mb-4 text-white' size='40' />
						<p className='text-white lead'>Transportation</p>
					</div>
					<div className='col-md-2'>
						<FaBriefcase className='mb-4 text-white' size='40' />
						<p className='text-white lead'>Custom Advisory & Clearance</p>
					</div>
					<div className='col-md-2'>
						<FaFileAlt className='mb-4 text-white' size='40' />
						<p className='text-white lead'>Documentation & Licensing</p>
					</div>
					<div className='col-md-2'>
						<FaWarehouse className='mb-4 text-white' size='40' />
						<p className='text-white lead'>Warhousing & Inventory</p>
					</div>
				</div>
			</div>
		</div>
	</>
)

export { Services }
