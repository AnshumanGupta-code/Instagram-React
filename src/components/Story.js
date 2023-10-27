import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Story(props) {
  return (
    <StoryContainer>
        <Profile>
            <Pfp src={props.img}/>
        </Profile>
        <Username>
            <h5>{props.username}</h5>
            <p>{props.bio}</p>
        </Username>
    </StoryContainer>
  )
}

const Profile = styled.div`
    width: max-content;
    padding: 2px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(40deg, white 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
`
const Pfp = styled.img`
    width:70px;
    border: 3px solid white;
    border-radius: 50%;
    background: #f09433;     
    @media screen and (max-width:900px){
        flex-direction: column;
        width:60px;

    }
`
const StoryContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    width: max-content;
    @media screen and (max-width:900px){
        flex-direction: column;
        width:70px;

    }
`
const Username = styled.div`
    margin: 0px 20px;
    p{
        color: rgba(0, 0, 0, 0.4);
        @media screen and (max-width:900px){
            display: none;
        }
    }
    h5{
        font-weight: 400;
        @media screen and (max-width:900px){
            font-size: 13px;
            width: 60px;
            margin: 0px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }        
    }
`
