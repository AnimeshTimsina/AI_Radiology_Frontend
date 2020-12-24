import React,{ useState, useEffect } from "react"
import "./video-section.styles.css"
import axios from 'axios';

export const VideoSection = () => {   
    const [info, setInfo] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const result = await axios(
                'http://localhost:8000/desc/links/'
            );
            setInfo(result.data)      
        }      
        fetchData()
    },[]);
    
     
    return(
    <div className="video-section">
        <div className='video-title'>
            <span></span>
        </div>
  
        {info.map(link => (
            <div className="video-body" key={link.id}>
                <iframe width="230" height="150" src={link.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={link.id}></iframe>
            </div>
        ))}
    </div>
)}