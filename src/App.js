
import Navbar from './Navbar'
import Home from './Home'


function MyComponent() {
  return (
    <div className='App'>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default MyComponent;
