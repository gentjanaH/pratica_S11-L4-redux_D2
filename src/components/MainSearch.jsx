import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { getJobsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch()


  const handleChange = e => {
    setQuery(e.target.value);
  };
  const jobs = useSelector((currentState) => {
    return currentState.risultati.arrayRicerca
  })

  const loading = useSelector((currentState) => {
    return currentState.risultati.loading
  })
  const error = useSelector((currentState) => {
    return currentState.risultati.error
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query))
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link className="navbar text-decoration-none text-success" to={"/favorite"}>
            <i className="bi bi-bag-heart"> Preferiti </i>

          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default MainSearch;
