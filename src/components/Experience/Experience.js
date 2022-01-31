import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section id='experience' className='section__experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='history-tl-container'>
        <ul className='tl'>
          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='timestamp'>
              <b>Dec 2021 - Present</b>
              <br />
              Ithaca, New York
              <br />
            </div>
            <div className='item-title'>
              <a href='https://www.cornelldti.org/' className='link link--nav'>
                AI Learners
              </a>
              <br /> -- Software Engineer Intern
            </div>

            <div className='item-detail'>
              <br />
              Working on a major refactoring of our game engine, so instead of
              coding games manually, our engine will generate them automatically
              by parsing our internal representation of game data.
            </div>
          </li>

          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='timestamp'>
              <b>Oct 2021 - Present</b>
              <br />
              Ithaca, New York
              <br />
            </div>
            <div className='item-title'>
              <a href='https://www.cornelldti.org/' className='link link--nav'>
                Cornell DTI
              </a>
              <br /> -- Full Stack Developer
            </div>

            <div className='item-detail'>
              <br />
              Working on{' '}
              <a href='https://courseplan.io/' className='link link--nav'>
                CoursePlan
              </a>
              , specifically on a new feature that would provide students a
              suggested template for a 4-year completion of their major and plan
              classes accordingly.
            </div>
          </li>
          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='timestamp'>
              <b>Aug 2020 - Aug 2021</b>
              <br />
              Kathmandu, Nepal
              <br />
            </div>
            <div className='item-title'>
              <a href='https://www.f1soft.com/' className='link link--nav'>
                F1Soft International
              </a>
              <br /> -- Junior Software Engineer (part-time)
            </div>

            <div className='item-detail'>
              <br />- Worked on the web version of{' '}
              <a href='https://www.esewa.com.np/' className='link link--nav'>
                esewa.com
              </a>
              , the largest online payment service in Nepal with more than 10
              million users; I was part of the team that integrated payment
              services of other companies into our app. <br />
              - Improved user performance significantly by implementing a robust
              system of caching and prefetching most commonly used services.
              <br />
              <br />
              My mentor was kind enough to write me an{' '}
              <a
                href='https://www.linkedin.com/in/aryan-yadav-2b95801b5/'
                className='link link--nav'
              >
                excellent recommendation on my LinkedIn page
              </a>
              .
              <br />
            </div>
          </li>
          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='timestamp'>
              <b>Jun 2020 - Aug 2020</b>
              <br />
              Kathmandu, Nepal
              <br />
            </div>
            <div className='item-title'>
              <a href='https://www.f1soft.com/' className='link link--nav'>
                F1Soft International
              </a>
              <br /> -- Software Engineer Intern
            </div>
            <div className='item-detail'>
              <br />
              Documented API spec for new payment services and implemented the
              respective routes, testing everything thoroughly.
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
