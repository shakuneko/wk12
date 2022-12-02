import { useState } from "react";
import { Row, Col, Select, Skeleton } from "antd";


const { Option } = Select;

function ProductDetail({ product, isLoading }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

   return (
      <Skeleton loading={isLoading}>
         <Row gutter={[32, 32]}>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 2 }}>
               <img
                  alt={product.name}
                  className="product-image"
                  src={product.image}
               />
            </Col>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 14, offset: 0 }} >
               <div className="product-info--detail">
                  <h5 className="product-category">
                     {product.category}
                  </h5>
                  <h1 className="product-name product-name--large">
                     {product.name}
                  </h1>
                  <p className="product-description">{product.description_long}</p>
                 
               </div>
            </Col>
         </Row>
      </Skeleton>
   );
}

export default ProductDetail;