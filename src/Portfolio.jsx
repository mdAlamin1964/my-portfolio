import React from 'react'
export default function Portfolio({image, imageHight, url, name, lang}) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height: imageHight,
    }
    return (
        <>  
            <a href={url} target='_blank'>
                <div className="portfolio" style={styles}>
                    <div className="overlay">
                        <h2>{name}</h2>
                        <p>{lang}</p>
                    </div> 

                 </div>
            </a>
        
        </>
    )
}