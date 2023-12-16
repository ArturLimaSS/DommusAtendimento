import { Link } from "react-router-dom";

const CardIndicador = ({props}) => {
    return (
        <Link target="_blank" to={`/chamados/ticket/${props.id}`} className="w-75 rounded border border-stroke bg-white py-2 px-3 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className={`border-l-2 px-3 ${props.priority_color}`}>
                <div className="py-3">
                    <span>{props.title}</span>
                    <div className="flex justify-between w-full">
                        <p className="text-xs font-bold">{props.id}</p>
                        <span className="text-xs">{props.created_at}</span>
                    </div>
                    <h3 className="text-xl">{props.requester_name}</h3>
                    <p className="text-sm">{props.requester_email}</p>
                    <div className="flex justify-between w-full mb-2">
                    <p className="text-sm">{props.requester_phone}</p>
                        <p className="text-sm font-bold">{props.organization_name}</p>
                    </div>
                    <hr></hr>
                    <span className="text-xs">{props.user_name}</span>
                </div>
            </div>
        </Link>
    );
};

export default CardIndicador;
