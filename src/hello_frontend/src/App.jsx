import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';

function App() {
  const [heartRate, setHeartRate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [oxygenLevel, setOxygenLevel] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const patientId = event.target.elements.patientId.value;
    
    hello_backend.getPatientData(patientId).then((data) => {
      setHeartRate(data.heartRate);
      setTemperature(data.temperature);
      setOxygenLevel(data.oxygenLevel);
      setStatus(data.status);
    });
  }

  return (
    <div className="monitoring-system">
      <h1 className='center'>Chronic Disease Detection</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Patient ID:</label>
        <input id="patientId" type="text" required />
        <button type="submit">Get Data</button>
      </form>
      <div className="patient-data">
        <h2>Patient Health Data</h2>
        <p>Heart Rate: {heartRate}</p>
        <p>Temperature: {temperature}</p>
        <p>Oxygen Level: {oxygenLevel}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default App;
