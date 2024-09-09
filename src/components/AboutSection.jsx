'use client'

const AboutSection = () => (
	<div className='mb-5' id='about'>
		<div className='row'>
			<div className='col-md-12 px-5 py-5 bg-success'>
				<h1 className='text-center text-white'>DISLS</h1>
			</div>
		</div>
		<div className='row mt-5 d-flex justify-content-center align-items-center'>
			<div className='col-md-6 d-flex flex-column align-items-center'>
				<img className='about-logo' src={'/logo.png'} alt='Logo' />
				<h3>Dualeh International Shipping & Logistics ( DISLS )</h3>
			</div>
			<div className='col-md-6 p-5 d-flex justify-content-center align-items-center'>
				<p className='lead'>
					Dualeh international shipping &amp; logistics services, was established in 2015,
					and plus eight years’ experience of transportations and has a comprehensive
					range of clearing, forwarding and transit services. Dualeh international
					shipping &amp; logistics agency is based Somaliland that offers car shipping,
					commercial goods shipping. We are Customs Clearing &amp; Forwarding Agent
					offering effective and reliable Customs Clearing Forwarding, shipping, regional
					transportation services and we have specialized transport services from
					Somaliland to Ethiopia to our clients. Right from brokerage, inspection to
					documentation and to final clearance and transportation. We promise our clients
					to adhere to the standards recommended by the industry and offer them with
					customized solutions.
				</p>
			</div>
		</div>

		<div className='row mt-5 d-flex justify-content-center align-items-center'>
			<div className='col-md-12'>
				<div className='row mb-5'>
					<div className='col-md-12 text-center'>
						<h3>Our Management Team</h3>
					</div>
				</div>
				<div className='row mt-5 text-center'>
					<div className='col-md-3'>
						<img src={'/ceo.jpeg'} className='team-photo mb-4 ' alt='CEO' />
						<h4>Yusuf Ahmed</h4>
						<p>CEO</p>
					</div>
					<div className='col-md-3'>
						<img src={'/cfo.jpeg'} className='team-photo mb-4 ' alt='CFO' />
						<h4>Mustafe Ahmed</h4>
						<p>CFO</p>
					</div>
					<div className='col-md-3'>
						<img src={'/mm.jpeg'} className='team-photo mb-4 ' alt='CMO' />
						<h4>Tanveer Ali</h4>
						<p>CMO</p>
					</div>
					<div className='col-md-3'>
						<img src={'/cto.jpg'} className='team-photo mb-4 ' alt='CTO' />
						<h4>Yasin Yusuf</h4>
						<p>CTO</p>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export { AboutSection }
