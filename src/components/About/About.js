import uniqid from 'uniqid'
import './About.css'

const About = (props) => {
  const { resume } = props;
  const { basics } = resume;
  const { name, role, profiles } = basics;
  
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
          &#128075; I&apos;m Prasanna, a full stack web developer who can build apps from the ground up.
          <br /> <br />
          I am a very product focussed developer who prioritizes user feedback first and foremost. I&apos;m generally very flexible when investigating new roles.
          <br /> <br />
          I enjoy building web applications, on all levels of the tech stack.
          <br /> <br />
        </p>
      </div>

      <div className='grid-child links'>
        <br />
        <a href="https://gitconnected.com/pgollangi/resume" className='link link--nav' rel='noopener noreferrer' target='_blank'>
          Resume
        </a>

        {profiles.map(p => (
          <span key={uniqid()}><br />
            <a key={uniqid()} href={p.url} className='link link--nav' rel='noopener noreferrer' target='_blank'>
              {p.network}
            </a>
          </span>
        ))}
      </div>
    </div>
  )
}

export default About
