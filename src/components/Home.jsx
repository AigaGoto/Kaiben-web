import React from "react";
import {Link} from "react-router-dom"

import {Button} from "@mui/material"


const Home = () => {
    

    return (
            <div>
                <Link to="/sugguestFood"><Button>おすすめの食材</Button></Link>
                <Link to="/sugguestReason"><Button>あなたの状態</Button></Link>
                <Link to="/indicator"><Button>うんこの指標</Button></Link>
                <Link to="/registerShit"><Button>うんこを登録する</Button></Link>
                <Link to="/logs"><Button>今までのうんこ</Button></Link>
            </div>
    )
}

export default Home