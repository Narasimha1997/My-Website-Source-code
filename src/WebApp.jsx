import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'

class Profile extends React.Component {
    render(){
        return (
            <div>
                <div className = "box" style = {{margin : '30px auto', width : '85%'}}>
                   <h4 className = "title is-4">Get my resume:</h4>
                   <div style = {{margin : '20px auto'}}>
                       <a href = "./pic.jpg" className = "button is-primary">Download Resume</a>
                   </div>
                </div>
                <div className = "box" style = {{margin : '30px auto', width : '85%'}}>
                   <h4 className = "title is-4">Programming skills:</h4>
                   <table className = "table">
                      <thead>
                          <th>Programming Language</th>
                      </thead>
                      <tbody>
                        <tr><td>Python</td></tr>
                        <tr><td>Java and J2EE</td></tr>
                        <tr><td>C/C++</td></tr>
                        <tr><td>GoLang</td></tr>
                        <tr><td>C#</td></tr>
                      </tbody>
                   </table>
                </div>
                <div className = "box" style = {{margin : '20px auto' ,width : '85%'}}>
                      <h5 className = "title is-5">Web and Application Servers: </h5>
                      <table className = "table">
                      <thead>
                          <th>Frameworks:</th>
                      </thead>
                      <tbody>
                        <tr><td>Express.js</td></tr>
                        <tr><td>Tomcat</td></tr>
                        <tr><td>Apache httpd</td></tr>
                        <tr><td>Flask and Django</td></tr>
                        <tr><td>Glassfish</td></tr>
                      </tbody>
                   </table>
                   </div>
                   <div className = "box" style = {{margin : '20px auto' ,width : '85%'}}>
                   <h5 className = "title is-5">JavaScript Framework: </h5>
                   <table className = "table">
                   <thead>
                       <th>Frameworks:</th>
                   </thead>
                   <tbody>
                     <tr><td>Node.js</td></tr>
                     <tr><td>React.js</td></tr>
                     <tr><td>Express.js</td></tr>
                     <tr><td>React Native</td></tr>
                     <tr><td>ES6 standard</td></tr>
                   </tbody>
                </table>
                </div>
                <div className = "box" style = {{margin : '20px auto' ,width : '85%'}}>
                    <h5 className = "title is-5">Machine Learning / AI libraries: </h5>
                    <table className = "table">
                    <thead>
                        <th>Libraries:</th>
                    </thead>
                    <tbody>
                    <tr><td>Tensorflow</td></tr>
                    <tr><td>Keras</td></tr>
                    <tr><td>tflearn</td></tr>
                    <tr><td>keras-rl</td></tr>
                    <tr><td>numpy and other python data science linraries</td></tr>
                    </tbody>
                    </table>
                </div>
                <div className = "box" style = {{margin : '20px auto' ,width : '85%'}}>
                    <h5 className = "title is-5">Platforms: </h5>
                    <table className = "table">
                    <thead>
                        <th>Platforms:</th>
                    </thead>
                    <tbody>
                    <tr><td>Linux</td></tr>
                    <tr><td>Android using Java, ReactNative and Flutter (dart)</td></tr>
                    <tr><td>Raspberry pi (Python)</td></tr>
                    <tr><td>Full stack web using all frameworks and languages listed above (including HTML and CSS if it matters!)</td></tr>
                    <tr><td>Databases : MongoDB, LevelDB and MySQL (SQL and its variants)</td></tr>
                    <tr><td>Heroku and AWS</td></tr>
                    </tbody>
                    </table>
                </div>
                <div className = "box" style = {{margin : '20px auto', width : '85%'}}>
                   <h4 className = "title is-4">Interested areas:</h4>
                   <table className = "table">
                     <thead><th>Interested areas: </th></thead>
                     <tbody>
                     <tr><td>Machine Learning</td></tr>
                     <tr><td>Artifical Intelligence</td></tr>
                     <tr><td>Natural Language Processing and Language understanding</td></tr>
                     <tr><td>Computer Vision</td></tr>
                     <tr><td>Parallel computing and High Performance computing</td></tr>
                     <tr><td>Distributed Computing</td></tr>
                     <tr><td>Web Services</td></tr>
                     <tr><td>Web full-stack development</td></tr>
                     <tr><td>Information Security and Crpytography</td></tr>
                     <tr><td>Physical Web, IOT</td></tr>
                     </tbody>
                   </table>
                </div>
            </div>
        )
    }
}

export default Profile;