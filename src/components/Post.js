import React from 'react'
import styled from 'styled-components'

export default function Post() {
  return (
    <PostContainer>
        <Head>
            <UserDetail>
                <Dp src='https://pbs.twimg.com/media/EKiL1EnVUAE916K.jpg' width={'50px'}/>
                <Username>
                    clean_0828
                </Username>
            </UserDetail>
            <svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        </Head>
        <MainContent>
            <Img src='https://pbs.twimg.com/media/FH8VTc4VIAEaJvC?format=jpg&name=large'></Img>
        </MainContent>
        <Details>
            <Actions>
                <LeftAction>
                    <SingleAction><svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></SingleAction>
                    <SingleAction><svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></SingleAction>
                    <SingleAction><svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></SingleAction>
                </LeftAction>
                <RightAction>
                    <SingleAction><svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></SingleAction>
                </RightAction>
            </Actions>
            <Info>
                <Likes>300,547 likes</Likes>
                <Desc>
                    <User>clean_0828</User>
                    <Caption>눈은 언제쯤 오려나🎄</Caption>
                </Desc>
                <ViewCommnet>View all 1,010 comments</ViewCommnet>
                <ExtraInfo>
                    <TimeStamp>2 hour ago </TimeStamp><Translation>See Translation</Translation>
                </ExtraInfo>
            </Info>
        </Details>
            <AddComment>
            <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
            <input placeholder='Add a Comment...'/>
            <button>Post</button>
            </AddComment>
    </PostContainer>
  )
}
const PostContainer = styled.div`
    width: 450px;
    border-radius: 6px;
    margin: 15px 0px;
    border: 1px solid rgba(0,0,0,0.2);
    @media screen and (max-width:900px){
        width:100%;
        margin: 0;
        margin-bottom: 15px;
    }
`
const Img = styled.img`
    width: 100%;
`

const Head = styled.div`
    height: 50px;
    display: flex;
    padding: 30px 20px;
    align-items: center;
    justify-content: space-between;
`
const UserDetail = styled.div`
    display: flex;
    align-items: center;
`
const Dp = styled.img`
    width: 40px;
    margin-right:10px;
    border-radius: 50%;
`
const Username = styled.p`
    font-size: 15px;
`
const MainContent = styled.div``
const Details = styled.div`
    padding: 10px;
`
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
`
const LeftAction = styled.div`
    display: flex;
`
const RightAction = styled.div``
const SingleAction = styled.div`
    margin-right: 10px;
`
const Info = styled.div``
const Likes = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0px;
`
const Desc = styled.div`
    display: flex;
    align-items: center;
`
const User = styled.div`
    font-size: 13px;
    font-weight: 500;
    margin-right: 6px;
`
const Caption = styled.div`
    font-size: 13px;
`
const ViewCommnet = styled.div`
    font-size: 13px;
    /* font-family: sans-serif; */
    opacity: 0.6;
    font-weight: 100;
    margin: 4px 0px;
`
const ExtraInfo = styled.div`
    display: flex;
    align-items: center;
`
const Translation = styled.div`
    font-size: 12px;
    font-weight: 400;
`
const TimeStamp = styled.div`
    opacity: 0.4;
    font-size: 13px;
    margin-right: 5px;
`

const AddComment = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    button{
        background: white;
        outline: none;
        border: none;
        color: blue;
        font-size: 14px;
    }
    input{
        padding: 0px 10px;
        width: 100%;
        outline: none;
        border: none;
        ::placeholder{
            opacity: 0.5;
        }
    }
`