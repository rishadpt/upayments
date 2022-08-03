import React, { useEffect, useState } from 'react'
import { UpaymentServices } from '../../utils/services';
import Header from '../Header/Header'
import Avatar from '../Products/Card/Avatar/Avatar'
import './Productinfo.scss'
import { useParams } from 'react-router-dom'
import {AiTwotoneDelete} from 'react-icons/ai'
import Loader from '../Loader/Loader';

export default function Productinfo() {
    const [products, setProducts] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const { id }:any = useParams()

    useEffect(() => {

      UpaymentServices.getProductbyId(id).then((product) => {
    
        if(product.product.name){
         
        setProducts(product.product);
        setIsLoading(false);
         }
        else{
          window.location.href = '/404'
          setIsLoading(false);
        }
      }
        );  
    }, [])
    

const deleteProduct = () => {
  window.confirm('Are you sure you want to delete this product?') &&
  setIsLoading(true);
  UpaymentServices.deleteProduct(id).then(() => {
    setIsLoading(false);
    window.location.href = '/'

  }
  )

}
  return (
    isLoading ? <Loader/> :
    <div className="product_info-container">
        <Header/>
        <div  className="product_info-content">
            <Avatar avatar={products.avatar ? products.avatar : 'No Image Found'} style="13rem"/>
            <div className="product_name_price">
                <h1>{products.name ? products.name : 'No Name Found'}</h1>
                <p>$ {products.price}</p>
            </div>
            <AiTwotoneDelete onClick={deleteProduct} style={{fontSize:'2rem',cursor:'pointer'}} />
            </div>
        <div className="description">
            <div className="description__border"></div>
            <h2 >Description</h2>
            <p>{products.description ? products.description : 'No Description Found'}</p>
        </div>
    </div>
  )
}
