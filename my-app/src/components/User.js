import React from 'react'
import axios from 'axios'

class User extends React.Component {
    // use state to hold fetched data
    state = {
        user: null
    }

    //CDM will execute only once for the fetch
    componentDidMount() {
        axios.get('https://api.github.com/users/jtvnn')
        .then((res) => {
            // set response to state
            this.setState({
                user: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    render() {
         // deconstruct state
        const { user } = this.state

        if (!this.state.user) 
        return <p>Loading...</p>

        return (
            <div>
                <img
                style={{ width: '140px', borderRadius: '50%'}}
                src={user.avatar_url}
                alt={user.name}/>
                <h3>{user.name}</h3>
                <p>Username: { user.login}</p>
                <p>Followers: { user.followers}</p>
                <p>Following: { user.following}</p>
            </div>
        )
    }

}


export default User;