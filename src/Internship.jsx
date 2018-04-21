import React from 'react';
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'

class Internship extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <div className = "box" style = {{margin : '30px auto', width : '85%'}}>
                    <h4 className = "title is-4">Inversa Technosoft</h4>
                    <p><strong>Worked as a Web Platform and IoT developer intern at Inversa Technosoft for 6 months.</strong></p>
                    <p>I worked as a intern at Inversa Technosoft for 6 months, during the span of 6 months I worked on various projects related to IoT and
                        and Web Platform, I co-developed a gas sensing system and built a backend information system. I developed an online python learning system with online compilation facility.
                        I also built Water Management system and Home automation system.
                    </p>
                    <a href = "https://www.inversatechnosoft.com" className = "button is-primary">Visit inversa technosoft</a>
                    <h5></h5>
                </div>

                <div className = "box" style = {{margin : '30px auto', width : '85%'}}>
                   <h4 className = "title is-4">Instructor at BuzyDeveloper code camp</h4>
                   <p>I teach Android Application Developmemt at BuzyDevelopers code camp. We also provide real-time
                        hands-on android development experience to learners willing to learn, we assume that participants in
                        the workshop are begenniers and we teach them from sratch. I collaborate with Sourab Kumar in the workshop.
                   </p>
                   <div style = {{margin : '20px auto'}}>
                      <a className = "button is-primary" href = "https://www.buzydevelopers.com">BuzyDevelopers site</a>
                   </div>
                </div>
            </div>
        )
    }
}

export {Internship};