import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { isCreator, getLoggedInUserId, getLoggedInEmail } from '../lib/auth'
import axios from 'axios'

function PlantShow() {
  const [plant, setPlant] = React.useState(undefined)
  // const [user, setUser] = React.useState(undefined)
  const [reviewContent, setReviewContent] = React.useState('')
  // const [cartContent, setCartContent] = React.useState('')
  const navigate = useNavigate()
  const { plantId } = useParams()
  // const { userId } = useParams()

  React.useEffect(() => {
    fetch(`/api/plants/${plantId}`)
      .then(resp => resp.json())
      .then(data => setPlant(data))
  }, [plantId])

  async function handleCart() {
    try {
      await axios.post(`/api/plants/${plant._id}`,
        // const { data } = await axios.post(
        //   `/api/plants/${plant._id}`,
        { content: plant },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      console.log()

    } catch (e) {
      if (!getLoggedInEmail()) {
        alert("Please log in first!")
      }
      console.log(e)
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`/api/plants/${plant._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      navigate('/plants')
    } catch (e) {
      console.log(e)
    }
  }

  async function handleReview() {
    try {
      const { data } = await axios.post(
        `/api/plants/${plant._id}/reviews`,
        { content: reviewContent },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      setPlant(data)
    } catch (e) {
      console.log(e)
    }
  }


  console.log(plant)
  return (
    <section className="section">
      <div className="container">
        {plant ? (
          <div>
            <h2 className="title has-text-centered">{plant.name}</h2>
            <hr />
            <h4 className="title is-4 has-text-centered">{plant.commonName}</h4>
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={plant.image} alt={plant.name} />
                </figure>
                {isCreator(plant.user._id) && <button
                  className="button is-danger"
                  onClick={handleDelete}
                >
                  ☠️ Delete Plant
                </button>}
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    ⭐️
                  </span>{" "}
                  About
                </h4>
                <p>{plant.about}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                    💚
                  </span>{" "}
                  Our {plant.commonName} likes:
                </h4>
                <hr />
                <p>{plant.likes}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                    📏
                  </span>{" "}
                  Size
                </h4>
                <hr />
                <p>{plant.size}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="wave">
                    💰
                  </span>{" "}
                  Price
                </h4>
                <hr />
                <p>{"£" + plant.price}</p>
                <hr />
                <button className="button is-success is-light"
                  onClick={handleCart}>
                  Add to Cart
                </button>
                <hr />
              </div>
            </div>
            <h4 className="title is-4">
              Reviews:
            </h4>
            {plant.reviews && plant.reviews.map(review => {
              return <article key={review._id} className="media">
                <div className="media-content">
                  <div className="content">
                    {console.log(review)}
                    <p className="subtitle">
                      {review.postedOn}
                    </p>
                    <p className="subtitle">
                      Username: {review.user.username}
                    </p>
                    {/* <p className="subtitle">
                      {review.rating}/10
                    </p> */}
                    <p>{review.content}</p>
                  </div>
                </div>
              </article>
            })}
            {getLoggedInUserId() && <article className="media">
              <div className="media-content">

                <div className="field">
                  <div className="control">


                    <textarea
                      className="textarea"
                      placeholder="Make a comment.."
                      // ! Set the comment's content to be what's in the input textarea.
                      onChange={(event) => setReviewContent(event.target.value)}
                    >
                    </textarea>
                  </div>
                </div>
                <div className="field">
                  <p className="control">
                    <button
                      className="button is-link is-light"
                      onClick={handleReview}
                    >
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </article>}
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
    </section>
  )
}

export default PlantShow
