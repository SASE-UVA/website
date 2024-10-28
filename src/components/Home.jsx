import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div>
            <h1>Welcome to SASE @ UVA</h1>
            <h2 className='text-2xl sm:text-4xl font-bold text-white'>
                <TypeAnimation
                sequence={[
                    'This website is currently being built, come back later to see it complete!',
                    1000,
                ]}
                speed={40}
                repeat={Infinity}
                />
            </h2>
        </div>
    );
};

export default Home;