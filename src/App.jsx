import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'

class NavBar  extends React.Component{
    constructor(){
        super()
        this.state = {active : false}
    }
    render(){
        return(
            <nav className = "navbar">
                <div className = "container">
                    <div className = "navbar-brand">
                        <a className = "navbar-item" href = "/"><img src = "pic.jpg"/></a>
                        <a className = "navbar-item" href = "/"><h3 className = "title is-5">Narasimha Prasanna HN</h3></a>
                        
                <span className = "navbar-burger burger" data-target = "dropdown_" onClick = {()=>
                    this.setState({active  : !this.state.active})
                } >
                    <span></span><span></span><span></span><span></span>
                </span>
                </div>
                <div className = {`navbar-menu ${this.state.active ? "is-active" : ""}`} id = "dropdown_" >
                    <div className = "navbar-end" id = "dropdown_">
                        <a className = "navbar-item" href = {process.env.PUBLIC_URL+'/Projects'}>Open Source Projects</a>
                        <a className = "navbar-item" href = "/profile">Profile</a>
                        <a className = "navbar-item"  href = "https://towardsdatascience.com/@narasimhaprasannahn">Articles</a>
                        <a className = "navbar-item" href = "/internship">Internships and Work</a>
                        <span className="navbar-item">
                         <a className="button is-dark is-inverted">
                          <span className="icon">
                           <i className="fab fa-github"></i>
                          </span>
                         <span>Get source</span>
                        </a>
                      </span>
                    </div>
                </div>
                </div>
            </nav>
        )
    }
}

class Home extends React.Component {
    constructor(){
        super()
        this.state = {git_ : {}}
    }

    componentWillMount(){
        fetch('https://api.github.com/users/Narasimha1997', {
            method : 'GET'
        }).then((resp) => resp.json()).then((data) =>{this.setState({git_ : data}); console.log(data)}).catch((err)=>console.log('Unable to fetch'))
    }

    render(){
        return(
            <div><div className = "hero is-danger is-medium">
            <div className = "hero-body">
               <div className = "container">
                  <div className = "columns">
                  <div className = "column" style = {{paddingLeft : "30px"}}>
                       <img src = "pic.jpg" width = "300px" height = "300px"/>
                     </div>
                     <div className = "column">
                     <h4 className = "title">Full Stack Developer, Technical Writer and AI craftsman</h4>
                      <p>I am Prasanna HN, I am a Full stack developer in Android and Web, I write technical articles 
                       on Medium.com, I research and implement technologies such as Artifical Intelligence, Machine Learning,
                       Machine Perception, Natural Language Processing etc.</p>
                       <div style = {{padding : '20px 20px 20px 20px'}}>
                       <a className="button is-dark is-inverted" style = {{padding : '10px 10px 10px 10px'}} href = "https://www.github.com/Narasimha1997">
                          <span className="icon">
                           <i className="fab fa-github"></i>
                          </span>
                         <span>GitHub profile</span>
                        </a>
                        <a className="button is-dark is-inverted" style = {{padding : '10px 10px 10px 10px'}}
                        href = "https://www.facebook.com/narasimha.prasanna1">
                          <span className="icon">
                           <i className="fab fa-facebook-square"></i>
                          </span>
                         <span>Facebook profile</span>
                        </a>
                        <a className="button is-dark is-inverted" style = {{padding : "10px 10px 10px 10px"}}
                        href = "https://in.linkedin.com/in/narasimha-prasanna-hn-17aa89146">
                          <span className="icon">
                           <i className="fab fa-linkedin"></i>
                          </span>
                         <span>Linkedin profile</span>
                        </a>
                        
                        <a className="button is-dark is-inverted" style = {{padding : "10px 10px 10px 10px"}} href = "https://towardsdatascience.com/@narasimhaprasannahn">
                          <span className="icon">
                           <i className="fab fa-medium"></i>
                          </span>
                         <span>Medium profile</span>
                        </a>
                         
                        <a className="button is-dark is-inverted" style = {{padding : "10px 10px 10px 10px"}} href = "https://www.quora.com/profile/Narasimha-Prasanna-HN">
                          <span className="icon">
                           <i className=" fab fa-quora"></i>
                          </span>
                         <span>Quora profile</span>
                        </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            <div style = {{background : "url('Grad.png')center/cover", padding : '30px 30px 30px 30px'}}>
            <div className = "box" style = {{margin : '20px auto', width : '92%'}}>
               <h4 className = "title is-4">Profile</h4>
               <a href = "resume.pdf" className = "navbar-item">Download</a>
               <a className = "navbar-item" href = {process.env.PUBLIC_URL+'/Projects'}>Open Source Projects</a>
               <a className = "navbar-item" href = "/profile">Profile</a>
               <a className = "navbar-item"  href = "https://towardsdatascience.com/@narasimhaprasannahn">Articles</a>
               <a className = "navbar-item" href = "/internship">Internships and Work</a>

            </div>
            <div className = "box" style = {{margin : '30px auto', width : '92%'}}>
               <h4 className = "title is-4"><span className="icon">
                           <i className="fab fa-github"></i>
                          </span> GitHub Profile</h4>
               <p>Explore my GitHub profile here</p>
               <div className = "content" style = {{margin: '20px auto', width :'90%'}}>
                   <div className = "columns">
                      <div className = "column">
                          <img src = {this.state.git_.avatar_url} width = "200px" height = "200px"/>
                      </div>
                      <div className = "column">
                          <h4 className = "title is-4">{this.state.git_.name} / {this.state.git_.login}</h4>
                          <p><span className="icon">
                           <i className="fas fa-code"></i>
                          </span> {this.state.git_.bio}</p>
                          <div className = "notification is-success" style = {{margin : '20px auto'}}>
                             <p>{this.state.git_.followers} followers</p>
                             <p>{this.state.git_.public_repos} OpenSource projects</p>
                          </div>
                          <a href = "https://github.com/Narasimha1997" className = "button is-primary">Profile</a>
                      </div>
                   </div>
               </div>
            </div>
            </div>
            </div>
        )
    }
}



export {NavBar, Home}