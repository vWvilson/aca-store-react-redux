class App extends React.Component{
   state={
       shoppingCart:[],
       whatToShow:0,
   }
  //  componentDidMount(){
  //   fetch('https://acastore.herokuapp.com/products')
  //   .then((response)=> {
  //     return response.json();
  //   })
  //   .then((data) =>{
      
  //   });
  //  }
   changeView = (view)=>{
      // this.setState({whatToShow:view});
    this.setState(()=>{
        return {whatToShow:view}
    })
   }
   addItemToCart = (product)=> {
    this.setState((state,props)=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render(){
       let content = null;

       if(this.state.whatToShow ===0){
        content = <ProductList 
            addItemToCart ={this.addItemToCart}
            products={this.state.products} />
       }else{
        content = <ShoppingCart cart={this.state.shoppingCart} />
       }
        return (
        <Layout 
       
        changeView ={this.changeView}
        shoppingCart={this.state.shoppingCart} >
         {content}
        </Layout>
        );
   }
}

App.propTypes = {
    products: PropTypes.string
  };