import { Link } from 'next/link'

const Nav = () => (
	<div className='container nav-wrapper'>
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img className='logo' src='/logo.png' alt='Duale International Logistics' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a href='/' className='nav-link'>
								HOME
							</a>
						</li>
						<li className='nav-item ms-2'>
							<a href='#about' className='nav-link'>
								ABOUT
							</a>
						</li>
						<li className='nav-item ms-2'>
							<a href='#services' className='nav-link'>
								SERVICES
							</a>
						</li>
						<li className='nav-item ms-2'>
							<a href='#contact' className='nav-link'>
								CONTACT US
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
)

export { Nav }
