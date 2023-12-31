import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql} from "gatsby"
import {StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"


const WhatyougetItem = ({ item }) => {
    const [over, setOver] = useState();
    const boxRef = React.useRef(null);
    const { MooseImg, BonusImg} = useStaticQuery(
        graphql`
          query {
            MooseImg: file(relativePath: {eq: "timberline-big-moose-791px-x-755px.png"}) {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            } 
            BonusImg: file(relativePath: {eq: "icons/icon-red-corner-bonus.png"}) {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FIXED, width:60, height:52)
              }
            } 
                    
          }
        `
      )
      useEffect(() => {
        //console.log('mouse over',over)
      }, [over]);
  
  const handleMouseEnter = (id) => {
    setOver(id)
  };
  const Image = over==item.id ? item.imghover : item.img
  return (
    <div
      id={item.id}
      className='col-span-12 md:col-span-6 xl:col-span-2 mx-auto rollover-svg-item w-full lg:mb-0 mb-4' 
      ref={boxRef}
      onMouseOver={()=>handleMouseEnter(item.id)}   
      onMouseOut={()=>handleMouseEnter('')}        
    >
      {item.bonus && (
        <GatsbyImage
          image={getImage(BonusImg)}
          alt=''
          className='bonus-banner-image'
        />
      )}
      <div className='border item_box rounded-md border-grey-theater md:p-2 px-3 py-2 text-center h-full flex flex-col justify-start'>
        <div className='flex justify-center'>
          <div>
            <Image
              style={{
                maxWidt: ''
              }}
              className='my-2 md:w-auto lg:h-10 h-16 mx-auto'
            />
          </div>
        </div>
        <p className='font-bold text-lg md:text-xl mb-1.5 rollover-color-title'>
          {item.title}
        </p>
        <p className='mb-3 sm:text-lg text-base'>{item.text}</p>
      </div>
    </div>
  )
}

export default WhatyougetItem
