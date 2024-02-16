import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const PrivacyPage = () => {
    return (
        <Layout bgcolor="bg-gray-100">
            <Breadcrumbs />
            <>
                <div className="pb-8">
                    <div className="py-5 overflow-hidden">
                        <div className="max-w-7xl px-5 mx-auto">
                            <div className="md:hidden relative mt-6 mb-6">
                                <StaticImage className="w-full h-full object-cover " src="../assets/images/privacy.png" />
                            </div>
                            <div className="mt-8">
                                <h1 className="text-orange-500  xl:text-70 text-orange-500 text-4xl md:text-5xl leading-none font-medium relative mb-0">
                                    Privacy{" "}
                                    <span className="text-orange-500 sm:text-black">Policy</span>
                                </h1>
                            </div>
                            <div className="mt-2">
                                <div className="text-2xl xl:text-3xl hide">
                                    <h3 className="privacy-margin-subHeading">Protecting your private information</h3>
                                </div>
                                <div className="mt-6 privacy-padding">
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        This Statement of Privacy applies to
                                        www.wirelessoutdoorcinema.com and The Wireless Outdoor Cinema
                                        and governs data collection and usage. For the purposes of
                                        this Privacy Policy, unless otherwise noted, all references to
                                        The Wireless Outdoor Cinema include
                                        www.wirelessoutdoorcinema.com and Wireless Outdoor Cinema. The
                                        Wireless Outdoor Cinema website is a Marketing information of
                                        how to purchase a Wireless Outdoor Cinema Package site. By
                                        using the Wireless Outdoor Cinema website, you consent to the
                                        data practices described in this statement.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Collection of your Personal Information</b>
                                        <br />
                                        Wireless Outdoor Cinema may collect anonymous demographic
                                        information, which is not unique to you, such as your:
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        - Age
                                        <br />
                                        - Gender
                                        <br />
                                        - Race
                                        <br />- Household Income
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        We do not collect any personal information about you unless
                                        you voluntarily provide it to us. However, you may be required
                                        to provide certain personal information to us when you elect
                                        to use certain products or services available on the Site.
                                        These may include: (a) registering for an account on our Site;
                                        (b) entering a sweepstakes or contest sponsored by us or one
                                        of our partners; (c) signing up for special offers from
                                        selected third parties; (d) sending us an email message; (e)
                                        submitting your credit card or other payment information when
                                        ordering and purchasing products and services on our Site. To
                                        wit, we will use your information for, but not limited to,
                                        communicating with you in relation to services and/or products
                                        you have requested from us. We also may gather additional
                                        personal or non-personal information in the future.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base" >
                                        <b>Sharing Information with Third Parties</b>
                                        <br />
                                        Wireless Outdoor Cinema does not sell, rent or lease its
                                        customer lists to third parties.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        Wireless Outdoor Cinema may, from time to time, contact you on
                                        behalf of external business partners about a particular
                                        offering that may be of interest to you. In those cases, your
                                        unique personally identifiable information (e-mail, name,
                                        address, telephone number) is not transferred to the third
                                        party. Wireless Outdoor Cinema may share data with trusted
                                        partners to help perform statistical analysis, send you email
                                        or postal mail, provide customer support, or arrange for
                                        deliveries. All such third parties are prohibited from using
                                        your personal information except to provide these services to
                                        Wireless Outdoor Cinema, and they are required to maintain the
                                        confidentiality of your information.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        Wireless Outdoor Cinema may disclose your personal
                                        information, without notice, if required to do so by law or in
                                        the good faith belief that such action is necessary to: (a)
                                        conform to the edicts of the law or comply with legal process
                                        served on Wireless Outdoor Cinema or the site; (b) protect and
                                        defend the rights or property of Wireless Outdoor Cinema;
                                        and/or (c) act under exigent circumstances to protect the
                                        personal safety of users of Wireless Outdoor Cinema, or the
                                        public.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Tracking User Behavior</b>
                                        <br />
                                        Wireless Outdoor Cinema may keep track of the websites and
                                        pages our users visit within Wireless Outdoor Cinema, in order
                                        to determine what Wireless Outdoor Cinema services are the
                                        most popular. This data is used to deliver customized content
                                        and advertising within Wireless Outdoor Cinema to customers
                                        whose behavior indicates that they are interested in a
                                        particular subject area.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Automatically Collected Information</b>
                                        <br />
                                        Information about your computer hardware and software may be
                                        automatically collected by Wireless Outdoor Cinema. This
                                        information can include: your IP address, browser type, domain
                                        names, access times and referring website addresses. This
                                        information is used for the operation of the service, to
                                        maintain quality of the service, and to provide general
                                        statistics regarding use of the Wireless Outdoor Cinema
                                        website.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Security of your Personal Information</b>
                                        <br />
                                        Wireless Outdoor Cinema secures your personal information from
                                        unauthorized access, use, or disclosure. Wireless Outdoor
                                        Cinema uses the following methods for this purpose:
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">- SSL Protocol</p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        When personal information (such as a credit card number) is
                                        transmitted to other websites, it is protected through the use
                                        of encryption, such as the Secure Sockets Layer (SSL)
                                        protocol.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        We strive to take appropriate security measures to protect
                                        against unauthorized access to or alteration of your personal
                                        information. Unfortunately, no data transmission over the
                                        Internet or any wireless network can be guaranteed to be 100%
                                        secure. As a result, while we strive to protect your personal
                                        information, you acknowledge that: (a) there are security and
                                        privacy limitations inherent to the Internet which are beyond
                                        our control; and (b) security, integrity, and privacy of any
                                        and all information and data exchanged between you and us
                                        through this Site cannot be guaranteed.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Right to Deletion</b>
                                        <br />
                                        Subject to certain exceptions set out below, on receipt of a
                                        verifiable request from you, we will:
                                    </p>
                                        <ul className="list-outside list-disc md:pl-12 pl-4">
                                            <li className="sm:text-lg text-base">
                                                Delete your personal information from our records; and
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Direct any service providers to delete your personal
                                                information from their records.
                                            </li>
                                        </ul>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        Please note that we may not be able to comply with requests to
                                        delete your personal information if it is necessary to:
                                    </p>
                                        <ul className="list-disc md:pl-12 pl-4">
                                            <li className="sm:text-lg text-base">
                                                Complete the transaction for which the personal
                                                information was collected, fulfill the terms of a written
                                                warranty or product recall conducted in accordance with
                                                federal law, provide a good or service requested by you,
                                                or reasonably anticipated within the context of our
                                                ongoing business relationship with you, or otherwise
                                                perform a contract between you and us;
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Detect security incidents, protect against malicious,
                                                deceptive, fraudulent, or illegal activity; or prosecute
                                                those responsible for that activity;
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Debug to identify and repair errors that impair existing
                                                intended functionality;
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Exercise free speech, ensure the right of another consumer
                                                to exercise his or her right of free speech, or exercise
                                                another right provided for by law;
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Comply with the California Electronic Communications
                                                Privacy Act;
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Engage in public or peer-reviewed scientific, historical,
                                                or statistical research in the public interest that
                                                adheres to all other applicable ethics and privacy laws,
                                                when our deletion of the information is likely to render
                                                impossible or seriously impair the achievement of such
                                                research, provided we have obtained your informed consent;
                                            </li>
                                            <li className="sm:text-lg text-base">
                                                Enable solely internal uses that are reasonably aligned
                                                with your expectations based on your relationship with us;
                                            </li>
                                            <li className="sm:text-lg text-base">Comply with an existing legal obligation; or</li>
                                            <li className="sm:text-lg text-base">
                                                Otherwise use your personal information, internally, in a
                                                lawful manner that is compatible with the context in which
                                                you provided the information.
                                            </li>
                                        </ul>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Children Under Thirteen</b>
                                        <br />
                                        Wireless Outdoor Cinema does not knowingly collect personally
                                        identifiable information from children under the age of
                                        thirteen. If you are under the age of thirteen, you must ask
                                        your parent or guardian for permission to use this website.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>E-mail Communications</b>
                                        <br />
                                        From time to time, Wireless Outdoor Cinema may contact you via
                                        email for the purpose of providing announcements, promotional
                                        offers, alerts, confirmations, surveys, and/or other general
                                        communication. In order to improve our Services, we may
                                        receive a notification when you open an email from Wireless
                                        Outdoor Cinema or click on a link therein.
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        If you would like to stop receiving marketing or promotional
                                        communications via email from Wireless Outdoor Cinema, you may
                                        opt out of such communications by preference.html page to
                                        opt-out or select preferences on how they would like to
                                        communicated with..
                                    </p>
                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                        <b>Changes to this Statement</b>
                                        <br />
                                        Wireless Outdoor Cinema reserves the right to change this
                                        Privacy Policy from time to time. We will notify you about
                                        significant changes in the way we treat personal information
                                        by sending a notice to the primary email address specified in
                                        your account, by placing a prominent notice on our site,
                                        and/or by updating any privacy information on this page. Your
                                        continued use of the Site and/or Services available through
                                        this Site after such modifications will constitute your: (a)
                                        acknowledgment of the modified Privacy Policy; and (b)
                                        agreement to abide and be bound by that Policy.
                                    </p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}
export default PrivacyPage