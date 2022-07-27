import React, { useEffect, useState } from 'react'
import { UpaymentServices } from '../../utils/services';
import Header from '../Header/Header'
import Avatar from '../Products/Card/Avatar/Avatar'
import './Productinfo.scss'
import { useParams } from 'react-router-dom'

export default function Productinfo() {
    const [products, setProducts] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { id }:any = useParams()

    useEffect(() => {
      UpaymentServices.getProductbyId(id).then((product) => {
        setProducts(product);
        setIsLoading(false);
      }
        );  
    }, [])
    


  return (
    isLoading ? <div>Loading...</div> :
    <div className="product_info-container">
        <Header/>
        <div  className="product_info-content">
            <Avatar avatar={products.avatar} style="13rem"/>
            <div className="product_name_price">
                <h1>{products.name}</h1>
                <p>$ {products.price}</p>
            </div>
            </div>
        <div className="description">
            <div className="description__border"></div>
            <h2 >Description</h2>
            <p>{products.description}</p>
        </div>
    </div>
  )
}
