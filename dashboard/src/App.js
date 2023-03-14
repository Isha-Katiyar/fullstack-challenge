import './App.css';
import DetailForm from './Pages/DetailForm';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Pages/Dashboard';
import ListDashboard from './Pages/ListDashboard';
export default function App() {
  return (
    <div className="App">
      <div className='Container'>
        <DetailForm ></DetailForm>
      </div>
      <div className='DAshboard'>

        {/* <Dashboard></Dashboard> */}
      </div>
      <div className='ListDashboard'>
        <ListDashboard></ListDashboard>
      </div>

    </div>
  );
}

// export default App;
