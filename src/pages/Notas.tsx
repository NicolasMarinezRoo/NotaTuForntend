
import NotasAdd from '../components/NotasAdd'
import NotasList from '../components/NotasList'

export default function Notas() {
   
    return (
        <div className='flex flex-wrap gap-2 justify-center h-full w-full'>
            <div className='flex justify-center h-full w-[35%]'>
                <NotasAdd />
            </div>
                <div className=' justify-center h-[600px] w-[60%] overflow-y-auto text-white'>
                    <NotasList />
                </div>
            
        </div >
    )
}

