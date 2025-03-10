import { ChangeEvent, FormEvent, useState } from 'react'
import { loginUser } from '../services/authService'
import toast from 'react-hot-toast'

export default function Login() {
    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        })

    const [message, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
           /* const respuesta =*/ await loginUser(form.email, form.password)
           toast.success('Sesion iniciada correctamente',
            {
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
            // Redirigir a otra pagina
        } catch (error) {
            toast.error("Fallo al iniciar sesion",
                {
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                }
              );
            const msg = error instanceof Error ? error.message : 'An error occurred'
            setMessage(msg)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { value, name } = e.target

        setForm({ ...form, [name]: value })
    }
    console.log(message)
    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <input type="email" name="email" value={form.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo Electonico" required />
            </div>
            <div className="mb-5">
                <input type="password" name='password' value={form.password} onChange={handleChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Contraseña' required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    )
}
