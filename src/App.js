import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="headerBanner_container">
      <div className="headerBanner_sec">
        <Header />
        <Banner heading="Lightning fast prototyping" content="Most calendars are designed for teams. Slate is designed for freelancers" mbl_cnt="Most calendars are designed for teams."/>
      </div>
    </div>
  );
}

export default App;
