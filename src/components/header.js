import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { globalHistory } from "@reach/router"
import InstagramIcon from '../../src/assets/images/icons/InstagramIcon'
import TiktokIcon from '../assets/images/icons/TiktokIcon'

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const [openW, setOpenW] = useState(false)
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setOpen(false)
    })
  }, [setOpen])

  const {
    LogoImage,
    CellImg,
    CellOrangeImg,
    FacebookImg,
    FacebookOrangeImg,
    LinkedinWhiteImg,
    LinkedinOrangeImg,
  } = useStaticQuery(
    graphql`
      query {
        LogoImage: file(
          relativePath: { eq: "wireless-outdoor-cinema-company-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: CONSTRAINED
              width: 465
              height: 85
            )
          }
        }
        CellImg: file(relativePath: { eq: "icons/cell.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 20, height: 22)
          }
        }
        CellOrangeImg: file(relativePath: { eq: "icons/cellorange.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 21, height: 24)
          }
        }
        FacebookImg: file(relativePath: { eq: "icons/facebook.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 12, height: 16)
          }
        }
        FacebookOrangeImg: file(
          relativePath: { eq: "icons/facebookorange.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 13, height: 24)
          }
        }
        LinkedinWhiteImg: file(
          relativePath: { eq: "icons/linkedinwhite.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 13, height: 16)
          }
        }
        LinkedinOrangeImg: file(
          relativePath: { eq: "icons/linkedinorange.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 24, height: 24)
          }
        }
      }
    `
  )

  return (
    <>
      <header className="w-full bg-black py-4 xl:px-6">
        <div className="mx-auto lg:container px-5 flex gap-4 items-center justify-between uppercase text-sm text-white relative">
          <Link to="/" className="cursor-pointer">
            <GatsbyImage
              image={getImage(LogoImage)}
              alt={`The Wireless Outdoor Cinema Company`}
              loading="eager"
              className="md:w-64 w-48"
            />
          </Link>
          <div
            className="flex flex-col items-center w-8 cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="text-menu uppercase leading-none">Menu</span>
            <div className="w-full bg-orange-500 h-0.5 mt-1" />
            <div className="w-full bg-white h-0.5 mt-1" />
            <div className="w-full bg-white h-0.5 mt-1" />
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center">
              <Link
                to="tel:2075952960"
                className="cursor-pointer flex items-center no-underline font-normal"
              >
                <GatsbyImage
                  image={getImage(CellImg)}
                  alt="Cell phone Image"
                  className="w-5"
                />
                <span className="ml-2 text-white no-underline">
                  (207) 595-2960
                </span>
              </Link>
              <div className="mx-6 bg-orange-500 w-px h-5"></div>
              <div className="flex items-center">
                <Link
                  to="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500 no-underline"
                >
                  <GatsbyImage
                    image={getImage(FacebookImg)}
                    alt="Todd Morton Facebook Profile"
                    className="h-4 w-3 text-white no-underline"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/todd-morton-7851b1b"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500 no-underline"
                >
                  <GatsbyImage
                    image={getImage(LinkedinWhiteImg)}
                    alt="Todd Morton Linkedin Profile"
                    className="ml-6 h-4 w-4 text-white"
                  />
                </Link>
                <Link
                to="https://www.tiktok.com/@outdoormovieguy" 
                target="_blank"
                className="cursor-pointer hover:text-orange-500 no-underline"
                >
                <TiktokIcon className="h-4 w-4 ml-6" />
                </Link>
                <Link
                to="#" 
                target="_blank"
                className="cursor-pointer hover:text-orange-500 no-underline"
                >
                  <InstagramIcon className="h-4 w-4 ml-6"/>
                </Link>
              </div>
            </div>

            <div className="flex items-center mt-3">
              <Link
                to="/the-story"
                className="cursor-pointer hover:text-orange-500 text-white no-underline font-normal"
              >
                The Story
              </Link>
              <span
                to="#"
                className="cursor-pointer ml-12 flex items-center relative group"
              >
                <Link
                  to="#"
                  className="hover:text-orange-500 text-white no-underline font-normal"
                >
                  OUTDOOR MOVIE THEATER SOLUTIONS
                </Link>{" "}
                <StaticImage
                  src="../assets/images/icons/downarrow.png"
                  className="ml-2 h-2 w-2 transition-transform transform group-hover:rotate-180 duration-300"
                />
                <div className="bg-black w-80 absolute left-0 bottom-0 transform translate-y-full z-10 flex-col pt-6 pb-2 hidden group-hover:flex whitespace-no-wrap">
                  <Link
                    to="/how-to-build-an-outdoor-movie-theater/"
                    className="py-2 px-4 hover:text-orange-500 no-underline text-white font-normal"
                  >
                    How to build an outdoor movie theater<span className="text-white"> [Available May 1st]</span>
                  </Link>
                  {/* <Link
                        to="/comparison"
                        className="py-2 px-4 hover:text-orange-500 no-underline text-white"
                      >
                        Cinema Comparison
                      </Link> */}
                  {/* <Link
                    to="/comparison"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Timberline Series
                    </Link> */}
                  <Link
                    to="/Timberline-series/150-big-moose-outdoor-movie-theater/"
                    className="py-2 px-4 hover:text-orange-500 no-underline text-white font-normal"
                  >
                    Timberline Series 150" big moose outdoor movie theater
                  </Link>

                  {/* <Link
                        to="/accessory"
                        className="py-2 px-4 cursor-pointer hover:text-orange-500 text-white no-underline"
                      >
                        Outdoor Cinema Accessories
                      </Link> */}
                </div>
              </span>
              <span
                to="#"
                className="cursor-pointer ml-12 flex items-center relative group"
              >
                <Link
                  to="/in-the-news"
                  className="hover:text-orange-500 text-white no-underline font-normal"
                >
                  In The News
                </Link>{" "}
                <StaticImage
                  src="../assets/images/icons/downarrow.png"
                  className="ml-2 h-2 w-2 transition-transform transform group-hover:rotate-180 duration-300"
                />
                <div className="bg-black w-60 absolute left-0 bottom-0 transform translate-y-full z-10 flex-col pt-6 pb-2 hidden group-hover:flex whitespace-no-wrap">
                  <Link
                    to="/november-30-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Nov 30 2023 Press Release
                  </Link>
                  <Link
                    to="/march-02-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Mar 02 2023 Press Release
                  </Link>
                  <Link
                    to="/august-28-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Aug 28 2022 Press Release
                  </Link>
                  <Link
                    to="/june-30-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    June 30 2022 Press Release
                  </Link>
                  <Link
                    to="/october-10-sun-journal-news-article"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Oct 10 2021 News Article
                  </Link>
                  <Link
                    to="/january-04-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Jan 04 2021 Press Release
                  </Link>
                  <Link
                    to="/september-10-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    Sept 10 2020 Press Release
                  </Link>
                  <Link
                    to="/june-25-bridgton-news-article"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    June 25 2020 News Article
                  </Link>
                  <Link
                    to="/june-08-press-release"
                    className="py-2 px-4 hover:text-orange-500 text-white no-underline font-normal"
                  >
                    June 08 2020 Press Release
                  </Link>
                </div>
              </span>
              <Link
                to="https://outdoormovietheater.blog/"
                target="_blank"
                className="cursor-pointer ml-12 hover:text-orange-500 text-white no-underline font-normal"
              >
                BLOG
              </Link>
              <Link
                to="/faq"
                className="cursor-pointer ml-12 hover:text-orange-500 text-white no-underline font-normal"
              >
                FAQ
              </Link>
              <Link
                to="/connect"
                className="cursor-pointer ml-12 hover:text-orange-500 text-white no-underline font-normal"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="w-full bg-cover absolute z-40 lg:hidden mobile_bg">
          <div className="text-white text-xl flex flex-col">
            <Link to="/the-story" className="no-underline">
              <span className="block py-3 px-6 text-white font-normal">
                The Story
              </span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <span onClick={() => setOpenW(!openW)} className="cursor-pointer">
              <span className="py-3 px-6 flex items-center justify-between">
                <span>Outdoor Movie Theaters</span>
                <span>&#9660;</span>
              </span>
              {openW && (
                <div className="flex flex-col text-orange-500 pb-3 px-6">
                  {/* <Link to="/comparison" className="block text-orange-500 py-3 no-underline ">
                    Cinema Comparison
                  </Link> */}
                  <Link
                    to="/how-to-build-an-outdoor-movie-theater/"
                    className="py-2 px-4 hover:text-orange-500 no-underline text-white pb-4 font-normal"
                  >
                    How to Build an Outdoor Movie Theater
                  </Link>
                  <Link
                    to="/Timberline-series/150-big-moose-outdoor-movie-theater/"
                    className="py-2 px-4 hover:text-orange-500 no-underline text-white pb-4 font-normal"
                  >
                    150” Big Moose Outdoor Movie Theater
                  </Link>

                  {/* <div class="w-full border border-b border-gray-600 mt-3"></div> */}
                  {/* <Link to="/accessory" className="block py-3 no-underline text-orange-500">
                    Outdoor Cinema Accessories
                  </Link> */}
                </div>
              )}
            </span>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/in-the-news" className="no-underline">
              <span className="block py-3 px-6 text-white font-normal">
                In the News
              </span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/faq" className="no-underline text-white font-normal">
              <span className="block py-3 px-6">
                Frequently Asked Questions
              </span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/connect" className="no-underline text-white font-normal">
              <span className="block py-3 px-6">Connect</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/terms" className="no-underline text-white font-normal">
              <span className="block py-3 px-6">Terms Of Use</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/privacy" className="no-underline text-white font-normal">
              <span className="block py-3 px-6">Privacy Policy</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/sitemap" className="no-underline text-white font-normal">
              <span className="block py-3 px-6">Sitemap</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <div className="py-2 px-6 flex items-center justify-between">
              <Link
                to="tel:2075952960"
                className="cursor-pointer flex items-center w-8/12 text-white no-underline"
              >
                <GatsbyImage
                  image={getImage(CellImg)}
                  alt="Cell Phone Icon"
                  className="h-6"
                  style={{width:'32px',height:'35px'}}
                />
                <span className="ml-2">(207) 595-2960</span>
              </Link>
              {/* <div className="flex items-center">
                <a
                  href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500"
                >
                  <GatsbyImage
                    image={getImage(FacebookOrangeImg)}
                    alt="Facebook Icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/todd-morton-7851b1b"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500"
                >
                  <GatsbyImage
                    image={getImage(LinkedinOrangeImg)}
                    alt="Linkedin Icon"
                    className="ml-6"
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
