import uniqid from 'uniqid'
import './Experience.css'

function formatDate(date) {
  if (!date) {
    return date;
  }
  return new Date(date).toLocaleDateString("en-US", { month: 'long', year: 'numeric' });
}

const Experience = (resume) => {
  const { work } = resume;
  if (!work.length) return null

  return (
    <div id='experience' className='history-tl-container'>
      <br />
      <br />

      <ul className='tl'>
        {work.map((company) => (
          <li key={uniqid()} className='tl-item'>
            <div className='item-title'>
              {formatDate(company.startDate)} - {formatDate(company.endDate) || 'Present'} &gt;{'  '}
              <a
                href='{company.url}'
                className='link link--nav'
              >
                {company.name}
              </a>
            </div>

            <div className='item-detail'>
              <b>
                {company.position} <br />
                {company.location}
              </b>
              <br />
              {company.summary}<br />
              {company.highlights.map((highlight) => (
                <pre> - {highlight}</pre>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
