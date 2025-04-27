import QuinesSomos from "./components/QuienesSomos";
import MenuLateral from "./MenuLateral";

function PanelControl(){
    return(
        <div className="panel-control">
            <QuinesSomos />
            <section className="panel-control-section">
            </section>
        </div>
    )
}
export default PanelControl;