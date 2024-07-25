// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
import RestaurantDetails from './Components/Restaurant/RestaurantDetails';
import Footer from './Components/Home/Footer';


function App() {
  return (
  // <ThemeProvider theme={theme}>
  //   <Navbar/>
  //   <CssBaseline/>
  // </ThemeProvider>
  <>
    <Navbar/>
    {/* <Home/> */}
    <RestaurantDetails/>
    <Footer/>
  </>
  );
}

export default App;
