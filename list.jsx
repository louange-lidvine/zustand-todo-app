import React from "react";
import useCourseStore from "./store";
const List = () => {
    const { course, removeCourse, toggleCourse} = useCourseStore(
        (state) => ({
            
                course:state.courses,
                removeCourse:state.removeCourse, 
            toggleCourse: state.toggleCourse
             
        }))
    return (    
        <ul>
    
            {course.map((course, id) => {
                return (
                    <React.Fragment key={id}>
                      
                        <li>
                            
                            <span  
                        >
                                <input
                                    checked={course.completed}
                                    type="checkbox"
                                    onChange={(e) => {
                                        toggleCourse(course.id)
                                    }}
                                /> </span>
                            <span >{course?.title}</span>
                            <button onClick={() => {removeCourse(course.id) }}    className="deleted">Delete</button>
                        </li>
                           
                        
                </React.Fragment>
            )
        })}
         
            </ul>
    );
}; 
export default List;
