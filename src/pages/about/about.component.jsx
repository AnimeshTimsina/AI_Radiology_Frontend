import React from "react"
import './about.styles.css'
import Downloadlogo from "../../assets/download.svg"
import GithubLogo from "../../assets/github.svg"
import {TeamSection} from "../../components/team-section/team-section.component"

const AboutPage = () => (
    <div className="about">
        <div class="about-title">
            <h4>ABOUT</h4>
        </div>
        <div class="about-content">
            <p>
                Medical image classification is a significant research area that is receiving growing attention from 
                both the research community and medical field. It addresses the problem of diagnosis, analysis and research purposes 
                in medicine. By the advent of pattern recognition techniques, data processing and making intelligent decisions 
                on different area of biology and medicine has been facilitated. This is because of their capability of discovering 
                regularities in data using highly nonlinear and robust mathematical techniques. Medical images processing and mining 
                is an interdisciplinary endeavor that draws up on expertise in computer vision, image processing, 
                image retrieval, data mining, machine learning, database, and artificial intelligence.
            </p>
            <p>
                AI Radiology and OCT Assistant can detect age related macular degeneration and diabetic macular edema via retinal 
                optical coherence tomography(OCT) images as well as detect pediatric-pneumonia via chest X-ray images with higher 
                confidence level
            </p>
        </div>
        <div class="about-links">
            <div class="download-link">            
                <img
                    alt=""
                    src={`${Downloadlogo}`}
                    width="21"
                    height="21"
                    className="d-inline-block align-top"
                />{' '}
                <span>Download complete project report</span>
            </div>
            <div class="source-code-link">
                <img
                    alt=""
                    src={`${GithubLogo}`}
                    width="17"
                    height="17"
                    className="d-inline-block align-top"
                />{' '}
                <span>View source code at Github</span>
            </div>
        </div>
        <div class="team-container">
            <TeamSection />
        </div>
    </div>
)

export default AboutPage