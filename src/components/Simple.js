import React, { useState, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import { Card, Icon, Button } from 'semantic-ui-react'
import ReactTooltip from 'react-tooltip';



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
                                            <span className='date'>Type: <i>{community.community_type}</i></span>
                                            <br />
                                            <div className='row'>
                                                <a href={`https://covey.io/${community.community_url}`}
                                                    target="_blank" rel="noreferrer noopener">
                                                    <img
                                                        data-tip='Applicants'
                                                        className='members-icon'
                                                        src="https://covey.io/images/communities/members.svg"
                                                        alt="Members/Seats-Filled" />
                                                    {community.seats_filled}
                                                </a>
                                                <a href={`https://etherscan.io/address/${community.eth_address}`}
                                                    target="_blank" rel="noreferrer noopener">
                                                    <img
                                                        data-tip="Payout Link"
                                                        className='members-icon'
                                                        src="https://covey.io/images/communities/payout.svg"
                                                        alt="Members/Seats-Filled" />
                                                    {community.monthly_payout}
                                                </a>
                                                <a href={`https://covey.io/${community.community_url}`}
                                                    target="_blank" rel="noreferrer noopener">
                                                    <img
                                                        data-tip="Users Displayed"
                                                        className='members-icon'
                                                        src="https://covey.io/images/communities/data.svg"
                                                        alt="Users-Display" />
                                                </a>
                                                <a href={community.community_link === null ? "/" : community.community_link}
                                                    target="_blank" rel="noreferrer noopener">
                                                    <img
                                                        data-tip="Community Website"
                                                        className='members-icon'
                                                        src="https://covey.io/images/communities/link.svg"
                                                        alt="Community-Website" />
                                                </a>
                                                <a
                                                data-tip={`Join ${community.community_name}`}
                                                    href={`https://covey.io/${community.community_url}`}
                                                    className='btn-group'>
                                                    <Button className="join-btn">
                                                        JOIN
                                                    </Button>
                                                </a>
                                            </div>
                                        </Card.Meta>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                        <ReactTooltip place="top" className='my-toolTip' />
                    </TinderCard>

                )}
                {/* </div> */}
                {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
            </div>
        </>
    )
}

export default Simple
