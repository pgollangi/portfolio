(this["webpackJsonpAryan77.github.io"]=this["webpackJsonpAryan77.github.io"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var s=n(6),a=n(4),r=n(1),c=n(0),i=Object(r.createContext)(),l=function(e){var t=e.children,n=Object(r.useState)("light"),s=Object(a.a)(n,2),l=s[0],o=s[1];Object(r.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(c.jsx)(i.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o={name:"Aryan Yadav",role:"",resume:"https://drive.google.com/file/d/1c2UUGPv3Eu29QMpbA556sf-0MBpkYjs1/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/aryan-yadav-2b95801b5/",github:"https://github.com/Aryan77"}},j=[{name:"OCaml Data Science Library",description:"A data science + machine learning library for OCaml that replicates and combines the most commonly used functionality of three famous Python libraries - Numpy, Pandas, Sklearn. Integrates well with the Archimedes library for graphing, and can thus be used for every step of a regular machine learning workflow.",stack:["OCaml","Jupyter Notebooks"],sourceCode:"https://github.com/Aryan77/ocaml-data-science-ml"},{name:"MapReduce",description:"A C++ implementation of Google's infamous MapReduce paper from scratch. My specific implementation presents the most frequent n-grams from a massive amount of text files, processing them in parallel; but the code can be used for any use case that involves processing an enormous amount of data concurrently and as quickly as possible.",stack:["C++","Bash"],sourceCode:"https://github.com/Aryan77/MapReduce"},{name:"CoursePlan",description:"A web app that lets Cornell students check what requirements they have satisfied to the completion of their degree and plan future semesters. Currently working on getting high school requirements correctly transferred across multiple colleges and majors, as part of the Cornell DTI project team.",stack:["TypeScript","Vue","Firebase",""],sourceCode:"https://github.com/cornell-dti/course-plan",livePreview:"https://courseplan.io/"},{name:"CritterWorld",description:"Large Java project (~14000 lines) for honors OOP class where I built a system that simulated a world of critters that wander around, eat food, reproduce and evolve. Involved writing a parser and interpreter for a DSL that would describe evolution, coupled with a GUI simulation.",stack:["Java","JavaFX"],livePreview:"https://www.cs.cornell.edu/courses/cs2112/2021fa/project/project.pdf?1632534588"}],b=[{name:"OCaml Data Science Library",description:"A data science + machine learning library for OCaml that replicates and combines the most commonly used functionality of three famous Python libraries - Numpy, Pandas, Sklearn. Integrates well with the Archimedes library for graphing, and can thus be used for every step of a regular machine learning workflow.",stack:["OCaml","Jupyter Notebooks"],sourceCode:"https://github.com/Aryan77/ocaml-data-science-ml"},{name:"CoursePlan",description:"A web app that lets Cornell students check what requirements they have satisfied to the completion of their degree and plan future semesters. Currently working on getting high school requirements correctly transferred across multiple colleges and majors, as part of the Cornell DTI project team.",stack:["TypeScript","Vue","Firebase",""],sourceCode:"https://github.com/cornell-dti/course-plan",livePreview:"https://courseplan.io/"}],h=["TypeScript","JavaScript","Node.js","Express.js","Firebase","React.js","Vue.js","Python","Java","C++","OCaml","Numpy","Pandas","Sklearn","Docker"],m=(n(21),n(22),n(23),function(){var e=o.name,t=o.role,n=o.resume,s=o.social;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsx)("h1",{children:Object(c.jsx)("span",{className:"about__name",children:e})}),t&&Object(c.jsx)("h2",{className:"about__role",children:t}),Object(c.jsxs)("p",{className:"about__desc",children:["\ud83d\udc4b I'm Aryan, a sophomore CS student at Cornell University.",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"I enjoy building web applications, on all levels of the tech stack. I also dabble in machine learning and systems programming.",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("b",{children:[" ","I am currently looking for software engineering internships for Summer 2022."," "]})," ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"about__contact center",children:[Object(c.jsx)("a",{href:n,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),Object(c.jsx)("a",{href:s.github,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Github"})}),Object(c.jsx)("a",{href:s.linkedin,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"LinkedIn"})})]})]})}),d=n(3),u=n.n(d),p=n(11),O=n.n(p),f=n(13),x=n.n(f),g=(n(25),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{className:"project__title",children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},u()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(O.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(x.a,{})})]})}),k=(n(31),function(){return j.length?Object(c.jsx)("section",{id:"projects",className:"section projects",children:Object(c.jsx)("div",{className:"projects__grid",children:j.map((function(e){return Object(c.jsx)(g,{project:e},u()())}))})}):null}),v=(n(32),function(){return b.length?Object(c.jsx)("section",{id:"experience",className:"section__experience",children:Object(c.jsxs)("div",{className:"history-tl-container",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("ul",{className:"tl",children:[Object(c.jsxs)("li",{className:"tl-item","ng-repeat":"item in retailer_history",children:[Object(c.jsx)("div",{className:"item-title",children:Object(c.jsx)("a",{href:"https://unipantry-site.webflow.io/",className:"link link--nav",children:"UniPantry"})}),Object(c.jsxs)("div",{className:"item-detail",children:[Object(c.jsxs)("b",{children:["Software Engineer Intern ",Object(c.jsx)("br",{})," Feb 2022 - Present ",Object(c.jsx)("br",{}),"Ithaca, New York"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Beginning my onboarding!"]})]}),Object(c.jsxs)("li",{className:"tl-item","ng-repeat":"item in retailer_history",children:[Object(c.jsx)("div",{className:"item-title",children:Object(c.jsx)("a",{href:"https://www.cornelldti.org/",className:"link link--nav",children:"AI Learners"})}),Object(c.jsxs)("div",{className:"item-detail",children:[Object(c.jsxs)("b",{children:["Software Engineer Intern ",Object(c.jsx)("br",{})," Dec 2021 - Feb 2022 ",Object(c.jsx)("br",{}),"Ithaca, New York"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Worked on a major refactoring of the game engine, so instead of coding games manually, the engine would generate them automatically by parsing the internal representation of game data."]})]}),Object(c.jsxs)("li",{className:"tl-item","ng-repeat":"item in retailer_history",children:[Object(c.jsx)("div",{className:"item-title",children:Object(c.jsx)("a",{href:"https://www.cornelldti.org/",className:"link link--nav",children:"Cornell DTI"})}),Object(c.jsxs)("div",{className:"item-detail",children:[Object(c.jsxs)("b",{children:["Software Engineer ",Object(c.jsx)("br",{})," Sep 2021 - Feb 2022 (Currently on sabbatical) ",Object(c.jsx)("br",{})," Ithaca, New York"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Working on"," ",Object(c.jsx)("a",{href:"https://courseplan.io/",className:"link link--nav",children:"CoursePlan"}),", specifically on a new feature that would provide students a suggested template for a 4-year completion of their major and plan classes accordingly."]})]}),Object(c.jsxs)("li",{className:"tl-item","ng-repeat":"item in retailer_history",children:[Object(c.jsx)("div",{className:"item-title",children:Object(c.jsx)("a",{href:"https://www.f1soft.com/",className:"link link--nav",children:"F1Soft International"})}),Object(c.jsxs)("div",{className:"item-detail",children:[Object(c.jsxs)("b",{children:["Junior Software Engineer (part-time) ",Object(c.jsx)("br",{})," Aug 2020 - Aug 2021"," ",Object(c.jsx)("br",{})," Kathmandu, Nepal"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"- Worked on the web version of"," ",Object(c.jsx)("a",{href:"https://www.esewa.com.np/",className:"link link--nav",children:"esewa.com"}),", the largest online payment service in Nepal with more than 10 million users; I was part of the team that integrated payment services of other companies into our app. ",Object(c.jsx)("br",{}),"- Improved user performance significantly by implementing a robust system of caching and prefetching most commonly used services.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"My mentor was kind enough to write me an"," ",Object(c.jsx)("a",{href:"https://www.linkedin.com/in/aryan-yadav-2b95801b5/",className:"link link--nav",children:"excellent recommendation on my LinkedIn page"}),".",Object(c.jsx)("br",{})]})]}),Object(c.jsxs)("li",{className:"tl-item","ng-repeat":"item in retailer_history",children:[Object(c.jsx)("div",{className:"item-title",children:Object(c.jsx)("a",{href:"https://www.f1soft.com/",className:"link link--nav",children:"F1Soft International"})}),Object(c.jsxs)("div",{className:"item-detail",children:[Object(c.jsxs)("b",{children:["Software Engineer Intern ",Object(c.jsx)("br",{})," Jun 2020 - Aug 2020 ",Object(c.jsx)("br",{}),"Ithaca, New York"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Documented API spec for new payment services and implemented the respective routes, testing everything thoroughly."]})]})]})]})}):null}),y=(n(33),function(){return h.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("ul",{className:"skills__list",children:h.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},u()())}))}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}):null}),w=(n(14),n(34),n(35),n(36),function(){return Object(c.jsx)("div",{className:"about center",children:Object(c.jsxs)("p",{className:"about__desc",children:["My class on"," ",Object(c.jsx)("a",{href:"http://www.cs.cornell.edu/courses/cs4414/2021fa/",className:"link link--nav",children:"Systems programming"})," ","has inspired in me a love for distributed systems and cloud computing, and I am thus making my way through"," ",Object(c.jsx)("a",{href:"https://dataintensive.net/",className:"link link--nav",children:"Designing Data Intensive Applications"})," ","by Martin Kleppman, and enjoying it immensely.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"I am also following the Distributed Systems course from MIT and attempting to build my own persistent, fault-tolerant, performant NoSQL database using Go.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Some modern databases like"," ",Object(c.jsx)("a",{href:"https://github.com/cockroachdb/cockroach",className:"link link--nav",children:"cockroachdb"})," ","have piqued my interest, I hope to contribute to it once I have the adequate background. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})})}),N=(n(37),function(){return Object(c.jsx)("footer",{className:"footer"})}),C=(n(38),function(){var e=Object(r.useContext)(i),t=Object(a.a)(e,1)[0].themeName,n=Object(r.useState)("contact"),s=Object(a.a)(n,2),l=s[0],o=s[1];return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsxs)("main",{children:[Object(c.jsx)(m,{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"skills"===l?Object(c.jsx)("a",{href:"#a",onClick:function(){return o("skills")},className:"link link--nav--pressed",children:"Skills"}):Object(c.jsx)("a",{href:"#a",onClick:function(){return o("skills")},className:"link link--nav",children:"Skills"}),"       |       ","experience"===l?Object(c.jsx)("a",{href:"#a",onClick:function(){return o("experience")},className:"link link--nav--pressed",children:"Experience"}):Object(c.jsx)("a",{href:"#a",onClick:function(){return o("experience")},className:"link link--nav",children:"Experience"}),"       |       ","projects"===l?Object(c.jsx)("a",{href:"#a",onClick:function(){return o("projects")},className:"link link--nav--pressed",children:"Projects"}):Object(c.jsx)("a",{href:"#a",onClick:function(){return o("projects")},className:"link link--nav",children:"Projects"}),"       |       ","current"===l?Object(c.jsx)("a",{href:"#a",onClick:function(){return o("current")},className:"link link--nav--pressed",children:"Current"}):Object(c.jsx)("a",{href:"#a",onClick:function(){return o("current")},className:"link link--nav",children:"Current"}),"skills"===l&&Object(c.jsx)(y,{}),"experience"===l&&Object(c.jsx)(v,{}),"projects"===l&&Object(c.jsx)(k,{}),"current"===l&&Object(c.jsx)(w,{})]}),Object(c.jsx)(N,{})]})});n(39);Object(s.render)(Object(c.jsx)(l,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.786bd490.chunk.js.map