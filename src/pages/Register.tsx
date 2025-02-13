import { ChangeEvent, FormEvent, useState } from 'react'
import { registerUser } from '../services/authService'
import toast from 'react-hot-toast'
function Register() {
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      password: '',
      password_repeat: ''
    })

  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (form.password != form.password_repeat) {

        toast.error('Las contraseñas no coinciden',
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        throw new Error('Error al obtener los usuarios')
      }
      const respuesta = {
        name: form.name,
        email: form.email,
        password: form.password
      }
      await registerUser(respuesta)
      toast.success('Sesion iniciada correctamente',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      console.log(message)
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

  function togglePassword() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    if (!passwordInput) return console.log('Esta bacio')
    if (passwordInput.type === "password") {
      passwordInput.type = "text";  // Muestra la contraseña
    } else {
      passwordInput.type = "password";  // Oculta la contraseña
    }
  }
  function togglePasswordRepeat() {
    const passwordInput = document.getElementById("password_repeat") as HTMLInputElement;
    if (!passwordInput) return console.log('Esta bacio')
    if (passwordInput.type === "password") {
      passwordInput.type = "text";  // Muestra la contraseña
    } else {
      passwordInput.type = "password";  // Oculta la contraseña
    }
  }

  return (
    <form className="max-w-sm mx-auto text-left" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Name</label>
        <input name="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" name="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" value={form.email} onChange={handleChange} placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
        <div className='flex flex-row'>
          <input id="password" type="password" name='password' value={form.password} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 border-r-0 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
          <button type="button" onClick={togglePassword} className='bg-gray-700 rounded-r-lg shadow-xs'>👁️</button>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma la contraseña</label>
        <div className='flex flex-row'>
          <input id="password_repeat" type="password" name='password_repeat' value={form.password_repeat} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 border-r-0 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
          <button type="button" onClick={togglePasswordRepeat} className='bg-gray-700 rounded-r-lg shadow-xs'>👁️</button>
        </div>
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
      </div>
      <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
    </form>

  )

}

export default Register