import React from "react";
import PropTypes from "prop-types";

function CarListing(props) {
  const car = props.car

    return (<div className="col-md-4 grid_listing">
            <div className="product-listing-m gray-bg">
              <div className="product-listing-img"> <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
              <img src={car.imgUrl} className="img-responsive" alt="image" /> </a>
                <div className="label_icon">New</div>
                <div className="compare_item">
                  <div className="checkbox">
                    <input type="checkbox" value="" id="compare10" />
                    <label for="compare10">Compare</label>
                  </div>
                </div>
              </div>
              <div className="product-listing-content">
                <h5><a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">{car.make} {car.model}</a></h5>
                <p className="list-price">{car.price}</p>
                <div className="car-location"><span><i className="fa fa-map-marker" aria-hidden="true"></i>{car.city}</span></div>
                <ul className="features_list">
                  <li><i className="fa fa-road" aria-hidden="true"></i>{car.km}</li>
                  <li><i className="fa fa-tachometer" aria-hidden="true"></i>{car.miles}</li>
                  <li><i className="fa fa-calendar" aria-hidden="true"></i>{car.year}</li>
                  <li><i className="fa fa-car" aria-hidden="true"></i>{car.fuel}</li>
                </ul>
              </div>
            </div>
          </div>);
}

CarListing.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarListing;

