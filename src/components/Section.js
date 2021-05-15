import React from 'react'
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom duration={1500}>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    </Fade>

                    {rightBtnText &&
                        <Fade right>
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        </Fade>
                    }
                </ButtonGroup>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    scroll-snap-align: start;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        font-size: 40px;
        font-weight: 100;
        color: black;
        opacity: 0.7;
    }

    p {
        font-size: 14px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 5px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 30px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`