import axios from 'axios'
import striptags from 'striptags'
import React,{ useState, useEffect} from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'


const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('São Paulo')
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const fazerBusca = async () => {
            const {data} = await axios.get('https://api.github.com/search/repositories?q=',{
                params: {
                    q:'nome',
                    appid:'66482c8553c1fe2b6ed8a26c62c7ce0b',
                    units:'metric',
                    srsearch: termoDeBusca
                }
            })
            setResultados(data.q.search)
        }
        if (termoDeBusca && resultados.length >= 3) {
            fazerBusca()
        } else {
            const timeoutID = setTimeout(() => {
                if (termoDeBusca)
                    fazerBusca()
            }, 2000)
            return () => {
                clearTimeout(timeoutID)
            }
        }
    }, [resultados.length, termoDeBusca])

    return (
        <div className='border-bottom border border-1 border-400 p-2 text-center font-bold'>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search'/>
                <InputText 
                    className='border-bottom border border-1 border-400 font-bold'
                    placeholder='Buscar...'
                    onChange={(e) => {setTermoDeBusca(e.target.value)}}
                    value={termoDeBusca} />
            </IconField> 
            {
                resultados.map((resultado) => (
                    <div 
                        key={resultado.id}
                        className='border-bottom border border-1 border-400 p-2 text-center font-bold'>
                            <div>
                                {resultado.title}
                                <span>
                                    <Button 
                                        className='p-button-text p-button-plain'
                                        onClick={() => {
                                            window.open(resultado.html_url, '_blank')
                                        }}/>
                                </span>
                            </div>
                            <div className='p-2'>
                                {striptags (resultado.snippet)}
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Busca