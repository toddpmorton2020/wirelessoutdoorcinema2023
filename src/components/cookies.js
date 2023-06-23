import React from "react"
import { Link } from "gatsby"

function Cookies({ setCookies }) {
  return (
    <div className="reative w-full bottom-0 py-3 cookie-back text-white">
      <div className="max-w-7xl mx-auto max-w-4xl flex flex-col sm:flex-row flex-wrap items-center justify-center lg:px-0 px-5">
        <h3 className="sm:text-lg text-base text-center lg:mb-0 mb-3">
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <Link to="/privacy" className="cursor-pointer text-orange-500 no-underline">
            Learn More
          </Link>
        </h3>
        <span
          onClick={setCookies}
          className="bg-orange-500 uppercase text-white cursor-pointer font-bold px-6 py-2 transition-colors duration-300 rounded-sm ml-3 hover:bg-orange-600 mt-1 sm:mt-0"
        >
          I Accept
        </span>
      </div>
    </div>
  )
}

export default Cookies
