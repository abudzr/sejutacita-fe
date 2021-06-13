import React from "react"
import { Footer, Navbar, ScrollToTop } from "../../components"
import Bookmark from "../../parts/Bookmark/Bookmark"

function bookmark() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Bookmark />
            <Footer />
        </>
    )
}

export default bookmark