
import { useState } from "react";


function Contact() {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 

    function handleSubmit(e) { 
        e.preventDefault();     
        /*alert(`Thank you ${name}!`);*/

        fetch("http://localhost/cv-api/process.php", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({ name: name }) 
        }) 
        .then(res => res.json()) 
        .then(data => { 
            if (data.message) { 
                alert(data.message); 
            } else { 
            alert("Unexpected error occurred."); 
            } 
        }); 
        }     

    return (   
        <section className="card"> 
            <h2>Contact Me</h2> 
            <form onSubmit={handleSubmit}> 
                <input 
                type="text" 
                id="name"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
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