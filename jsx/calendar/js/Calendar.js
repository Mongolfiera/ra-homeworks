
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

let daysData = [ {name: 'Понедельник', shortName: 'Пн', className: ''},
                 {name: 'Вторник', shortName: 'Вт', className: ''},
                 {name: 'Среда', shortName: 'Ср', className: ''},
                 {name: 'Четверг', shortName: 'Чт', className: ''},
                 {name: 'Пятница', shortName: 'Пт', className: ''},
                 {name: 'Суббота', shortName: 'Сб', className: 'ui-datepicker-week-end'},
                 {name: 'Воскресенье', shortName: 'Вс', className: 'ui-datepicker-week-end'}
               ];

const Calendar = ({date}) => {
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let firstMonday = new Date(firstDay - (firstDay.getDay() - 1) * 1000 * 3600 * 24);
  let lastSunday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  if (lastSunday.getDay() !== 0) {
    lastSunday.setDate(lastSunday.getDate() + 7 - lastSunday.getDay());
  }
  let d = new Date(firstMonday.getTime());
  let monthDays = [];
  while (d <= lastSunday) {
    let weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(new Date(d.getTime()));
      d.setDate(d.getDate() + 1);
    }
    monthDays.push(weekDays);
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{capitalize(date.toLocaleDateString('ru', {weekday: 'long'}))}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{date.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long'}).replace(/[0-9\s]*/, '')}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
    
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{capitalize(date.toLocaleDateString('ru-RU', {month: 'long'}))}</span>&nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>   
    
      <table className="ui-datepicker-calendar">
       <colgroup>
         { daysData.map(d => { return (<col className={d.className} />) }) }
       </colgroup>
       <thead>
         <tr>
           { daysData.map(day => { return (<th scope='col' title={day.name}>{day.shortName}</th>) }) }
         </tr>
       </thead>
        
       <tbody>
      { monthDays.map(weekDays => {
          return (
            <tr>
              { weekDays.map(d => {
                  let dateClass = '';
                  if (d.getMonth() !== date.getMonth()) {
                    dateClass = 'ui-datepicker-other-month';
                  } else if (d.getDate() === date.getDate()) {
                    dateClass = 'ui-datepicker-today';
                  }
                  return (
                    <td className={dateClass}>{d.getDate()}</td>
                  );
              }) }  
            </tr>
          );
      }) }
      </tbody>
    </table>
    </div>
  );
}
