import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((thechnology)=>(
        <div className="w-28 h-28" key={thechnology.name}>
          <BallCanvas icon={thechnology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')