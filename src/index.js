import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'


// fetch('https://api.github.com/users/pgollangi/gists').then(r => r.json()).then(gists => {
//   const resumeGist = gists.find(g => g.files['resume.json']);
fetch('https://gist.githubusercontent.com/pgollangi/35c665d579446bf8da69a65515512aed/raw/a8b366333153e82ddff15df3576e3062dca27b0b/resume.json' /* resumeGist.files['resume.json'].raw_url */)
  .then(r => r.json()).then(resume => {
    render(
      <ThemeProvider>
        <App resume={resume} />
      </ThemeProvider>,
      document.getElementById('root')
    )
  })
// })


