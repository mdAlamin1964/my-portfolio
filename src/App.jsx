import React from 'react'
import Splash from './Splash'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Sidebar from './Sidebar'
import { nanoid } from 'nanoid'
import Contact from './Contact'
import data from './data'
import './styles/main.css'

export default function App() {
    const [opening,setOpening] = React.useState('')
    const [currentPage, setCurrentPage] = React.useState('Projects')

    function getMenuNamFunc(event) {
        event.preventDefault()
        let menuText =  event.target.innerText 
        setCurrentPage(menuText);
        let y = document.querySelectorAll('.home--nav--link')
        for (let x of y) {
            x.classList.remove('nav--active')
        }
        event.target.classList.add('nav--active')
        console.log(y)
    }


    // portfolio items
    const portfolioItems = data.map((n, i)=> {
        let imageHight = (i % 2) === 0? "300px" : "350px"
        return (
            <Portfolio 
                key={nanoid()}
                image={`./src/images/${n.image}`}
                url={n.url}
                imageHight={imageHight}
            />
        )
    })

    
    function openingfuc() {
        setOpening("move")
    }


    // Skills
    const skills = ["FRONT-END DEVELOPER", "JavaScript", "Python", "Git"]

    const skillsItems = skills.map(n=> {
        return (
            <li className="splash--left--item" key={nanoid()}> 
                {n}
            </li>
        )
    })


    return (
        <div className="constainer"> 
          <Splash 
                onHandle={openingfuc}
                getMoved={opening}
                skills={skillsItems}
            />

            {
            opening && 
                <div className="home">
                    <Sidebar 
                        getMenuNamFunc={getMenuNamFunc}
                    />
                    { currentPage === "Projects" &&  
                        <Home 
                            portfolio={portfolioItems}
                            skill1={skills}
                            skills={skillsItems}
                        />
                    }
                    
                    { currentPage === "About" &&  
                        <About 
                             image="./src/images/profile (1).jpeg"
                        />
                    }

                    { currentPage === "Contact" &&  
                        <Contact 
                            skills={skillsItems}
                        />
                    }

                </div>
            }
        </div>
    )
}