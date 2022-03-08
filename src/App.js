/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Current from './components/Current/Current'

import Footer from './components/Footer/Footer'
import './App.css'

const App = (props) => {
  const [{ themeName }] = useContext(ThemeContext)
  const [state, setState] = useState('')
  const {resume} = props

  return (
    <div id='top' className={`${themeName} app`}>
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <About  resume={resume}/>
        <br />
        <br />
        <br />

        {state === 'skills' ? (
          <a
            href='#skills'
            onClick={() => setState('skills')}
            className='link link--nav--pressed'
          >
            Skills
          </a>
        ) : (
          <a
            href='#skills'
            onClick={() => setState('skills')}
            className='link link--nav'
          >
            Skills
          </a>
        )}
        {'       |       '}

        {state === 'experience' ? (
          <a
            href='#experience'
            onClick={() => setState('experience')}
            className='link link--nav--pressed'
          >
            Experience
          </a>
        ) : (
          <a
            href='#experience'
            onClick={() => setState('experience')}
            className='link link--nav'
          >
            Experience
          </a>
        )}
        {'       |       '}

        {state === 'projects' ? (
          <a
            href='#projects'
            onClick={() => setState('projects')}
            className='link link--nav--pressed'
          >
            Projects
          </a>
        ) : (
          <a
            href='#projects'
            onClick={() => setState('projects')}
            className='link link--nav'
          >
            Projects
          </a>
        )}
        {/* {'       |       '}

        {state === 'current' ? (
          <a
            href='#a'
            onClick={() => setState('current')}
            className='link link--nav--pressed'
          >
            Current
          </a>
        ) : (
          <a
            href='#a'
            onClick={() => setState('current')}
            className='link link--nav'
          >
            Current
          </a>
        )} */}

        {'       |       '}

        {state === 'contact' ? (
          <a
            href='#contact'
            onClick={() => setState('contact')}
            className='link link--nav--pressed'
          >
            Contact
          </a>
        ) : (
          <a
            href='#contact'
            onClick={() => setState('contact')}
            className='link link--nav'
          >
            Contact
          </a>
        )}

        {state === 'skills' && <Skills resume={resume}/>}
        {state === 'experience' && <Experience resume={resume}/>}
        {state === 'projects' && <Projects resume={resume}/>}
        {/* {state === 'current' && <Current resume={resume}/>} */}
        {state === 'contact' && <Contact resume={resume}/>}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  )
}

export default App
