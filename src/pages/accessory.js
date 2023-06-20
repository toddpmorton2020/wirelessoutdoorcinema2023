import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const AccessoryPage = () => {
    return (
        <Layout>
            <Breadcrumbs />


            <div className="accessory">
                <div class="overflow-hidden">
                    <div className="max-w-5xl mx-auto px-5">
                        <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
                            <StaticImage
                                className="w-full h-full object-cover "
                                src="../assets/images/cinema-accessories.png"
                            />
                        </div>
                        <h1 className="text-5xl privacy-heading mb-0 leading-none lg:leading-tight mt-8 acc-margin">
                            Outdoor Cinema{" "}
                            <span className="text-orange-500">Accessories</span>
                        </h1>
                        <h2 className="acc-margin hide text-3xl leading-tight pb-4">
                            Get the most out of your outdoor movie theater
                        </h2>
                    </div>
                </div>
                <div className="text-center mt-2 hide max-w-7xl px-5 mx-auto">
                    <StaticImage src="../assets/images/cinema-accessories-main.jpg" alt="" className="mx-auto" />
                </div>
                <div>
                    <div className="max-w-5xl px-5 mx-auto accessory-padding">
                        {/* <h2 className="xl:text-3xl sm:text-2xl mb-4 news-subtitle hide">
                Get the most out of your outdoor movie theater
              </h2> */}
                        <p className="text-gray-700 text-sm pt-2 hide max-w-full mb-0">
                            My family sitting around a bonfire watching The Hitman's Wife's
                            Bodyguard movie on the Timberline Outdoor Cinema 150" Big Moose
                            model in Bridgton, Maine.
                        </p>
                        <p className="pt-6 max-w-full mb-0">
                            I’ve gathered a list of great outdoor accessories to help you
                            enjoy your outdoor movie experience. My movie theaters are
                            designed for year-round use and have included items to keep you
                            cozy warm, and comfortable. I do not sell these items on my
                            website, nor do I get paid a commission for promoting these
                            products and only providing you with some useful items to
                            compliment my cinema packages that I think you would enjoy based
                            on amazon reviews.
                        </p>
                    </div>
                    <div className="py-12 flex flex-col lg:flex-row max-w-5xl px-5 mx-auto accessory-padding">
                        <div className="flex-1 pl-0 lg:pr-12 text-center md:text-left image-accessory">
                            <StaticImage src="../assets/images/fire_pit.png" />
                        </div>
                        <div className="flex-1 mt-6 lg:mt-0 pr-0">
                            <h3 className="outdoor-subfont text-3xl mb-6 leading-tight">
                                Outland Living 883 Mega Outdoor Propane Gas 24-Inch diameter
                                Fire Pit with 58,000 BTU
                            </h3>
                            <p className="mb-4 max-w-full">
                                What I like about this portable outdoor propane fire pit is
                                that it’s simple and fast to get direct heat for movie night
                                without worrying about getting a wood fire started and
                                maintaining it throughout the movie.
                            </p>
                            <p>
                                And with close to 6,000 5-star reviews on Amazon, the reviews
                                speak for themselves. This product is made by Outland Living
                                and sold on Amazon.
                            </p>
                            <p className="max-w-full mb-0">
                                Get at{" "}
                                <Link
                                    to="accessory-link"
                                    href="https://www.amazon.com/Outland-Firebowl-883-Resistant-Diameter/dp/B00FWKVGQ0/ref=pd_lpo_3?pd_rd_i=B00FWKVGQ0&psc=1"
                                    target="_blank"
                                    className="font-normal"
                                >
                                    Amazon
                                </Link>{" "}
                                for just $162.
                            </p>
                        </div>
                    </div>
                    <div className="gray-back bg-gray-100">
                        <div className="py-12 flex flex-col-reverse lg:flex-row max-w-5xl px-5 mx-auto accessory-padding">
                            <div className="flex-1 pr-0 lg:pr-12">
                                <h3 className="outdoor-subfont mb-6 text-3xl leading-tight">
                                    Outdoor Propane Patio Heater with wheels - 46,000 BTU
                                </h3>
                                <p className="mb-4 max-w-full">
                                    As we start getting closer to the colder months, compliment
                                    your firepit with this great propane heat lamp. During fall
                                    and winter, I use a heat lamp to keep my head and back warm
                                    while watching movies outside. The firepit will keep the
                                    front side of your body warm, and your backside will get
                                    cold.
                                </p>
                                <p className="max-w-full mb-0">
                                    And with close to 6,000 4-1/2-star reviews on Amazon, this
                                    is a popular choice. This product is made and sold on{" "}
                                    <Link
                                        to="accessory-link"
                                        href="https://www.amazon.com/AmazonBasics-Commercial-Heater-Havana-Bronze/dp/B00LILH3V4/ref=sr_1_7?dchild=1&keywords=Propane+Heat+Lamps&qid=1628958111&refinements=p_72%3A2661618011&rnid=2661617011&s=lawn-garden&sr=1-7"
                                        target="_blank"
                                        className="font-normal"
                                    >
                                        Amazon
                                    </Link>{" "}
                                    for just $176.
                                </p>
                            </div>
                            <div className="flex-1 mb-6 lg:mb-0 pl-0 text-center md:text-left image-accessory">
                                <StaticImage src="../assets/images/heat_lamp.png" />
                            </div>
                        </div>
                    </div>

                    <div className="py-12 flex flex-col lg:flex-row max-w-5xl px-5 mx-auto accessory-padding">
                        <div className="flex-1 pl-0 lg:pr-12 text-center md:text-left image-accessory">
                            <StaticImage src="../assets/images/thermail.png" />
                        </div>
                        <div className="flex-1 mt-6 lg:mt-0 pr-0">
                            <h3 className="outdoor-subfont mb-6 text-3xl leading-tight">
                                Wool Blankets 4 lbs., warm, heavy, washable, large - great for
                                movies outside
                            </h3>
                            <p className="mb-4 max-w-full">
                                Get one of the heaviest and warmest outdoor blankets available
                                to keep you warm while enjoying a movie outside when
                                temperatures start falling at night.
                            </p>
                            <p className="mb-4 max-w-full">
                                With close to 500 excellent 5-star reviews on Amazon, you know
                                this blanket keeps people warm when it’s cold outside. Just
                                $45.
                            </p>
                            <p className="max-w-full mb-0">
                                Get at{" "}
                                <Link
                                    to="https://www.amazon.com/Arcturus-Mt-Rainier-Wool-Blanket/dp/B08KQ563SG/ref=sr_1_2_sspa?dchild=1&keywords=Arcturus+Military+Wool+Blanket&qid=1628959479&sr=8-2-spons&psc=1&smid=A3JS2P3BKBPG75&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNUw3MEpDOTZMS09EJmVuY3J5cHRlZElkPUEwMTU2MTI1MzNLUzFHMklDNkJGOSZlbmNyeXB0ZWRBZElkPUEwNjEzNTUyMVdLNlVCRkFYVlQySCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                                    className="accessory-link font-normal"
                                    target="_blank"
                                >
                                    Amazon
                                </Link>{" "}
                                for just $45.
                            </p>
                        </div>
                    </div>
                    <div className="gray-back bg-gray-100">
                        <div className="py-12 flex flex-col-reverse lg:flex-row max-w-5xl px-5 mx-auto accessory-padding">
                            <div className="flex-1 pr-0 lg:pr-12">
                                <h3 className="outdoor-subfont mb-6 text-3xl leading-tight">
                                    Better Homes & Gardens Azalea Ridge Outdoor Conversation Set
                                    with orange cushions
                                </h3>
                                <p className="mb-4 max-w-full">
                                    Let’s talk about comfort while watching movies outside
                                    around the fire. I personally own this 4-piece set, and it
                                    has lasted over four years and still looks brand new. I love
                                    this set and it’s perfect for any occasion.
                                </p>
                                <p className="mb-4 max-w-full">
                                    There’s no need to spend thousands of dollars on a wicker
                                    patio set when you can get this beautiful collection for
                                    under $600.
                                </p>
                                <p className="max-w-full mb-0">
                                    With 4-1/2 star ratings across the internet, this wicker
                                    furniture set has the best price at{" "}
                                    <Link
                                        to="https://www.walmart.com/ip/Better-Homes-Gardens-Azalea-Ridge-Outdoor-Conversation-Set-with-Orange-Cushions/22223046"
                                        className="accessory-link font-normal"
                                        target="_blank"
                                    >
                                        Walmart
                                    </Link>
                                    .
                                </p>
                            </div>
                            <div className="flex-1 mb-6 lg:mb-0 pl-0 text-center md:text-left image-accessory">
                                <StaticImage src="../assets/images/wicker.png" />
                            </div>
                        </div>
                    </div>

                    <div className="py-12 flex flex-col lg:flex-row max-w-5xl px-5 mx-auto accessory-padding">
                        <div className="flex-1 pl-0 lg:pr-12 text-center md:text-left image-accessory">
                            <StaticImage src="../assets/images/popcorn.png" />
                        </div>
                        <div className="flex-1 mt-6 lg:mt-0 pr-0">
                            <h3 className="outdoor-subfont mb-6 text-3xl leading-tight">
                                Coleman Handheld Popcorn Popper with long handle
                            </h3>
                            <p className="mb-4 max-w-full">
                                Who doesn’t love popcorn with a movie? Coleman has done it
                                again and came out with this great little handheld popcorn
                                popper to use while sitting around the fire and watching a
                                movie. Get one for everyone around the fire and watch it pop
                                right in front of your eyes over the flames.
                            </p>
                            <p className="mb-4 max-w-full">
                                What I like about the design of this popcorn popper is the
                                long handle that prevents your hand from burning over the open
                                flame. A cool addition to any firepit.
                            </p>
                            <p className="max-w-full mb-0">
                                Get at{" "}
                                <Link
                                    to="https://www.amazon.com/Coleman-2000016439-Popcorn-Popper/dp/B006J3EI7I"
                                    className="accessory-link font-normal"
                                    target="_blank"
                                >
                                    Amazon
                                </Link>{" "}
                                for just $26.
                            </p>
                        </div>
                    </div>
                    <div className="gray-back bg-gray-100">
                        <div className="py-12 flex flex-col-reverse lg:flex-row max-w-5xl px-5 mx-auto accessory-padding">
                            <div className="flex-1 mt-6 lg:mt-0 pr-0 lg:pr-12">
                                <h3 className="outdoor-subfont mb-6 text-3xl leading-tight">
                                    OneOdio A70 Bluetooth Over Ear Headphones, foldable, wired
                                    and wireless
                                </h3>
                                <p className="mb-4 max-w-full">
                                    Use these great wireless headphones if you have neighbors
                                    that are close by to ensure they don’t hear your movie
                                    outside late at night. These will only work with the ‘wired’
                                    Timberline Series Outdoor Cinema packages I offer on my
                                    website.
                                </p>
                                <p className="max-w-full mb-0">
                                    With over 6,000 great 4-1/2-star reviews on{" "}
                                    <Link
                                        to="https://www.amazon.com/OneOdio-Bluetooth-Headphones-Share-Port-Professional/dp/B07MQQS88Q/ref=sr_1_19?dchild=1&keywords=Wireless+Movie+headphones&qid=1628967354&s=electronics&sr=1-19"
                                        className="accessory-link font-normal"
                                        target="_blank"
                                    >
                                        Amazon
                                    </Link>
                                    , you can’t go wrong at $46 price point.
                                </p>
                            </div>
                            <div className="flex-1 pl-0 text-center md:text-left image-accessory">
                                <StaticImage src="../assets/images/headphones.png" />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default AccessoryPage