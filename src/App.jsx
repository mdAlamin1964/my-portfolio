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
    }

    // Next Prev button function
    const [nextBtn, setNextBtn] = React.useState(0);
    const dataCount = data.length - 4
    function nextPortBtn() {
        if (nextBtn < dataCount) {
            setNextBtn(nextBtn + 1)
        }
    }

    function PrevPortBtn() {
        if (nextBtn > 0) {
            setNextBtn(nextBtn - 1)
        }
    }

    // portfolio items
    const portfolioItems = data.map((n, i)=> {
        if (i >= (0+nextBtn) && i < (4+nextBtn)) {
            let imageHight = (i % 2) === 0? "250px" : "300px"
            return (
                <Portfolio 
                    key={nanoid()}
                    image={`https://raw.githubusercontent.com/mdAlamin1964/my-portfolio/main/src/images/${n.image}`}
                    url={n.url}
                    imageHight={imageHight}
                    name = {n.name}
                    lang = {n.lang}
                />
            )
        }
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
        <>
            <div className="container"> 
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
                                portNextBtn = {() => nextPortBtn()}
                                portPrevBtn = {() => PrevPortBtn()}
                            />
                        }
                        
                        { currentPage === "About" &&  
                            <About 
                                image="https://raw.githubusercontent.com/mdAlamin1964/my-portfolio/main/src/images/profile (1).jpg"
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

            <div className="main-me">
                <a href="https://www.fiverr.com/alamin1964/" target='_blank'>Concept & build by MD. Alamin</a>
            </div>
        </>
    )
}