import React, { useRef, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const ConnectPage = () => {
    const form = useRef(null)
    const [error, setError] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        setError("")
        const {
            firstName,
            lastName,
            email,
            phone,
            interested,
            aboutUs,
            message,
        } = form.current
        if (
            !firstName.value ||
            !lastName.value ||
            !email.value ||
            !interested.value ||
            !aboutUs.value
        )
            return setError("Please fill in all required fields")
        const formData = new FormData()
        formData.append("First Name", firstName.value)
        formData.append("Last Name", lastName.value)
        formData.append("Email", email.value)
        formData.append("Phone", phone.value)
        formData.append("I'm Interested In", interested.value)
        formData.append("Where Did You Hear About Us", aboutUs.value)
        formData.append("Message", message.value)
        const req = new XMLHttpRequest()
        req.open(
            "POST",
            "https://getform.io/f/f0d3e96f-9157-4357-a123-5f10cf924ec0"
        )
        req.send(formData)
        setSubmitted(true)
    }
    return (
        <Layout bgcolor="bg-gray-100">
            <Breadcrumbs />
            <div>
                <div className="pt-5 overflow-hidden md:pb-20 pb-10">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div className="md:hidden w-full full-bleed-mobile relative mt-6 mb-6">
                            <StaticImage
                                className="max-w-full w-full h-full object-cover object-top "
                                src="../assets/images/todd-wireless-outdoor-cinema.png"
                            />
                        </div>
                        <div className="mt-8">
                            <h1 className="text-orange-500 mb-6 text-4xl md:text-5xl xl:text-70 relative">
                                Let&apos;s <span className="text-black">Connect</span>
                            </h1>
                        </div>
                        <div className="mt-4 flex">
                            <div className="md:w-7/12">
                                <div className="md:max-w-xl">
                                    <div className="flex items-center mb-4 font-thin">
                                        <div className="w-16">
                                            <StaticImage src="../assets/images/icons/phoneicon.png" className="w-10" />
                                        </div>
                                        <div>
                                            <p className="mb-0 sm:text-lg text-base max-w-full">
                                                Phone:{" "}
                                                <Link className="no-underline text-neutral-600 font-normal" to="tel:207-647-8759">
                                                    207-647-8759
                                                </Link>
                                            </p>
                                            <p className="mb-0 sm:text-lg text-base max-w-full">
                                                Text:{" "}
                                                <Link className="no-underline text-neutral-600 font-normal" to="tel:207-595-2960">
                                                    207-595-2960
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className="w-16">
                                            <StaticImage src="../assets/images/icons/emailicon.png" className="w-10" />
                                        </div>
                                        <div>
                                            <p className="mb-0 sm:text-lg text-base max-w-full">
                                                Email:{" "}
                                                <Link
                                                    className="no-underline text-neutral-600 font-normal"
                                                    to="mailto:todd@wirelessoutdoorcinema.com"
                                                >
                                                    todd@wirelessoutdoorcinema.com
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className="w-16">
                                            <StaticImage src="../assets/images/icons/homeicon.png" className="w-10 mb-0" />
                                        </div>
                                        <div>
                                            <p className="sm:text-lg text-base max-w-full mb-0">
                                                Wireless Outdoor Cinema Company
                                                <br />
                                                PO Box 752
                                                <br />
                                                Bridgton, Maine 04009
                                            </p>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl xl:text-50 lg:text-4xl mt-6">
                                        What are you interested in learning more about?
                                    </h2>
                                    <p className="mt-4 what-interested sm:text-lg text-base max-w-full mb-0">
                                        Take a moment to fill in the required fields and you will
                                        get a friendly response back within 24 hours or sooner.
                                        Looking forward to connecting.
                                    </p>
                                    <form className="mt-6 sm:text-lg text-base max-w-full" onSubmit={handleSubmit} ref={form}>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="sm:py-4 ">
                                                <label for="firstName">
                                                    First name<span className="text-orange-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className="standard-input w-full rounded border border-slate-300 py-2 px-4"
                                                />
                                            </div>
                                            <div className="sm:py-4">
                                                <label for="lastName">
                                                    Last name<span className="text-orange-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    className="standard-input w-full rounded border border-slate-300 py-2 px-4"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4 pt-4 sm:pt-0">
                                            <div className="sm:py-4">
                                                <label for="email">
                                                    Email<span className="text-orange-600">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="standard-input w-full rounded border border-slate-300 py-2 px-4"
                                                />
                                            </div>
                                            <div className="sm:py-4">
                                                <label for="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="standard-input w-full rounded border border-slate-300 py-2 px-4"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 pt-4 sm:pt-0 gap-4">
                                            <div className="sm:py-4">
                                                <label for="interested">
                                                    I&apos;m interested in
                                                    <span className="text-orange-600">*</span>
                                                </label>
                                                <select name="interested" className="standard-input w-full rounded border border-slate-300 py-2 px-4">
                                                    <option value="">Select</option>
                                                    <option value="96” Jedi Bobcat Wireless Outdoor Cinema">
                                                        96” Jedi Bobcat Wireless Outdoor Cinema
                                                    </option>
                                                    <option value="120” Bella Bear Wireless Outdoor Cinema">
                                                        120” Bella Bear Wireless Outdoor Cinema
                                                    </option>
                                                    <option value="150” Big Moose Wireless Outdoor Cinema">
                                                        150” Big Moose Wireless Outdoor Cinema
                                                    </option>
                                                    <option value="Media Relations">
                                                        Media Relations
                                                    </option>
                                                    <option value="Cinema Installers">
                                                        Cinema Installers
                                                    </option>
                                                    <option value="Partnerships">Partnerships</option>
                                                    <option value="Cinema Support">Cinema Support</option>
                                                    <option value="General Question">
                                                        General Question
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="sm:py-4">
                                                <label for="aboutUs">
                                                    Where did you hear about us
                                                    <span className="text-orange-600">*</span>
                                                </label>
                                                <select name="aboutUs" className="standard-input w-full rounded border border-slate-300 py-2 px-4">
                                                    <option value="">Select</option>
                                                    <option value="Frank 107.5 FM">Frank 107.5 FM</option>
                                                    <option value="Bridgton Newspaper">
                                                        Bridgton Newspaper
                                                    </option>
                                                    <option value="Conway Daily Sun Newspaper">
                                                        Conway Daily Sun Newspaper
                                                    </option>
                                                    <option value="Portland Press Herald">
                                                        Portland Press Herald
                                                    </option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="Bing Search">Bing Search</option>
                                                    <option value="Yahoo Search">Yahoo Search</option>
                                                    <option value="The big moose told me">
                                                        The Big Moose told me
                                                    </option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <label for="message">Message</label>
                                            <textarea
                                                name="message"
                                                className="standard-input resize-none w-full rounded border border-slate-300 py-2 px-4"
                                            ></textarea>
                                        </div>
                                        <div className="py-4">
                                            <input
                                                type="submit"
                                                value="Submit"
                                                className="cursor-pointer outline-none bg-orange-500 text-white py-3 px-12 uppercase font-bold rounded duration-300 transition hover:bg-orange-600"
                                            />
                                            {error && (
                                                <p className="mt-4 text-sm text-red-600">{error}</p>
                                            )}
                                            {submitted && (
                                                <p className="mt-4 text-sm text-green-600">
                                                    Your submission has been sent. We will get back to you
                                                    as soon as possible.
                                                </p>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="hidden md:block flex-1 pl-6 xl:pl-0">
                                <div className="w-full shadow-xl rounded-lg xl:-mt-10">
                                    <StaticImage
                                        src="../assets/images/todd.jpg"
                                        className="w-full shadow-xl rounded-lg todd-image"
                                    />
                                </div>
                                <div className="mt-8 text-center">
                                    {/* <span className="left-0 top-0 absolute text-6xl text-orange-500 leading-none">
                                        &ldquo;
                                    </span> */}
                                    <p className="relative quote-todd-orange text-2xl xl:text-3xl leading-tight px-8 xl:px-6">
                                        My wireless outdoor cinemas are designed to be used
                                        year-round and know you will love this experience as much as
                                        I do.
                                    </p>
                                    {/* <span className="absolute bottom-0 leading-none right-0 text-6xl text-orange-500 transform translate-y-8">
                                        &rdquo;
                                    </span> */}
                                </div>
                                <div className="w-full mx-auto text-center">
                                    <StaticImage src="../assets/images/signature.png" className="w-1/2 mt-3 mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-12">
                    <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3JtmXYkylvqwlYq43BFLXVRxds3fyFHM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
                </div> */}
            </div>

        </Layout>
    )
}

export default ConnectPage