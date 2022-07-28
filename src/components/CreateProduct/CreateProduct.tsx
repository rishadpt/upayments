import React, { useEffect, useState } from 'react'
import { UpaymentServices } from '../../utils/services'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import './CreateProduct.scss'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

export default function CreateProduct() {
  const [category, setCategory] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    setIsLoading(true)
    UpaymentServices.postProduct(data).then(() => {
      reset()
      setIsLoading(false)
      navigate('/')
    })

  }

  useEffect(() => {
    document.title = 'Create Product'
    UpaymentServices.getCategory().then((category) => {
      setCategory(category)
    })
    setIsLoading(false)

  }, [])
  return (
    isLoading ? <Loader /> :
      <div className="create-product-container">
        <Header />
        <div className="create-product-content">
          <h1>Create Product</h1>
          <form  id="form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Product name" {...register("name", { required: true, maxLength: 50 })} />
            {errors.name && <p className="err">Please check the Product Name</p>}
            <textarea placeholder="description"  {...register("description", { required: true, maxLength: 1000 })} />
            {errors.description && <p className="err">Please check the description</p>}
            <input type="text" placeholder="image URL" {...register("avatar", { required: true, maxLength: 300 })} />
            {errors.avatar && <p className="err">Please check the image URL</p>}
            <select   {...register("category", { required: true, maxLength: 300 })}>
              <option value="" selected disabled>Categories</option>
              {category && category.map((category: any) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            {errors.category && <p className="err">Please check the category</p>}
            <input type="number" placeholder="price" {...register("price", { required: true, maxLength: 6 })} />
            {errors.price && <p className="err">Please check the price</p>}
            <button id="button" type="submit" >SUBMIT</button>
          </form>
        </div>

      </div>
  )
}
