import React from "react"
import "./step-item.styles.css"

export const StepItem = ({number,title,subtitle}) => (
    <div className="step-item-container">
        <div className="circular-logo">
            <span>{number}</span>
        </div>
        <div className="step-item-title">
            <h4>{title}</h4>
        </div>
        <div className="step-item-subtitle">
            <span>{subtitle}</span>
        </div>
    </div>
)