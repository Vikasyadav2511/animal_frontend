import React, { useEffect, useState } from "react";
import { baseUrl } from "../util";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button,Card } from "react-bootstrap";
import axios from "axios";

const SingleshopComp = () => {
  const [single, setSingle] = useState({});
  const { single_id } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-shop_product/${single_id}`)
      .then((res) => {
        console.log("guhjkmflhjfkm", res.data.data);
        setSingle(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [single_id]);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="overflow-hidden">
            <div className="mt-32">
              <img
                src={`${baseUrl}/uploads/shopproduct/${single.image}`}
                alt=""
                className="singleimg"
              />
            </div>
          </Col>

          <Col md={6}>
            <div className="text-left mt-32">
              <p>in {single.shop_name}</p> 
              <h1>{single.title}</h1>
              <p className="fs-4 py-2 text-muted">{single.description}</p>

              <p className="mt-24">{single.price}</p>
            </div>
            <div>
              <input
                type="number"
                className="w-10 px-1 py-3 border-slate-950 border-2"
              />

              <Button className="cart">Add to Cart</Button>
            </div>
          </Col>
        </Row>

        <div className="px-5">
          <h5 className="fs-3 mt-24">Description</h5>

          <p className="fs-5 py-2">
            Everyone realizes why a new common language would be desirable: one
            could refuse to pay expensive translators. To achieve this, it would
            be necessary to have uniform grammar, pronunciation and more common
            words. If several languages coalesce, the grammar of the resulting
            language is more simple and regular than that of the individual
            languages. The new common language will be more simple and regular
            than the existing European languages. It will be as simple as
            Occidental; in fact, it will be Occidental. To an English person, it
            will seem like simplified English, as a skeptical Cambridge friend
            of mine told me what Occidental is. The European languages are
            members of the same family. Their separate existence is a myth. For
            science, music, sport, etc. Europe languages are members of the same
            family.
          </p>
        </div>

      </Container>
    </div>
  );
};

export default SingleshopComp;
