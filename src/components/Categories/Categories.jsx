import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise =fetch("/public/categories.json").then(res=>res.json())

const Categories = () => {
    const allCategory = use(categoriesPromise)
    // console.log(allCategory)
    return (
        <div>
            <h2 className='font-semibold'>All Caterogy: {allCategory.length}</h2>
            <div className='flex flex-col gap-6 mt-5'>
                {
                   allCategory.map(category=><NavLink to={`/category/${category.id}`}
                    className={ 'btn bg-white border-0 hover:bg-base-300 hover:text-black text-gray-500'}
                     key={category.id}>{category.name}</NavLink>) 
                }
            </div>
        </div>
    );
};

export default Categories;