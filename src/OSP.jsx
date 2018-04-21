import React from 'react'
import ReactDOM from 'react-dom'


class Projects extends React.Component{
    constructor() {
        super();
        this.state = {
            projects : null
        }
    }

    componentWillMount(){
        fetch('https://api.github.com/users/Narasimha1997/repos?per_page=100', {
            method : 'GET'
        }).then((data) => data.json()).then((data) => this.setState({projects : data})).catch((err) => console.log(err))
    }

    render(){
        return(
            <div>
            <div className = "box" style = {{margin : '30px auto', width : '90%'}}>
               <h3 className = "title is-3">Culture of OpenSource</h3>
               <p>I often compare open source to science. To where science took this whole notion of developing ideas in the open and improving on other peoples' ideas and making it into what science is today and the incredible advances that we have had. And I compare that to witchcraft and alchemy, where openness was something you didn't do.</p>
               <p><strong>- Linus Trovalds</strong></p>
            </div>
            <div style = {{margin : '30px auto', width : '90%'}}>
                 { (this.state.projects != null) && (
                     this.state.projects.map((k, v) =>{
                         return (
                             <div className = "card" style = {{margin : '20px auto'}}>
                                 <header className = "card-header">
                                  <p className = "card-header-title">{k.name}</p>
                                 </header>
                                 <div className = "card-content">
                                   <p>{k.description}</p>
                                   <p className = "is-primary">Language : {k.language}</p>
                                   <p><strong>{k.full_name}</strong></p>
                                 </div>
                                 <footer className = "card-footer">
                                   <a href = {k.html_url} className = "card-footer-item">Visit</a>
                                   <a href = {k.clone_url} className = "card-footer-item">Clone</a>
                                 </footer>
                             </div>
                         )
                     })
        )}
        </div>
            </div>
        )
    }
    
}

export default Projects