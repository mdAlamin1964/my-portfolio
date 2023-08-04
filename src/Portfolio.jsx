import React from 'react'
export default function Portfolio({image, imageHight}) {
    const styles = {
        backgroundImage: `url("${image}")`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height: imageHight,
    }
    return (
        <>
            <div className="portfolio" style={styles}>
                
            </div>
        
        </>
    )
}