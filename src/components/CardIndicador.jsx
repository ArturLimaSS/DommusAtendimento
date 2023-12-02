const CardIndicador = ({props}) => {
    return (
        <div className="w-75 rounded border border-stroke bg-white py-2 px-3 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className={`border-l-2 px-3 ${props.priority_color}`}>
                <div className="py-3">
                    <div className="flex justify-between w-full">
                        <p className="text-xs font-bold">{props.id}</p>
                        <span className="text-xs">22/10/2023 15:00</span>
                    </div>
                    <h3 className="text-xl">{props.requester}</h3>
                    <p className="text-sm">{props.requester_email}</p>
                    <div className="flex justify-between w-full mb-2">
                    <p className="text-sm">{props.requester_phone}</p>
                        <p className="text-sm font-bold">{props.organization}</p>
                    </div>
                    <hr></hr>
                    <span className="text-xs">{props.user}</span>
                </div>
            </div>
        </div>
    );
};

export default CardIndicador;
