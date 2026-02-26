
function Contact() {
    return (   

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

    );
}

export default Contact;