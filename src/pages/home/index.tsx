import Appbar from "../../components/appbar"
import Footer from "../../components/footer"
import CollaborationSection from "../../components/landing/collabration"
import FarmingResolutionSection from "../../components/landing/farmingResolutionSection"
import FeaturesSection from "../../components/landing/featuresSection"
import FootPrintSection from "../../components/landing/footprintsSection"
import GetInTouchSection from "../../components/landing/getInTouchSection"
import GreenBoxScrollingSection from "../../components/landing/greenBoxScrollingSection"
import Hero from "../../components/landing/heroSection"
import InnovationSection from "../../components/landing/innovationSection"
import JoinUsSection from "../../components/landing/joinusSection"
import MilestonesSection from "../../components/landing/milestonesSection"
import OurGoalSection from "../../components/landing/ourGoalSection"
import OurVisionSection from "../../components/landing/ourVisionSection"
import ReviewsSlider from "../../components/landing/reviewsSection"
import StoriesSection from "../../components/landing/storiesSections"

const Home = () => {
    return (
        <div>
            <Appbar />
            <Hero />
            <FarmingResolutionSection />
            <GreenBoxScrollingSection />
            <MilestonesSection />
            <FootPrintSection />
            <OurGoalSection />
            <OurVisionSection />
            <ReviewsSlider />
            <CollaborationSection />
            <StoriesSection />
            <InnovationSection />
            <JoinUsSection />
            <FeaturesSection />
            <GetInTouchSection />
            <Footer />
        </div>
    )
}

export default Home