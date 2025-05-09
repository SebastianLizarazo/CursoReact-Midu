import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    { 
        userName: 'PacoHdezs',
        name: 'Paco Hernández',
        isFollowing: true
    },
    {
        userName: 'jorge-hernandez',
        name: 'Jorge Hernández',
        isFollowing: false
    }
]

export function App() {
    return(
        <section className="App">  
            {
                users.map(({userName, name, isFollowing}) =>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >   
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}