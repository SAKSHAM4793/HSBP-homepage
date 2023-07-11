import React from 'react'
import Card from "./Card.js"

const CardContent = () => {
        const CardData=[
                { id:'1', background: "red",Image: "https://media.discordapp.net/attachments/1121751668304920610/1123237308645245009/Group_3210.png"},
                { id:'2',  background: "orange",
                        Image: "https://media.discordapp.net/attachments/1121751668304920610/1123237308645245009/Group_3210.png" },
                { id:'3', background: "purple",
                        Image: "https://media.discordapp.net/attachments/1121751668304920610/1121786605708001362/image-card.png?width=433&height=590"},
        ];
        const CardData2 = [
                { id:'4', background: "yellow",
                        Image: "https://media.discordapp.net/attachments/1121751668304920610/1123237252487712882/1198348.png"

                },
                {id:'5', background: "red",
                        Image: "https://media.discordapp.net/attachments/1121751668304920610/1123237496713662554/Layer_0.png"

                },];
        return (<>
                <div className='Card1'>
                        {CardData.map((card, index) => (
                                <Card
                                        key={index}
                                        background={card.background}
                                        Image={card.Image}
                                />
                        ))}
                </div>

                <div className='Card2'>
                {CardData2.map((card, index) => (
                                <Card
                                        key={index}
                                        background={card.background}
                                        Image={card.Image}
                                />
                        ))}
                </div>
        </>
        )
}

export default CardContent;