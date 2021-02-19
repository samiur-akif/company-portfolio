import React, { useEffect, useState } from "react";
import "./CompareTable.css";

const CompareTable = ({ prices, handleCart }) => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/web-hosting-packages`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Compare Our Web Hosting Packages</h1>
      {packages.length ? (
        <table class="table table-bordered package-table">
          <thead>
            <tr>
              <th scope="col" style={{ height: "100px" }}></th>
              {packages.map((item, key) => {
                return (
                  <th
                    scope="col"
                    style={{
                      fontSize: "20px",
                      height: "100px",
                      lineHeight: "24px",
                      color: "#112240",
                    }}
                    key={key}
                  >
                    {item.Package_Name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {packages[0].Features.map((subItem, subKey) => {
              return (
                <tr>
                  <th
                    scope="row"
                    style={{ width: "34%", color: "#112240", height: "50px" }}
                  >
                    {subItem["Feature_Name"]}
                  </th>

                  {packages.map((item, key) => (
                    <td
                      key={key}
                      style={{ width: "22%", color: "#536080", height: "50px" }}
                    >
                      {item.Features[subKey].Quota}
                    </td>
                  ))}
                </tr>
              );
            })}
            <tr>
              <th
                scope="row"
                style={{ width: "34%", color: "#112240", height: "120px" }}
              ></th>
              {prices.map((item, key) => {
                return (
                  <td key={key}>
                    <span style={{ fontSize: "24px", marginTop: '8px' }}>${item.Price} USD</span>
                    <button
                      className="button button-md button-grey button-rounded"
                      style={{ marginTop: '12px'}}
                      onClick={() => handleCart(item)}
                    >
                      Order Now
                    </button>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default CompareTable;
