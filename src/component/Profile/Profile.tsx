import { useState } from "react"
import request from "../../Utilities/HttpsRequest"
import Repo from "../Repo-layout/Repo";
import './profile.css'
const Profile = () => {
    const [search, setSearch] = useState('')
    const [userProfile, setUserProfile] = useState<any>({});
    const [userRepoList, setUserRepoList] = useState<any>([]);
    let repoList: any = '';
    
    const _getGitProfileData = async () => {
        if (search) {
            const result = await request(search)
            if (Object.keys(result).length === 0) return 'No user found'
            setUserProfile(result)
             let list = await request(`${search}/repos`)            
            setUserRepoList(list)
        }

    }
    const _renderUserCard = () => {
        if (!userProfile.id) return null;
        return (
            <><div className="user-git-details">
                    <div className="card user-card">
                        <img width="120px" height="120px" src={userProfile?.avatar_url} alt="user-image" className="avatar" />
                        <h1>{userProfile?.name }</h1>
                        <p className="title">{userProfile?.login }</p>
                        <div className="card-display">
                            <a href={userProfile.html_url} >Git Hub</a> 
                        </div>            
                    </div>
                    <div className="repo-list-container">
                        {userRepoList.map((item: any, index: any) => {
                            return <Repo key={index} name={item['name']} url={item['url']} />
                        })}
                    </div>
                </div>                          
            </>
        )
    }
    return(
        <>
            <div className="contact-form">
                <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)} className="from-control search-box" />
                <button type="submit" onClick={_getGitProfileData} className="from-control"> Search</button>
            </div>
            {_renderUserCard()}        
        </>
    )

}
export default Profile