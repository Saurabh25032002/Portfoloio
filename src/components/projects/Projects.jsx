import React from 'react'
import { projectOne, projectTwo, projectThree ,project1,movie,todo} from "../../assets/Index";
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
function Projects() {
  return (
    <section 
    id="projects"
    className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className='flex flex-col gap-10'>

        <div className='flex justify-center items-center text-center'>
        <Title
        title="Visit my Portfolio and keep Your Feedback"
        des="My Projects"
        />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectsCard
          title="Movie-Matrix"
          des="Movie Matrix is a dynamic movie guide app crafted using HTML, CSS, and JavaScript, enriched with APIs for seamless movie exploration. Discover extensive movie details including ratings, release dates, duration, cast, and captivating images."
          src={movie}
          link={`https://github.com/Saurabh25032002/Movie-Matrix`}
        
         
          
        />
        <ProjectsCard
          title="Delicious Bites"
          des=" 
I developed a comprehensive restaurant app using React, MongoDB, Express, and Node.js, focusing on creating a user-friendly and responsive interface.A robust reservation system allows users to easily book tables, view availability, and receive confirmations. 
"
          src={project1}
          link={`https://github.com/Saurabh25032002/Delicious-Bites`}
          // link1={`https://ecommerse-lvmb.onrender.com/`}
          
        />
        <ProjectsCard
          title="Todo-Lists"
          des="I developed a fully responsive ToDo List application using React, focusing on providing a smooth and intuitive user experience across various devices. The application allows users to add and delete items efficiently, making task management straightforward and effective."
          src={todo}
          link={`https://github.com/Saurabh25032002/Todo-Lists`}
         
        />
        </div>
        </div>
    </section>
  )
}

export default Projects
