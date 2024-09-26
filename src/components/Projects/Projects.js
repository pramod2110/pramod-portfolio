import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Crack Detection using Deep Learning"
              description="Data Collection from industry, Data Preprocessing, Improviszed existing transfer learning algorithms - VGG16, Resnet50, Inception-Resnetv2, Compared different models, Created a custom hybrid model, Developed a pixel matching algorithm to classify the intensity of cracks - low, medium and high."
              ghLink="https://github.com/pramod2110/crack-detection-deep-learning-models"
              demoLink="https://mdpi.com/1424-8220/23/6/2954"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather-Analysis-Python"
              description="Data Collection [Obtaining data from a data scource], Data Preparation[Identifying errors, replacing null values, data transformation], Learning pandas through this dataset [different functions required for data analysis], Asking relevant questions with respect to the dataset, Answeriig questions by perfroming pandas operations and plots"
              ghLink="https://github.com/pramod2110/Data-Analysis-with-Python---1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Credit-Card-Sales-Analysis-Python"
              description=" Executed comprehensive data import, cleaning, and validation for 1,000 customer profiles; visualized transaction histories
              to identify target age groups, enhancing marketing efforts. Processed and visualized 500,000 transaction records to determine spending patterns across different demographics-students, working professionals, seniors. Analyzed daily transaction data from a sample of 40 customers in control and test groups, comparing existing and newly
              launched credit cards by using inferential statistics."
              ghLink="https://github.com/pramod2110/Credit-Card-Sales-Analysis"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cricket-Analysis-Excel"
              description="Web Scraping of data from ESPNCricinfo, Data Preparation, Pivot Chart Working to filter multiple data, Creating different graphs - Bar Chart, Trendlines, Applying Colors for better viewing, Create a professional dashboard, Communicating key insights through dashboard."
              ghLink="https://github.com/pramod2110/Cricket---ODI-Centuries-upto-2007-Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
