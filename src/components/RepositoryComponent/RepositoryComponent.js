import './repositorycomponent.css';
import { Badge } from '../Badge';
function RepositoryComponent({repositoryName, repositoryDescription, forks, stars, license, link}) {
    return (<a href={link} target='_blank' rel='noreferrer' className='repository-link'>
    <article className='repository-single'>
        <h3>{repositoryName}</h3>
        <p>{repositoryDescription}</p>
        <footer>
            {license !== null && <Badge type={"License"} text={license.spdx_id}/>}
            <Badge type={"Branch"} text={forks}></Badge>
            <Badge type={"Star"} text={stars}/>
        </footer>
    </article>
    </a>);
}
export {RepositoryComponent}