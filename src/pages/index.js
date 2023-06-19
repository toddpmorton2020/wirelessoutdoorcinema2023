import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Home/HeroSection"
import VideoSection from "../components/Home/VideoSection"
import WhatyougetSection from "../components/Home/WhatyougetSection"
import PerfectForSection from "../components/Home/PerfectForSection"
import PowerfulCinemaSection from "../components/Home/PowerfulCinemaSection"
import FrameSystemsSection from "../components/Home/FrameSystemsSection"
import PowerfulHangingSection from "../components/Home/PowerfulHangingSection"
import CustomProjectorSection from "../components/Home/CustomProjectorSection"
import ImpressiveOutdoorSection from "../components/Home/ImpressiveOutdoorSection"
import ComparisonSection from "../components/Home/ComparisonSection"
import FaqSection from "../components/Home/FaqSection"
import BannerCalloutSection from "../components/Home/BannerCalloutSection"
import QuoteSection from "../components/Home/QuoteSection"
import CopySection from "../components/Home/CopySection"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <VideoSection />
    <WhatyougetSection />
    <PerfectForSection />
    <PowerfulCinemaSection />
    <FrameSystemsSection />
    <PowerfulHangingSection />
    <CustomProjectorSection />
    <ImpressiveOutdoorSection />
    <ComparisonSection />
    <FaqSection />
    <BannerCalloutSection />
    <QuoteSection />
    <CopySection />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
