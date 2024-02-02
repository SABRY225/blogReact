import { Card } from "react-bootstrap";
import coursedata from "../data/coursedata";
import { Link } from "react-router-dom";

function CourseIndvidua() {
  return (
    < >
    {coursedata.map((post, index) => (
        <Card key={index} className="card_post">
            <Card.Img
                variant="top"
                src="https://openlearnlive-s3bucket.s3.eu-west-2.amazonaws.com/5f/82/5f8263eb2cf810bbb4323f05457adeda1e5022cd?response-content-disposition=inline%3B%20filename%3D%22become_a_student_inline.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4GIOSMQ5JGMSLFXY%2F20240202%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240202T170445Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3555&X-Amz-Signature=bd2bfaf175138ead242df87fe5aba1a967d6fae86720d91d18bc10619256ac33"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>{post.price}</Card.Text>
                <Link to="/article/new" className="btn btn-primary">Read More</Link>
            </Card.Body>
        </Card>
    ))}
</>
  )
}

export default CourseIndvidua