import React, { useEffect, useState } from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'



const Whatsapp = () => {
    
    const [number, setNumber] = useState('')
    useEffect(() => {
        fetch('http://localhost:1337/whats-app')
        .then(res => res.json())
        .then(data => setNumber(data.Phone))
    }, [])

    return (
        <>
        {
            number ? <WhatsAppWidget phoneNumber={number} /> : null
        }
        
        </>
    )
}

export default Whatsapp
