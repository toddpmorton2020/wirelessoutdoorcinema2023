import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const AboutPage = () => (
  <Layout>
       
       <Breadcrumbs />    
      <div className="max-w-4xl mx-auto top-heading px-5">
        <h1 className="text-orange-500 xl:text-70 md:text-5xl text-4xl my-6">
          <span className="about">About</span>
        </h1>
      </div>
      {/* </div> */}
      <div className="max-w-4xl mx-auto px-5">
        <StaticImage src="../assets/images/todd-morton-founder.png" alt="" className="w-full" />
        <p className="text-neutral-600 sm:text-lg text-base pt-2 max-w-full">
          Todd Morton, founder of the Wireless Outdoor Cinema Company.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mobile-padding px-5">
        <div className="mt-6">
          <p className="mb-6 max-w-full sm:text-lg text-base">
            Welcome! Thank you for stopping by – I appreciate your interest in
            learning more about me and my Wireless Outdoor Cinema business.
          </p>
          <h2 className="xl:text-50 lg:text-4xl text-3xl font-bold mb-4">My Background</h2>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            I’m originally from Vermont, and growing up; I split my time between
            Vermont and Maine.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            When I was young and going through school, I learned all about the
            construction trade working for my neighbors who were home builders.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            I took business and marketing courses at Champlain College in
            Burlington, Vermont, to help expand my business knowledge. After
            college, I self-taught myself all about the emerging internet in the
            mid-90s and built my first website, while starting to learn about
            search engine optimization and how to get websites found online.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            Then I moved into the Internet Marketing field and had the
            opportunity to work for some well-known high technology companies
            such as Lycos – the internet search company (remember the Black
            Lab?) and Dragon Software (the voice-to-text software), a division
            of Nuance Communications – now owned by Microsoft.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            After 25 years of working in the Internet Marketing field, my desire
            to build and create things frequently occupied my thoughts. I
            decided to take time off from the corporate world and strategized on
            my next career move. I knew I wanted to work for myself and be
            outside in nature versus being tethered to a desk in an unhealthy
            corporate environment.
          </p>
          <div className="xl:pt-4 max-w-full">
            <StaticImage src="../assets/images/second.png" alt="" className="w-full" />
            <p className="text-neutral-600 sm:text-lg text-base pt-2 max-w-full">
              Todd Morton, owner of the Wireless Outdoor Cinema Company
              preparing cuts on table saw at his property in Bridgton, ME.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-orange-1000 py-6 text-center md:hidden block">
        <div className="mx-auto px-5 text-lg sm:text-3xl pt-3 pb-6 text-white when-build">
          When I built my first outdoor movie theater in my backyard, I knew
          other homeowners would love this as much as I do. Today, I am
          providing big-screen entertainment to homeowners and businesses and
          passionate about what I do.
        </div>
        {/* <StaticImage
          src="../assets/images/signature_white.png"
          className="mt-3 signature-white hidden"
        /> */}
        <StaticImage
          src="../assets/images/signature_black.png"
          className="sm:w-3/12 w-1/2 mt-3 mx-auto signature-black"
        />
      </div>
      <div className="max-w-4xl px-5 mx-auto mobile-padding">
        <div className="mt-6">
          <h2 className="xl:text-50 lg:text-4xl text-3xl font-bold mb-4">
            The Outdoor Cinema Solution
          </h2>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            My entrepreneurial wheels started to turn. I wanted to set up an
            outdoor movie theater in my backyard for years and started
            researching online companies that provided outdoor cinemas.
            Unfortunately, the companies I found online only sold inflatable air
            screen cinemas and wanted a better solution that was easy to set up
            and start watching without a lengthy setup. I spent two years
            researching and testing different outdoor cinema equipment and
            fine-tuning my outdoor movie theater solution. Finally, I developed
            a simple to use, high-quality outdoor movie theater that could be
            used year-round – even in the cold winter months.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            I created a weather-resistant movie screen frame built from
            pressure-treated 4” x 4” wood posts and added post and beam hardware
            so it would never rust. The final product is strong, durable, can
            handle any weather condition Mother Nature throws at it and looks
            fantastic on my property. The movie screen frame never has to be
            broken down and stays up for year-round use, making it easy to
            attach and remove the cinematic screen when you want to watch
            movies. After a year of designing and building various frame
            systems, I developed one that I knew homeowners would love.
          </p>
        </div>
      </div>
      <div className="">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile mobile-tree"
          // style={{ backgroundImage: `url(${frameMobile})` }}
        />
      </div>
      <div className="max-w-4xl px-5 mx-auto desktop">
        <StaticImage src="../assets/images/third.png" alt="" className="w-full" />
        <p className="text-neutral-600 sm:text-lg text-base pt-2 max-w-full">
          New Timberline Outdoor Cinema 150” Big Moose wired option package
          located on site of the Wireless Outdoor Cinema Company property in
          Bridgton, ME.
        </p>
      </div>
      <div className="max-w-4xl px-5 mx-auto mobile-padding">
          <p className="mb-4 max-w-full sm:text-lg text-base">
            After developing a solid frame system, the next challenge was
            figuring out how to organize all of my cinema equipment, such as the
            projector, DVD player, streaming media player, digital tuner,
            transmitter, speakers, and more. I searched endlessly online for an
            outdoor projector and equipment stand solution and only found tripod
            projector stands with enough room to hold an outdoor projector and
            nothing else.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            Discouraged with the results I found online for projector stand
            solutions, I began designing various outdoor projector stands that
            could hold all of the cinema electronic components on. I built over
            ten different projector stand models and tested them over a year.
            The final result was a beautiful cedar wood projector and equipment
            stand that neatly organized all of my cinema equipment. In addition,
            the projector stand is lightweight, easy to carry,
            weather-resistant, and has an adjustable projector shelf to get the
            proper viewing angle to reach the cinematic screen – the only one of
            its kind on the market.
          </p>
      </div>
      <div className="">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile standMobile"
          // style={{ backgroundImage: `url(${standMobile})` }}
        />
      </div>
      <div className="max-w-4xl px-5 mx-auto xl:pt-4 desktop">
        <StaticImage src="../assets/images/fourth.png" alt="" className="w-full" />
        <p className="text-neutral-600 sm:text-lg text-base pt-3 max-w-full">
          New Outdoor Projector Stand located on site of the Wireless Outdoor
          Cinema Company property in Bridgton, ME.
        </p>
      </div>
      <div className="max-w-4xl px-5 mx-auto mobile-padding thankyou">
        <div className="mt-6">
          <p className="mb-4 max-w-full sm:text-lg text-base">
            The cinema equipment stays on the projector stand and never needs to
            be removed - similar to an entertainment center inside your home.
            Store the projector stand with everything on it inside your house,
            and when you want to have a movie night, carry the stand outside,
            power it on, and start watching immediately. After the movie, you’ll
            need to take the projector stand back inside, as the cinema
            equipment is not waterproof.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            I’ve been thrilled with the positive feedback on my wireless outdoor
            cinema business from customers, family, friends, and the media. I
            hope we get an opportunity to get to know each other and explore the
            possibilities of building your very own dream backyard movie
            theater.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
            Thanks for taking the time to read about me, and don’t hesitate to
            reach out with any questions you might have.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">My best,</p>
          <StaticImage src="../assets/images/signature_black.png" className="mb-16" />
        </div>
      </div>
    </Layout>
)


export default AboutPage
