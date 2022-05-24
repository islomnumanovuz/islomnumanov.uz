import GitHubIcon from "@material-ui/icons//GitHub";
import LinkIcon from "@material-ui/icons//Link";
import { Col, Container, Row } from "reactstrap";

function Project() {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <div className="projectCard">
              <img
                src={"https://picsum.photos/20/20"}
                className="projectImage"
                alt="from database"
              />
              <div className="cardTitles">
                <div className="projectAbout">
                  <h3 className="projectName">Youtube</h3>
                  <p className="projectDesc">using HTML CSS REACT</p>
                </div>
                <div className="projectButtons">
                  <a href={"https://picsum.photos/20/20"} className="buttons ">
                    Source <GitHubIcon />
                  </a>
                  <a
                    href={"https://picsum.photos/20/20"}
                    className="buttons bg-success"
                  >
                    Demo <LinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="projectCard">
              <img
                src={"https://picsum.photos/20/20"}
                className="projectImage"
                alt="from database"
              />
              <div className="cardTitles">
                <div className="projectAbout">
                  <h3 className="projectName">Youtube</h3>
                  <p className="projectDesc">using HTML CSS REACT</p>
                </div>
                <div className="projectButtons">
                  <a href={"https://picsum.photos/20/20"} className="buttons ">
                    Source <GitHubIcon />
                  </a>
                  <a
                    href={"https://picsum.photos/20/20"}
                    className="buttons bg-success"
                  >
                    Demo <LinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="projectCard">
              <img
                src={"https://picsum.photos/20/20"}
                className="projectImage"
                alt="from database"
              />
              <div className="cardTitles">
                <div className="projectAbout">
                  <h3 className="projectName">Youtube</h3>
                  <p className="projectDesc">using HTML CSS REACT</p>
                </div>
                <div className="projectButtons">
                  <a href={"https://picsum.photos/20/20"} className="buttons ">
                    Source <GitHubIcon />
                  </a>
                  <a
                    href={"https://picsum.photos/20/20"}
                    className="buttons bg-success"
                  >
                    Demo <LinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="projectCard">
              <img
                src={"https://picsum.photos/20/20"}
                className="projectImage"
                alt="from database"
              />
              <div className="cardTitles">
                <div className="projectAbout">
                  <h3 className="projectName">Youtube</h3>
                  <p className="projectDesc">using HTML CSS REACT</p>
                </div>
                <div className="projectButtons">
                  <a href={"https://picsum.photos/20/20"} className="buttons ">
                    Source <GitHubIcon />
                  </a>
                  <a
                    href={"https://picsum.photos/20/20"}
                    className="buttons bg-success"
                  >
                    Demo <LinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Project;
