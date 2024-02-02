import { Card } from "react-bootstrap";
import projects from "../data/project_data";
import { Link } from "react-router-dom";

const Proj = () => {
    return (
        < >
            {projects.map((post, index) => (
                <Card key={index} className="card_post">
                    <Card.Img
                        variant="top"
                        src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
                        width={20}
                        height={250}
                    />
                    <Card.Body>
                        <Card.Title>{post.name}</Card.Title>
                        <Card.Text>{post.description}</Card.Text>
                        {/* <a href="/courses" className="btn btn-primary">
                            Read More
                        </a> */}
                        <Link to="/article/new" className="btn btn-primary">Read More</Link>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Proj;