import { ServiceProps } from "./type";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const UpaymentServices: ServiceProps = {

    getProducts: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}products`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    getProductbyId: (id) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}products/${id}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    getCategory: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}categories`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    getProductbyCategory: (id) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}categories/${id}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    postProduct: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    description: data.description,
                    avatar: data.avatar,
                    category: data.category,
                    price: data.price,
                    developerEmail: 'rishadpt16@gmail.com'
                })
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

} 