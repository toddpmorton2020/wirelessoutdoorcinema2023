import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"


const questions = [
    {
        question: "What areas do you serve?",
        answer:
            "Maine, New Hampshire, Vermont, New York, Massachusetts, Connecticut, and Rhode Island.",
    },
    {
        question: "Does the Wireless Outdoor Cinema Company have insurance?",
        answer: "Yes \u2013 a one million dollar liability insurance policy.",
    },
    {
        question: "How long does hanging the projector screen and setting up the cinema equipment take to start watching movies?",
        answer:
            "The Timberline Series Wireless Outdoor Movie Theaters take less than 2 minutes to set up and start watching. The Timberline Series Wired Outdoor Movie Theaters take 5-10 minutes to set due to running an extension cord and hooking up the speaker cables.",
    },
    {
        question: "Is the Timberline Big Moose Outdoor Movie Theater Package waterproof?",
        answer:
            "No. Only the pressure-treated screen frame system is waterproof and weather-resistant. The projector screen, cinema equipment, and projector stand should be brought inside when you're done watching.",
    },
    {
        question: "Can I watch movies during the day?",
        answer: "Yes. If you purchase a daytime outdoor projector.",
    },
    {
        question: "What time can I start watching movies outside if I don't have a daytime projector?",
        answer:
            "You can start watching movies at dusk or 30 minutes before dark with most outdoor projectors. The projector performs best when it\u0027s dark outside.",
    },
    {
        question: "Can I use your outdoor movie theaters in the colder months?",
        answer:
            "Yes. Compliment your outdoor movie theater with a campfire, or get a propane-style outdoor campfire setup or a propane heat lamp to stay warm while watching your favorite entertainment outside.",
    },
    {
        question: "Do you rent your outdoor movie theaters?",
        answer:
            "Yes \u2013 within a 60-mile radius of zip code 04009. Rental packages start at $599 per night.",
    },
    {
        question: "I'm a business, do I need a movie license to play movies?",
        answer:
            "Yes. Annual movie licensing through the Motion Picture Licensing Corporation starts at $670 for an outdoor seating space under 1500 square feet. Get your application at: https://www.mplc.org/ or call them at (800) 462-8855.",
    },
]
function FAQQuestion({ question, answer }) {
    const [open, setOpen] = useState(false)
    let arrowClassName =
        "w-4 transition-transform transform duration-300 translate-y-1"
    if (!open) arrowClassName += " -rotate-90"
    else arrowClassName += " rotate-0"
    let answerClassName = "transform duration-300 overflow-hidden mb-0 max-w-full sm:text-lg text-base"
    if (open) answerClassName += " open-answer pb-6"
    else answerClassName += " closed-answer closed-ps pb-0"
    return (
        <div className="border-t sm:border border-gray-400 sm:bg-white flex flex-row-reverse sm:flex-row sm:mb-3 sm:px-6 pt-6 rounded ">
            <div className="w-8 cursor-pointer" onClick={() => setOpen(!open)}>
                <StaticImage src="../assets/images/icons/orangearrow.png" className={arrowClassName} />
            </div>
            <div className="flex-1">
                <p
                    className="sm:font-bold text-lg sm:pr-0 pr-4 cursor-pointer question text-gray-800 max-w-full"
                    onClick={() => setOpen(!open)}
                >
                    {question}
                </p>
                <p className={answerClassName}>{answer}</p>
            </div>
        </div>
    )
}
const FaqPage = () => {

    return (
        <Layout bgcolor="bg-gray-100">
            <Breadcrumbs page_title={'Faq'} />
            <div className="pb-8">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div
                            className="about-image full-bleed-mobile w-full relative bg-cover bg-bottom mobile bg-center first-image mb-6"
                        //   style={{ backgroundImage: `url(${faqImage})` }}
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="text-orange-500  xl:text-70 text-orange-500 text-4xl md:text-5xl leading-none font-medium relative mb-0">
                                FAQ
                            </h1>
                            <h2 className="xl:text-50 text-2xl sm:text-3xl mt-3">
                                Search the knowledge base
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl px-5 mx-auto">
                    <div className="md:px-8 py-6">
                        <div className="sm:mt-8">                          
                            <div className="sm:mt-8 mx-auto w-full max-w-screen-lg">
                                {questions.map((q, index) => (
                                    <FAQQuestion
                                        key={`q-${index}`}
                                        question={q.question}
                                        answer={q.answer}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
export const Head = () => <Seo 
title="Frequently asked questions on outdoor movie theaters " 
description="Get all the answers you are searching for on how to set up an outdoor movie theater on your property." />
export default FaqPage