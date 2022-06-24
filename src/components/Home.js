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
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


function Home() {
  

  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered has-text-black">
            I Beg Your Garden?!
          </p>
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
          
        </div>
      </div>
    </section>
  )
}

export default Home
