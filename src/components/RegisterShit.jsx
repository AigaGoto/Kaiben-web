import React, {useState} from "react";
import { useNavigate } from "react-router-dom"

import { ImageList, ImageListItem, Radio, RadioGroup, FormControl ,Button, Box} from "@mui/material";

const RegisterShit = () => {

    const navigate = useNavigate()

    const imageUrls = [
        `${process.env.PUBLIC_URL}/type1.png`,
        `${process.env.PUBLIC_URL}/type2.png`,
        `${process.env.PUBLIC_URL}/type3-2.png`,
        `${process.env.PUBLIC_URL}/type4.png`,
        `${process.env.PUBLIC_URL}/type5.png`,
        `${process.env.PUBLIC_URL}/type6.png`,
    ]
    const colors =[
        "rgb(239,239,239)",
        "rgb(238,222,48)",
        "rgb(236,162,41)",
        "rgb(229,213,200)",
        "rgb(136,85,42)",
        "rgb(73,30,14)",
        "rgb(63,113,54)",
        "rgb(74,74,74)",
        "rgb(197,22,32)"
    ] 

    const colorNames = [
        "マシュマロ",
        "レモン",
        "オレンジ",
        "かつおぶし",
        "カレー",
        "チョコレート",
        "モロヘイヤ",
        "いかすみ",
        "ハバネロ"
    ]

    const shapeNames = [
        "バナナ型",
        "コロコロ型",
        "ミミズ型",
        "ドロドロ型",
        "ビシャビシャ型",
        "水,コロコロの交互型"
    ]

    const [selectedShape, setSelectedShape] = useState(0)
    const [selectedColor, setSelectedColor] = useState(0)

    const shapeChange = (e) => {
        setSelectedShape(e.target.value)
        console.log(e.target.value)
    }

    const colorChange = (e) => {
        setSelectedColor(e.target.value)
        console.log(e.target.value)
    }

    const register = () => {
        navigate('/')
    }

    return (
        <div>
            <div>
                {/* <button className="colorButton" style={{background: "rgb(239,239,239)"}}></button>
                <button className="colorButton" style={{background: "rgb(238,222,48)"}}></button>
                <button className="colorButton" style={{background: "rgb(236,162,41)"}}></button>
                <button className="colorButton" style={{background: "rgb(229,213,200)"}}></button>
                <button className="colorButton" style={{background: "rgb(136,85,42)"}}></button>
                <button className="colorButton" style={{background: "rgb(73,30,14)"}}></button>
                <button className="colorButton" style={{background: "rgb(63,113,54)"}}></button>
                <button className="colorButton" style={{background: "rgb(74,74,74)"}}></button>
                <button className="colorButton" style={{background: "rgb(197,22,32)"}}></button> */}

                <FormControl sx={{height: 1}}>
                    <RadioGroup value={selectedColor} onChange={colorChange} sx={{height: 1}}>
                        <Box cols={9}>
                            {colors.map((color, i) => (
                                <Radio key={color} value={i}
                                icon={<button className="colorButton" style={{background: color}}></button>} 
                                checkedIcon={<button className="selectedColorButton" style={{background: color}}></button>}
                                />
                            ))}
                        </Box>
                    </RadioGroup>
                </FormControl>
            </div>
            
            <p>うんちの色: {colorNames[selectedColor]}</p>

            <div>
                <FormControl sx={{height: 1}}>
                    <RadioGroup value={selectedShape} onChange={shapeChange} sx={{height: 1}}>
                        <ImageList variant='woven' cols={6} gap={8}>
                            {imageUrls.map((imageUrl, i) => (
                                <Radio key={imageUrl} value={i}
                                    icon={
                                        <ImageListItem>
                                        <img
                                            sx={{height: "20px"}}
                                            src={`${imageUrl}`}
                                            srcSet={`${imageUrl}`}
                                            loading='lazy'
                                            alt={imageUrl}
                                        />
                                        </ImageListItem>
                                    }
                                    checkedIcon={
                                        <ImageListItem sx={{border: 4}}>
                                        <img
                                            sx={{height: "20px"}}
                                            src={`${imageUrl}`}
                                            srcSet={`${imageUrl}`}
                                            loading='lazy'
                                            alt={imageUrl}
                                        />
                                        </ImageListItem>
                                    }
                            />
                            ))}
                        </ImageList>
                    </RadioGroup>
                </FormControl>
            </div>

            <p>うんちの形: {shapeNames[selectedShape]}</p>

            <Button onClick={register}>登録</Button>

        </div>
    )
}

export default RegisterShit