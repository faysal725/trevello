
import './App.css';
import MyRouter from "./routers/index";

function App() {
  return (
    <div >
      <title>Ciseco || Shop - eCommerce React template</title>


      {/* MAIN APP */}
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        
        <MyRouter />
      </div>

    </div>
  );
}

export default App;
