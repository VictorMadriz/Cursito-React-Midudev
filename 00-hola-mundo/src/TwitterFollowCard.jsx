import { useState } from "react"


export function TwitterFollowCard({ userName = 'Unknown', children}) {
    const [isFollowingState, setIsFollowingState] = useState(true)

    const text = isFollowingState ? 'Seguir' : 'Siguiendo'
    const buttonClassName = isFollowingState ? 'tw-followCard-button' : 'tw-followCard-button is-following'

    const handleClick = () => {
        setIsFollowingState(!isFollowingState)
    }

return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img src={`https://unavatar.io/x/${userName}`} alt="Profile Image" className='tw-followCard-img'/>
                <div className='tw-followCard-div'>
                    <strong>{children}</strong>
                        <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
        </header>

    <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
    </aside>
    </article>
)
}