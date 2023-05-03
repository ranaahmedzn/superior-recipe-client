import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const LoaderPage = () => {
    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center'>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#2ec4b6', '#2ec4b6', '#2ec4b6', '#2ec4b6', '#2ec4b6']}
            />
            <h3 className='font-bold text-3xl ml-5 -mt-2'>Loading..</h3>
        </div>
    );
};

export default LoaderPage;