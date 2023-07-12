import img from "./img/spinner.gif"
import './spinner.scss'
const Spinner = () => {
        return (
            <div className={"spinner"}>
                    <img className={"spinner__img"} src={img} alt="loading..."/>
            </div>
        )
}
export default Spinner;