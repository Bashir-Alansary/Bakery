import axios from "axios";
import {RiDeleteBin5Line} from "react-icons/ri";
import { Component } from "react/cjs/react.production.min";
import {CartSection, CartHeader, HeaderOver, HeaderContent, Title, CartContent, ContentOver,
Container, Content, Table, THead, TR, TH, TBody,TD, Img, FirstTR, Num, BtnContent, Code, CodeInput,
 Update, Btn, CartTotal, TotalContent, Text, ImgBx, TotalImg, TotalTitle, TextBx, BxTitle, BxPrice,
  PreceedBtn} from "./style.js";
class Cart extends Component {

   state = {
      products: []
  }

  componentDidMount() {
      axios.get('js/data.json').then(res => {this.setState({products: res.data.cart})})
  }

   render() {
      const {products} = this.state;
      const productsList = products.map((cartItem, index) => {
         return(
            <TR key={cartItem.id}>
               <TD><Img src={cartItem.image} /></TD>
               <TD>{cartItem.name}</TD>
               <TD>{cartItem.price}$</TD>
               <TD><Num type="number" min="0" defaultValue={1}/> </TD>
               <TD>21.99</TD>
               <TD><div className="remove"><RiDeleteBin5Line /></div></TD>
               </TR>
         );
      });

      return(
         <CartSection>
            <CartHeader>
               <HeaderOver>
                  <HeaderContent>
                     <Title>Your <span>Cart</span></Title>
                  </HeaderContent>
               </HeaderOver>
            </CartHeader>
            <CartContent>
               <ContentOver>
                  <Container>
                     <Content>
                       <Table className="table">
                           <THead>
                               <FirstTR>
                               <TH scope="col">Product</TH>
                               <TH scope="col">Descreption</TH>
                               <TH scope="col">Price </TH>
                               <TH scope="col">Quantity</TH>
                               <TH scope="col">Total</TH>
                               <TH scope="col">Remove</TH>
                               </FirstTR>
                           </THead>
                           <TBody>{productsList}</TBody>
                       </Table>
                       <BtnContent>
                          <Code>
                             <CodeInput type="text" placeholder="promo code"/>
                             <Btn>Apply Coupon</Btn>
                          </Code>
                          <Update>
                             <Btn>Update Cart</Btn>
                          </Update>
                       </BtnContent>
                       <CartTotal>
                          <TotalContent>
                             <Text>
                                 <TotalTitle>Cart Total</TotalTitle>
                                 <TextBx>
                                    <BxTitle>SubTotal</BxTitle>
                                    <BxPrice>9.99$</BxPrice>
                                 </TextBx>
                                 <TextBx>
                                    <BxTitle>Delivery Fee</BxTitle>
                                    <BxPrice>9.99$</BxPrice>
                                 </TextBx>
                                 <TextBx>
                                    <BxTitle>Total</BxTitle>
                                    <BxPrice>9.99$</BxPrice>
                                 </TextBx>
                                 <PreceedBtn>Preceed To CheckOut</PreceedBtn>
                             </Text>
                             <ImgBx>
                                 <TotalImg src="images/aboutt.png" />
                             </ImgBx>
                          </TotalContent>
                       </CartTotal>
                     </Content>
                  </Container>
               </ContentOver>
            </CartContent>
         </CartSection>
      )
   }
}

export default Cart;