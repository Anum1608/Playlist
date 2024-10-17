import { FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

interface URLInputPageProps{
    setVideoUrlArray:(VideoUrlArray:string[])=>(void);
}

function URLInputPage(props:URLInputPageProps){
//const URLInputPage:React.FC<URLInputPageProps> = ({setVideoUrlArray}) => {

    const [textarea, setTextarea] = useState("");

    // const getDataFromUrl = async (vidurl: string) => {    

        
    //     // let position = vidurl.search(/v=/i);
    //     // setVideoId(vidurl.substring(position));
 
    //     await fetch(`https://noembed.com/embed?dataType=json&url=${vidurl}`)
    //           .then(response => response.json())
    //           .then(data => {
    //             console.log('data found in fetch:', data.title)
    //             setTitle(data.title);
    //             console.log('title stored in hook:', title)
    //     });
    // }

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
       setTextarea(event.target.value)
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        console.log("textarea:")
        console.log(textarea)
        let videoUrlArray = textarea.split(/\r?\n/)
        props.setVideoUrlArray(videoUrlArray);
        console.log("videoUrlArray :")
        console.log(videoUrlArray)
        //useNavigate(); 
        
        // store it in a context hook and navigate to /player path route //look at how it was done in mars mission to send the username to another page
    }

    return (    
       <form onSubmit={handleSubmit}>
            <label>
                <p>Enter Youtube URLs : </p>
                <textarea 
                    rows={20} 
                    cols={50} 
                    placeholder={"https://www.youtube.com/watch?v=s41tJnY7ZbM\nhttps://www.youtube.com/watch?v=uTN29kj7e-w\n..."} 
                    value={textarea} 
                    onChange={handleChange} />
            </label>
            <button type="submit">OK</button>
       </form>
    )
}

export default URLInputPage