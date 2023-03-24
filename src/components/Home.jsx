import React from "react";
import homeCover from "../img/HomeCover.png";

const Home = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img
                src={homeCover}
                alt='cover'
                className='img-fluid'
                style={{ height: 500 }}
            />
        </div>
    );
};

export default Home;
