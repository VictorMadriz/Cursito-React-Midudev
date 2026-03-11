export function TwitterFollowCard({ userName = 'Unknown', children, isFollowing }) {
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
        <button className='tw-followCard-button'>
            Seguir
        </button>
    </aside>
    </article>
)
}