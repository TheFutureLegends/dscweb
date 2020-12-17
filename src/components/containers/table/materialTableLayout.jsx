import React, { useState } from "react";
import MaterialTable from "material-table";
import MaterialTableIcons from "./materialTableIcons";
import {
  isEmptyArray,
  getSubString,
  capitalizeFirstLetter,
} from "../../../utilities/index.js";

import Swal from "sweetalert2";

/**
 *
 * @param {String} title
 * @param {String} description
 *
 * @return {Object} {title, description}
 */
const createData = (id, title, description) => {
  return { id, title, description };
};

/**
 *
 * @param {Array} tableHeader
 * @return {Array} columns
 */
const createColumns = (tableHeader) => {
  let columns = [];

  tableHeader.forEach((value, index) => {
    columns.push({
      title: capitalizeFirstLetter(value),
      field: value.toLowerCase(),
    });
  });

  return columns;
};

const mappingData = (data) => {
  let rows = [];

  if (!isEmptyArray(data)) {
    data.forEach((value, index) => {
      rows.push(
        createData(
          value._id,
          getSubString(value.title, 0, 20),
          getSubString(value.description, 0, 40)
        )
      );
    });
  }

  return rows;
};

const MaterialTableLayout__ = ({
  title,
  data,
  tableHeader,
  module,
  ...props
}) => {
  const [dataRows, setDataRows] = useState(mappingData(data));

  const handleEditPost = (e, id) => {
    e.preventDefault();

    alert("You want to edit " + id);
  };

  const handleDeletePost = (e, item) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = dataRows.filter((i) => i.id !== item.id);

        if (module === "post") {
          props.deletePost(item);
        }

        setDataRows(data);

        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your data is safe :)", "info");
      }
    });
  };

  return (
    <MaterialTable
      icons={MaterialTableIcons}
      style={{ marginTop: "20px" }}
      title={title}
      columns={createColumns(tableHeader)}
      data={dataRows}
      actions={[
        {
          icon: "edit",
          tooltip: "Edit User",
          onClick: (e, rowData) => handleEditPost(e, rowData.id),
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete User",
          onClick: (e, rowData) => handleDeletePost(e, rowData),
        }),
      ]}
      options={{
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#9ab3f5",
          color: "#FFF",
        },
      }}
    />
  );
};

export default MaterialTableLayout__;

// const mapDispatchToProps = { deletePost };

// export default connect(null, mapDispatchToProps)(MaterialTableLayout__);
