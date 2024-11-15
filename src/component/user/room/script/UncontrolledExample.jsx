import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// 맥북 어렵습니다
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ height: '400px', width: '100%', backgroundColor: 'lightgray' }}>안녕 난 첫쨰야</div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ height: '400px', width: '100%', backgroundColor: 'lightgray' }}>안녕 난 둘째야</div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ height: '400px', width: '100%', backgroundColor: 'lightgray' }}>안녕 난 막내야</div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;