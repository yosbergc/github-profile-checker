import './repositorycomponent.css';
import { Badge } from '../Badge';
function RepositoryComponent({repositoryName, repositoryDescription, forks, stars, license}) {
    return (<article>
        <h3>{repositoryName}</h3>
        <p>{repositoryDescription}</p>
        <footer>
            {license !== null && <Badge type={"License"} text={license.spdx_id}/>}
            <Badge type={"Branch"} text={forks}></Badge>
            <Badge type={"Star"} text={stars}/>
        </footer>
    </article>);
}
export {RepositoryComponent}