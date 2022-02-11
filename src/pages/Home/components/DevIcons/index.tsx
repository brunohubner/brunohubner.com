import "./styles.scss"
import {
    DiCss3,
    DiDocker,
    DiFirebase,
    DiGit,
    DiHeroku,
    DiHtml5,
    DiJava,
    DiJsBadge,
    DiMongodb,
    DiMysql,
    DiNodejsSmall,
    DiPostgresql,
    DiPython,
    DiReact,
    DiSass
} from "react-icons/di"
import {
    SiTypescript,
    SiJest,
    SiVuedotjs,
    SiGraphql,
    SiApollographql,
    SiRedis
} from "react-icons/si"

export function DevIcons() {
    return (
        <div className="DevIcons">
            <DiNodejsSmall size={48} />
            <DiReact size={48} />
            <DiPython size={48} />
            <DiJava size={48} />
            <DiJsBadge size={42} />
            <SiJest size={42} />
            <SiGraphql size={42} />
            <DiGit size={48} />
            <DiHtml5 size={48} />
            <SiRedis size={42} />
            <DiSass size={48} />
            <SiVuedotjs size={42} />
            <DiCss3 size={48} />
            <DiPostgresql size={48} />
            <DiMysql size={48} />
            <DiMongodb size={48} />
            <DiFirebase size={48} />
            <SiTypescript size={42} />
            <SiApollographql size={42} />
            <DiDocker size={48} />
            <DiHeroku size={48} />
        </div>
    )
}
