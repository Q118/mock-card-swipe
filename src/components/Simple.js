import React, { useState, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import { Card, Icon, Button } from 'semantic-ui-react'


function Simple() {
    const [hasError, setErrors] = useState(false);
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5013/communities")
            .then(res => res.json())
            .then(
                (result) => {
                    setCommunities(result);
                },
                //  important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    setErrors(true);
                }
            )
    }, [])
    console.log(communities);

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <>
            <div>
                <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

                {communities.map((community) =>
                    <TinderCard className='swipe' key={community.id}
                        onSwipe={(dir) => swiped(dir, community.community_name)}
                        onCardLeftScreen={() => outOfFrame(community.community_name)}>
                        {/* call back^ executed when the card leaves */}
                        <div className='card'>
                            <Card className='main-card'>
                                <Card.Header>
                                    <h1 className='card-header'>{community.community_name}</h1>
                                </Card.Header>
                                <img
                                    src={community.image_url}
                                    alt='community-avatar'
                                    className='item-img' />
                                <Card.Content>
                                    <Card.Description>
                                        <h4>{community.description}</h4>
                                    </Card.Description>
                                    <div className='lower-card'>
                                    <Card.Meta>
                                        <span className='date'>Type: {community.community_type}</span>
                                        <br />
                                        <span className='date'>Seats Filled: {community.seats_filled}</span>
                                    </Card.Meta>
                                    <div className='buttons btn-group'>
                                        <Button className="join-btn">
                                            JOIN
                                        </Button>
                                        {/* <link to={community.community_link === null ? "#" : community.community_link}> */}

                                        <Button className='link-btn'>
                                            <a href={community.community_link === null ? "#" : community.community_link}>
                                                Community Page
                                            </a>
                                        </Button>
                                        </div>
                                        {/* </link> */}
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                    </TinderCard>
                )}
                {/* </div> */}
                {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
            </div>
        </>
    )
}

export default Simple
