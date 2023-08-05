import React from 'react'
export default function Portfolio({image, imageHight, url}) {
    const styles = {
        backgroundImage: `url("${image}")`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height: imageHight,
    }
    return (
        <>  
            <a href={url} target='_blank'>
                <div className="portfolio" style={styles}> </div>
            </a>
        
        </>
    )
}