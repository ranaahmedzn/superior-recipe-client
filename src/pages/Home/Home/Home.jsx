import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Categories from '../Categories/Categories';

const Home = () => {
    const chefs = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <section className='max-w-screen-xl mx-auto px-16 py-16'>
                <div className="text-center space-y-3">
                    <h3 className='text-3xl font-bold'>Meet the Top Italian Chefs</h3>
                    <p className='w-3/4 mx-auto text-gray-600'>Get to Know the Best Italian Chefs and Their Secrets to Success. Explore the World of Italian Cuisine and Learn from the Masters. From Traditional Flavors to Modern Techniques, Discover What Makes These Chefs Stand Out.</p>
                    
                    <div className='py-5 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        {
                            chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                            ></ChefCard>)
                        }
                    </div>
                </div>
            </section>
            <Categories></Categories>
        </div>
    );
};

export default Home;