import React from "react"
import "./custom-button.styles.css"

export const CustomButton = ({button_text,info,download_url,color}) => {

    const onLinkClick = () => {
        const link = document.createElement('a');
        link.href = download_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return(
    <div className="cutom-button-section">
        <div className="custom-button" style={{background:color}}>
            <span>{button_text}</span>
        </div>
        { info && 
            <div className="button-info">
                <span onClick={onLinkClick}><sup>*</sup>{info}</span>
            </div>
        }
       
    </div>
    )
}