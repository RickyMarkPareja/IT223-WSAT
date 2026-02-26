
import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);

    return (   

        <section>
            <button onClick={() => setVisible(!visible)}>
            Show/Hide Skills
            </button>

        {visible && (
            <section className="card" id="skillsSection">
                <h2>Skills</h2>
                    <ul> 
                        <li>HTML</li> 
                        <li>CSS</li>
                        <li>C</li> 
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                    <ul> 
                        <li>Web Development 
                            <ul> 
                                <li>Frontend 
                                    <ul> 
                                        <li>HTML</li> 
                                        <li>Java</li> 
                                    </ul>
                                </li>
                                <li>Backend
                                    <ul> 
                                        <li>MySQL Workbench</li> 
                                        <li>Postgres Supabase</li> 
                                    </ul> 
                                </li>
                            </ul>
                        </li>
                    </ul>
            </section> 
        )}
        </section>
    );
}

export default Skills;