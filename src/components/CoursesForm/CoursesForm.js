import React from 'react';
import './CoursesForm.css';

let  CoursesForm = (props) => {
    return(
        <form onSubmit={props.addCourse}>
            <input type='text' value={props.current} onChange={props.updateCourse} />
            <button>Add Course</button>
        </form>
    )
}
export default CoursesForm;