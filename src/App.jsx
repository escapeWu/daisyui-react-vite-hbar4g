import { useState } from 'react';
import './App.css';
import Grid1 from './components/Grid1';
import Grid2 from './components/Grid2';
function App() {
  const [activeGrid, setActiveGrid] = useState(0)
  return (
    <div className="w-full h-full">
      <div className='w-full h-1/5 border-b mb-2'>
        <button className={`btn ${activeGrid === 0 ? 'bg-white' : ''}`} onClick={()=>setActiveGrid(0)}>网格模板区域</button>
        <button className={`btn ${activeGrid === 1 ? 'bg-white' : ''}`} onClick={()=>setActiveGrid(1)}>12列布局</button>  
      </div>
      <div>
        {activeGrid === 0 ? <Grid1 /> : <Grid2 />}
      </div>
      
    </div>
  );
}

export default App;
