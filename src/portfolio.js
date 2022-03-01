const header = {
  homepage: 'https://Aryan77.github.io/',
}

const about = {
  name: 'Aryan Yadav',
  role: '',
  resume:
    'https://drive.google.com/file/d/1c2UUGPv3Eu29QMpbA556sf-0MBpkYjs1/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aryanyadav4',
    github: 'https://github.com/Aryan77',
    email: 'mailto:ay394@cornell.edu',
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
    name: 'MapReduce',
    description: `A C++ implementation of Google's infamous MapReduce paper from scratch. My specific implementation presents the most frequent n-grams from a massive amount of text files, processing them in parallel; but the code can be used for any use case that involves processing an enormous amount of data concurrently and as quickly as possible.`,
    stack: ['C++', 'Bash'],
    sourceCode: 'https://github.com/Aryan77/MapReduce',
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
  },
]

const skills = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'Firebase',
  'React.js',
  'Vue.js',
  'Python',
  'Java',
  'C++',
  'OCaml',
  'Numpy',
  'Pandas',
  'Sklearn',
  'Docker',
]

const contact = {
  email: 'ay394@cornell.edu',
}

export { header, about, projects, experiences, skills, contact }
