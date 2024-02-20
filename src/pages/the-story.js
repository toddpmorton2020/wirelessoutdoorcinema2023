import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const AboutPage = () => (
  <Layout>
       
       <Breadcrumbs page_title={'The Story'}/>
       <div className="h-9"></div>
      <div className="max-w-4xl mx-auto top-heading px-5">
        <h1 className="text-orange-500 xl:text-70 text-orange-500 text-5xl md:text-5xl font-medium my-6">
        <span className="text-black">The</span> Story
        </h1>
      </div>
      {/* </div> */}
      <div className="max-w-4xl mx-auto px-5">
        <StaticImage src="../assets/images/bridgton-twin-drive-in-861px-x-460px.png" alt="" className="w-full rounded-lg shadow-xl" />
        <p className="text-neutral-600 sm:text-lg text-base pt-2 max-w-full">
        Bridgton Twin Drive-In Theatre in beautiful Bridgton, Maine.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mobile-padding px-5">
        <div className="mt-6">
          <p className="mb-4 max-w-full sm:text-lg text-base">
          I will never forget the first time my parents took me to the drive-in movie theatre. Butch Cassidy and the Sundance Kid was playing at the Bridgton Twin Drive-In Theatre in Bridgton, Maine. It was a warm summer night; stars filled the sky, and people sat on the grass with blankets and in the back of pickup trucks with sleeping bags and pillows. I remember the excitement and how magical the evening was.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
          That childhood experience stayed with me throughout my adult life. I looked forward to the opening of the Bridgton Twin Drive-In Theatre each spring and lamented its closing every fall.  But I wanted more; I wanted to bring that same magical experience of watching movies outdoors to my own backyard to enjoy whenever I wanted, regardless of the time of year. I started researching residential outdoor movie theater setups online and found only two types existed: the aluminum tripod frame and screen system and the inflatable air screen system.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
          First, I ordered one of the aluminum tripod frame and screen systems. I liked the light weight of the aluminum telescopic tripod frame and how easy it was to set up, which took only about 10-15 minutes. It was only after installing it on my lawn that I realized the tripod frame system only works on flat surfaces. Unfortunately, the area where I wanted to set it up was not perfectly flat. I ended up returning the aluminum outdoor movie theater package the next day.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
          Next, I ordered one of the inflatable outdoor movie theater packages. I liked that the inflatable air screen setup had fewer parts than the aluminum tripod frame system. But after over 30 minutes of running my air compressor to blow up the air screen, I realized that although there was nothing inherently wrong with the setup, I didn’t like how it looked. It just wasn’t the look I was going for in my own backyard, even temporarily. Feeling disappointed, I returned the inflatable air screen outdoor movie theater setup.
          </p>
      </div>
      </div>
      <div className="mt-8 bg-orange-1000 py-6 text-center md:hidden block">
        <div className="mx-auto px-5 text-lg sm:text-3xl pt-3 pb-6 text-white when-build">
        Four years later, I still feel fortunate and grateful for all the positive feedback I have received from customers, family, friends, and the media alike. I hope you and I get to know each other and explore the possibilities of building your dream backyard movie theater.
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
      </div>
      </div>
      <div className="">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile mobile-tree"
          // style={{ backgroundImage: `url(${frameMobile})` }}
        />
      </div>
      <div className="max-w-4xl px-5 mx-auto desktop">
        <StaticImage src="../assets/images/outdoor-movie-theater-winter-about-861px-x-460px.png" alt="" className="w-full shadow-xl" />
        <p className="text-neutral-600 sm:text-lg text-base pt-2 max-w-full">
        Watching Atomic Blonde on my wireless outdoor movie theater in the winter of 2020.
        </p>
      </div>
      <div className="max-w-4xl px-5 mx-auto mobile-padding">
          <p className="mb-4 max-w-full sm:text-lg text-base">
          Then one night while I was enjoying a campfire in my backyard and wishing I didn’t have to go back inside to watch a movie on my TV, and thought, why not build my own? I started designing and building different prototype frame systems in my wood shop. Eventually, I came up with a design I liked, set it up next to my bonfire pit, and loved it. The pressure-treated frame system I built had a rustic aesthetic look and blended perfectly with my wooded backyard. My friends and family also loved the wireless outdoor movie theater I had built and watched movies by the bonfire whenever the weather permitted. I wanted to bring that same excitement and passion to other homeowners, so I started the Wireless Outdoor Cinema Company.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">
          Four years later, I still feel fortunate and grateful for all the positive feedback I have received from customers, family, friends, and the media alike. I hope you and I get to know each other and explore the possibilities of building your dream backyard movie theater.
          </p>
      </div>
      <div className="">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile standMobile"
          // style={{ backgroundImage: `url(${standMobile})` }}
        />
      </div>
      <div className="max-w-4xl px-5 mx-auto xl:pt-4 desktop">
        <StaticImage src="../assets/images/todd-morton-winter-story-861px-x-460px.png" alt="" className="w-full shadow-xl" />
        <p className="text-neutral-600 sm:text-lg text-base pt-3 max-w-full">
        Todd Morton, founder of the Wireless Outdoor Cinema Company located in Bridgton, Maine.
        </p>
      </div>
      <div className="max-w-4xl px-5 mx-auto mobile-padding thankyou">
        <div className="mt-6">
          <p className="mb-4 max-w-full sm:text-lg text-base">
          My name is Todd Morton, and I build year-round outdoor movie theaters with the fastest and easiest setup available. I know you will love the experience of watching movies under the moon and stars in the privacy of your backyard as much as I do with my Timberline Series Outdoor Movie Theaters.
          </p>
          <p className="mb-4 max-w-full sm:text-lg text-base">My best,</p>
          <StaticImage src="../assets/images/signature-founder.png" className="mb-16" />
        </div>
      </div>
    </Layout>
)

export const Head = () => <Seo 
title="Wireless Outdoor Cinema Company - The Story" 
description="Introducing the Wireless Outdoor Cinema Company - a provider of residential outdoor movie theaters." />
export default AboutPage
