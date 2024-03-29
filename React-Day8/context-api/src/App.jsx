import { useState } from "react"
import Account from "./Account";
import { CourseContext } from "./CourseContext"


const mern = {
  frontEnd: 'React',
  backEnd:'NodeJS',
  db: 'MongoDB',
  name: 'MERN FSD Course'
}

const mean ={
  frontEnd: 'Angular',
  backEnd:'NodeJS',
  db: 'MongoDB',
  name: 'MEAN FSD Course'
}



function App() {
   const [course, setCourse] = useState(mern);

   const changeCourse = () => {
    if(course == mern){
      setCourse(mean);
    }else{
      setCourse(mern);
    }
   }
  return (
     <div>
      <CourseContext.Provider value={course}>
        <Account />
      </CourseContext.Provider>
      
      <button onClick={changeCourse}>Switch</button>
     </div>
  )
}

export default App
