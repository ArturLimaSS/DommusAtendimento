import CardIndicador from "./CardIndicador"
import etapas from "../data/Etapas";
import chamados from "../data/Chamados";
import { useEffect, useState } from "react";

const Kanban = () => {

    const [quantidadePorEtapa, setQuantidadePorEtapa] = useState([]);

    useEffect(() => {
        const quantidade = etapas.map((etapa) => ({
            etapa: etapa.id,
            quantidade: chamados.filter((chamado) => chamado.status === etapa.id).length
        }))

        setQuantidadePorEtapa(quantidade);
    }, [])

    return (
        <div
            className="flex flex-row gap-6 p-3 overflow-x-auto "
            style={{ maxWidth: "100%" }}
        >
            {etapas.map((etapa) => (
                <div
                    key={etapa.id}
                    className="flex flex-col gap-3 flex-shrink-0 w-80 bg-gray-200 shadow-xl"
                >
                    <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-bottom-graydark bg-white shadow-xl dark:bg-strokedark">
                        <span className="block text-sm font-medium">{etapa.title}</span>
                        <span className="block text-sm font-medium">
                            {quantidadePorEtapa.find((quantidadeEtapa) => quantidadeEtapa.etapa === etapa.id)?.quantidade || 0}
                        </span>
                    </div>
                    <div className="flex gap-3 h-180 flex-col px-2 overflow-y-auto overflow-x-hidden">
                        {chamados
                            .filter((chamado) => chamado.status === etapa.id)
                            .map((filteredChamado, idx) => (
                                <CardIndicador key={idx} props={filteredChamado} />
                            ))}
                    </div>
                    <div>
                    
                </div>
                </div>
                
            ))}
        </div>
    )
}

export default Kanban;

// <div className='flex flex-row gap-6'>
//     <div className="flex flex-col flex-shrink-0 w-80 bg-gray-200 shadow-xl">
//         <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-gray-300 bg-white dark:bg-strokedark">
//             <span className="block text-sm font-medium">A fazer</span>
//             <button className="flex items-center justify-center w-6 h-6">
//                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                 </svg>
//             </button>
//         </div>

//         <div className="flex gap-3 flex-col p-2 w-100 h-full overflow-x-auto">
//             <CardIndicador />
//             <CardIndicador />
//             <CardIndicador />
//             <CardIndicador />
//             <CardIndicador />
//             <CardIndicador />
//             <CardIndicador />
//             <CardIndicador />
//         </div>

//     </div>


// </div>
