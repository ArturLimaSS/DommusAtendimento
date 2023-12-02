import CardFour from '../../components/CardFour';
import CardOne from '../../components/CardOne';
import CardThree from '../../components/CardThree';
import CardTwo from '../../components/CardTwo';
import ChatCard from '../../components/ChatCard.js';
import MapOne from '../../components/MapOne';
import TableOne from '../../components/TableOne';
import CardIndicador from '../../components/CardIndicador.jsx';
import Kanban from '../../components/Kanban.jsx';

const Inicio = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Inicio;
