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
    const [erro, setErro] = useState('')

    useEffect(() => {
        if (coleta) {
            navigate('/dieta')
        }
    }, [coleta, navigate])

    useEffect(() => {
        if (!calorias || !carboidratos || !proteinas || !gorduras) {
            if (!erro) {
                setErro('Verifique se todos os campos foram preenchidos')
            }
        } else {
            if (erro) {
                setErro('')
            }
        }
    }, [calorias, carboidratos, proteinas, gorduras, erro])

    const saveInfo = () => {
        if (!erro) {
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
                        <i class="fa-solid fa-burger"></i>
                    </section>

                    <section className='l-contInputs'>
                        <section className='l-boxInput'>
                            <h6>Calorias (kcal)</h6>
                            <input type="number" name="calorias" id="calorias" step={100} onChange={(e) => setCalorias(e.target.value)} />
                        </section>

                        <section className='l-boxInput'>
                            <h6>Proteinas (g)</h6>
                            <input type="number" name="proteinas" id="proteinas" step={10} onChange={(e) => setProteinas(e.target.value)} />
                        </section>
                    </section>

                    <section className='l-contInputs'>
                        <section className='l-boxInput'>
                            <h6>Carboidratos (g)</h6>
                            <input type="number" name="carboidratos" id="carboidratos" step={10} onChange={(e) => setCarboidratos(e.target.value)} />
                        </section>

                        <section className='l-boxInput'>
                            <h6>Gorduras (g)</h6>
                            <input type="number" name="gorduras" id="gorduras" step={10} onChange={(e) => setGorduras(e.target.value)} />
                        </section>
                    </section>

                    <button className='l-button' id={ erro ? 'block' : ''} onClick={saveInfo}>Salvar suas Metas</button>
                </section>

                <Footer />
            </section>
        </>
    )
}