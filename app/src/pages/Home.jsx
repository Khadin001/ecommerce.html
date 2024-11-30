import React from "react";
import Slider from "../components/Slider";
import { Badge, Container, Row } from "react-bootstrap";
import { ProductData } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const { topProducts, loading } = ProductData();
  return (
    <div>
      <Slider />

      <Container className="mt-4">
        <h4>
          Our Products <Badge bg="secondary">Top Selling</Badge>
        </h4>

        {loading ? (
          <Loader />
        ) : (
          <Row className="justify-content-center" style={{ gap: "1rem" }}>
            {topProducts && topProducts.length > 0 ? (
              topProducts.map((e) => <ProductCard key={e._id} product={e} />)
            ) : (
              <p>Produits de Marque.</p>
              
            )}
          </Row>
        )}
      <div className=" moss">
         
     
      <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-fluid' variant="top" src='https://m.media-amazon.com/images/I/71It47gdOLL._AC_UF1000,1000_QL80_.jpg' />
      <Card.Body>
        <Card.Title>ZEBRONICS Zeb-yoga 101</Card.Title>
        <Card.Text>
        Casque Bluetooth ZEBRONICS Zeb-yoga 101 (rouge, intra-auriculaire)
          
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
      </Card.Body>
    </Card>

        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-fluid' variant="top" src='https://www.ecofone.fr/media/catalog/product/cache/5971c9a572d4164fe62a52956ba993d5/_/i/_image_2m51f6noi.jpg' />
      <Card.Body>
        <Card.Title>Samsung Galaxy M51</Card.Title>
        <Card.Text>
        Samsung Galaxy M51(Electric Bluetooth 6GB RAM, 128GB storage)
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
      </Card.Body>
    </Card>

        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-fluid' variant="top" src='https://www.dellstore.com/pub/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/5/5/5509_2.jpg' />
      <Card.Body>
        <Card.Title>Inspiron 15 5509</Card.Title>
        <Card.Text>
          New Inspiron 15 5509 Laptop
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
      </Card.Body>
    </Card>

        </div>
        
      </div>
      <div className=" miss">
      <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-fluid' variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUos_2HvdcqLnQ0JeDZ2lXQznJPy0BheCAyg&s' />
      <Card.Body>
        <Card.Title> Shirt </Card.Title>
        <Card.Text>
           Pure Cotton Mens Checked Shirt By NoLogo
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
      </Card.Body>
    </Card>

        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-fluid' variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbr3CxmUd91zivypq_fKw2GzxYazM8kL-AjQ&s' />
      <Card.Body>
        <Card.Title>Logitech M170</Card.Title>
        <Card.Text>
           Logitech M170 Wireless Mouse,Black
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
      </Card.Body>
    </Card>

        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-fluid' variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6jHpdnMHR-BonDgAGfx4wHLCU1W25ih0HA&s' />
      <Card.Body>
        <Card.Title>Iphone XR </Card.Title>
        <Card.Text>
          Apple iphone XR 128 GB, Bluetooth(Includes Earpods and Adapter),
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
      </Card.Body>
    </Card>

        </div>
      </div>
        
      </Container>
    </div>
  );
};

export 
   default Home;
