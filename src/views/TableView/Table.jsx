import _ from "lodash";
import React from "react";

const Table = ({ data, fields, title }) => {
  return (
    <div className="container">
      {title && (
        <>
          <h4 className="text-xl font-bold text-slate-900">{title}</h4>
          <hr className=" my-2 border-indigo-300" />
        </>
      )}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>{undefined.hello}</th>
              {fields?.map((field) => (
                <th>{field?.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                {fields.map((field) => (
                  <td>{_.get(item, field.query)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
