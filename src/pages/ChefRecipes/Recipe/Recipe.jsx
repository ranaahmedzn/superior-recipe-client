import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
    const [fav, setFav] = useState(false)
    const [fold, setFold] = useState(false)
    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    const handleFavorite = () => {
        toast.success(`${recipe_name} is your favorite`, {
            position: toast.POSITION.TOP_CENTER
        })
        setTimeout(() => {
            setFav(!fav)
        }, 200)
    }

    return (
        <div className='w-full p-6 flex flex-col justify-between bg-white border-1 border-gray-200 rounded-lg drop-shadow-xl'>
            <div>
                <h2 className='text-2xl font-bold mb-5 w-full text-center p-5 mx-auto rounded-lg border-2 border-[#FB5FA6] bg-gradient-to-r from-[#ff8e882a] to-[#de8adf3a] text-[#FB5FA6]'>{recipe_name}</h2>
                <div className='flex justify-between gap-3'>
                    <div className='w-1/2'>
                        <h4 className='text-lg font-bold'>Ingredients:</h4>
                        <ul className='list-decimal pl-5'>
                            {
                                ingredients.slice(0, 5).map((ingredient, idx) => <li
                                    key={idx}
                                >{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <h4 className='text-lg font-bold'>Cooking Method:</h4>
                        <p>
                            {
                                fold ? <>
                                    {cooking_method}...
                                    <span onClick={() => setFold(!fold)} className='font-bold text-medium text-[#FB5FA6] cursor-pointer'>See Less</span>
                                </>
                                : <>
                                    {cooking_method.slice(0, 90)}...
                                    <span onClick={() => setFold(!fold)} className='font-bold text-medium text-[#FB5FA6] cursor-pointer'>See More</span>
                                </>
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 my-3'>
                    <Rating className='text-xl text-amber-500 mt-auto'
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    />
                    <span className='text-medium font-semibold'>{rating}</span>
                </div>
                <button onClick={handleFavorite} disabled={fav} className='disabled:bg-gray-300 submit-btn w-full flex justify-center gap-2 items-center'>
                    {
                        fav ? <FaBookmark /> : <FaRegBookmark />
                    }
                    <span>Favorite</span>
                </button>
            </div>
        </div>
    );
};

export default Recipe;