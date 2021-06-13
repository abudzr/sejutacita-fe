import React, { useState } from 'react'
import "../../assets/css/bookmark.css"
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";


function Bookmark() {
    const dispatch = useDispatch();

    const { bookmark } = useSelector((state) => state.bookmark)

    const [check, setCheck] = useState([]);
    // console.log(check);
    const [activeBtn, setActiveBtn] = useState("");
    // const [load, setLoad] = useState(true);
    const [dataSelected, setDataSelected] = useState([]);

    const handleSelected = (item) => {
        console.log(item);
        setDataSelected([...dataSelected, item]);
        //   const newId = isSelected.push(String(item.id));
    };

    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // const index = bookmark.indexOf(dataSelected);
                // if (index > -1) {
                //     bookmark.splice(index, 1);
                // }
                dispatch({ type: "GET_LIST_BOOKMARK", payload: [] })
            }
        });
    };
    const handleRemove = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                const index = bookmark.indexOf(item);
                if (index > -1) {
                    bookmark.splice(index, 1);
                }
                dispatch({ type: "GET_LIST_BOOKMARK", payload: bookmark })
            }
        })
    }

    const handleCheck = (e) => {
        if (check.includes(e.target.id)) {
            const index = check.indexOf(e.target.id);
            if (index > -1) {
                check.splice(index, 1);
            }
            setCheck(check);
        } else {
            setCheck([...check, e.target.id]);
        }
    };


    return (
        <div className="bookmark-page ">
            <div className="container">
                <h2>Bookmark</h2>
                {/* Select items */}
                <div className="card border-0 p-2 mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <input
                                className="form-check-input bg-danger border-0 rounded-0 shadow-none"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => {
                                    if (check.length === bookmark.length) {
                                        setCheck([]);
                                    } else {
                                        setCheck(
                                            bookmark.map((item) => item.id.toString())
                                        );
                                    }
                                }}
                                checked={
                                    bookmark && check.length === bookmark.length
                                        ? true
                                        : false
                                }
                            />
                            <span className="fw-bold ms-3 me-auto me-md-0">
                                Select all items
                            </span>
                            <span className="text-muted ms-1 me-auto d-none d-md-block">
                                ({check.length} items selected)
                            </span>
                            <button
                                className="btn text-danger fw-bold border-danger"
                                onClick={handleDelete}
                                disabled={check.length === bookmark.length ? false : true}
                            >
                                Delete All
                            </button>
                        </div>
                    </div>
                </div>
                {/* end selecet items */}
                <div>
                    {bookmark.map((item, index) => {
                        return (
                            <>
                                <div className="card p-2  border-0 mb-3" key={index}>
                                    <div className="card-body">
                                        <div className="d-sm-block d-md-flex justify-content-between align-items-center">
                                            <input
                                                className=" form-check-input bg-danger border-0 rounded-0 shadow-none"
                                                type="checkbox"
                                                id={item.id}
                                                onChange={handleCheck}
                                                checked={check.includes(item.id.toString())}
                                                onClick={() => handleSelected(item)}
                                            />

                                            <div className="ml-3 mr-3 d-none d-md-flex  ">
                                                <img
                                                    alt="item"
                                                    src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w280`}
                                                />
                                            </div>
                                            <div >
                                                <span
                                                    className="fw-bold d-inline-block"
                                                >
                                                    {item.title}
                                                </span>
                                                <span
                                                    className="fw-bold d-inline-block"
                                                // style={{ maxWidth: "180px" }}
                                                >
                                                    {item.publisher}
                                                </span>
                                            </div>
                                            <div
                                                className="d-inline-block mt-3  mt-sm-3 mt-md-0 ms-0 ms-sm-5 ms-md-0 float-start text-center"
                                                style={{ width: "180px" }}
                                            >
                                                <button
                                                    className={`btn btn-grup radius-50 shadow-none  ${activeBtn === `remove-${index}`
                                                        ? "btn-active"
                                                        : ""
                                                        }`}
                                                    onClick={(e) => {
                                                        handleRemove(item);
                                                        setActiveBtn(`remove-${index}`);
                                                    }}
                                                >
                                                    <i className="fa fa-trash delete" />
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bookmark
