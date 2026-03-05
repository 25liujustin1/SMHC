'use client';
import { useEffect, useState } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MAX_VISIBLE_EVENTS = 3;

const NAVY    = '#1a2744';
const SAFFRON = '#e07010';
const CREAM   = '#f5f0e8';

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [today] = useState(new Date());
  const [current, setCurrent] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [overflowDay, setOverflowDay] = useState(null);

  useEffect(() => {
    fetch('/api/calendar')
      .then(res => res.json())
      .then(data => setEvents(Array.isArray(data) ? data : []));
  }, []);

  const prevMonth = () => setCurrent(c =>
    c.month === 0 ? { month: 11, year: c.year - 1 } : { month: c.month - 1, year: c.year }
  );
  const nextMonth = () => setCurrent(c =>
    c.month === 11 ? { month: 0, year: c.year + 1 } : { month: c.month + 1, year: c.year }
  );

  const firstDay = new Date(current.year, current.month, 1).getDay();
  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();

  const getEventsForDay = (day) =>
    events.filter(event => {
      const dateStr = event.start?.dateTime || event.start?.date;
      if (!dateStr) return false;
      const d = new Date(dateStr);
      return d.getFullYear() === current.year && d.getMonth() === current.month && d.getDate() === day;
    });

  const isToday = (day) =>
    day === today.getDate() && current.month === today.getMonth() && current.year === today.getFullYear();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const formatTime = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d)) return '';
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const formatFullDate = (event) => {
    const startStr = event.start?.dateTime || event.start?.date;
    const endStr = event.end?.dateTime || event.end?.date;
    if (!startStr) return '';
    const start = new Date(startStr);
    const dayName = start.toLocaleDateString([], { weekday: 'long' });
    const monthDay = start.toLocaleDateString([], { month: 'long', day: 'numeric' });
    if (event.start?.dateTime) {
      return `${dayName}, ${monthDay} · ${formatTime(startStr)}${endStr ? ` – ${formatTime(endStr)}` : ''}`;
    }
    return `${dayName}, ${monthDay}`;
  };

  const getMapsUrl = (location) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  const getAddToCalendarUrl = (event) => {
    const startStr = event.start?.dateTime || event.start?.date;
    const endStr = event.end?.dateTime || event.end?.date;
    const fmt = (str) => str ? new Date(str).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z' : '';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.summary || '',
      dates: `${fmt(startStr)}/${fmt(endStr)}`,
      details: event.description || '',
      location: event.location || '',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: CREAM,
      fontFamily: "'Georgia', serif",
      padding: '2rem',
      paddingTop: '6rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '2rem', position: 'relative', zIndex: 51,
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '400', color: NAVY, letterSpacing: '0.05em', margin: 0 }}>
            Upcoming Events
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={prevMonth} style={navBtnStyle}>&#8592;</button>
            <span style={{ color: NAVY, fontSize: '1.1rem', fontWeight: '500', minWidth: '160px', textAlign: 'center' }}>
              {MONTHS[current.month]} {current.year}
            </span>
            <button onClick={nextMonth} style={navBtnStyle}>&#8594;</button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div style={{
          backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(26,39,68,0.08)', border: '1px solid rgba(26,39,68,0.1)',
        }}>
          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: `3px solid ${SAFFRON}` }}>
            {DAYS.map(d => (
              <div key={d} style={{
                padding: '0.75rem', textAlign: 'center',
                fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em',
                backgroundColor: NAVY, color: CREAM,
              }}>{d}</div>
            ))}
          </div>

          {/* Cells */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {cells.map((day, i) => {
              const dayEvents = day ? getEventsForDay(day) : [];
              const visible = dayEvents.slice(0, MAX_VISIBLE_EVENTS);
              const overflow = dayEvents.length - MAX_VISIBLE_EVENTS;
              return (
                <div key={i} style={{
                  height: '110px', padding: '0.4rem',
                  borderRight: (i + 1) % 7 === 0 ? 'none' : '1px solid rgba(26,39,68,0.07)',
                  borderBottom: i < cells.length - 7 ? '1px solid rgba(26,39,68,0.07)' : 'none',
                  backgroundColor: day ? '#fff' : '#faf8f4',
                  overflow: 'hidden', display: 'flex', flexDirection: 'column',
                }}>
                  {day && (
                    <>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.8rem', flexShrink: 0,
                        fontWeight: isToday(day) ? '700' : '400',
                        color: isToday(day) ? '#fff' : NAVY,
                        backgroundColor: isToday(day) ? NAVY : 'transparent',
                        marginBottom: '0.2rem',
                      }}>{day}</div>

                      {visible.map(event => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          title={event.summary}
                          style={{
                            backgroundColor: SAFFRON,
                            color: '#fff',
                            borderRadius: '3px', padding: '1px 5px',
                            fontSize: '0.68rem', marginBottom: '2px',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                            cursor: 'pointer', flexShrink: 0,
                            transition: 'opacity 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          {event.start?.dateTime && (
                            <span style={{ opacity: 0.75, marginRight: '3px', fontSize: '0.63rem' }}>
                              {formatTime(event.start.dateTime)}
                            </span>
                          )}
                          {event.summary}
                        </div>
                      ))}

                      {overflow > 0 && (
                        <div
                          onClick={() => setOverflowDay({ day, events: dayEvents })}
                          style={{
                            fontSize: '0.68rem', color: NAVY, cursor: 'pointer',
                            paddingLeft: '4px', fontWeight: '600', flexShrink: 0,
                            transition: 'opacity 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          +{overflow} more
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming list */}
        {events.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <p style={{
              fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: SAFFRON, fontWeight: '700', margin: '0 0 1rem',
            }}>Next Up</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {events.slice(0, 5).map(event => {
                const dateStr = event.start?.dateTime || event.start?.date;
                const d = new Date(dateStr);
                return (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      backgroundColor: '#fff', borderRadius: '8px', padding: '1rem 1.25rem',
                      boxShadow: '0 2px 8px rgba(26,39,68,0.06)', border: '1px solid rgba(26,39,68,0.08)',
                      cursor: 'pointer', transition: 'box-shadow 0.15s',
                      borderLeft: `3px solid ${SAFFRON}`,
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,39,68,0.14)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(26,39,68,0.06)'}
                  >
                    <div style={{
                      minWidth: '48px', textAlign: 'center',
                      backgroundColor: SAFFRON, color: '#fff',
                      borderRadius: '8px', padding: '0.4rem',
                    }}>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>{MONTHS[d.getMonth()].slice(0,3).toUpperCase()}</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: 1 }}>{d.getDate()}</div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontWeight: '600', color: NAVY, fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {event.summary}
                      </div>
                      {event.start?.dateTime && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>
                          {formatTime(event.start.dateTime)}
                          {event.location && ` · ${event.location}`}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Overflow day popup */}
      {overflowDay && (
        <div
          onClick={() => setOverflowDay(null)}
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(26,39,68,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '1rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#fff', borderRadius: '16px', padding: '1.5rem',
              maxWidth: '360px', width: '100%',
              boxShadow: '0 20px 60px rgba(26,39,68,0.2)', position: 'relative',
              borderTop: `4px solid ${SAFFRON}`,
            }}
          >
            <button onClick={() => setOverflowDay(null)} style={closeBtnStyle}>✕</button>
            <h3 style={{ margin: '0 0 1rem', color: NAVY, fontSize: '1rem', fontWeight: '600' }}>
              {MONTHS[current.month]} {overflowDay.day}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {overflowDay.events.map(event => (
                <div
                  key={event.id}
                  onClick={() => { setSelectedEvent(event); setOverflowDay(null); }}
                  style={{
                    backgroundColor: SAFFRON, color: '#fff',
                    borderRadius: '6px', padding: '0.5rem 0.75rem',
                    fontSize: '0.85rem', cursor: 'pointer', transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  {event.start?.dateTime && (
                    <span style={{ opacity: 0.8, marginRight: '6px', fontSize: '0.78rem' }}>
                      {formatTime(event.start.dateTime)}
                    </span>
                  )}
                  {event.summary}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Event detail popup */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(26,39,68,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1001, padding: '1rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#fff', borderRadius: '16px', padding: '2rem',
              maxWidth: '420px', width: '100%',
              boxShadow: '0 20px 60px rgba(26,39,68,0.2)', position: 'relative',
              fontFamily: "'Georgia', serif",
              borderTop: `4px solid ${SAFFRON}`,
            }}
          >
            <button onClick={() => setSelectedEvent(null)} style={closeBtnStyle}>✕</button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', paddingRight: '2rem' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: SAFFRON, flexShrink: 0 }} />
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600', color: NAVY }}>
                {selectedEvent.summary}
              </h2>
            </div>

            <p style={{ margin: '0 0 0.75rem', color: '#444', fontSize: '0.9rem' }}>
              📅 {formatFullDate(selectedEvent)}
            </p>

            {selectedEvent.location && (
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.9rem' }}>
                <a
                  href={getMapsUrl(selectedEvent.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: SAFFRON, textDecoration: 'none', borderBottom: `1px dotted ${SAFFRON}`, transition: 'opacity 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  📍 {selectedEvent.location}
                </a>
              </p>
            )}

            {selectedEvent.description && (
              <p style={{
                margin: '0.75rem 0 1.25rem', color: '#555', fontSize: '0.9rem', lineHeight: '1.6',
                borderTop: '1px solid rgba(26,39,68,0.1)', paddingTop: '0.75rem',
              }}>
                {selectedEvent.description}
              </p>
            )}

            <a
              href={getAddToCalendarUrl(selectedEvent)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: selectedEvent.description ? '0' : '1rem',
                backgroundColor: SAFFRON, color: NAVY,
                padding: '0.6rem 1.2rem', borderRadius: '8px',
                fontSize: '0.85rem', textDecoration: 'none', fontWeight: '700',
                fontFamily: "'Georgia', serif", letterSpacing: '0.03em',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              + Add to Google Calendar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

const navBtnStyle = {
  background: 'none', border: '1px solid rgba(26,39,68,0.2)',
  borderRadius: '6px', width: '32px', height: '32px',
  cursor: 'pointer', color: '#1a2744', fontSize: '1rem',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

const closeBtnStyle = {
  position: 'absolute', top: '1rem', right: '1rem',
  background: 'none', border: '2px solid #1a2744',
  borderRadius: '50%', width: '32px', height: '32px',
  cursor: 'pointer', fontSize: '0.9rem', color: '#1a2744',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};