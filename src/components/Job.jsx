import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

const Job = ({ data }) => {

  const favorite = useSelector((currenState) => {
    return currenState.favJob.content
  })

  const dispatch = useDispatch()
  const isFavorite = favorite.some(job => job._id === data._id)

  // funzione per il toggle
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAV_JOB", payload: data })
    } else {
      dispatch({ type: "ADD_FAV_JOB", payload: data })
    }
  }

  return (

    < Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }
      }
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>

      </Col>
      <Col xs={2}>
        <Button variant="light"
          onClick={toggleFavorite}>
          <i className={`bi ${isFavorite ? "bi-heart-fill text-danger" : "bi-heart"}`} ></i>
        </Button>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row >
  )
}

export default Job
