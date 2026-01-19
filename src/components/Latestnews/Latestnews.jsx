import React from 'react';
import Marquee from 'react-fast-marquee';

const Latestnews = () => {
    return (
        <div className=' flex items-center gap-2 bg-base-200 py-3 pl-4'>
            <p className='bg-secondary text-white px-5 py-2'>Latest</p>
            <Marquee className=' flex gap-8' pauseOnHover={true} speed={60}> 
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>


                
                 </Marquee>
        </div>
    );
};

export default Latestnews;