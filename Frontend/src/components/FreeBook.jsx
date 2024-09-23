import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from './Cards';

function All_products() {
    const [All, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("http://localhost:4003/all");
                console.log("Fetched data:", res.data);
                setProduct(res.data);
            } catch (error) {
                console.log("Error fetching products:", error.message);
            }
        };
        getProduct();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (!All.length) {
        return <div>Loading...</div>; // Show loading message if no products
    }

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                    </p>
                </div>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {All.map((item) => (
                        <Cards item={item} key={item._id} /> // Ensure unique key
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default All_products;
