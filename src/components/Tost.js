import React from 'react';
import { Alert } from 'reactstrap';

const Tost = (props) => {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
        Added to cart successfully
        </p>
        <hr />
        <p className="mb-0">
        </p>
      </Alert>
    </div>
  );
};

export default Tost;