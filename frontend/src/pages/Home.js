import React from "react";
import ImageSlider from "../components/ImageSlider";
import Newsletter from "../components/Newsletter";

import './Home.css'

const Home = () => {

    async function fetchPost() {
        try {
            const response = await fetch("https://eieventanddesigns.com/wp-json/wp/v2/posts")
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error('Error fecting posts: ', error)
        }
    }

    fetchPost()
    return (
        <div>
            <ImageSlider/>
            <div className="moto bg-light container-fluid d-flex justify-content-center align-items-center">
                <h1>Making your event a memorable one…leaving lasting great impressions.</h1>
            </div>
            <Newsletter />
        </div>
    )
}

export default Home;