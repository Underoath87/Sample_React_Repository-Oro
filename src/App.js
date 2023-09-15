import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Image1 from "./images/pic2.jpg";
import Image2 from "./images/pic3.jpg";
import Image3 from "./images/pic5.jpg";
import Image4 from "./images/pic6.jpg";
import Image5 from "./images/pic2.jpg";
import GridItems from "./components/Griditems";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Banner></Banner>
    <div className="bg-dark p-5">
      <div className="container">
        <h1 className="text-warning">Top 5 Animes Of The Week!</h1>
        <div className="row py-3 g-5 justify-content-center">
          <GridItems name="Ghost Fighter " imageFile={Image1} desc="Hold me tight"></GridItems>
          <GridItems name="Teenage Mutant" imageFile={Image2}desc="Time is gold"></GridItems>
          <GridItems name="Demon Slayer" imageFile={Image3}desc="Never outshined the master"></GridItems>
          <GridItems name="Slamdunk" imageFile={Image4}desc="Action is louder than words"></GridItems>
          <GridItems name="Flame of Recca" imageFile={Image1}desc="Everything will fall"></GridItems>
          </div>
      </div>
    </div>
    <Footer></Footer>
      
    </>
  
  );
}

export default App;
