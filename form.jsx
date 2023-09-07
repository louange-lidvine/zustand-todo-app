import React, { useState } from "react";
 import useCourseStore  from "./store";
const Form = () => {
    const addCourse = useCourseStore((state) => 
        state.addCourse
)
    const [courseTitle, setCourseTitle] = useState("")

  
    const handleSubmit = () => {
        if (!courseTitle) return alert("please add a courseTiltle")
        addCourse({
            id: Math.floor(Math.random() * 1000),
            title:courseTitle, 
        })
        setCourseTitle("")
        setInput(courseTitle)
       
    }
    return (
      <>
          
                <div className="form-container">
                    <input
                        value={courseTitle}
                        onChange={(e) => {
                            setCourseTitle(e.target.value);
                        }}
                        className="form-input"
                    />
                    <button className="form-submit-btn" onClick={handleSubmit}>
                        addCourse
             
                </button>
                
       
                </div>
        
                </>
    );
};
            
export default Form;
