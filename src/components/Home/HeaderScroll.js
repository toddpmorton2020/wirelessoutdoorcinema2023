import React from "react";
import { Link } from "gatsby";

const HeaderScroll =() => {
    return(
        <>
         <div className="desktop-subnav bg-black/[.8] z-30 sticky top-0 hidden sm:block -mt-mx border-b border-grey-subnav">
        <div className="container mx-auto px-5 h-12">
          <div className="flex justify-between text-white content-center h-full">
            <div className="hidden xl:flex text-lg h-full items-center">
              <span>How-to build a professional outdoor movie theater</span>
            </div>
            <ul className="m-0 p-0 flex justify-between xl:justify-end text-xs xl:text-sm h-full items-center w-full xl:w-auto">
              <li className="mr-1 xl:mr-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">
                  <span>What You Get</span>
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">
                  <span>Systems</span>
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">
                  Frames
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">Screens</Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">
                Projector Stand
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">
                Features
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#" className="no-underline text-white hover:text-orange-500">
                Compare
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#faq" className="no-underline text-white hover:text-orange-500">FAQ</Link>
              </li>
              <li className="ml-1 xl:ml-4 mb-0">
                <Link to="#" className="px-2 py-1 xl:px-4 bg-orange-1000 rounded-md text-white no-underline">
                  Get Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </>
    )
}

export default HeaderScroll