import React from 'react';
import Card from './Card';
const Cards = ({courses}) => {
    let allCourses = [];

    //returns you a list of all courses received from the api response
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }


    return(
        <div>
            {!courses? (
                <div>
                    <p></p>
                </div>
            ):(getCourses().map( (course) => {
                return   <Card key = {course.id} course = {course}/>
              })
  )}
            {
            
        }
        </div>
        )
}
export default Cards;
