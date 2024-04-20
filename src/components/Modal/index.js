import React from "react";
import { context } from "../Context/context";
import './modal.css'

function Modal() {
    let {currentSearch} = React.useState(context);
    return (<section className="modalError">
        <p>The user {currentSearch} doesn't exist</p>
    </section>);
}
export {Modal}