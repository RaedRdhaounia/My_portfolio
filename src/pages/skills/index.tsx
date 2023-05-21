import { CardRotation } from "src/components/animation";
import CardSkill from "src/components/animation/CardSkill";
import { skills } from "src/data/skills";

export default function Skills() {
    return (
      <div className="grid  gap-4 grid-cols-1  lg:grid-cols-3 ">
        {skills.map(( skill, index ) => {
          const skillDetail = skill.skill
          return <CardRotation key={index} children={<CardSkill skill={skillDetail} />} time={index*1000} />
        })}

      </div>
        

    )
  }
  