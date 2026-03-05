
import profile from "../assets/profile.jpg";
import Card from "./Card";

function About() {
    return ( 
        
        <Card title="About Me">
            <div style={{textAlign: "center"}}>
              <img src={profile} alt="Profile Photo During A Sunny Afternoon at Ayala Centrio, Cagayan De Oro." />
                <p> I was born on November 2004, making me 21 years old as of witing.
                    I live in Surigao City, in the province of Surigao Del Norte, Caraga.
                    If there was one food you would ask about me, it would be Waffles! 
                </p><br />
            </div>

            <p>
                Email: 
                <a href="mailto:parejarickymarks@gmail.com"> parejarickymarks@gmail.com</a><br /> 
                GitHub: 
                <a href="https://github.com/RickyMarkPareja" target="_blank"> RickyMarkPareja@github.com</a> 
            </p> 
        </Card>
    )
}

export default About;