import axios from 'axios'


export const getArticles = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const Url = process.env.REACT_APP_API_LINE
            axios.get(Url)
                .then((res) => {
                    dispatch({ type: 'GET_LIST_ARTICLES', payload: res.data.result });
                    resolve(res.data.result)
                })
                .catch((err) => {
                    reject(err)
                });
        });
    };
};

export const getCategory = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const Url = process.env.REACT_APP_API_LINE
            axios.get(Url)
                .then((res) => {
                    dispatch({ type: 'GET_LIST_CATEGORY', payload: res.data.result });
                    resolve(res.data.result)
                })
                .catch((err) => {
                    reject(err)
                });
        });
    };
};