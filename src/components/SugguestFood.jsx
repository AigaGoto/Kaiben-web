import React from "react";

import {Button} from "@mui/material"

const SugguestFood = () => {
    
    // let foodText = [
    //     ["","","","","",""],
    //     ["龍郎", "味噌汁", "味噌汁", "ヨーグルト", "バナナ", "納豆"],
    //     ["龍郎", "味噌汁", "味噌汁", "ヨーグルト", "バナナ", "納豆"],
    //     ["龍郎", "味噌汁", "味噌汁", "ヨーグルト", "バナナ", "納豆"],
    //     ["脂少なめ龍郎", "味噌汁", "味噌汁", "低脂肪ヨーグルト", "バナナ", "納豆"],
    //     ["脂少なめ龍郎", "味噌汁", "味噌汁", "低脂肪ヨーグルト", "バナナ", "納豆"],
    //     ["野菜少なめ龍郎", "味噌汁", "味噌汁", "ヨーグルト", "バナナ", "納豆"],
    //     ["龍郎", "味噌汁", "味噌汁", "低脂肪ヨーグルト", "バナナ", "納豆"],
    //     ["","","","","",""]
    // ]

    // let foodImage = {
    //     "龍郎" : "tatsuro",
    //     "脂少なめ龍郎" : "tatsuro",
    //     "野菜少なめ龍郎" :"tatsuro",
    //     "味噌汁" : "miso_soup",
    //     "バナナ" : "banana", 
    //     "ヨーグルト" : "yogurt",
    //     "低脂肪ヨーグルト" : "yogurt", 
    //     "納豆" : "natto",
    //     "" : "byouin"}

    return (
        <div>
            <Button>おすすめの食材</Button>
            <Button>あなたの状態</Button>
            <Button>うんこの指標</Button>
            <Button>うんこを登録する</Button>
            <Button>今までのうんこ</Button>
        </div>
    )
}

export default SugguestFood