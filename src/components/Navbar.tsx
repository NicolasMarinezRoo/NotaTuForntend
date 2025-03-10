import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState("/");
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/">
                        <img src="/src/img/logo.png" className="h-15" alt="Logo" />
                    </Link>
                    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://static.vecteezy.com/system/resources/previews/004/274/186/non_2x/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"
                                alt="user photo"
                            />
                        </button>

                        {/* Menú desplegable */}
                        {isOpen && (
                            <div className="absolute top-full right-0 w-30 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-2xl dark:bg-gray-800 ">
                                <ul className="p-1">
                                    <li>

                                        <Link to="/register" className="block m-2 py-4 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Registrate</Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="block m-2 py-4 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Iniciar Sesion</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {[
                                { name: "Inicio", path: "/" },
                                { name: "Perfil", path: "/profile" },
                                { name: "Notas", path: "/notas" },
                                { name: "Lista Usuarios", path: "/userlist" },
                            ].map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setActive(item.path)} // Cambia el enlace activo al hacer clic
                                        className={`block py-2 px-3 rounded-sm md:p-0 ${active === item.path ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;