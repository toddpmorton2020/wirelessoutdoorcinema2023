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
            "Maine, New Hampshire, Vermont, and Massachusetts. Online packages will be available in December 2021 to North America.",
    },
    {
        question: "Does the Wireless Outdoor Cinema Company have insurance?",
        answer: "Yes \u2013 a one million dollar liability insurance policy.",
    },
    {
        question: "How easy are the cinemas to install and take down?",
        answer:
            "The movie screen frame stays up year-round and you only need to attach the cinematic screen to the frame when you want to watch a movie. The projector and other electronic components stay neatly organized on a custom projector stand and you simply carry the stand with everything on it inside at the end of the night. To setup and start watching movies takes less time than it does to pop a bag of popcorn in the microwave.",
    },
    {
        question: "Is the cinema package waterproof?",
        answer:
            "Only the pressure-treated frame is waterproof and weather-resistant. The screen, projector, off-grid battery, speaker and stand should be taken back inside when you\u0027re done watching.",
    },
    {
        question: "Can I watch movies during the day?",
        answer: "No. You can start watching around dusk.",
    },
    {
        question: "What time can I start watching movies outside?",
        answer:
            "You can start watching movies at dusk or 30 minutes before it gets dark out. The projector performs best when it\u0027s dark outside.",
    },
    {
        question: "How do I use my Wireless Outdoor Cinema in the colder months?",
        answer:
            "Compliment your outdoor cinema package with an old fashion campfire, or get a propane style outdoor campfire setup, or a propane heat lamp to stay warm while watching.",
    },
    {
        question: "Do you rent your Wireless Outdoor Movie Cinemas?",
        answer:
            "Yes \u2013 with a within a 30 mile radius of zip code 04009. Rental packages start at $399 per night.",
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
            <Breadcrumbs />
            <div className="pb-8">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div
                            className="about-image full-bleed-mobile w-full relative bg-cover bg-bottom mobile bg-center first-image mb-6"
                        //   style={{ backgroundImage: `url(${faqImage})` }}
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="text-orange-500 mb-0 text-3xl sm:text-5xl xl:text-70 uppercase relative mt-8">
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
export default FaqPage