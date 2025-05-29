import React from 'react';

export default function New() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '20px'}}>
            <h1 style={{fontSize: '30px', color: '#6A5ACD'}}>Notícias</h1>

<div >
<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
            <iframe 
                width="45%" 
                height="40%" 
                src="https://www.youtube.com/embed/t03ZfjLKMnc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{marginTop: '20px'}}
            ></iframe>

            <iframe 
                width="45%" 
                height="40%" 
                src="https://www.youtube.com/embed/t03ZfjLKMnc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{marginTop: '20px'}}
            ></iframe>

</div>
<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
            <iframe 
                width="45%" 
                height="40%" 
                src="https://www.youtube.com/embed/t03ZfjLKMnc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{marginTop: '20px'}}
            ></iframe>

            <iframe 
                width="45%" 
                height="40%" 
                src="https://www.youtube.com/embed/t03ZfjLKMnc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{marginTop: '20px'}}
            ></iframe>
            </div>
        </div>
        </div>
    );
}