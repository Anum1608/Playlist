import YouTube from "react-youtube"

interface PlayerProps {
    videoIdString: string,
}

  const Player:React.FC<PlayerProps> = (props) => {
    return (
        <div>
            <h1> Video Player</h1>
            <div>{props.videoIdString}</div>
            <YouTube
                opts={{
                    playerVars: {
                        playlist: props.videoIdString,
                    },
                }}
                className='youtube'
            />;
        </div>
    )
}

export default Player