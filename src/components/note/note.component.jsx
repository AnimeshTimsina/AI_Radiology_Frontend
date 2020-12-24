import React from "react"
import "./note.styles.css"

export const Note = ({children}) => (
    <div className="note-container">
        <div className="note">
            {children}
        </div>
    </div>
    
)