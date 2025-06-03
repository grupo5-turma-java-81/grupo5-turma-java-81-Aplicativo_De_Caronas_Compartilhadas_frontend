import { GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
  return (
        <>
            <div className="flex justify-center dark:bg-gray-900 bg-gradient-to-r from-blue-1000  to-blue-300 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Javason's Five | Criado em: {2025}
                    </p>
                    <p className='text-lg'>Acesse o repositório do projeto</p>
                    <div className='flex gap-2 relative overflow-hidden py-2 px-4 group'>
                        <a href="https://github.com/grupo5-turma-java-81" target="_blank">
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
              </div>
            </div>
        </>
    )
}
  export default Footer