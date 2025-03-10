import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <body className="text-white">
        <div className="flex flex-col items-center justify-center ">
          <section className="flex flex-col items-center justify-center p-10 min-w-6xl relative bg-gradient-to-bl from-blue-500 via-teal-500 to-green-500 transition duration-1000 hover:from-green-500 hover:via-teal-500 hover:to-blue-500 rounded-br-full rounded-tl-full ">
            <h1 className="text-5xl font-bold mb-4">Bienvenido a Nota Tu</h1>
            <p className="text-lg mb-6">Organiza tus ideas y nunca pierdas una nota importante.</p>

            <Link to="/register" className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-200 transition">Empieza ahora </Link>
          </section>
        </div>

        <section className="py-12 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Por qué usar Notas Rápidas?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg relative bg-gradient-to-bl bg-gray-800 transition duration-1000 hover:from-green-500 hover:via-teal-500 hover:to-blue-500">
              <h3 className="text-xl font-semibold mb-2">Fácil de usar</h3>
              <p>Interfaz simple y amigable para que tomes notas sin complicaciones.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg relative bg-gradient-to-bl bg-gray-800 transition duration-1000 hover:from-green-500 hover:via-teal-500 hover:to-blue-500">
              <h3 className="text-xl font-semibold mb-2">Accesible en cualquier lugar</h3>
              <p>Guarda y accede a tus notas desde cualquier dispositivo.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg relative bg-gradient-to-bl bg-gray-800 transition duration-1000 hover:from-green-500 hover:via-teal-500 hover:to-blue-500">
              <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
              <p>Tus notas están protegidas y solo tú puedes acceder a ellas.</p>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}
