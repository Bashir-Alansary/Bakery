import { Component } from 'react';
import axios from 'axios';
import{AiOutlineInfoCircle, AiOutlineCheck} from "react-icons/ai";
import {ProductsSection, ProductsTittle, ProductsContent, ProductsBox, BoxInfo, Info, InfoSpan, ImgBox, Image,
     TextBox, Top, Center, CenterPrice, CenterWeight,  Bottom , BottomTittle, BottomAdd, ViewAll, ViewAllBtn} from './style';
class Products extends Component {
    state = {
        products: [],
        addBtnContent: 'Add'
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({products: res.data.products})})
    }

    handleAddBtn = () => {
        this.setState({
            addBtnContent: <AiOutlineCheck />
        })
    }

    render() {
        const {products} = this.state;
        const productsList = products.map((productItem, index) => {
            return(
                <ProductsBox key={productItem.id}>
                    <BoxInfo className='info'>
                        <Info><InfoSpan>Ingredaints: </InfoSpan> {productItem.info}</Info>
                    </BoxInfo>
                    <ImgBox>
                        <Image src={productItem.image}/>
                    </ImgBox>
                    <TextBox>
                        <Top>
                            <AiOutlineInfoCircle />
                        </Top>
                        <Center>
                            <CenterPrice>{productItem.price}</CenterPrice>
                            <CenterWeight>{productItem.weight}</CenterWeight>
                        </Center>
                        <Bottom>
                            <BottomTittle>{productItem.title}</BottomTittle>
                            <BottomAdd onClick={this.handleAddBtn}>{this.state.addBtnContent}</BottomAdd>
                        </Bottom>
                    </TextBox>
                    </ProductsBox>
            )
        })
        return(
            <ProductsSection>
                <ProductsTittle>Customers<br/> Favourites</ProductsTittle>
               <ProductsContent>
                    {productsList}
               </ProductsContent>
               <ViewAll>
                   <ViewAllBtn href="#">View All</ViewAllBtn>
               </ViewAll>
            </ProductsSection>
        )
    }
}

export default Products;