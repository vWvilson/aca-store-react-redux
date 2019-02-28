function ShoppingCart(props){
    const items =props.cart.map((p,i)=>{
        return <ProductDetail key={i} product={p} />
    });
    return (
      <div>
          {items}
      </div>
    )
}