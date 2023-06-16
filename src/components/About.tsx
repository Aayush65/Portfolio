import { useContext } from 'react';
import { styles } from "../styles";
import { context } from "../App";

interface SkillCardProps {
    skill: string,
}

const SkillCard = ( { skill }: SkillCardProps ) => {	
    const { isLight } = useContext(context);
	return (
		<div className="xs:w-[250px] w-full">
            <div className={`${isLight ? "blood-blue-gradient" : "rose-sky-gradient" } w-full p-[1px] rounded-[20px] shadow-card`}>
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:shadow-lg hover:shadow-purple-300/40'>
                    {/* <img src={icon} alt={title} className='w-16 h-16 object-contain'/> */}
                    <h3 className={`${isLight ? "text-white" : "text-black" } text-[20px] font-bold text-center`}>{skill}</h3>
                </div>
            </div>
		</div>
	)
}


const About = () => {
    const { isLight } = useContext(context);
    const skills = ["Competitive Programmer", "FrontEnd Developer", "Backend Developer", "AWS Solutions Architect"];

    return (
        <div className={`mt-4 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>About Me</p>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-200" : "text-white-100" }`}>Introduction.</h2>
            <div className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-[17px] max-w-3xl leading-[30px]`}>
                &emsp;I am a Full Stack Developer with experience in MERN stack alongwith working on Chrome Extensions, Django, Redux, REST APIs, etc. I am also familiar with many database query languages including both SQL and NoSQL. <br/> &emsp;I am a passionate competitive coder boasting a Knight badge and a rating of 1980 on LeetCode with 1000+ questions and streak of almost an year.
            </div>
			<div className='my-20 flex flex-wrap gap-10'>
				{skills.map((skill, index) => (
					<SkillCard key={index} skill={skill} />
				))}	
			</div>
        </div>
    )
}

export default About;