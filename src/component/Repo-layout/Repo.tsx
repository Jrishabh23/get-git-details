const Repo = (data:any) => {
    const {name, url } = data;
    return (
        <>            
            <div className="card">
                <div className="card-display">
                    <a href={url}>{name}</a> 
                </div> 
            </div>            
        </>
    );
}

export default Repo;