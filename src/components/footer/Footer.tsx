import { GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
  return (
        <>
            <div className="flex justify-center dark:bg-gray-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Javasons Five | Criado em: {2025}
                    </p>
                    <p className='text-lg'>Acesse o repositório do projeto</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/grupo5-turma-java-81" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
              </div>
            </div>
        </>
    )
}
  export default Footer