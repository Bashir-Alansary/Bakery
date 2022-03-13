import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import {ShopSection, ShopHeader, HeaderOver, HeaderContent, Title, ShopContent, ContentOver,
Container, Content} from "./style.js";



class Shop extends Component {
   state = {
      menuItems: axios.get('js/data.json').then(res => {this.setState({products: res.data.products})}),
      activeCategory: "",
      categories: ""
   }

   componentDidMount() {
      
   }

   render() {
      return(
         <ShopSection>
            <ShopHeader>
               <HeaderOver>
                  <HeaderContent>
                     <Title>Shop <span>Now</span></Title>
                  </HeaderContent>
               </HeaderOver>
            </ShopHeader>
            <ShopContent>
               <ContentOver>
                  <Container>
                     <Content>
                       
                     </Content>
                  </Container>
               </ContentOver>
            </ShopContent>
         </ShopSection>
      )
   }
}

export default Shop;