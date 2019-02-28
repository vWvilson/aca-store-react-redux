function ProductList(props){

    let productDetails = null;
    if(props.products && props.products.length > 0){
        productDetails = props.products.map((p,i)=>{
            return  <ProductDetail 
            showAddButton = {true}
            addToCart={props.addItemToCart}
            key={i} 
            product={p} />
        });
    }else{
        productDetails = "No products available";
    }
    return (
      <div>
          {productDetails}
      </div>
    )
}