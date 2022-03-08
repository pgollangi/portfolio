import { contact } from '../../portfolio'
import './Contact.css'

const Contact = (resume) => {
  const { basics } = resume;
  if (!basics.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${basics.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
