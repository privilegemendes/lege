import styled from 'styled-components'
import Image from 'next/image'
import twitterLogo from '../../assets/twitter.svg'
import gitHubLogo from '../../assets/github.svg'

const FooterContainer = styled.footer`

`;

const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: relative;
    overflow: hidden;
    padding-top: 30px;
    font-size: .85rem;
    text-align: center;
    '& :before': {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--color-text-primary);
        transform-origin: 50% 100%;
        transition: clip-path 1s,transform 1s cubic-bezier(0.2,1,0.8,1);
    },
  `;

const SocialLinks = styled.div`

`;

const SocialLink = styled.a`

`;
export const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <p>legemendes.com © Privilege Mendes 2023</p>
                <SocialLinks>
                    <SocialLink href="https://www.twitter.com/privilegemendes/"
                       id="twitter"  rel="noreferrer">
                        <Image src={twitterLogo} alt="Twitter"/>
                    </SocialLink>
                    <SocialLink href="https://www.github.com/privilegemendes/"
                       id="github"  rel="noreferrer">
                        <Image src={gitHubLogo} alt="GitHub"/>
                    </SocialLink>
                </SocialLinks>
            </Wrapper>
        </FooterContainer>
    );
}