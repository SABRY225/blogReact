import { Card } from "react-bootstrap";
import data from "../data/data";
import { Link } from "react-router-dom";

const Post1 = () => {
    return (
        < >
            {data.map((post, index) => (
                <Card key={index} className="card_post">
                    <Card.Img
                        variant="top"
                        src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398.png"
                        width={20}
                        height={250}
                    />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
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

export default Post1;
