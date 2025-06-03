import CardContent from '../components/cardContent/CardContent'

export default function ListCaronas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className='max-w-[700px] w-full '>
        <h1 className="text-4xl font-bold mb-4">Lista de <span className="text-blue-500">Caronas</span></h1>
        <p className="text-lg text-gray-700 mb-6">Aqui você encontrará todas as caronas disponíveis.</p>
      </div>
      <div className='flex flex-col gap-6'>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <CardContent key={index} />
          ))}
      </div>
    </div>
  )
}
