import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import CreateBtn from './CreateBtn/CreateBtn'
import './Home.scss'
import { BiChevronDown } from 'react-icons/bi'
import Products from '../Products/Products'
import { UpaymentServices } from '../../utils/services'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [categories, setCategories] = useState<any[]>([])
    const navigate = useNavigate()
    const changeQuery = (category: string) => {
        let categories = category.toLowerCase()
        navigate(`/category/${categories}`)
    }
    useEffect(() => {
        document.title = 'Upayments Store'
        UpaymentServices.getCategory().then(
            (categories) => {
                setCategories(categories)
            }
        )
    }, [])

    return (
        <div className="home-container">
            <Header />
            <CreateBtn />
            <div className="search_categories_container">
                <input className="child__common" type="text" placeholder="Apple Watch, Samsung S21, MacbookPro, ..." />

                <div className="select-main child__common">
                    <select>
                        <option selected disabled>Categories</option>
                        {categories && categories.map((category: any) => (
                            <option onClick={() => changeQuery(category.name)} id={category.id} key={category.id}>{category.name}</option>))}
                    </select>
                    <BiChevronDown />
                </div>
            </div>
            <div className="card__container">
                <Products />

            </div>

        </div>
    )
}
