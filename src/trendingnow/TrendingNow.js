import React, { useState } from 'react';
import { Button } from 'antd';



const TrendingNow = () => {
    const articleArray = ['How to stop Cyber attacks in efficient way', 'More different ways which cyber attacks can happen'];
    const [openModal, setOpenModal] = useState(false);
    const fetchArticles = () => {
        setOpenModal(true);
    }
    const listItems = articleArray.map(i=>{
        return(
            <li><a href="/trending">{i}</a></li>
        )
    })

    return (
        <>
            <Button onClick={fetchArticles}>Trending Now</Button>
            <div>

                {openModal ?
                <>
                <p>Latest articles now as per the trend. </p>
                    <ul>{listItems}
                    </ul></> : ''
                    }
            </div>
        </>
    )

}


export default TrendingNow;