import styled from 'styled-components'

export const Body = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Header = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
    justify-content: space-between;

    div {
        display: flex;
        width: auto;
        border: 1.5px rgba(0,0,0,0.1) solid;
        justify-content: space-between;
        border-radius: 5px;
        padding: 0 15px;
        margin-bottom: 30px;
    }

    div input {
        margin-top: 21px;
        margin-right: 5px;
    }
`

export const SideMenu = styled.div`
    position: absolute;
    top: 120px;
    /* border: 1px solid green; */

    li {
        list-style-type: none;
        padding: 18px;
        font-size: 22px;
        margin-left: 20px;
        font-weight: 550;
    }
`

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    background: white;
    box-shadow: 0px 0px 30px #ccc;
    margin-left: 12em;
    margin-bottom: 1.5em;
    /* margin:auto; */
    width: 50%;

    div {
        padding-left: 20%;
    }

    div p {
        font-size: 12px;
    }

`

export const Content = styled.div`
    display: flex;
    width: 100%;
`

export const Savings = styled.div`
    background: rgba(0,0,0,0.1);    
    margin-top: 10px;
    width: 40%;
    padding: 0.3em 1.5em;

    .total {
        width: 60%;
    }

    .target {
        background: #fff;
        width: 60%;
        padding: 0.3em;
    }

    .total div{
        background: #f9d0ea;
        padding: 0.7em;
        color: #d0087a;
    }

    .total-balance{
        padding-left: 2em;
        width: 40%
    }
`

export const SideTab = styled.div`
    display: flex;
    justify-content: space-around;
    width: auto;
    margin-bottom: 3em;

    .menu {
        margin: auto;
        /* margin-right: 0px; */
    }

    .hamburger{
        width: 25px;
        margin-top: 5px;
        height: 2px;
        background: black;
    }
`

export const AmountDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;

    .balance {
        background: white;
        border-radius: 2%;
        width: 100%;
        padding: 0.7em;
        margin-bottom: 2em;
    }

    .balance .flex {
        display: flex;
    }
    
    .flex {
        margin-top: 1em;
    }

    .balance .flex div {
        width: 50%;
    }

    .balance p {
        margin: auto;
    }

    .balance h4 {
        margin-top: 0;
        margin-bottom: 0;
    }
`

export const LoanBody = styled.div`
    background: rgba(0,0,0,0.1);
    width: 60%;
    margin: 10px 1em 0 12em;
    padding: 25px;
`

export const Loan = styled.div`
    display: flex;
    justify-content: space-between;


    .menu {
        margin: auto;
        margin-right: 0px;
    }

    .hamburger{
        width: 25px;
        margin-top: 5px;
        height: 4px;
        border-radius: 5px;
        background: black;
        border: none;
    }
`

export const PickBackground = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: space-between;
    background: linear-gradient(to right, #d0087a, white);
    border-radius: 10px;
    color: white;
    padding: 5px 35px;
    height: auto;

    div {
        width: 100%;
        /* border: black solid 2px; */
    }

    div > button {
        background: white;
        border: none;
        border-radius: 2px;
        color: #d0087a;
        /* margin: auto; */
        font-weight: bold;
        margin-top: 15px;
        padding: 8px 20px;
    }

    div >h1 {
        font-weight: lighter;
    }

    div .offer {
        font-size: 20px;
        text-align: start
    }

    div .read {
        margin-top: 40px;
        margin-bottom: 0;
        display: flex;
        width: 90%;
        /* flex-direction: row; */
        justify-content: space-around;
        /* flex-wrap: wrap; */
    }

    div .read .term p{
        text-align: start;
        /* border: red 1px solid; */
        margin-left: -100px;
    }

    div img {
        width: 70%;
        /* border: black solid 1px; */
        margin-left: 40px;
        text-align: end;
        margin-top: -90px;
    }
`

export const LastDiv = styled.div`
    display: flex;
    div {
        background: white;
        width: 50%;
        padding: 20px;
        margin: 10px;
    }
`

