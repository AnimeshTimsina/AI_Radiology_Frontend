import React from "react"
import "./work-step.styles.css"
import {StepItem} from "../step-item/step-item.component"

export const WorkStep = () => (
    <div className="workstep">
        <div className="workstep-title">
            <h2>How does it work?</h2>
        </div>
        <div className="workstep-body">
            <StepItem 
                number={'1'}
                title={'Upload X-Ray/ OCT Image'}
                subtitle={'Image should be either in jpg or in png format'}
            />
            <StepItem 
                number={'2'}
                title={'Wait for the model to process'}
                subtitle={'Neural networks will process image and recognize patterns'}
            />
             <StepItem 
                number={'3'}
                title={'View and download the results'}
                subtitle={'Download complete results and statistics in pdf'}
            />                       
        </div>
    </div>
)
    
