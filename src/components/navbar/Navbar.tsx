import Logo from "../../assets/img/Logo.png";

function Navbar() {
  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900 bg-gradient-to-r from-blue-1000  to-blue-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:5173/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Logo do App de Caronas" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-280" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-1 mt-4 border md:flex-row md:space-x-9 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="relative overflow-hidden py-2 px-4 group">
              <a href="/motoristas" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Motoristas</a>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative overflow-hidden py-2 px-4 group">
              <a href="/caronas" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Caronas</a>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>        </li>


          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar