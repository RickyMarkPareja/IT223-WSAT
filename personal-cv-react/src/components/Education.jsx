
function Education({ education }) {
    return (   
            <section className="card"> 
                <h2>Education</h2> 

                <table> 
                <thead>
                    <tr> 
                        <th>Academic Level</th> 
                        <th>Institution</th> 
                        <th>Year Graduated</th> 
                    </tr>
                </thead>

                <tbody style={{textAlign: "center"}}>
                    {education.map((item, index) => (
                        <tr key={index}>
                            <td>{item.acadlevel}</td>
                            <td>{item.insti}</td>
                            <td>{item.year}</td>
                        </tr>
                    ))}
                </tbody> 
                </table> 
            </section>
    );
}

export default Education;