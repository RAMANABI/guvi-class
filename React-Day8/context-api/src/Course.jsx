import React from 'react'

function Course(props) {
  return (
    <div>
        <h2>Course details:
            <ol>
                <li>{props.course.frontEnd}</li>
                <li>{props.course.backEnd}</li>
                <li>{props.course.db}</li>
            </ol>
        </h2>
    </div>
  )
}

export default Course