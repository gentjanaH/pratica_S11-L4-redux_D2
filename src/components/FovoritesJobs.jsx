import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux"
import Job from "./Job"
import { Link } from "react-router-dom";

const FavoritesJobs = function () {

    const favList = useSelector((currenState) => {
        return currenState.favJob.content
    })
    console.log(favList)
    return (
        <Container>
            <Row>
                <Col className="my-3">
                    <h1 className="display-4">I tuoi preferiti</h1>

                    {
                        favList.length === 0 ? (
                            <>
                                <p>Non hai ancora aggiunto nulla. Clicca sul cuore se vuoi salvare un annuncio tra i preferiti.</p>

                                <Link to={"/"}> TORNA AL PAGINA PRINCIPALE</Link>
                            </>

                        ) : (
                            favList.map((jobData) => (
                                <Job key={jobData._id} data={jobData} />
                            ))
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default FavoritesJobs