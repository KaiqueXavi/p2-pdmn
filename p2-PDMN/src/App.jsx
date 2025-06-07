import React, { useState } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const App = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('')

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
      
    </div>
  )
}

export default App