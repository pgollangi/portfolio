import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, email } = about

  return (
    <div className='grid-container'>
      <div className='grid-child details'>
        {name && (
          <h1>
            <span className='about__name'>{name}</span>
          </h1>
        )}
        <br />
        <br />

        {role && <h2 className='about__role'>{role}</h2>}
        <p className='about__desc'>
          &#128075; I&apos;m Aryan, a sophomore CS student at Cornell
          University.
          <br /> <br />
          I enjoy building web applications, on all levels of the tech stack. I
          also dabble in machine learning and systems programming.
          <br /> <br />
          <b>
            I am currently looking for software engineering internships for
            Summer 2022.
          </b>
          <br /> <br />
        </p>
      </div>

      <div className='grid-child links'>
        <br />
        <a href={resume} className='link link--nav'>
          Resume
        </a>
        <br />

        <a href={social.github} className='link link--nav'>
          Github
        </a>
        <br />

        <a href={social.linkedin} className='link link--nav'>
          LinkedIn
        </a>
        <br />

        <a href='mailto:ay394@cornell.edu' className='link link--nav'>
          Email
        </a>
        <br />
      </div>
    </div>
  )
}

export default About
