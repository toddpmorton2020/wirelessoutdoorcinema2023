import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const QuoteSection = () => {
  const { TimberlineImg1, TimberlineImg2, SignatureImg, MobilesignatureImg } = useStaticQuery(
    graphql`
      query {
        TimberlineImg1: file(relativePath: {eq: "wireless-outdoor-cinema-founder-todd-morton-1920x680px-winter.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        } 
        TimberlineImg2: file(relativePath: {eq: "mobile-wireless-outdoor-cinema-founder-todd-morton-480x420-winter.jpg"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          } 
          SignatureImg: file(relativePath: {eq: "todd-morton-founder-signature-743px-x-87px.png"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
          MobilesignatureImg: file(relativePath: {eq: "mobile-todd-morton-founder-signature-329x49.png"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }          
      }
    `
  )

  return (
    <div className="bg-black relative text-white border-grey-subnav md:pb-12 pb-8">
      <div className="hidden md:block">
        <GatsbyImage image={getImage(TimberlineImg1)} alt="Todd Morton, founder of the Wireless Outdoor Cinema Company, sitting next to a bonfire in the winter."
          className="mx-auto w-full max-w-2400 mb-4 lg:pb-24" />
      </div>
      <div className="md:hidden">
        <GatsbyImage image={getImage(TimberlineImg2)} alt="Todd Morton, founder of the Wireless Outdoor Cinema Company, sitting next to a bonfire in the winter."
          className="mx-auto w-full max-w-2400 mb-4" />
      </div>
      <div className="max-w-7xl mx-auto w-full px-5">
        <div className="flex flex-col lg:hidden pt-8">
          <div className="block col-span-12 mb-0 text-center relative max-w-lg mx-auto">
            <p className="text-lg relative quote-todd mb-0 max-w-full relative px-6">
              My wireless outdoor movie theaters take less time to set up and start watching than it does to pop a bag of popcorn.
            </p>
            <div className="lg:hidden">
            <GatsbyImage image={getImage(MobilesignatureImg)} alt="Todd Morton, founder of the Wireless Outdoor Cinema Company signature."
              className="sm:w-3/5 px-10 mx-auto mt-5" />
              </div>
          </div>
        </div>
        <div className="absolute left-0 px-5 w-full mt-14 top-0 hidden lg:grid grid-cols-12">
          <div className="flex flex-col col-start-7 col-span-6 text-center xl:px-8 max-w-xl mx-auto">
            <p className="quote_text text-2xl quote-todd mb-0 max-w-full relative px-2">
              My wireless outdoor movie theaters take less time to set up and start watching than it does to pop a bag of popcorn.
            </p>
            <div className="hidden lg:block">
            <GatsbyImage image={getImage(SignatureImg)} alt="Todd Morton, founder of the Wireless Outdoor Cinema Company signature."
              className="mx-auto mt-5" style={{width:'90%'}} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteSection