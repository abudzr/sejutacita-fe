import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../configs/Redux/action/articles"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ListCategory from "./ListCategory"

// import css
import "../../assets/css/category.css"
import { Button } from "../../components";

// import picture

function Category() {
    // redux
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.category)
    const [state, setState] = useState(null);
    const [isSelected, setisSelected] = useState([]);

    const handleBookmark = (item) => {
        if (isSelected.includes(item)) {
            var index = isSelected.indexOf(item);
            if (index !== -1) {
                isSelected.splice(index, 1);
            }
        } else {
            isSelected.push(item)
        }
        setisSelected([...isSelected])
        dispatch({ type: "GET_LIST_BOOKMARK", payload: isSelected })
    }


    useEffect(() => {
        setTimeout(() => {
            dispatch(getArticles()).then((res) => {
                res.categories.forEach(item => {
                    if (item.name === category) {
                        setState(item.templates)
                    }
                })
            })

        }, 2000);
    }, [dispatch, category]);

    return (
        <>
            <div className="category">
                <div className="container">

                    <h2>Kategori</h2>
                    <ListCategory />
                    {/* <h2 className="pt-5">{category}</h2> */}
                    <div className="container">
                        <div className="row">
                            {state === null ?
                                Array(12)
                                    .fill()
                                    .map((item, index) => {
                                        return (
                                            <div className="col-lg-12 col-12" key={index}>
                                                <div className="card-help mb-3  d-flex">
                                                    <div className="mr-3">
                                                        <SkeletonTheme color="#EEEEEE" highlightColor="#fff" >
                                                            <Skeleton width={311} height={176} />
                                                            <Skeleton width={311} />
                                                        </SkeletonTheme>
                                                    </div>
                                                    <div >
                                                        <SkeletonTheme color="#EEEEEE" highlightColor="#fff" >
                                                            <Skeleton height={50} width={600} />
                                                            <div className="mt-3">
                                                                <Skeleton width={311} count={2} />
                                                            </div>
                                                        </SkeletonTheme>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                :
                                state.filter(templates => templates.title !== undefined).map(templates => {
                                    return <>
                                        <div className="pt-4">
                                            <h2 className="mt-4 mb-5">{templates.title}</h2>
                                            {templates.sections[0].articles.filter(article => article.id !== -1).map((article, index) => {
                                                return (
                                                    <>
                                                        <div className="articles" key={article.id}>
                                                            < img className="mb-5 mr-3 img-article" src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w280`
                                                            } alt="article" />
                                                            <div>
                                                                < h2 className="cursor-pointer link-article" onClick={() => {
                                                                    window.open(article.url.url)
                                                                }}>{article.title}</h2>
                                                                <p className="mt-3 mr-5">{article.publisher}</p>
                                                                <Button
                                                                    title={isSelected.find(item => item.id === article.id) ? "Saved" : "Add To Bookmark"}
                                                                    btn="bookmark"
                                                                    onClick={() => { handleBookmark(article) }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Category