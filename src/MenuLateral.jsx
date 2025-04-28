import "./CSS/MenuLateral.css";
import logo from './assets/logo.jpg'
function MenuLateral() {
  return (
    <aside className="panel-control-aside">
      <div>
        <img src={logo} alt="" />
        <h1>Destino ideal</h1>
      </div>
      <nav>
        <div className="botones">
          <button>Inicio de seccion</button>
        </div>
        <div className="botones">
          <button>Destinos</button>
        </div>
        <div className="botones">
          <button>Contactanos</button>
        </div>
      </nav>
    </aside>
  )
}
export default MenuLateral