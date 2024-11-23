import { useState, useEffect } from 'react'
import './Search.css'

export default function Search() {
    const arrayLocations = ["Granada", "Jaén", "Almería"]
    const [exampleLocation, setExampleLocation] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % arrayLocations.length)
        }, 5000)

        return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
    }, [])

    useEffect(() => {
        setExampleLocation(arrayLocations[index])
    }, [index])

    return (
        <section className="searchContainer">
            <input type="search" name="search" id="search" placeholder={exampleLocation} />
        </section>
    )
}
