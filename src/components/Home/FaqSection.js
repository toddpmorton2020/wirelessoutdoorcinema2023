import React,{useState} from "react";
import { Link } from "gatsby";
import { PriceTagIcon } from "../../assets/images/icons/price-tag-icon"
import { AssemblyIcon } from "../../assets/images/icons/assembly-icon"
import { EquipmentStandIcon } from "../../assets/images/icons/equipment-stand-icon"
import { FrameIcon } from "../../assets/images/icons/frame-icon"
import { ScreenIcon } from "../../assets/images/icons/screen-icon"
import { EquipmentListIcon } from "../../assets/images/icons/equipment-list-icon2"



const FaqSection = () => {
    const faqList = [
      {
        id: 0,
        icon: <PriceTagIcon className="sm:h-11 h-10 sm:w-11 w-10  mr-2" />,
        text: "Outdoor Movie Theater Costs",
        questions: [
          {
            id: "01",
            question:
              "What is the lumber cost for the frame systems and projector stand?",
            answer: (
              <>
                <div className="mb-3">
                The recommended wood for the frame system is pressure-treated 4" x 4" posts. And the recommended
                lumber to build the custom projector stand is pinewood, and you can also use any time of hardwood. Using pinewood will keep the projector stand's weight light, making it easier to carry. However, when
                using hardwood like maple or oak, the equipment stand's weight will be heavier.
                </div>
                
                <div className="mb-3">
                The cost for lumber will vary depending on your location and source. Lumber is usually more cost-friendly at
                your local big-box home improvement stores.
                </div>
                <div className="mb-3">
                  <strong>Streamline Cemented Frame System:</strong> Average cost is
                  between $150-175.
                </div>
                <div className="mb-2">
                  <strong>Movable Frame System:</strong> Average cost is between
                  $175-225.
                </div>
                <div className="mb-2">
                  <strong>Streamline Free-Standing Frame System:</strong> Average cost is between
                  $175-225.
                </div>
                <div className="mb-2">
                  <strong>Pinewood Custom Projector Stand:</strong> Average cost is
                  between $65-$85.
                </div>
                </>
            ),
          },
          {
            id: "02",
            question: "How much does the frame systems hardware cost?",
            answer: (
              <>
                <strong>Streamline Frame Systems:</strong> The weather- resistant
                hardware costs between $275-300.
                <br />
                <br />
                <strong>Movable Frame System:</strong> The weather- resistant
                hardware costs between $300-325.
              </>
            ),
          },
          {
            id: "03",
            question: "How much does the cinema equipment cost?",
            answer: (
              <>
                The cinema equipment I offer with my Timberline Premium Wireless 150” 
                Big Moose Package costs between $600 and $ 700.
                <br />
                <br />
                You can also choose whatever electronic components and brand names
                you want as long as they are compatible with the recommended equipment setup. 
                <br />
                <br />
                For example, if you want to use a different projector or speaker system, the cost might
                decrease or increase depending on your preference. You’ll also pay less if you already
                have some compatible electronic components.
                <br />
                <br />
                <strong>Wireless Cinema Cost:</strong> $600
                <br />
                <br />
                <strong>Wired Cinema Equipment:</strong> $700
              </>
            ),
          },
          {
            id: "04",
            question:
              "What is the price difference between wireless and wired cinemas?",
            answer: (
              <>
               The wireless cinema package is less expensive than the wired cinema by $100 and costs,
               on average, $600. The wired cinema equipment costs roughly $700.
              </>
            ),
          },
          {
            id: "05",
            question:
              "What is the cost of a professional outdoor movie theater?",
            answer: (
              <>
                The overall cost to build your own professional outdoor movie theater 
                is between $1,000 and $1,500.
                <br />
                <br />
                The cost will be less if you already have lumber and some compatible cinema equipment.
              </>
            ),
          },
        ],
      },
      {
        id: 1,
        icon: <FrameIcon className="sm:h-11 h-10 sm:w-11 w-10  mr-2" />,
        text: "Frame Systems",
        questions: [
          {
            id: "11",
            question:
              "How much space do I need to install the frame system on my property?",
            answer:
              "The recommended space needed for an outdoor movie theater setup is roughly 12 ft x 12 ft, which includes space for seating.",
          },
          {
            id: "12",
            question:
              "How difficult is building the frame system, and what tools do I need?",
            answer: (
              <>
                Anyone can easily build, assemble, and install the different frame systems by following
                the instructions in the 'how-to' manual. Essential tools include a hand saw, Skilsaw
                or compound saw, drill, box level, and other standard household tools. 

                <br />
                <br />
                After purchasing the downloadable 'how-to' guide, the necessary tools are covered in depth.
                If you don't have some of these tools, you can rent them at your local hardware store or do
                what most homeowners do - borrow them from your neighbors.
              </>
            ),
          },
          {
            id: "13",
            question: "What are the dimensions for the different frame systems?",
            answer: (
              <>
                <strong>Streamline Frame Systems:</strong> Rough dimensions are 12' ft wide x 10' ft high x 4" depth.
                Exact measurements are covered in the manual.
                <br />
                <br />
                <strong>Movable Frame System:</strong> Rough dimensions are 12' ft wide x 10' ft high x 5' ft depth.
                Exact measurements are covered in the manual.
              </>
            ),
          },
          {
            id: "14",
            question:
              "How much do the Movable and Streamline Frame Systems weigh?",
            answer: (
              <>
                <strong>Streamline Frame Systems:</strong> weighs between 100-175
                lbs.
                <br />
                <br />
                <strong>Movable Frame System:</strong> weighs between 175-200 lbs.
                <br />
                <br />
                The weight of the frame system will vary as most new pressure-treated lumber is wet and heavy;
                it eventually dries out and becomes lighter over six months.   
              </>
            ),
          },
          {
            id: "15",
            question: "How long will the frame system last after being built?",
            answer: (
              <>
                The Timberline Frame Systems will last as long as your deck outside, and even longer if you apply
                a coat of stain every other year.
              </>
            ),
          },
        ],
      },
      {
        id: 2,
        icon: <ScreenIcon className="sm:h-11 h-10 sm:w-11 w-10 " />,
        text: "Outdoor Projector Screens",
        questions: [
          {
            id: "21",
            question: "What is the cost for the different projector screens?",
            answer: (
              <>
                The manual pull-down projector screen ranges in price from $400-600. 
                <br />
                <br />
                The grommet hole cinematic screen ranges in price from $30-60.
              </>
            ),
          },
          {
            id: "22",
            question: "What are the sizes for the outdoor projector screens?",
            answer:
              "150” diagonal. The dimensions are 9’ ft. 3” wide x 5’ ft. 10” high.",
          },
          {
            id: "23",
            question: "How do I attach the different projector screens to the frame system?",
            answer: (
              <>
                The method of hanging the two different projector screens varies slightly on which screen you want to use.
                <br/>
                <br/>
                1) Manual pull-down projector screen: hang with two screw hooks below the main header beam inside the frame system. 
                 <br />
                 <br />
                 2) Grommet hole cinematic screen: hang the screen using screw hooks all along the inside of the frame system.
              </>
            ),
          },
          {
            id: "24",
            question: "How do I clean the different projector screens?",
            answer: (
              <>
                The manual pull-down projector screen can be cleaned carefully using a soft microfiber towel or a soft kitchen sponge and a solution of warm water and Dawn dish detergent soap.
              <br />
              <br />
              The grommet hole cinematic screen can be cleaned using a soft microfiber towel and a mix of water and Woolite.
              </>
            ),
          },
          {
            id: "25",
            question: "Can the outdoor projector screens stay outside year-round? ",
            answer: (
              <>
                No. It is recommended that you take your screen down after each use outside unless you purchase an expensive waterproof screen, which starts at around $1,900 from Elite Screens. Most manual pull-down projector screens are not waterproof and will get damaged if left outside in the rain.
                <br />
                <br />
                <strong>Warning:</strong> If you leave your grommet hole cinematic screen attached to the Movable frame system when there are strong wind gusts, the wind will fill up your screen like a sail on a sailboat and topple the heavy frame system over, crushing anything in front of it. The wind will also stress the grommets on the edges of the screen and eventually rip them out. It’s always best to remove the screen before any expected windy weather.
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        icon: <EquipmentStandIcon className="sm:h-11 h-10 sm:w-11 w-10 " />,
        text: "Custom Projector Stand",
        questions: [
          {
            id: "31",
            question: "What type of wood is recommended for the projector stand?",
            answer: (
              <>
                Pinewood 1” thick x 10” wide. You can also build the projector stand using hardwoods like maple or oak. Hardwoods cost more and are heavier than pinewood, making the projector stand more challenging to carry. 

                <br />
                <br />
                To protect your projector stand, apply a coat of semi-transparent stain and put on 2-3 coats of polyurethane.
              </>
            ),
          },
          {
            id: "32",
            question: "What tools are necessary to build the projector stand?",
            answer: (
              <>
                You will need a circular or compound saw, bar clamps, sanding block, random orbital sander, and drill.
                If you don’t have these tools, do what most homeowners do — borrow some tools from your neighbors,
                or you can rent them at a low cost from most hardware stores.
              </>
            ),
          },
          {
            id: "33",
            question: "What are the measurements for the projector stand?",
            answer: (
              <>
                The projector stand's overall dimensions depend on the equipment you want to use for your cinema
                setup and the landscaping on your property. Over the years of building outdoor movie theaters for
                customers, every projector stand I've made is a different size.
                <br />
                <br />
                There are exact calculations for you to follow in the how-to guide to help you determine the
                proper size for your custom projector stand.
              </>
            ),
          },
          {
            id: "34",
            question:
              "How difficult is it to build the custom projector stand?",
            answer: (
              <>
                For the beginner with no furniture-building experience, the how-to DIY guide will provide clear,
                easy, step-by-step instructions that will enable you to build and assemble this stand in a day.
                <br />
                <br />
                If you have a full woodshop and have built furniture before, the design plans are straightforward,
                and you'll easily conquer this project.
              </>
            ),
          },
          {
            id: "35",
            question: "Can I use an aluminum tripod projector stand instead?",
            answer: (
              <>
               No. There is not enough space on the tripod projector stand shelf to hold all of the necessary
               electronic components, as it only has enough space to hold a projector and nothing else. You want 
               to avoid stacking any components on top of each other.
                <br />
                <br />
                The Timberline Series Custom Projector Stand is a portable entertainment center that keeps all of
                your equipment neatly organized. It never has to be disconnected or broken down, making it the
                outdoor equivalent of the entertainment center inside your home.
              </>
            ),
          },
        ],
      },
      {
        id: 4,
        icon: <EquipmentListIcon className="sm:h-11 h-10 sm:w-11 w-10 " />,
        text: "Cinema Equipment",
        questions: [
          {
            id: "41",
            question:
              "Does the cinema equipment allow for daytime movies outside?",
            answer: (
              <>
                The recommended projector I provide in the DIY guide does not support daytime use, due to the higher 
                cost of a projector with those capabilities. However, you can customize your cinema equipment as
                desired, adding a daytime projector to enhance your viewing options. 
                <br />
                <br />
                Daytime projectors range in cost from $800 and up, and can be found online by searching for ‘outdoor
                daytime projectors.’ The DIY guide provides recommendations on which projectors are the best based on
                online reviews, if price is not an issue.
              </>
            ),
          },
          {
            id: "42",
            question: "Is the recommended cinema equipment customizable?",
            answer: (
              <>
                Absolutely. You can customize your cinema equipment to fit your needs by choosing what you’d like
                for electronics and brands. The how-to guide contains lists of the cinema equipment I use for my 
                customers in Maine; it serves as a solid framework to help you understand how everything works
                and gets connected.
              </>
            ),
          },
          
          {
            id: "43",
            question:
              "Does the DIY guide cover wireless and wired cinema packages?",
            answer: (
              <>
                Yes – the DIY guide covers the recommended cinema equipment for both wireless and wired packages.
              </>
            ),
          },
          {
            id: "44",
            question: "Will the wireless cinema package work with PA speakers?",
            answer: (
              <>
                No, only the wired cinema setup can accommodate powerful PA Speakers. The wireless cinema 
                setup is not capable of powering high-end sound systems. However, you can use great Bluetooth
                speakers with the wireless cinema setup.
              </>
            ),
          },
          {
            id: "45",
            question:
              "Can I use Bluetooth wireless headphones with the cinema equipment?",
            answer: (
              <>
                Yes. With the wired cinema system, you can use Bluetooth wireless headphones to listen to your 
                entertainment, so it doesn’t disrupt your neighbors. Bluetooth wireless headphones are not 
                compatible with the wireless cinema setup.
              </>
            ),
          },
          
        ],
      },
      {
        id: 5,
        icon: <AssemblyIcon className="sm:h-11 h-10 sm:w-11 w-10 " />,
        text: "Assembly and Installation",
        questions: [
          {
            id: "51",
            question:
              "Do I need a building permit to install an outdoor movie theater?",
            answer: (
              <>
                Each state and town has its own zoning codes. The Timberline Movable Frame System 
                is not considered a permanent structure; it falls under a similar category to an outdoor 
                residential playground, which should not require any zoning permit. 
                <br />
                <br />
                The Timberline Streamline Frame System gets cemented into the ground and is also similar 
                to an outdoor residential playground—so it may not require any zoning permit. However, 
                it’s best to call your local town office and speak to the zoning commissioner to verify 
                that installing the frame system is allowed in your area.
                <br />
                <br />
                <strong>Important:</strong> always call Dig Safe before digging into the ground.
              </>
            ),
          },
       
          {
            id: "52",
            question:
              "What tools do I need to assemble and install the frame systems?",
            answer: (
              <>
                <strong>Streamline Frame System:</strong> 1/4” or ½” drive ratchet socket wrench and 
                sockets, hammer, drill, 6’ ft box level, and shovel.
                <br />
                <br />
                <strong>Movable Frame System:</strong> 1/4” or ½” drive ratchet socket wrench and
                sockets, hammer, drill, and 6’ ft box level.
              </>
            ),
          },
          {
            id: "53",
            question:
              "How difficult is it to install the different frame systems?",
            answer: (
              <>
                I install all of my client's cinemas by myself, and recommend you have two people to help 
                assemble and install your frame system for the first time – it will make the entire 
                process go much easier and faster.
              </>
            ),
          },
          {
            id: "54",
            question:
              "How long does it take to install the different frame systems?",
            answer: (
              <>
                The overall time to assemble and install the frame system should take you a day, or even less if 
                you have two people. Both frame systems take roughly the same amount of time to install.
              </>
            ),
          },
          
          {
            id: "55",
            question:
              "How far away does the equipment stand need to be from the frame?",
            answer: (
              <>
                The distance from the projector to the cinema screen is the throw distance. Each projector has a 
                recommended throw distance and is covered in the how-to guide.
              </>
            ),
          },
        ],
      },
    ]
  
    return (
      <div
        className="bg-black relative text-white  border-grey-subnav pt-16 pb-10 xl:py-24"
        id="faq"
      >
        <div className="max-w-7xl px-5 mx-auto">
          <div className="mx-auto flex flex-col xl:grid xl:grid-cols-12 w-full">
            <div className="text-center xl:col-span-12 xl:text-xl">
              <h2 className="text-3xl xl:text-50 md:text-4xl font-semibold md:pb-5 pb-4">
                Frequently asked questions
              </h2>             
              <h3 className="md:block hidden md:text-2xl pb-5 xl:text-35 xl:pb-7 text-orange-1000">
              Common questions on how-to build a professional outdoor movie theater.
              </h3>
  
              <h3 className="md:hidden text-lg pb-4 text-orange-1000">
                Frequently asked questions on how-to build a professional outdoor
                movie theater.
              </h3>
  
              <p className="sm:text-lg text-base mb-0 max-w-full">
              Below are customers' most frequently asked questions, broken down by category to help you find the answers you need quickly.
              </p>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-4 lg:mt-12 mt-10">
              {faqList.map(item => (
                <div
                  className="col-span-12 lg:col-span-4 border border-grey-subnav rounded-md py-8 px-4 lg:py-15 lg:mb-0 mb-5 orng-rollover-overlay rollover-svg-item"
                  key={item.id}
                >
                  <div className="flex items-center pb-3">
                    <div>{item.icon}</div>
                    <p className="text-xl md:txt-2xl px-3 text-orange-1000 mb-0 max-w-full">
                      {item.text}
                    </p>
                  </div>
                  {item.questions.map(qa => (
                    <article className="faq-accordion" key={qa.id}>
                      <input
                        type="checkbox"
                        className="tgg-title"
                        id={`tgg-title-${qa.id}`}
                      />
                      <div className="faq-accordion-title">
                        <label htmlFor={`tgg-title-${qa.id}`}>
                          <p className="faq-accordion-header p1 sm:text-lg text-base mb-0 max-w-full">
                            {qa.question}
                          </p>
                        </label>
                      </div>
                      <div className="faq-accordion-content">
                        <p className="py-2 sm:text-lg text-base mb-0 max-w-full">{qa.answer}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default FaqSection