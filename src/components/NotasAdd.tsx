import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { NotaService } from "../services/notaService"
import { useParams} from "react-router-dom"
import Nota from "../models/nota"

export default function NotasAdd() {

    //const threeMonthLater = new Date( new Date().setMonth(new Date().getMonth() + 3) )
    //                    .toISOString().slice(0,16)
    const [form, setForm] = useState<Partial<Nota>>({
        title: '',
        description: '',
        useDate: new Date().toISOString().slice(0, 16),
        location: '',
        checked: true,
        createdAt: new Date().toISOString().slice(0, 16)
    })

    const { id } = useParams()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id) {

            setLoading(true)
            NotaService.getById(Number(id))
                .then(data => setForm({
                    ...data,
                    createdAt: new Date().toISOString().slice(0, 16)
                }))
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false))

        }
    }, [id])

    const handleSubmit = (e: FormEvent) => {
        try {
            setLoading(true)
            setError(null)
            e.preventDefault()
            const formData = {
                ...form,
                useDate: new Date(form.useDate || '').toISOString(),
                createdAt: new Date().toISOString()
            }
            if (id) NotaService.update(Number(id), formData)
            else NotaService.create(formData)
            toast.success('Nota guardada correctamente!')
        } catch (error) {
            toast.error('Error al guardar la nota!')
            setError(error instanceof Error ? error.message : 'Error desconocido')
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value, })
    }
    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = e.target
        setForm({ ...form, [name]: checked, })
    }

    if (loading) return <p>Loading...</p>


    return (
        <div>

            <form onSubmit={handleSubmit} className='flex flex-col justify-center p-8 w-[500px] text-white'>
                {error && <p>{error}</p>}
                <h1 className='text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 transition duration-1000 hover:from-green-500 hover:via-teal-500 hover:to-blue-500 bg-clip-text text-transparent w-fit'>Nueva Nota</h1>

                <div >
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="title" value={form.title} onChange={handleChange} required />
                </div>

                <div >
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea id="message" className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe algo..." name="description" value={form.description} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Localizacion</label>
                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="location" value={form.location} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha </label>
                    <input type="date" id="fecha" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="useDate" value={form.useDate} onChange={handleChange} />
                </div>

                <div>
                    <input type="checkbox" name="active" className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" checked={form.checked} onChange={handleChangeCheckbox} />
                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex felx-col text-left justify-items-start">Activa</label>
                </div>
                <button>Añadir</button>
            </form>


        </div>

    )
}
