import NavBarDoc from "../components/NavBarDoc";
import Content from "../components/Content"

export default function Doc() {
    return(
        <div className="w-full h-full flex justify-between">
            <NavBarDoc/>
            <Content/>
        </div>
    )
}