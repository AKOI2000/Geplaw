import CTA from "./components/CTA/CTA"
import About from "./Sections/About/About"
import Expertise from "./Sections/Expertise/Expertise"
import Hero from "./Sections/Hero/Hero"
import Insights from "./Sections/Insights/Insights"
import Intro from "./Sections/Intro/Intro"
import Team from "./Sections/Team/Team"

function page() {
    return (
        <>
            <Hero />
            <Intro />
            <About />
            <Expertise />
            <Insights />
            <Team />
            <CTA />
        </>
    )
}

export default page
