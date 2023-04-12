import './App.css';
import logo from '../src/images/logo.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar-container">
      <span className="image-placeholder"><img src={logo} alt="Logo" />;</span>

      <span className="navbar-inner-container">
        <ul>
          <li>How we work</li>
          <li>Blog</li>
          <li>Account</li>
          <li>View Plans</li>
        </ul>
      </span>

    </div>
  )
}

function Section1() {
  return (
    <div className="section1">
      Section1
    </div>
  )
}

function Section2() {
  return (
    <div className="section2">
      Section2
    </div>
  )
}

function Footer() {
  return (
    <div>
      Footer
    </div>
  )
}



export default App;
