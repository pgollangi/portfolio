import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section id='experience' className='section__experience'>
      <h2 className="section__title">Experience</h2>
      <div className="history-tl-container">
        <ul className="tl">
          <li className="tl-item" ng-repeat="item in retailer_history">
            <div className="timestamp">
              <b>Oct 2021 - Present</b><br />
              Ithaca, New York<br /> 
            </div>
            <div className="item-title">
              <a href="https://www.cornelldti.org/" className='link link--nav'>Cornell DTI</a><br /> -- Full-Stack Developer
            </div>
            <div className="item-detail">
              <br />
               Just completed my onboarding and started contributing to <a href="https://courseplan.io/" className='link link--nav'>CoursePlan.</a> 
            </div>
          </li>
          <li className="tl-item" ng-repeat="item in retailer_history">
            <div className="timestamp">
              <b>Aug 2020 - Aug 2021</b><br /> 
              Kathmandu, Nepal<br />
            </div>
            <div className="item-title">
              <a href="https://www.f1soft.com/" className='link link--nav'>F1Soft International</a><br /> -- Part-Time Junior Software Engineer
            </div>
            <div className="item-detail">
            <br />
                  I was stuck in Nepal for the entirety of my freshman year owing to COVID-19; I made the best of it by returning to F1Soft. <br /><br />
                  Worked on the web version of <a href="https://www.esewa.com.np/" className='link link--nav'>esewa.com</a>, the largest online payment service in Nepal with more than 10 million users. <br /><br />
                  Communicated and worked with teams from Cinemaghar(cinema company) and TechMinds(internet company) to set up APIs on their end that would facilitate payment through a third party, and implemented these services seamlessly into the main app. <br /><br />
                  Improved user performance significantly by caching most commonly used payment services for a user and prefetching current prices for those services in the background once the website (or app) was opened. <br /><br />
            </div>
          </li>
          <li className="tl-item" ng-repeat="item in retailer_history">
            <div className="timestamp">
              <b>Jun 2020 - Aug 2020</b><br /> 
              Kathmandu, Nepal<br />
            </div>
            <div className="item-title">
              <a href="https://www.f1soft.com/" className='link link--nav'>F1Soft International</a><br /> -- Software Engineer Intern            
            </div>
            <div className="item-detail">
              <br />
              Implemented basic routes for new payment services. <br /><br />
              Documented the API spec for these new services, constantly communicated with the frontend team to improve abstraction and implement routes that made certain frontend tasks easier. <br /><br />
              Wrote comprehensive JUnit tests that identified several previously unnoticed bugs. 
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
