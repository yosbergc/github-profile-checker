import './shortcomponent.css'

function ShortComponent({name, property}) {
    return (<section className='summary-container'>
        <p className='nameSummary'>{name}</p>
        <div className="vr"></div>
        <p>{property}</p>
    </section>)
}
export {ShortComponent}