import React, { useState, useEffect } from "react"
import { Link, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { globalHistory } from "@reach/router"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const [openW, setOpenW] = useState(false)
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setOpen(false)
    })
  }, [setOpen])
  return (
    <>
      <header className="full-width bg-black py-4 xl:px-6">
        <div className="">
          <div className="">
            <div className=" mx-auto lg:container px-5 flex items-center justify-between uppercase text-sm text-white relative">
              <Link to="/" className="cursor-pointer">
                <StaticImage src="../assets/images/cinemalogo.png" className="md:w-64 w-48" />
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
                  <Link to="tel:2075952960"
                    className="cursor-pointer flex items-center no-underline"
                  >
                    <StaticImage src="../assets/images/icons/cell.png" className="w-5" />
                    <span className="ml-2 text-white no-underline">(207) 647-8759</span>
                  </Link>
                  <div className="mx-6 bg-orange-500 w-px h-5"></div>
                  <div className="flex items-center">
                    <Link
                      to="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                      target="_blank"
                      className="cursor-pointer hover:text-orange-500 no-underline"
                    >
                      <StaticImage src="../assets/images/icons/facebook.svg" className="h-4 w-3 text-white no-underline" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/todd-morton-7851b1b"
                      target="_blank"
                      className="cursor-pointer hover:text-orange-500 no-underline"
                    >
                      <StaticImage
                        src="../assets/images/icons/linkedinwhite.png"
                        className="ml-6 h-5 w-4 text-white"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex items-center mt-3">
                  <Link
                    to="/about"
                    className="cursor-pointer hover:text-orange-500 text-white no-underline"
                  >
                    About
                  </Link>
                  <span
                    to="#"
                    className="cursor-pointer ml-12 flex items-center relative group"
                  >
                    <Link to="/comparison" className="hover:text-orange-500 text-white no-underline">
                      OUTDOOR CINEMAS
                    </Link>{" "}
                    <StaticImage
                      src="../assets/images/icons/downarrow.png"
                      className="ml-2 h-2 w-2 transition-transform transform group-hover:rotate-180 duration-300"
                    />
                    <div className="bg-black w-80 z-50 absolute left-0 bottom-0 transform translate-y-full z-10 flex-col pt-6 pb-2 hidden group-hover:flex whitespace-no-wrap">
                    <Link
                        to="/comparison"
                        className="py-2 px-4 hover:text-orange-500 no-underline text-white"
                      >
                        How to build a professional outdoor movie theater
                      </Link>
                      <Link
                        to="/comparison"
                        className="py-2 px-4 hover:text-orange-500 no-underline text-white"
                      >
                        Cinema Comparison
                      </Link>
                      <Link
                        to="/comparison"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        Timberline Series
                      </Link>
                     
                      <Link
                        to="/accessory"
                        className="py-2 px-4 cursor-pointer hover:text-orange-500 text-white no-underline"
                      >
                        Outdoor Cinema Accessories
                      </Link>
                    </div>
                  </span>
                  <span
                    to="#"
                    className="cursor-pointer ml-12 flex items-center relative group"
                  >
                    <Link to="/in-the-news" className="hover:text-orange-500 text-white no-underline">
                      In The News
                    </Link>{" "}
                    <StaticImage
                      src="../assets/images/icons/downarrow.png"
                      className="ml-2 h-2 w-2 transition-transform transform group-hover:rotate-180 duration-300"
                    />
                    <div className="bg-black w-60 absolute z-50 left-0 bottom-0 transform translate-y-full z-10 flex-col pt-6 pb-2 hidden group-hover:flex whitespace-no-wrap">
                      <Link
                        to="/october-10-sun-journal-news-article"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        Oct 11 2021 News Article
                      </Link>
                      <Link
                        to="/august-28-press-release"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        Aug 28 2021 Press Release
                      </Link>
                      <Link
                        to="/june-30-press-release"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        June 30 2021 Press Release
                      </Link>
                      <Link
                        to="/january-04-press-release"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        Jan 04 2021 Press Release
                      </Link>
                      <Link
                        to="/september-10-press-release"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        Sept 10 2020 Press Release
                      </Link>
                      <Link
                        to="/june-25-bridgton-news-article"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        June 25 2020 Press Release
                      </Link>
                      <Link
                        to="/june-08-press-release"
                        className="py-2 px-4 hover:text-orange-500 text-white no-underline"
                      >
                        June 08 2020 Press Release
                      </Link>
                    </div>
                  </span>
                  <Link
                    to="/faq"
                    className="cursor-pointer ml-12 hover:text-orange-500 text-white no-underline"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/connect"
                    className="cursor-pointer ml-12 hover:text-orange-500 text-white no-underline"
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="w-full bg-cover absolute z-30 lg:hidden mobile_bg"
         
        >
          <div className="text-white text-xl flex flex-col">
            <Link to="/about" className="no-underline">
              <span className="block py-3 px-6 text-white">About</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <span onClick={() => setOpenW(!openW)} className="cursor-pointer">
              <span className="block py-3 px-6 flex items-center justify-between">
                <span>Outdoor Cinemas</span>
                <span>&#9660;</span>
              </span>
              {openW && (
                <div className="flex flex-col text-orange-500 py-3 px-6">
                  <Link to="/comparison" className="block text-orange-500 py-3 no-underline ">
                    Cinema Comparison
                  </Link>
                  <div class="w-full border border-b border-gray-600"></div>
                  <span className="py-3">Timberline Series</span>
                 
                  <div class="w-full border border-b border-gray-600 mt-3"></div>
                  <Link to="/accessory" className="block py-3 no-underline text-orange-500">
                    Outdoor Cinema Accessories
                  </Link>
                </div>
              )}
            </span>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/in-the-news" className="no-underline">
              <span className="block py-3 px-6 text-white">In the News</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/faq"  className="no-underline text-white">
              <span className="block py-3 px-6">
                Frequently Asked Questions
              </span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/connect"  className="no-underline text-white">
              <span className="block py-3 px-6">Connect</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/terms"  className="no-underline text-white">
              <span className="block py-3 px-6">Terms Of Use</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/privacy"  className="no-underline text-white">
              <span className="block py-3 px-6">Privacy Policy</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <Link to="/sitemap" className="no-underline text-white">
              <span className="block py-3 px-6">Sitemap</span>
            </Link>
            <div class="w-full border border-b border-gray-600"></div>
            <div className="py-3 px-6 flex items-center justify-between">
              <Link
                to="tel:2075952960"
                className="cursor-pointer flex items-center w-8/12 text-white no-underline"
              >
                <StaticImage src="../assets/images/cellorange.png" className="h-6" />
                <span className="ml-2">(207) 595-2960</span>
              </Link>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500"
                >
                  <StaticImage src="../assets/images/icons/facebookOrange.png" className="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/todd-morton-7851b1b"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500"
                >
                  <StaticImage src="../assets/images/icons/linkedinOrange.png" className="ml-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>

  )
}


export default Header
