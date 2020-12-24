import React from "react"
import './results.styles.css'
import { post } from 'axios';
import { Redirect } from "react-router-dom";
import {ResultsContainer} from "../../components/results-container/results-container.component"

class ResultsPage extends React.Component {
    constructor(props){
        super(props)
        if (props.location.state){
            var uploaded_file = props.location.state.image
            var image_type = props.location.state.image_type
        }
        else{
            uploaded_file = null
            image_type = null
        }
        
        this.state = {
            is_loading: true,
            uploaded_file: uploaded_file,
            image_type: image_type
        }
    }
    componentDidMount() {
        var file = this.state.uploaded_file
        const url = `http://localhost:8000/${this.state.image_type}/${this.state.image_type === 'oct' ? 'uploadOCT' : 'uploadXRAY'}/`
        const formData = new FormData();
        formData.append('image',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData,config).then(res => {
            // console.log("Res",res)
            this.setState({
                'is_loading':false,
                'response_status' : res.status,
                'image_status' :res.data.status,
                'result' :res.data.result,
                'message' :res.data.message,
                'image_url':res.data.image_url,
                'defect_percentage':res.data.defect_percentage,
                'download_url':res.data.output_download_url,
                'heatmap_image_url':res.data.heatmap_image_url
            })
        })
    }



    render() {
        return(
                <div className="output-container">
                { !this.state.uploaded_file && (<Redirect to='/' />)}              
                
                {
                this.state.response_status !== 200 
                ?
                <span>{this.state.image_status}</span>
                :
                <ResultsContainer {...this.state}/>

                }
               
                       
                </div>
            )

    }

}

export default ResultsPage

