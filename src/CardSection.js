import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        <div>
            <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
         <Card title="Museum" button="Favourite" />
          </div>
          <div className="col-4">
         <Card title="Drawing" button="Interested" />
         
          </div>
          <div className="col-4">
         <Card title="Painting" button="Click Me" />
           
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default CardSection;