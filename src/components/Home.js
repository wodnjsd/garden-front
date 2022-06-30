import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { SocialMediaIconsReact } from 'social-media-icons-react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};


function Home() {
  

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">        
          <div className="columns is-multiline is-mobile">
            <header>
              <div className ="head-text">
                <div className ="head-image">
                  <img src = {require('../images/pexels-samuel-crosland-2557232_qlespz (1).jpg')} alt = "I Beg Your Garden?!" />
                </div>
                <div className='text-on-image'>
                  <h3 className="title is-1 has-text-centered">I Beg your Garden?!</h3>
                  <p className="subtitle is-4 has-text-centered">Welcome to the Jungle!</p>
                </div>
              </div>
            </header>
          </div>
          

          <p className="subtitle is-5">Some recent purchases . . .</p>          
          <Carousel 
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >          
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1655563048/pexels-lachlan-ross-7084309_hxhet2.jpg' alt='Fig Tree'></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1656085037/pexels-ekaterina-bolovtsova-9130870_ksqdzw_hw1ruu.jpg' alt='Watermelon Peperomia'></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1656449291/pexels-kulbir-7365049_ze1urb_cfyewy_yru4q6.jpg' alt='English Ivy'></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">    
                    <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1656085351/pexels-karolina-grabowska-5706224_jq5fgp_ykwos8.jpg' alt='Chinese Money Plant'></img>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          
          <footer className="footer">
            <div className="content has-text-centered">
              <div className="container">
                <br />
                <a href="">About IBYG</a>
                <br />

                <a href="">Contact Us</a>
                <br />

                <a href="">FAQs</a>
                <br />
              </div>
              <p className="is-size-7">                
                <strong>IBYG</strong> by <a href="https://www.linkedin.com/in/jeanzle-albalate-38a047171/">Jeanzle</a>, <a href="https://www.linkedin.com/in/roshanaka/">Rosh</a>, <a href="https://github.com/wodnjsd/project-3-frontend">Jae</a> and <a href="https://www.linkedin.com/in/robyn-smith-27187910b/">Robyn</a>. Our code is open-sourced and hosted on <a href="https://github.com/wodnjsd/project-3-frontend">GitHub</a>.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Home
