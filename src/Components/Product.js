import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
