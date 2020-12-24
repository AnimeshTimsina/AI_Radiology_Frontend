import React from "react"
import "./results-container.styles.css"
import {CustomButton} from "../custom-button/custom-button.component"
import {Card} from "react-bootstrap"

export const ResultsContainer = (props) => {

    const {
        result,
        image_url,
        defect_percentage,
        download_url,
        heatmap_image_url,
    } = props
    
    const defects = Object.entries(defect_percentage) 

    return(
        <div className='results-container'>
            <div className="results-title">
                <h4>RESULTS</h4>
            </div>
            <div className="results-content">
                <div className="image-section">
                    <span>Input Image</span>
                    <div className="actual-image">
                        <img src={image_url} alt="uploaded"></img>
                        <CustomButton button_text={'Show Heatmap'} color={'#b50e00'}/>
                    </div>
                </div>
                <div className="output-section">

                    <Card className="text-center">
                        <Card.Header>Results</Card.Header>
                        <Card.Body>
                            <Card.Title>{result}</Card.Title>
                            <Card.Text>
                            {
                                defects.map(defect => (
                                    <div className='defect-percentage'>
                                        <span>{defect[0]} : {defect[1]} %</span>
                                    </div>
                                ))
                            }
                            </Card.Text>
                            <div class="report-button-container">
                            <CustomButton button_text={'Download report'} />
                            </div>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>


                    {/* <span>Prediction results</span>
                    <div className="final-output">
                        {result }
                    </div>
                    <div className='output-description'>
                        <h5>Risks in percentage</h5>
                        {
                            defects.map(defect => (
                                <div className='defect-percentage'>
                                    <span>{defect[0]} : {defect[1]} %</span>
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            </div>
        </div>     
    )
}