
import { useState } from "react";


function Contact() {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 

    function handleSubmit(e) { 
        e.preventDefault();     
        alert(`Thank you ${name}!`); 
    } 

    return (   

        /* --OLD CODE (before M6)-- 
        <section className="card"> 
            <h2>Contact Me</h2> 
            <form> 
                <input type="text" id="name" placeholder="Name"></input>
                <br></br><br></br> 
                <input type="email" id="email" placeholder="Email"></input>
                <br></br><br></br> 
                <textarea placeholder="Message"></textarea>
                <br></br><br></br> 
            <button type="submit" id="submitBtn">Send</button> 
            </form> 
        </section>
        */

        <section className="card"> 
            <h2>Contact Me</h2> 
            <form onSubmit={handleSubmit}> 
                <input 
                type="text" 
                id="name" placeholder="Name"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                /> <br/>

                <input 
                type="email" 
                id="email" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                /> <br/>
                
                <textarea placeholder="Message"></textarea>
                <br/>

            <button type="submit" id="submitBtn">Send</button> 
            </form> 
        </section>
        
    );
}

export default Contact;