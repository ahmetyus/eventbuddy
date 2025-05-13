const { useState } = React;

   function App() {
     const [events, setEvents] = useState([]);
     const [eventName, setEventName] = useState('');

     const addEvent = () => {
       if (eventName.trim()) {
         setEvents([...events, { id: Date.now(), name: eventName }]);
         setEventName('');
       }
     };

     return (
       <div className="container">
         <h1>EventBuddy</h1>
         <div>
           <input
             type="text"
             value={eventName}
             onChange={(e) => setEventName(e.target.value)}
             placeholder="Etkinlik adı girin"
           />
           <button onClick={addEvent}>Ekle</button>
         </div>
         <ul>
           {events.map(event => (
             <li key={event.id}>{event.name}</li>
           ))}
         </ul>
       </div>
     );
   }

   ReactDOM.render(<App />, document.getElementById('root'));