import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes";
import { ProfilePicture } from "./components";

import * as colorPalette from "./data/colors"

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <BrowserRouter>

      <nav style={{ width: '300px', height: '100%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colorPalette.Violet.color}}>
        <div style={{ position: 'fixed', top: '0', width: '300px', height: '150px', backgroundColor: colorPalette.Mint.color }}>
          <ProfilePicture />
        </div>
        

        <div>reste</div>

      </nav>

      <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
