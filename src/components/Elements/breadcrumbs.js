import * as React from "react"
import { Link } from "gatsby"

const Breadcrumbs = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
        <div className="pt-5">
            <div className="flex items-center text-sm">
                <Link to="/" className="text-blue-600 sm:text-black sm:text-lg text-base cursor-pointer no-underline">
                    Home
                </Link>
                <span className="mx-1 sm:mx-2">&gt;</span>
                <span to="#" className="sm:text-lg text-base">About</span>
            </div>
        </div>
        </div>
    )
}
export default Breadcrumbs