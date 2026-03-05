import Header from "./components/Header"; 
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

/* -- Data Arrays and Churva ---------------------------- */

const skills = [
  "HTML",
  "CSS",
  "C",
  "Python",
  "Javascript",
  "React"
];

const education = [
{
  acadlevel: "Kindergarten",
  insti: "Christian Kiddie Star Academy",
  year: "2008 - 2010"
},
{
  acadlevel: "Elementary",
  insti: "Surigao City Pilot School",
  year: "2012 - 2017"
},
{
  acadlevel: "Junior High School",
  insti: "Surigao Del Norte National High School",
  year: "2017 - 2021"
},
{
  acadlevel: "Senior High School",
  insti: "Caraga Regional Science High School",
  year: "2021 - 2023"
},
{
  acadlevel: "College",
  insti: "USTP - CDO Campus",
  year: "2023 - Present"
}
]

/* ------------------------------------------------------ */



/* -- Main Build ---------------------------------------- */

function App() {

  return (
    <div className="container">
        <Header />
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact />

        <footer>
        <p>&copy; 2026 Ricky Mark Pareja. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
