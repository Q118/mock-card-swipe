import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Image } from 'semantic-ui-react'
// import axios from 'axios';



const Cards = () => {
    const [hasError, setErrors] = useState(false);
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5013/communities" )
            .then(res => res.json())
            .then(
                (result) => {
                    setCommunities(result);
                },
                //  important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    setErrors(true);
                }
            )
    }, [])
    console.log(communities);
    return (
        <div>
            {communities.map((community) =>
                <Card>
                    <Image src={community.image_url} size="small" />
                    <Card.Content>
                        <Card.Header>{community.community_name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Seats Filled: {community.seats_filled}</span>
                        </Card.Meta>
                        <Card.Description>
                            {community.community_name}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Join
                            </Button>
                            <Button basic color='red'
                                href={community.community_link === null ? "#" : community.community_link}>
                                Community Page
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            )}
        </div>








    );
};
export default Cards;