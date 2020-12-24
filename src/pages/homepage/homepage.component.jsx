import React from "react"
import './homepage.styles.css'
import {CustomButton} from "../../components/custom-button/custom-button.component"
import {Note} from "../../components/note/note.component"
import {WorkStep} from "../../components/work-step-section/work-step.component"
import {VideoSection} from "../../components/video-section/video-section.component"

class Homepage extends React.Component {

    constructor(props){
        super(props)
        this.state  ={
            file:null
    }
    }

    onFileUpload = e => {
        this.setState({
            file:e.target.files[0]
        },() => {
            this.props.history.push({
                    pathname:'/results',
                    state:{
                        image:this.state.file,
                        image_type:this.state.file_type
                    }
                })        

        })

    }

    onButtonClicked = button_type  =>{
       this.setState({
           'file_type': button_type
       },() => document.getElementById("fileid").click())  
    }

    render(){


        return(
            <div className="homepage">
            <div className="homepage-title">
                <h2>Recognize patterns on Chest X-Rays and OCT Images using Neural Networks for detection of Pneumonia and Macular Degeneration</h2>
                <h4>What is <span>Pneumonia</span> and <span>Macular Degeneration</span>?</h4>
            </div>
            <div className="button-section">
                <div>
                <input id='fileid' type='file' onChange={this.onFileUpload} hidden/>

                {/* onClick={() => this.onButtonClicked('xray')} */}
                    <div id="xray-button" onClick={() => this.onButtonClicked('xray')}>
                        <CustomButton 
                            button_text = {'Upload X-Ray'}
                            info = {'Download sample X-Ray'}
                            download_url = {'http://localhost:8000/xray/download-sample'}

                        />
                    </div>
                    
                </div>
                <div>
                    <input id='fileid' type='file' onChange={this.onFileUpload} hidden/>
                    <div id="oct-button" onClick={() => this.onButtonClicked('oct')}>
                        <CustomButton 
                            button_text = {'Upload OCT'}
                            info = {'Download sample OCT'}
                            download_url = {'http://localhost:8000/oct/download-sample'}
                        />
                    </div>
                  
                </div>
            </div>
            <div className="note-section">
                <Note>
                    <sup>*</sup>We respect your privacy and don’t store and sell your medical files to anyone
                </Note>
            </div>
            <div className="work-step-section">
                <WorkStep />
            </div>
            <div className="video-container">
                <VideoSection />
            </div>
        </div>
        )
   
    }
}

export default Homepage