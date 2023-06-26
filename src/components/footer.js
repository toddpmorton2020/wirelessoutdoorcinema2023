import React, { useRef, useState } from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
//import { Orange, QuoteContainerOr } from "../css/homepage"

function Footer() {
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const form = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    setError("")
    const { firstName, email } = form.current
    if (!firstName.value || !email.value)
      return setError("Please fill in all required fields")
    const formData = new FormData()
    formData.append("First Name", firstName.value)
    formData.append("Email", email.value)
    const req = new XMLHttpRequest()
    req.open(
      "POST",
      "https://getform.io/f/f0d3e96f-9157-4357-a123-5f10cf924ec0"
    )
    req.send(formData)
    setSubmitted(true)
  }

  const { LogoImage, DeskformImg, MobileformImg, ArrowRight, CellImg, EmailImg, FacebookImg,  LinkedinWhiteImg } = useStaticQuery(
    graphql`
      query {
        LogoImage: file(relativePath: {eq: "cinemalogo.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, width:448, height: 82)
          }
        }
        DeskformImg: file(relativePath: {eq: "desk-form.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        MobileformImg: file(relativePath: {eq: "mobile-form.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        ArrowRight: file(relativePath: {eq: "icons/arrowright.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width:12, height: 12)
          }
        } 
        
        CellImg: file(relativePath: {eq: "icons/cell.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width:20, height: 22)
          }
        } 
        EmailImg: file(relativePath: {eq: "icons/emailwhite.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width:24, height: 16)
          }
        } 
               
        FacebookImg: file(relativePath: {eq: "icons/facebook.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width:12, height: 16)
          }
        }        
        LinkedinWhiteImg: file(relativePath: {eq: "icons/linkedinwhite.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width:13, height: 16)
          }
        }
        
      }
    `
  )

  return (
    <div>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="bg-orange-1000">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <div className="flex md:flex-row flex-col items-center md:items-start py-4 lg:py-0 orange-mob">
           <div className="hidden md:inline-block">
            <GatsbyImage image={getImage(DeskformImg)} alt="" className="ml-3" />
            </div>
            <div className="inline-block md:hidden">
              <GatsbyImage image={getImage(MobileformImg)} alt="" />
              </div>
              <div className="orange-signup flex flex-col pt-6 lg:pt-10 md:pl-10 lg:pl-16">
                <h3 className="text-2xl font-medium text-white orange-box-heading-mob -mt-20 md:mt-0 text-center md:text-left leading-tight max-w-sm md:max-w-full">
                  Signup up to receive special <strong>promotions and new product announcements</strong>
                </h3>
                <div className="flex md:flex-row md:gap-6 flex-col items-center md:items-stretch pt-4 md:ml-1 input-div">
                  <div class="md:w-2/5 w-64 mb-3 md:mb-0">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="py-2 px-4 placeholder:text-orange-500 orange-input name-input-setting-mob w-full text-center md:text-left"
                    />
                  </div>
                  <div className="email-input-setting md:w-3/5 w-64 mb-3 md:mb-0">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="py-2 px-4 w-full orange-input placeholder:text-orange-500 email-settings email-settings-mob text-center md:text-left"
                    />
                  </div>
                  <input
                    type="submit"
                    value="SIGN ME UP"
                    className="text-white bg-transparent font-bold orange-input border border-white md:w-1/3 w-64 px-5 lg:px-16 py-2 md:py-0"
                  />
                </div>
                {error && (
                  <p className="md:mt-3 md:ml-3 -mt-2 md:pb-0 pb-2 sm:text-lg text-base max-w-full text-red-1000">
                    {error}
                  </p>
                )}
                {submitted && (
                  <p className="md:mt-3 md:ml-3 mt-2 md:pb-0 pb-2 sm:text-lg text-base max-w-full text-green-800">
                    Your submission has been sent. We will get back to you as
                    soon as possible.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="full-width footer-padding bg-black pt-8 lg:py-12 text-white relative">
        <div className="max-w-7xl px-5 mx-auto lg:flex">
          <div className="block lg:hidden text-base">
            <div className="mb-3">
              <h5 className="text-orange-500 uppercase mb-2">
                The Wireless Outdoor Cinema Company
              </h5>
              <p className="sm:text-lg text-base">
                PO Box 752
                <br />
                Bridgton, ME 04009
              </p>
            </div>
            <div className="mb-4">
              <h5 className="text-orange-500 uppercase mb-2">Connect</h5>
              <div className="flex items-center">
                <Link
                  to="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                  target="_blank"
                  className="cursor-pointer font-normal"
                >
                  <GatsbyImage image={getImage(FacebookImg)} alt="" className="w-4 text-white" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/todd-morton-7851b1b"
                  target="_blank"
                  className="cursor-pointer font-normal"
                >
                  <GatsbyImage image={getImage(LinkedinWhiteImg)} alt="" className="ml-4 w-4 text-white" />
                </Link>
              </div>
              <Link
                to="tel:2075952960"
                className="cursor-pointer flex items-center mb-3 mt-4 no-underline font-normal sm:text-lg text-base"
              >
                <GatsbyImage image={getImage(CellImg)} alt="" className="w-5" />
                <span className="ml-2 text-white">(207) 595-2960</span>
              </Link>
              <Link
                to="mailto:todd@wirelessoutdoorcinema.com"
                className="cursor-pointer flex gap-2 items-center no-underline text-white font-normal sm:text-lg text-base sm:flex-nowrap flex-wrap"
              >
                 <div><GatsbyImage image={getImage(EmailImg)} alt="" className="w-4 h-4" /></div>
                <span>todd@wirelessoutdoorcinema.com</span>
              </Link>
            </div>
            <div className="mb-4">
              <h5 className="text-orange-500 uppercase">Links</h5>
              <div className="flex flex-col">
                <Link to="/about" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-600 mr-2">&gt;</span>
                  About
                </Link>
                <Link to="/comparison" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  Outdoor Cinemas
                </Link>
                <Link to="/how-to-build-an-outdoor-movie-theater" className="flex items-center py-2 no-underline text-white font-normal">
                <span className="text-orange-500 mr-2">&gt;</span>
                How To Build an Outdoor Movie Theater
                </Link>
                {/* <Link to="/accessory" className="flex items-center py-2 no-underline text-white">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  Outdoor Cinema Accessories
                </Link> */}
                <Link to="/in-the-news" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  In the News
                </Link>
                <Link to="/faq" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  FAQ
                </Link>
                <Link to="/connect" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  Connect
                </Link>
                <Link to="/terms" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  Terms Of Use
                </Link>
                <Link to="/privacy" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  Privacy Policy
                </Link>
                <Link to="/sitemap" className="flex items-center py-2 no-underline text-white font-normal">
                  <span className="text-orange-500 mr-2">&gt;</span>
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="mb-4">
              <Link
                to="/connect"
                className="text-orange-500 uppercase flex items-center no-underline font-normal"
              >
                Media Inquires
                <span className="ml-2">&gt;</span>
              </Link>
              <p className="mb-0">
                The Wireless Outdoor Cinema Company, LLC. welcomes members of
                the press...
              </p>
            </div>
            <div className="mb-4">
              <Link
                to="/connect"
                className="text-orange-500 uppercase flex items-center no-underline font-normal"
              >
                Customer Support
                <span className=" ml-2">&gt;</span>
              </Link>
              <p className="mb-0">
                Please get in touch with any questions you may have with your
                wireless cinema...
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto container lg:px-12 flex">
          <div class="flex-1 hidden lg:block">
            <div>
              <Link to="/" className="cursor-pointer font-normal">
              <GatsbyImage image={getImage(LogoImage)} alt={`The Wireless Outdoor Cinema Company`} className="md:w-64 w-48 " />
              </Link>
              <p className="mt-3 pl-0 mb-0" style={{ textAlign: "left" }}>
                Turn your backyard into an exciting outdoor movie theater. Watch
                big-screen movies, sporting events, play video games, and stream
                your favorite shows with family and friends outside under the
                stars and moon. A unique Drive-in movie experience in the
                privacy of your backyard.
              </p>
            </div>
          </div>
          <div class="flex-1">
            <div className="flex items-end pb-6 sm:pb-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-4/5 max-w-sm mx-auto margin-footer-fire md:mt-10"
              >
                <source src="/campfire.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div class="flex-1 hidden lg:block">
            <div className="pt-0">
              <div className="flex flex-col lg:pl-10">
                <h5 className="text-left text-orange-500 font-bold uppercase mb-1">
                  Quick Links
                </h5>            
                <Link to="/about" className="flex items-center no-underline text-white font-normal">
                <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                  About
                </Link>
                <Link to="/comparison" className="flex items-center no-underline text-white font-normal">
                <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                  Cinema Packages
                </Link>
                <Link to="/about" className="flex items-center no-underline text-white font-normal">
                <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                How To Build an Outdoor Movie Theater
                </Link>
                {/* <Link to="/accessory" className="flex items-center no-underline text-white">
              <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                  Outdoor Cinema Accessories
                </Link> */}
                <Link to="/in-the-news" className="flex items-center no-underline text-white font-normal">
                <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                  In the News
                </Link>
                <Link to="/faq" className="flex items-center no-underline text-white font-normal">
                <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                  FAQ
                </Link>
                <Link to="/connect" className="flex items-center no-underline text-white font-normal">
                <GatsbyImage image={getImage(ArrowRight)} alt="" className="h-3 mr-3" />
                  Connect
                </Link>
                <div className="my-1 flex items-center">
                  <Link
                    to="tel:2075952960"
                    className="cursor-pointer flex items-center no-underline text-white font-normal"
                  >
                    <GatsbyImage image={getImage(CellImg)} alt="" className="w-5" />
                    <span className="ml-2">(207) 595-2960</span>
                  </Link>
                  <div className="mx-6 bg-orange-500 w-px h-5"></div>
                  <div className="flex items-center">
                    <Link
                      to="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                      target="_blank"
                      className="cursor-pointer no-underline text-white font-normal"
                    >
                      <GatsbyImage image={getImage(FacebookImg)} alt="" className="w-3 h-5 text-white" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/todd-morton-7851b1b"
                      target="_blank"
                      className="cursor-pointer no-underline text-white"
                    >
                      <GatsbyImage image={getImage(LinkedinWhiteImg)} alt="" className="ml-6 w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>
                <div className="mt-1 flex items-center">
                  <Link
                    to="mailto:todd@wirelessoutdoorcinema.com"
                    className="cursor-pointer flex items-center no-underline text-white font-normal"
                  >
                    <GatsbyImage image={getImage(EmailImg)} alt="" className="w-6 h-4" />
                    <span className="ml-2">todd@wirelessoutdoorcinema.com</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="text-left lg:text-center text-sm mt-2 lg:mt-6 py-4 px-6 lg:px-0 lg:py-0 border-t border-gray-800 lg:border-none">
          <div className="flex items-center justify-center lg:mb-2">
            &copy;2020-{new Date().getFullYear()} The Wireless Outdoor Cinema
            Company. All Rights Reserved.{" "}
            <span className="hidden lg:inline">
              <Link className="ml-1 text-white no-underline font-normal" to="/terms">
                Terms of Use
              </Link>{" "}
              <span className="mx-1">|</span> <Link to="/privacy" className="text-white no-underline font-normal">Privacy</Link>{" "}
              <span className="mx-1">|</span>{" "}
              <Link to="/sitemap" className="text-white no-underline font-normal">Site Map</Link>
            </span>
          </div>
          <div className="flex items-center justify-center hidden lg:hidden">
            Website designed with <StaticImage src="../assets/images/icons/heart.png" className="h-4 mx-1" />{" "}
            from Maine.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
