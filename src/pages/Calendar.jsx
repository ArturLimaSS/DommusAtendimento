import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Calendar = () => {
  const [hoje] = useState(new Date());
  const [mesAtual, setCurrentMonth] = useState(hoje.getMonth());
  const [anoAtual, setCurrentYear] = useState(hoje.getFullYear());

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const showCalendar = (mes, ano) => {
    const primeiroDiaSemanaMes = (new Date(ano, mes, 1)).getDay(); // Dia da semana em que o mês começa
    const diasNoMes = new Date(ano, mes + 1, 0).getDate(); // Número total de dias no mês

    const dias = [];
    let dia = 1;

    for (let semana = 0; semana < 6; semana++) {
      const diasSemana = [];

      for (let indiceDiasSemana = 0; indiceDiasSemana < 7; indiceDiasSemana++) {
        if ((semana === 0 && indiceDiasSemana < primeiroDiaSemanaMes) || dia > diasNoMes) {
          diasSemana.push(<td key={`vazio-${semana}-${indiceDiasSemana}`}>{dia}</td>);
        } else {
          const eHoje = dia === hoje.getDate() && ano === hoje.getFullYear() && mes === hoje.getMonth();

          diasSemana.push(
            <td key={`${ano}-${mes + 1}-${dia}`}
              className={eHoje ? 'font-bold border' : '' + 'hover:bg-strokedark hover:text-white transition-all duration-500 h-20 border p-3'}>
              {dia}
            </td>
          );
          dia++;
        }
      }
      dias.push(<tr key={`semana-${semana}`}>{diasSemana}</tr>);
      if (dia > diasNoMes) {
        break;
      }
    }

    return dias;
  };

  const updateCalendar = () => {
    const calendarDays = showCalendar(mesAtual, anoAtual);
    return calendarDays;
  };

  const next = () => {
    const newYear = (mesAtual === 11) ? anoAtual + 1 : anoAtual;
    const newMonth = (mesAtual + 1) % 12;
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  const previous = () => {
    const newYear = (mesAtual === 0) ? anoAtual - 1 : anoAtual;
    const newMonth = (mesAtual === 0) ? 11 : mesAtual - 1;
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    updateCalendar();
  }, [anoAtual, anoAtual]);

  return (
    <>
      <h3>Calendário</h3>
      <h4 id="monthAndYear">{meses[mesAtual]} {anoAtual}</h4>
      <table className="w-full text-center">
        <thead>
          <tr className=''>
            {daysOfWeek.map(day => (
              <th className='border p-3' key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {showCalendar(mesAtual, anoAtual)}
        </tbody>
      </table>
      <div className="form-inline">
        <button className="btn btn-outline-primary col-sm-6" onClick={previous}>Anterior</button>
        <button className="btn btn-outline-primary col-sm-6" onClick={next}>Próximo</button>
      </div>
    </>
  );
};

export default Calendar;
