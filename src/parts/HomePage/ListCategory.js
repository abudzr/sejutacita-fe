import "../../assets/css/category.css";
import React, { useState, useEffect } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { getCategory } from "../../configs/Redux/action/articles"
import { useDispatch } from "react-redux";


const ListCategory = () => {
    const dispatch = useDispatch();
    const [selected, setIsSelected] = useState("TOP");
    const [list, setList] = useState([])

    const MenuItem = ({ text, selected }) => {
        return (
            <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
        );
    };

    const Menu = (list, selected) =>
        list.map((el) => {
            const { name } = el;

            return <MenuItem text={name} key={name} selected={selected} />;
        });

    const menuItems = Menu(list, selected);

    const onSelect = (key) => {
        dispatch({ type: 'GET_LIST_CATEGORY_ACTIVE', payload: key })
        setIsSelected(key);
    };

    useEffect(() => {
        dispatch(getCategory()).then((res) => {
            setList(res.categoryList)
        })
    }, [dispatch])

    return (
        <div>
            <div className="list-category">
                <ScrollMenu
                    data={menuItems}
                    // arrowLeft={ArrowLeft}
                    // arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={onSelect}
                />
            </div>
        </div>
    );
};
export default ListCategory;
