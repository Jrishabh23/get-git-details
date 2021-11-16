import { useState } from "react"
import request from "../../Utilities/HttpsRequest"
import Repo from "../Repo-layout/Repo";
import './profile.css'
const Profile = () => {
    const [search, setSearch] = useState('')
    const [userProfile, setUserProfile] = useState<any>({});
    let repoList: any = '';
    
    const _getGitProfileData = async () => {
        if (search) {
            const result = await request(search)
            if (Object.keys(result).length === 0) return 'No user found'
            setUserProfile(result)
        }
    }
    
    const _getRepoList = async () => {
        if (search) {
            repoList = await request(`${search}/repos`) 
        }
        
        console.log('repo',repoList)
        // return repoList.map((item: any, index: any) => {
        //    return <Repo id={index} name={item.name} url={item.git_url} />            
        // })
    }

    return <>
        <div className="contact-form">
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)} className="from-control search-box" />
            <button type="submit" onClick={_getGitProfileData} className="from-control"> Search</button>
        </div>    
        <div className="card">
            <img width="120px" height="120px" src={userProfile?.avatar_url} alt="user-image" className="avatar" />
            <h1>{userProfile?.name }</h1>
            <p className="title">{userProfile?.login }</p>
            <div className="card-display">
                <a href={userProfile.html_url}>Git Hub</a> 
            </div>            
        </div>
        <div className="repo-details">
            <button onClick={_getRepoList}>Get Repo List</button>
        </div>
        <div>{ repoList}</div>
    </>

}
export default Profile