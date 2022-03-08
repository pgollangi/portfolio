import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'


fetch('https://api.github.com/users/pgollangi/gists').then(r => r.json()).then(gists => {
  const resumeGist = gists.find(g => g.files['resume.json']);
  fetch(resumeGist.files['resume.json'].raw_url)
    .then(r => r.json()).then(resume => {
      console.log(resume);
      render(
        <ThemeProvider>
          <App resume={resume} />
        </ThemeProvider>,
        document.getElementById('root')
      )
    })
})


