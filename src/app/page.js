import { Header, AboutSection, Services, Tech, Footer } from '../components'

export default function Home() {
	return (
		<div className='container-fluid px-0'>
			<Header />
			<AboutSection />
			<Services />
			<Tech />
			<Footer />
		</div>
	)
}
