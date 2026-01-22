
import './App.css'
import Box from './Box';
import BoxGrid from './BoxGrid';
import Slots from './Slots'
import Toggler from './Toggler';

const colors = ["#a2d2ff", "#bde0fe", "#ffafcc", "#ffc8dd", "#cdb4db"];

function App() {



  return (
    <div>
      <BoxGrid colors={colors} />
      {/* <Box colors={colors} /> */}
      {/* <Toggler /> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒" /> */}
    </div >

  );
}

export default App
