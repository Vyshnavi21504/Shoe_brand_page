const HeroSection = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button className="shop">Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="brand-icons">
                    <img className="flip" src="/images/flipkart.png" alt="flipkart-logo" />
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        
                    </div>
                </div>
            </div>
            <div className="shoe-img">
                <img src="/images/shoe_image.png" alt="shoe-image" />
            </div>
        </main>
    );
};

export default HeroSection;
