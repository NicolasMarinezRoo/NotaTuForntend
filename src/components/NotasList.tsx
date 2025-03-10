import { ChangeEvent, useEffect, useState } from 'react'
import nota from '../models/nota'
import { useSearchParams } from 'react-router-dom'
import { NotaService } from '../services/notaService'
import toast from 'react-hot-toast'
import Nota from '../models/nota'

interface View {
    Nota?: Nota
    ver: boolean
}

export default function NotasList() {

    const [Nota, setNota] = useState<nota[]>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [selectedNota, setSelectedNota] = useState<View>({ ver: false })
    //const [titleQuery, setTitleQuery] = useState(null)

    const [queryParams, setQueryParams] = useSearchParams()
    const titleQuery = queryParams.get('title') || ''



    useEffect(() => {
        NotaService.search(titleQuery)
            .then(setNota)
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    }, [titleQuery])

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value
        setQueryParams(newTitle ? { title: newTitle } : {})
    }

    const handleDelete = async (id: number) => {
        if (!window.confirm('¿Estás seguro que quieres borrar esta oferta?')) return

        try {
            await NotaService.delete(id)
            setNota(Nota?.filter(Nota => Nota.id !== id))
            toast.success('Oferta borrada correctamente!')
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Error desconocido')
        }
    }

    return (

        <div className='py-30 '>
            {selectedNota.ver === false && (
                <div >

                    <div className='flex flex-row align-middle items-center'>

                        <label className="block items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar por titulo: </label>
                        <input className="block text-sm p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={titleQuery} onChange={handleSearchChange} placeholder="Titulo" required />

                    </div>


                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {Nota?.length === 0 && <p>No hay ofertas disponibles</p>}
                    <div className='flex flex-wrap'>

                        {Nota?.map(Nota =>
                            <div key={Nota.id}>

                                <div onClick={() => setSelectedNota({ Nota: Nota, ver: true })} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Nota.title}</h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{Nota.description}</p>
                                    <button className="bg-red-700 text-white mt-7 px-6 py-2 rounded-full shadow-lg font-semibold hover:bg-red-500 transition " onClick={() => handleDelete(Nota.id)}>Borrar</button>
                                </div>

                                <br />
                            </div>
                        )}
                    </div>
                </div>
            )}
            {selectedNota.ver === true && (

                <div className="block w-full h-full p-6 text-white border border-gray-500 rounded-lg shadow-sm bg-gray-800">
                    <button className="bg-red-700 text-white px-6 py-2 rounded-full shadow-lg font-semibold hover:bg-gray-200 transition" onClick={() => setSelectedNota({ ver: false })}>Atras</button>
                    <h1 className='text-4xl py-6 text-bold underline'>{selectedNota.Nota?.title}</h1>
                    <div>
                    <div className='py-6'>

                        {selectedNota.Nota?.description}
                    </div>

                        <br />
                        {selectedNota.Nota?.location && (

                            <div>
                                Localización: {selectedNota.Nota?.location}
                                <iframe width="100%" height="300" loading="lazy"
                                    src={`https://www.google.com/maps?q=${selectedNota.Nota?.location}&output=embed`}>
                                </iframe>
                            </div>
                        )}
                    </div>
                </div>
            )}


        </div >
    )
}
