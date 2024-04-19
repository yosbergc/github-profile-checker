import License from '../../svg/Chield_alt.svg';
import Branch from '../../svg/Nesting.svg';
import Star from '../../svg/Star.svg'
function Badge({type, text}) {
    let img = {
        License,
        Branch,
        Star
    }
    return (<section className='badge'>
        <img src={img[type]} alt={type}></img>
        <p>{text}</p>
    </section>);
}
export {Badge}