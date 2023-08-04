import React from 'react'
import Splash from './Splash'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Sidebar from './Sidebar'
import { nanoid } from 'nanoid'
import Contact from './Contact'
import './styles/main.css'

export default function App() {
    const [opening,setOpening] = React.useState('')
    const [currentPage, setCurrentPage] = React.useState('Projects')
    const [myphoto, setMyphoto] = React.useState([]);

    React.useEffect(()=> {
        setMyphoto(myPhotos)
    }, [currentPage])

    const myPhotos = []
    for(let i = 1; i < 10; i++) {
        myPhotos.push(`./src/images/a (${i}).jpg`)
    }

    function getMenuNamFunc(event) {
        event.preventDefault()
        let menuText =  event.target.innerText 
        setCurrentPage(menuText);
    }




    const imageGallery= myphoto.map((n,i) => {
        let imageHight = (i % 2) === 0? "400px" : "500px"
        let ranNum = Math.floor(Math.random() * myphoto.length) 
        if(i < 4) {
            return (
                <Portfolio 
                key={nanoid()}
                image={myphoto[ranNum]}
                imageHight={imageHight}
            />
            )
        }
    });
    
    function openingfuc() {
        setOpening("move")
    }


    // Skills
    const skills = ["Front-end Development", "React js"]


    return (
        <div className="constainer"> 
          <Splash 
                onHandle={openingfuc}
                getMoved={opening}
                skill1={skills}
            />

            {
            opening && 
                <div className="home">
                    <Sidebar 
                        getMenuNamFunc={getMenuNamFunc}
                    />
                    { currentPage === "Projects" &&  
                        <Home 
                            portfolio={imageGallery}
                            skill1={skills}
                        />
                    }
                    
                    { currentPage === "About" &&  
                        <About 
                             image={myphoto[Math.floor(Math.random() * 10)]}
                        />
                    }

                    { currentPage === "Contact" &&  
                        <Contact />
                    }

                </div>
            }
        </div>
    )
}