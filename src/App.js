import React, {Suspense, lazy} from 'react';
import './App.css';
const BigComponent = lazy(() => import('./components/BigComponent'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <BigComponent />
      </Suspense>
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
