const request = async (userName:any) => {
    const baseUrl = 'https://api.github.com/users'
    const result = await fetch(`${baseUrl}/${userName}`)
    const data = await result.json();
    if (!data) return 'No user found'
    return data
}
export default request;