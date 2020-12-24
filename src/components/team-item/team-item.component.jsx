import React from "react"
import "./team-item.styles.css"

export const TeamItem = ({name,dp_src,fb_src,git_src,linkedin_src}) => (
    <div className="team-item">
        <div className="team-item-logo">
            <img src={dp_src} alt="dp" />
        </div>
        <div className="team-member-name">
            <span>{name}</span>
        </div>
        <div className="team-member-links">
            <img src={fb_src} alt="fb-logo" />
            <img src={git_src} alt="git-logo" />
            <img src={linkedin_src} alt="linkedin-logo" />
        </div>
    </div>
)