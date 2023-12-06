import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Calendar = () => {
  const [today] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const showCalendar = (month, year) => {
    const firstDay = (new Date(year, month, 1)).getDay(); // Primeiro dia da semana do mês
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Número de dias no mês

    const days = [];
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const weekDays = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || date > daysInMonth) {
          weekDays.push(<td key={`empty-${i}-${j}`}></td>);
        } else {
          const isToday = date === today.getDate() && year === today.getFullYear() && month === today.getMonth();
          weekDays.push(
            <td key={`${year}-${month + 1}-${date}`} 
            className={isToday ? 'font-bold border' : '' + 'hover:bg-strokedark hover:text-white transition-all duration-500 h-20 border p-3'}>
              {date}
            </td>
          );
          date++;
        }
      }
      days.push(<tr key={`week-${i}`}>{weekDays}</tr>);
      if (date > daysInMonth) {
        break;
      }
    }

    return days;
  };

  const updateCalendar = () => {
    const calendarDays = showCalendar(currentMonth, currentYear);
    return calendarDays;
  };

  const next = () => {
    const newYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    const newMonth = (currentMonth + 1) % 12;
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  const previous = () => {
    const newYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    const newMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    updateCalendar();
  }, [currentMonth, currentYear]);

  return (
    <>
      <h3>Calendário</h3>
      <h4 id="monthAndYear">{months[currentMonth]} {currentYear}</h4>
      <table className="w-full text-center">
        <thead>
          <tr className=''>
            {daysOfWeek.map(day => (
              <th className='border p-3' key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {showCalendar(currentMonth, currentYear)}
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
