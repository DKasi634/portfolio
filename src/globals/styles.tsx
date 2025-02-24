import styled, { keyframes } from "styled-components";

const blue = 'rgb(12, 56, 189)'
const blueSecondary = 'rgb(17, 66, 219)'
const blueVariant = 'rgba(12, 56, 189, 0.5)'


export const NavLinksWrapper = styled.ul`
& li{
    height: 100%;
    &:hover{
        transform: translateY(-0.1rem);
    }
}
& a{
    height: 100%;
    position: relative;
    font-size: 0.9rem;
    font-weight: 600;
    &.active{
        color: ${blue};
        &::before{
        content: '';
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: ${blueVariant};
        bottom: -0.5rem;
        left: calc(50% - 0.2rem);
    }
    }
    &:hover{
        color: ${blueSecondary};
        
    }
}
`

const slideInLeft = keyframes`
    from{
        transform: translateX(100rem);
        opacity: 0;
    }to{
        transform: translateX(0rem);
        opacity: 1;
    }
`
export const NavDrawerWrapper = styled.div`
    animation: ${slideInLeft} 400ms ease-in-out forwards;
`