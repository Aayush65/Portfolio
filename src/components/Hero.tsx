import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { context } from '../App';
import { comp, leetcodeLight, leetcodeDark, linkedin, githubLight, githubDark, gmail } from '../assets';
import './blinkingCursor.css';

const Hero = () => {
    const { isLight } = useContext(context);
	const navigate = useNavigate();

    return (
        <section className='relative w-full h-screen mx-auto'>
			<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start justify-between`}>
				<div className='flex flex-col md:flex-row justify-between items-center mt-5 gap-3'>
					<div className='flex flex-col gap-3 md:gap-5'>
						<h1 className={`${styles.heroHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Hi, I am <span className="text-[#2548e3]">Aayush.</span>
						<span className={`animate-blink ${isLight ? "text-gray-600" : "text-white-100"}`}>|</span></h1>
						<div className='flex gap-5 md:gap-7 justify-start items-center'>

							<Link to="/resume" className={`${isLight ? "bg-black-200 text-white-100" : "bg-white-100 text-black-200"} hover:scale-105 text-xs md:text-lg font-semibold p-3 rounded-xl`}>My Resume</Link>

	
							<a href='https://leetcode.com/Aayush65' target='__blank'><img src={isLight ? leetcodeLight : leetcodeDark} alt="leetcode" className='w-7 md:w-10 hover:scale-105' /></a>
							<a href='https://linkedin.com/in/Aayush65' target='__blank'><img src={linkedin} alt="linkedin" className='w-7 md:w-10 hover:scale-105' /></a>
							<a href='https://github.com/Aayush65' target='__blank'><img src={isLight ? githubLight : githubDark} alt="github" className='w-7 md:w-10 hover:scale-105' /></a>
							<a href='mailto:cdtaayushgupta@gmail.com' target='__blank'><img src={gmail} alt="gmail" className='w-7 md:w-10 hover:scale-105' /></a>
						</div>
						<p className={`${styles.heroSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-2`}>I am a Full Stack Developer and a LeetCode enthusiast.</p>
					</div>
					<img src={comp} alt="Working Man" />
				</div>
			</div>
		</section>
    )
}

export default Hero;