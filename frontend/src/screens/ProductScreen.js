import './ProductScreen.css'

const ProductScreen = () => {
return <div className = "productscreen">
    <div className = "productscreen_left">
        <div className = "left_image">
            <img src = "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt ="product name" />
        </div>

        <div className = "left_info">
            <p className = "left_name">Product 1</p>
            <p>Price: $500</p>
            <p>Description: Play</p>
        </div>
    </div>
    <div classname = "productscreen_right">
        <div className = "right_info">
            <p>
                Price: <span>$500</span>
            </p>
            <p>
                <button type = "button">Add To Cart</button>
            </p>
        </div>
    </div>
</div>
}

export default ProductScreen