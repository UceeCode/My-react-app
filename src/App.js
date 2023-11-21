
import Navbar from './Navbar'
import Home from './Home'
import About from './About'


function MyComponent() {
  return (
    <div className='App'>
      <Navbar />
      <div className="content">
        <Home />
        <About />
      </div>
    </div>
  );
}
export default MyComponent;
