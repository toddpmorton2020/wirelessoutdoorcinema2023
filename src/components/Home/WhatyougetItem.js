import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const WhatyougetItem = ({ item }) => {
  const [over, setOver] = useState()
  const boxRef = React.useRef(null)
  const { MooseImg, BonusImg } = useStaticQuery(
    graphql`
      query {
        MooseImg: file(
          relativePath: { eq: "timberline-big-moose-791px-x-755px.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        BonusImg: file(
          relativePath: { eq: "icons/icon-red-corner-bonus.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 60, height: 52)
          }
        }
      }
    `
  )
  useEffect(() => {
    //console.log('mouse over',over)
  }, [over])

  const handleMouseEnter = id => {
    setOver(id)
  }
  const Image = over == item.id ? item.imghover : item.img
  console.log({ item })
  return (
    <div
      id={item.id}
      className="col-span-12 md:col-span-6 xl:col-span-6 mx-auto rollover-svg-item w-full lg:mb-0 mb-8 md:mb-4"
      ref={boxRef}
      onMouseOver={() => handleMouseEnter(item.id)}
      onMouseOut={() => handleMouseEnter("")}
    >
      {/* {item.bonus && (
        <GatsbyImage
          image={getImage(BonusImg)}
          alt=''
          className='bonus-banner-image'
        />
      )} */}
      <div className="item_box rounded-md border-grey-theater md:p-2 px-3 py-2 md:py-1 text-center h-full flex flex-row justify-start border-2 md:border-none">
        {item.bonus && (
          <div
            className="block md:hidden"
            style={{ position: "relative", top: "0px", left: "-18px" }}
          >
            <GatsbyImage
              image={getImage(BonusImg)}
              alt=""
              className="bonus-banner-image"
            />
          </div>
        )}
        <div className="flex items-center gap-0 md:gap-4 flex-col p-0 md:p-0 md:flex-row">
          <div
            className="col-span-12  md:w-[50px] mt-1 md:mt-0"
            style={{
              // width: "50px",
              height: "35px",

              alignItems: "start",
              marginBottom: "20px",
            }}
          >
            <Image

              style={{
              
              }}
              className=" lg:h-auto h-14 mx-auto"
            />
          </div>
          <div className="flex flex-col text-center md:text-left mt-2">
            <p className="font-bold text-lg md:text-xl mb-1 rollover-color-title text-white md:text-orange-1000">
              {item.title}
            </p>
            <p className="mb-3 md:mb-1 sm:text-lg text-base">{item.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatyougetItem
