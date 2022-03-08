import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3 className='project__title'>{project.name}</h3>

    <p className='project__description'>{project.summary}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a href={project.sourceCode} className='link link--nav' rel='noopener noreferrer' target='_blank'>
        Github
      </a>
    )}
    {'              '}

    {project.url && (
      <a href={project.url} className='link link--nav' rel='noopener noreferrer' target='_blank'>
        view
      </a>
    )}
  </div>
)

export default ProjectContainer
