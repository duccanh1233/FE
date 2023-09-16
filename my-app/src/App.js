import logo from './logo.svg';
import './App.css';
import Header from './Hearder/Header';
import Content from'./Content/Content'
import Footer from'./Footer/Footer'
function App() {
  return (
    <>
   <div className="Total">
   <div className="AppHeader">
   <Header/>
   </div>
   <div className="AppContent">
   <Content/>
   </div>
   <div className="AppFooter">
   <Footer/>
   </div>
   </div>
   </>
  );
}

export default App;
