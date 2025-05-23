import MenuLateral from "../MenuLateral";
import "../pages/login.css";

function Login() {
  return (
    <div>
      <MenuLateral />
      <div className="login-background">
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
          <form>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
            <a>Registrate</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
