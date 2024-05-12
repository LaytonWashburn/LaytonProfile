import "../styles/Projects.css"
import { Link } from "react-router-dom"

export function Projects(){

    const projects = [
        "TypingTutor",
        "Compiler"
    ]
    
    return(
        <>
            <div className="projects projectflex">
                {
                    projects.map((project) => (
                        <Link key={project} className="project" to={"/".concat(project)}>{project}</Link>
                    ))
                }
            </div>
        </>
    )
}