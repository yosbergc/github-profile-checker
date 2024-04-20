import CleanFolder from '../../img/no-repository.png'
function NoRepositories() {
    return (<section style={{display: 'grid', placeContent: 'center', paddingBottom: '40px'}}>
        <img src={CleanFolder} alt='Clean Folder' style={{marginBottom: '20px'}}></img>
        <h4 style={{color: 'white'}}>This user doesn't have repos :(</h4>
    </section>)
}
export {NoRepositories}