import React, { useEffect, useState } from 'react'
import { UpaymentServices } from '../../utils/services'
import Card from './Card/Card'
import './Products.scss'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function Products() {
    const [products, setProducts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    var { category  }: any = useParams()
    category = category === undefined ? undefined : category.charAt(0).toUpperCase() + category.slice(1)
    
    useEffect(() => {
        if (category === undefined) {
            UpaymentServices.getProducts().then((products) => {
                setProducts(products.products)
                setIsLoading(false)
            })
        }
        else if (category) {
            setIsLoading(true)
            UpaymentServices.getProducts().then((products) => {
               let catg = products.products.filter((product:any)=> product.category === category)
                catg.length > 0 ? setProducts(catg) : setProducts([])
                setIsLoading(false)
            })
        }
    }, [category])
    return (
        isLoading ? <Loader/> :
            <div className="products-container" >
                {products[0] ? products.map((product: any) => (
                    <Card key={product._id} id={product._id} name={product.name} price={product.price} image={product.avatar} />
                )): <div className="no-products">No products found</div>}
            </div>
    )
}
