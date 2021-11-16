const Repo = (data: any) => {
    console.log('dadad', data)
    const {name } = data;
    return (
        <>
            <div className="card-container">
                <div className="card-details">
                    <div>
                        <p className="repo-name">{ name}</p>
                    </div>
                </div>
            </div>            
        </>
    );
}

export default Repo;