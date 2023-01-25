(function(win, doc){
    'use strict';

    let calendarEl = document.querySelector('.calendar')
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'prev, next, today',
            center: 'title',
            end: 'dayGridMonth, timeGridWeek, timeGridDay' 
        },
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week : 'Semana',
            day  : 'Dia',
        },
        locale: 'pt-br',
        dateClick: function(info) {
            alert('Clicked on: ' + info.dateStr);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            info.dayEl.style.backgroundColor = 'red';
        },
        events: 'controllers/ControllerEvents.php',
        eventClick: function(info) {
            alert('Event: ' + info.event.title);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('View: ' + info.view.type);
        
            info.el.style.borderColor = 'red';
        }
      });
      calendar.render();

})(window, document);