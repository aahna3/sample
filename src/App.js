import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import{ store as reduxStore }from '../src/state/store';
import { Sample } from './components/Sample';
import { ErrorBoundaryMessage } from './components/ErrorBoundaryMessage';
import { ErrorBoundary } from 'react-error-boundary';
import MyErrorBoundary from './components/MyErrorBoundary';




function App() {
  return (
    <Provider store={reduxStore}>
    <div className="App">
      hello world
      <Sample/>
      {/* <MyErrorBoundary>
      <ErrorBoundaryMessage message={'1'}/>
      </MyErrorBoundary> */}

    </div>
  
     </Provider>
  );
}
function ErrorFallback({ error }) {
  return (
    <div>
      <h2>An error occurred:</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default App;
