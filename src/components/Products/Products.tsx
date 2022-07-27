import React, { useEffect, useState } from 'react'
import { UpaymentServices } from '../../utils/services'
import Card from './Card/Card'
import './Products.scss'
import { useParams } from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { category  }: any = useParams()
    console.log(category)
    useEffect(() => {
        if (category === undefined) {
            UpaymentServices.getProducts().then((products) => {
                setProducts(products)
                setIsLoading(false)
            })
        }
        else if (category) {
            console.log('t')
            products.filter((product) => {
                if (product.category === category) {
                    console.log(product)
                    setProducts(product)
                    setIsLoading(false)
                }
            })
        }
    }, [category])

    return (
        isLoading ? <div>Loading...</div> :
            <div className="products-container" >
                {products.map((product: any) => (
                    <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.avatar} />
                ))}
            </div>
    )
}
