import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>
        &#128075; I am Aryan, a sophomore CS student at Cornell University.
        <br /> <br />
        I enjoy building web applications, on all levels of the tech stack. I
        also dabble in machine learning and systems programming.
        <br /> <br />
        <b>
          {' '}
          I am currently looking for software engineering internships for Summer
          2022.{' '}
        </b>{' '}
        <br /> <br />
      </p>

      <div className='about__contact center'>
        <a href={resume}>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>

        <a href={social.github}>
          <span type='button' className='btn btn--outline'>
            Github
          </span>
        </a>

        <a href={social.linkedin}>
          <span type='button' className='btn btn--outline'>
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  )
}

export default About
