import { useState } from "react"
import request from "../../Utilities/HttpsRequest"
import Repo from "../Repo-layout/Repo";

const Profile = () => {
    const [search, setSearch] = useState('')
    const [userProfile, setUserProfile] = useState<any>({});
    let repoList: any = '';
    const _getGitProfileData = async () => {
        const result = await request(search)
        if (Object.keys(result).length === 0) return 'No user found'
        setUserProfile(result)
        if (userProfile) {
            repoList = await request(`${search}/repos`)            
        }
    }
    const _repoData = () => {
        return repoList.map((item: any, index: any) => {
            console.log(item)
            return <Repo key={index} name={item.name} />
        })        
    }

    return <>        
        <div className="card-container">
            <div className="formGroup">
                <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)} />
                <button type="submit" onClick={_getGitProfileData}> Search</button>
            </div>
            <div className="card-display">
                <div className="user-details-container">
                    <div className="avatar">
                        <img width="120px" height="120px" src={userProfile?.avatar_url} alt="user-image" />
                    </div>
                    <div className="user-name">
                        <p>{userProfile?.name }</p>
                    </div>
                    <div className="user-details">
                        <a href={userProfile.html_url}>Github Link</a>
                    </div>
                </div>
                <div>
                    {_repoData}
                </div>
            </div>            
        </div>    
    </>

}
export default Profile