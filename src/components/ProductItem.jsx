import "./ProductItem.css";
function ProductItem({ product }) {
    return (
        <div className="product-item">
            <div className="product-image">
                <img src="https://beypazarimadensuyu.com.tr/Content/BMS/images/urunler_yeni_sise/sade.png" alt="Product" />
            </div>
            <div className="product-info">
                <h2>Soda</h2>
                <span>0.10$</span>
            </div>
        </div>
    );
}
export default ProductItem; 