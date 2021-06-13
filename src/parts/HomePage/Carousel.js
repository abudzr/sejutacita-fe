import React, { useEffect, useState } from "react"
// import redux
import { useDispatch, useSelector } from "react-redux";
// import { getTestimoni } from "../../configs/Redux/action/testimoni"
import { getArticles } from "../../configs/Redux/action/articles"

// import package
import Carousel from "react-elastic-carousel";
import Item from "./Item"
// import css
import "../../assets/css/carouselHome.css"


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2.5, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2.5 },
    { width: 1200, itemsToShow: 2.5 }
];

function CarouselHome() {
    // redux
    const dispatch = useDispatch();

    const [state, setState] = useState(null);
    const { category } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getArticles()).then((res) => {
            res.categories.forEach(item => {
                if (item.name === category) {
                    setState(item.templates)
                }
            })
        })
    }, [dispatch, category]);

    return (
        <>
            <div className="carousel-home">
                <div className=" carousel-wrapper">
                    {state &&
                        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
                            {state.filter(templates => templates.title !== undefined).map((templates, index) => {
                                return <>
                                    {templates.sections[0].articles.filter(article => article.id !== -1).map((article, index) => {
                                        return (
                                            <>
                                                <Item key={article.id + 1}>
                                                    <img src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w280`} alt="/" />
                                                </Item>
                                            </>
                                        )
                                    })}
                                </>
                            })}
                        </Carousel>
                    }
                </div>
            </div>
        </>
    )
}

export default CarouselHome