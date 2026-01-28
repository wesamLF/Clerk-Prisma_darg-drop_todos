import CTAsection from './CTAsection'
import FeaturesAccordion from './FeaturesAccordion'
import HeroSection from './HeroSection'

const Home = async () => {
    return (
        <main>
            <HeroSection />
            <FeaturesAccordion />
            <CTAsection />
            
        </main>
    )
}

export default Home