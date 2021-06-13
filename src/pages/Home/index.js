import React from "react"
import { Footer, Navbar, ScrollToTop } from "../../components"
import Carousel from "../../parts/HomePage/Carousel"
import Category from "../../parts/HomePage/Category"

function home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <Category />
            <ScrollToTop />
            <Footer />
        </>
    )
}

export default home