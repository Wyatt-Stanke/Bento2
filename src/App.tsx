import type { Component } from 'solid-js';

import { Clock } from './components/Clock';
import { DateView } from './components/DateView';
import { Greeting } from './components/Greeting';

const App: Component = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2 sm:pt-4 px-2 sm:px-4">
      <div className="text-center sm:text-left col-span-1">
        <Clock />
        <Greeting />
      </div>
      <div className="text-center sm:text-right col-span-1">
        <DateView />
      </div>
    </div>
  );
};

export default App;
