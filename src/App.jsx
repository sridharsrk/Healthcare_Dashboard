import './App.css'

import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent.jsx';

function App() {

  return (
    <div className="dashboard"> 
      <Header />
      <div className="sideBarAndDashBoardContent">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
