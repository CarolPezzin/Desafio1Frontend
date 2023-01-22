import './App.css';
import Calculator from "./components/Calculator"
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AuthProvider>
          <Calculator />
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
