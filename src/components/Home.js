import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
          <h1 className="title is-1 has-text-centered has-text-success-dark">
            I Beg Your Garden?!
          </h1>
          <h4 className="subtitle is-4 has-text-centered has-text-success-dark">
            Welcome to the jungle!
          </h4>
          <div className="container">
            <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1655905671/pexels-samuel-crosland-2557232_qlespz.jpg' alt="banner image" style={{ maxWidth: 1345 }}></img>
          </div>
          

          <p className="has-text-success-dark">Some recent purchases...</p>
          <Carousel 
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            <div><img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1655563048/pexels-lachlan-ross-7084309_hxhet2.jpg' alt='Fig Tree'></img></div>
            <div><img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1656085037/pexels-ekaterina-bolovtsova-9130870_ksqdzw_hw1ruu.jpg' alt='Watermelon Peperomia'></img></div>
            <div><img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1656085166/pexels-kulbir-7365049_ze1urb_cfyewy.jpg' alt='English Ivy'></img></div>
            <div><img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1656085351/pexels-karolina-grabowska-5706224_jq5fgp_ykwos8.jpg' alt='Chinese Money Plant'></img></div>
          </Carousel>
          <footer className="footer">
            <div className="content has-text-centered">
              <div className="container">
                <a href="">About IBYG</a>
                <br />

                <a href="">Contact Us</a>
                <br />

                <a href="">FAQs</a>
                <br />
              </div>
              <p>
                <strong>IBYG</strong> by <a href="https://jgthms.com">Jeanzle</a>, <a href="https://jgthms.com">Rosh</a>, <a href="https://jgthms.com">Jae</a> and <a href="https://www.linkedin.com/in/robyn-smith-27187910b/">Robyn</a>. Our code is open-sourced and hosted on <a href="https://github.com/wodnjsd/project-3-frontend">GitHub</a>.
              </p>
            </div>
          </footer>
          {/* <div className="container">
            <footer className="has-background-dark">
              <p className="has-text-white">About I Beg Your Garden</p>
              <p className="has-text-white">Contact Us</p>
              <p className="has-text-white">FAQs</p>
            </footer>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Home
