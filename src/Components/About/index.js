import Team from"../Team";
import {AboutSection, AboutHeader, Container, HeaderOver, HeaderContent, Title, AboutContent,
    ContentOver, Content, ImgBx, Img, Text, TitleOne, TitleTwo, Desc, Btn, Companies, CmpContainer, CmpContent,
     CmpBx, CmpImg, CmpLink} from "./style.js";
const About = () => {
   return(
      <AboutSection>
         <AboutHeader>
            <HeaderOver>
               <HeaderContent>
                  <Title>About <span>Us</span></Title>
               </HeaderContent>
            </HeaderOver>
         </AboutHeader>
         <AboutContent>
            <ContentOver>
               <Container>
                  <Content>
                     <Text>
                        <TitleOne>Long heritage</TitleOne>
                        <TitleTwo>About our tradition</TitleTwo>
                        <Desc>
                           Quo no rebum homero reprimique, id vix velit recusabo. 
                           Cum laoreet gubergren ne, pri at probo tacimates
                           petentium. No est choro equidem patrioque, in quod.
                           Quo no rebum homero reprimique, id vix velit recusabo. 
                           Cum laoreet gubergren ne, pri at probo tacimates
                           petentium. No est choro equidem patrioque, in quod.
                           Quo no rebum homero reprimique, id vix velit
                        </Desc>
                        <Btn href="#">See Menu</Btn>
                     </Text>
                     <ImgBx>
                        <Img src= "images/aboutt.png" />
                     </ImgBx>
                  </Content>
               </Container>
            </ContentOver>
         </AboutContent>
         <Companies>
            <CmpContainer>
               <CmpContent>
                  <CmpBx>
                     <CmpLink href="#">
                        <CmpImg src= "images/partner_1.jpg" />
                     </CmpLink>
                  </CmpBx>
                  <CmpBx>
                     <CmpLink href="#">
                        <CmpImg src= "images/partner_2.jpg" />
                     </CmpLink>
                  </CmpBx>
                  <CmpBx>
                     <CmpLink href="#">
                        <CmpImg src= "images/partner_3.jpg" />
                     </CmpLink>
                  </CmpBx>
                  <CmpBx>
                     <CmpLink href="#">
                        <CmpImg src= "images/partner_4.jpg" />
                     </CmpLink>
                  </CmpBx>
                  <CmpBx>
                     <CmpLink href="#">
                        <CmpImg src= "images/partner_5.jpg" />
                     </CmpLink>
                  </CmpBx>
                  <CmpBx>
                     <CmpLink href="#">
                        <CmpImg src= "images/partner_6.jpg" />
                     </CmpLink>
                  </CmpBx>
               </CmpContent>
            </CmpContainer>
         </Companies>
         <Team />
      </AboutSection>
   )
}

export default About;