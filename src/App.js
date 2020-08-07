import React, { Component } from 'react';
import CoursesForm from './components/CoursesForm/CoursesForm';
import CoursesList from './components/CoursesList/CoursesList';

class App extends Component {
  state = {
    courses : [
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'Jquery'}
    ],
    current : ''
  }
  updateCourse = (e) => {
    return(
      this.setState({
        current : e.target.value
      })
    )
  }
  addCourse = (e) => {
    e.preventDefault();
    let {current} = this.state;
    let {courses} = this.state;
    courses.push({name : current})
    this.setState({
      courses,
      current : ''
    })
  }
  // delete course
  deleteCourse = (index) => {
    let {courses} = this.state;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }
  // edit course
  editCourse = (index, value) => {
    let {courses} = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }
  render() {
    const {courses} = this.state;
    const courseList = courses.map((course, index) => {
      return <CoursesList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} length={this.state.courses} />
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CoursesForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        <ul>{courseList}</ul>
      </section>
    );
  }
  
}

export default App;
