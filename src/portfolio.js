const header = {
  homepage: 'https://Aryan77.github.io/',
}

const about = {
  name: 'Aryan Yadav',
  role: '',
  resume: 'https://drive.google.com/file/d/1XQlZAT6FInJqLkJp95aX9n-_pp6-R1Ul/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aryan-yadav-2b95801b5/',
    github: 'https://github.com/Aryan77',
  },
}

const projects = [
  {
    name: 'OCaml Data Science Library',
    description:
      'A data science + machine learning library for OCaml that replicates and combines the most commonly used functionality of three famous Python libraries - Numpy, Pandas, Sklearn. Integrates well with the Archimedes library for graphing, and can thus be used for every step of a regular machine learning workflow.',
    stack: ['OCaml', 'Jupyter Notebooks'],
    sourceCode: 'https://github.com/Aryan77/ocaml-data-science-ml',
  },
  {
    name: 'CoursePlan',
    description:
      'A web app that lets Cornell students check what requirements they have satisfied to the completion of their degree and plan future semesters. Currently working on getting high school requirements correctly transferred across multiple colleges and majors, as part of the Cornell DTI project team.',
    stack: ['TypeScript', 'Vue', 'Firebase', ''],
    sourceCode: 'https://github.com/cornell-dti/course-plan',
    livePreview: 'https://courseplan.io/',
  },
  {
    name: 'CritterWorld',
    description:
      'Large Java project (~14000 lines) for honors OOP class where I built a system that simulated a world of critters that wander around, eat food, reproduce and evolve. Involved writing a parser and interpreter for a DSL that would describe evolution, coupled with a GUI simulation.',
    stack: ['Java', 'JavaFX'],
    livePreview: 'https://www.cs.cornell.edu/courses/cs2112/2021fa/project/project.pdf?1632534588'
  },
]

const experiences = [
  {
    name: 'OCaml Data Science Library',
    description:
      'A data science + machine learning library for OCaml that replicates and combines the most commonly used functionality of three famous Python libraries - Numpy, Pandas, Sklearn. Integrates well with the Archimedes library for graphing, and can thus be used for every step of a regular machine learning workflow.',
    stack: ['OCaml', 'Jupyter Notebooks'],
    sourceCode: 'https://github.com/Aryan77/ocaml-data-science-ml',
  },
  {
    name: 'CoursePlan',
    description:
      'A web app that lets Cornell students check what requirements they have satisfied to the completion of their degree and plan future semesters. Currently working on getting high school requirements correctly transferred across multiple colleges and majors, as part of the Cornell DTI project team.',
    stack: ['TypeScript', 'Vue', 'Firebase', ''],
    sourceCode: 'https://github.com/cornell-dti/course-plan',
    livePreview: 'https://courseplan.io/',
  }
]

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'C',
  'OCaml',
  'React',
  'Vue',
  'Node.JS',
  'Express',
  'Flask',
  'Spring',
  'Numpy',
  'Pandas',
  'Sklearn',
  'Firebase',
  'MySQL',
  'Heroku',
  'Docker'
]


const contact = {
  email: 'ay394@cornell.edu',
}

export { header, about, projects, experiences, skills, contact }
