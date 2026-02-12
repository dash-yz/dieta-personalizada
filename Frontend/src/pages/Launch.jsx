import { useEffect, useState } from 'react'
import './styles/Launch.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Launch() {
    const navigate = useNavigate()

    const [calorias, setCalorias] = useState(localStorage.getItem('calorias') || 0)
    const [carboidratos, setCarboidratos] = useState(localStorage.getItem('carboidratos') || 0)
    const [proteinas, setProteinas] = useState( localStorage.getItem('proteinas') || 0)
    const [gorduras, setGorduras] = useState(localStorage.getItem('gorduras') || 0)
    const [coleta, setColeta] = useState(localStorage.getItem('coleta') || false)

    useEffect(() => {
        if (coleta) {
            navigate('/dieta')
        }
    }, [coleta, navigate])

    const saveInfo = () => {
        if (calorias > 0 && proteinas > 0 && carboidratos > 0 && gorduras > 0) {
            setColeta(true)
            
            localStorage.setItem('calorias', calorias)
            localStorage.setItem('carboidratos', carboidratos)
            localStorage.setItem('proteinas', proteinas)
            localStorage.setItem('gorduras', gorduras)
            localStorage.setItem('coleta', coleta)

            navigate("/dieta")
        }
    }

    return(
        <>
            <section className='l-body'>
                
                <header className='l-header'>
                    <h1>Monte sua Dieta Personalizada</h1>
                    <h3>Configure suas metas e acompanhe seu consumo diário de nutrientes</h3>
                </header>

                <section className='l-container'>

                    <section className='l-contHeader'>
                        <i class="fa-solid fa-bullseye"></i>
                        <h2>Defina suas Metas Diárias</h2>
                        <i class="fa-light fa-burger"></i>
                    </section>

                    <section className='l-contInputs'>
                        <section className='l-boxInput'>
                            <h6>Calorias (kcal)</h6>
                            <input type="number" name="calorias" id="calorias" onChange={(e) => setCalorias(e.target.value)} />
                        </section>

                        <section className='l-boxInput'>
                            <h6>Proteinas (g)</h6>
                            <input type="number" name="proteinas" id="proteinas" onChange={(e) => setProteinas(e.target.value)} />
                        </section>
                    </section>

                    <section className='l-contInputs'>
                        <section className='l-boxInput'>
                            <h6>Carboidratos (g)</h6>
                            <input type="number" name="carboidratos" id="carboidratos" onChange={(e) => setCarboidratos(e.target.value)} />
                        </section>

                        <section className='l-boxInput'>
                            <h6>Gorduras (g)</h6>
                            <input type="number" name="gorduras" id="gorduras" onChange={(e) => setGorduras(e.target.value)} />
                        </section>
                    </section>

                    <button className='l-button' onClick={saveInfo}>Salvar suas Metas</button>
                </section>

                <Footer />
            </section>
        </>
    )
}