import NavAdmin from "./NavAdmin";
import Sidebar from "./Sidebar";


export default function Layout({ children }) {
  return (
    <div>
       <div id="page-top">
        <div id="wrapper">
        <NavAdmin />
        <div style={{position:"absolute", marginLeft:"300px", marginTop:50}}>
        {children}
        </div>
          <Sidebar />
        </div>
      </div>
    </div>
    
  );
}