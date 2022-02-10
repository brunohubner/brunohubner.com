import "./styles/global.scss"
import { Projects } from "./pages/Projects"
import { ProjectId } from "./pages/ProjectId"

export function App() {
    return (
        <>
            {/* <Projects></Projects> */}
            <ProjectId
                name="Nome do Projeto"
                description="Uma breve descrição sobre este projeto que está sendo apresentado"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam autem magni possimus aut saepe delectus vel, aliquam voluptates provident alias porro voluptatum natus! Eaque ullam numquam aut quia, omnis vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam autem magni possimus aut saepe delectus vel, aliquam voluptates provident alias porro voluptatum natus! Eaque ullam numquam aut quia, omnis vel.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam autem magni possimus aut saepe delectus vel, aliquam voluptates provident alias porro voluptatum natus! Eaque ullam numquam aut quia, omnis vel."
            />
        </>
    )
}
