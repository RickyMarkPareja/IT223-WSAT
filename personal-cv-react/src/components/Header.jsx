import {useState} from "react";
/*
function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <header> 
                <section className="card2"> 
                    <h1>Ricky Mark S. Pareja</h1> 
                    <p style={{textAlign: "center"}}> IT Student | Web Systems and Technologies </p>
                </section>
            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Dark Mode
            </button>
            </header>  
        </div>
    );
}
*/

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
            <header> 
                <section className="card2"> 
                    <h1>Ricky Mark S. Pareja</h1> 
                    <p style={{textAlign: "center"}}> IT Student | Web Systems and Technologies </p>
                </section>

            <button onClick={toggleTheme}>
                Toggle Dark Mode
            </button>
            </header>  
    );
}

export default Header;