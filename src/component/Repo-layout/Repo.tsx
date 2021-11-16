const Repo = (data:any) => {
    console.log('data', data)
    const {name, url } = data;
    return (
        <>
            <div className="card">
                <h6> Repo Name</h6>
                <div className="card-display">
                    <a href={url}>Git Repo Url</a> 
                </div> 
            </div>
        </>
    );
}

export default Repo;