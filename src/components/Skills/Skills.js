import uniqid from 'uniqid'
import './Skills.css'

const Skills = (props) => {
  const { resume } = props;
  const {skills} = resume;
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      {skills.map((skill) => (
        <ul className='skills__list'>
          {skill.keywords.map((keyword) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {keyword}
            </li>
          ))}
        </ul>
      ))}
      <br />
      <br />
      <br />
    </section>
  )
}

export default Skills
