import React from 'react'
import picture from '../assets/picture.png'
import { Body, Header, Email, LoanBody, Loan, PickBackground, LastDiv, Content, Savings, SideTab, AmountDiv, SideMenu } from './style';

function Index() {
    return (
        <div>
            <Body>
                <Header>
                    <p>Logo region</p>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>Search Transaction</p>
                    </div>
                    <p>Hello</p>
                </Header>
                <Email>
                    <div>
                        <h3>Email verification</h3>
                        <p>it seems like you were interupted while requesting for a loan, Verify email to complete process</p>
                    </div>
                </Email>
                <SideMenu>
                    <li>Loan</li>
                    <li>Savings</li>
                    <li>Analytics</li>
                    <li>Transactions</li>
                </SideMenu>
                <Content>
                    <LoanBody>
                        <Loan>
                            <div>
                                <h1>Loans</h1>
                                <p>You have quick access to our growth loans</p>
                            </div>
                            <div className="menu">
                                <div className="hamburger"></div>
                                <div className="hamburger"></div>
                                <div className="hamburger"></div>
                            </div>
                        </Loan>
                        <PickBackground>
                            <div>
                                <h1>Get Instant offer</h1>
                                <p className="offer">Get Instant Preliminary <br /> Financial offer</p>
                                <button>Apply Now</button>
                                <div className="read">
                                    <div>
                                        <p>Read</p>
                                        <p>FAQ</p>
                                    </div>
                                    <div className="term">
                                        <p>Terms and conditions</p>
                                        <p>Apply</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={picture} alt=""/>
                            </div>
                        </PickBackground>
                        <LastDiv>
                            <div>
                                <h1>ROI Calculator</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
                            </div>
                            <div>
                                <h1>Financial Courses</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatem!</p>
                            </div>
                        </LastDiv>
                    </LoanBody>

                    <Savings>
                        <Loan>
                            <div>
                                <h1>My Savings</h1>
                                <p>Let's see how well you're doing</p>
                            </div>
                            <div className="menu">
                                <div className="hamburger"></div>
                                <div className="hamburger"></div>
                                <div className="hamburger"></div>
                            </div>
                        </Loan>

                        <AmountDiv>
                            <div className="total">
                                <div>
                                    <p>Total Savings</p>
                                    <h1>#860,000.00</h1>
                                    <p className="target">240,000.00 - till target</p>
                                </div>
                            </div>

                            <div className="total-balance">
                                <div className="balance">
                                    <h4>76,000</h4>
                                    <p>outcome in this month</p>
                                    <div className="flex">
                                        <div>
                                            <h4>Balance down by</h4>
                                        </div>
                                        <div>
                                            <p>+2.94%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="balance">
                                    <h4>21,000</h4>
                                    <p>outcome in this month</p>
                                    <div className="flex">
                                        <div>
                                            <h4>Balance down by</h4>
                                        </div>
                                        <div>
                                            <p>+2.94%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AmountDiv>
                    </Savings>
                </Content>
            </Body>


        </div>
    )
}

export default Index
