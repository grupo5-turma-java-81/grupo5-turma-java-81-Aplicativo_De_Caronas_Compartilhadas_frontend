import carTypeTwo from '../../assets/img/car-type-two.png';
import point from '../../assets/img/point.png';
import perfil from '../../assets/img/perfil.png';

export default function CardContent() {
  return (
    <div className='w-[700px] px-6 py-4 border border-blue-500 rounded-md'>
      <div className="flex justify-between items-center">
        <section className='flex items-center gap-8'>
          <div className='flex items-center gap-4'>
            <img src={carTypeTwo} className='w-[32px] h-[18px]' />
            <div>
              <span className='text-sm text-gray-400'>Partida</span>
              <p className='text-lg font-medium'>Avenida Paulista</p>
            </div>
          </div>
          <span className='w-[50px] h-0 border-t-[3px] border-dashed border-amber-400'></span>
          <div className='flex items-center gap-4'>
            <img src={point} className='w-[24px] h-[26px]' />
            <div>
              <span className='text-sm text-gray-400'>Destino</span>
              <p className='text-lg font-medium'>Praça da Liberdade</p>
            </div>
          </div>
        </section>
        <div className='font-semibold text-center text-white bg-blue-500 rounded-md px-3 py-1.5'>
          <p>Min</p>
          <p>15</p>
        </div>
      </div>
      <section className='flex items-center'>
        <img src={perfil} alt="" className='w-[280px]' />
        <div className='w-full'>
          <div className='flex gap-12'>
            <div>
              <span className='text-sm text-gray-400'>Motorista</span>
              <p className='text-md font-medium'>Anderson</p>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm text-gray-400'>Avaliação</span>
              <span className='text-yellow-500'>★★★★★</span>
            </div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm text-gray-400'>Placa</span>
              <span className='text-lg font-semibold'>3M53AF2</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm text-gray-400'>Cor do veiculo</span>
              <span className='text-md font-medium'>Silver</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm text-gray-400'>Modelo</span>
              <span className='text-md font-medium'>Honda Civic</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
