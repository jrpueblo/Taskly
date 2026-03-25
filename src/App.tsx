import './App.css';
import Button from './components/Button';


function App() {
  return (
  <>
    <Button>
      Normal Button
    </Button>

    <Button alt>
      Alternative Button
    </Button>

    <Button inverted>
      Inverted Button
    </Button>

    <Button disabled>
      Disabled Button
    </Button>
    
    
  </>
  )
}

export default App