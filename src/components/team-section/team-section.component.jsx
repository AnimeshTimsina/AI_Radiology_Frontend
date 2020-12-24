import React from "react"
import "./team-section.styles.css"
import {TeamItem} from "../team-item/team-item.component"
import fb_logo from "../../assets/facebook.svg"
import git_logo from "../../assets/github.svg"
import linkedin_logo from "../../assets/linkedin.svg"
import developer1 from "../../assets/developer1.JPG"
// import developer2 from "../../assets/developer2.JPG"

export const TeamSection = () => (
    <div className="team-section">
        <div className="team-section-title">
            <span>Developers</span>
        </div>
        <div className="team-content">
            <div> 
                <TeamItem 
                    name={"Animesh Timsina"}
                    dp_src={developer1}
                    fb_src={fb_logo}
                    git_src={git_logo}
                    linkedin_src={linkedin_logo}
                />
            </div>
            <div> 
                <TeamItem 
                    name={"Deepak Pandey"}
                    // dp_src={developer2}
                    fb_src={fb_logo}
                    git_src={git_logo}
                    linkedin_src={linkedin_logo}
                />
            </div>
            <div> 
                <TeamItem 
                    name={"Dipesh Labh"}
                    // dp_src={}
                    fb_src={fb_logo}
                    git_src={git_logo}
                    linkedin_src={linkedin_logo}
                />
            </div>
            <div> 
                <TeamItem 
                    name={"Lakshya Pandit"}
                    // dp_src={}
                    fb_src={fb_logo}
                    git_src={git_logo}
                    linkedin_src={linkedin_logo}
                />
            </div>
        </div>
    </div>
)
