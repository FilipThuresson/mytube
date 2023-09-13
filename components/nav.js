import {faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Nav({open}) {

    if (open) {
        return (
            <div className="px-4 py-2">
                open with text
            </div>
        )
    } else {
        return (
            <div className="px-4 py-2">
                <FontAwesomeIcon icon={faHome} color={"#ededed"} size={"xl"}/>
            </div>
        )
    }
}