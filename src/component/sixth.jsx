import { useState } from "react"

//create a component that fetches data from an API and displays it..
const Sixth = () => {
    const [data, setData] = useState(null);
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
            'x-rapidapi-host': ''
        }
    };


    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <button onClick={fetchData}>fetch</button>
            {/* {
                data && data.typeMatches.map((type)=>{
                    return (<h1>{type.matchType}</h1>
                    {
                        type.seriesMatches.map((series)=>{
                            
                        })
                    }
                    )
                })
            } */}
        </div>
    )
}

export default Sixth
