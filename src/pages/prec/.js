import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";

export class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          dn: "Gob",
          f: "wah",
          ct: "2",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 2,
          dn: "Buster",
          f: "wah",
          ct: "5",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 1,
          dn: "Gob",
          f: "wah",
          ct: "2",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 2,
          dn: "Buster",
          f: "wah",
          ct: "5",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        },
        {
          id: 3,
          dn: "George Michael",
          f: "wah",
          ct: "4",
          cr: "acha",
          dsf: 12,
          dsp: 30
        }
      ],
      columns: [
        {
          dataField: "dn",
          text: "Doctor Name",
          sort: true
        },
        {
          dataField: "f",
          text: "Facility",
          sort: true
        },
        {
          dataField: "ct",
          text: "Consultation Type",
          sort: true
        },
        {
          dataField: "cr",
          text: "Consultation Rate",
          sort: true
        },
        {
          dataField: "dsf",
          text: "Doctor Share (Fixed)",
          sort: true,
          style: { backgroundColor: "#e0f7fa" }
        },
        {
          dataField: "dsp",
          text: "Doctor Share(%)",
          sort: true,
          style: { backgroundColor: "#fbe9e7" }
        },
        {
          dataField: "edit",
          text: "Edit",
          editCellStyle: (cell, row, rowIndex, colIndex) => {
            const icon = { style: 'class="glyphicon glyphicon-pencil">' };
            return { icon };
          }
        }
      ]
    };
  }

  render() {
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true
    };

    // const editFormatter = (cell, row, rowIndex, formatExtraData) => {
    //   <Button
    //     icon
    //     labelPosition="left"
    //     onClick={() => deleteMe(rowIndex, rowId)}
    //   >
    //     <Icon name="remove" /> Remove{" "}
    //   </Button>;
    // };
    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
      </span>
    );

    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable
          striped
          hover
          keyField="dn"
          data={this.state.data}
          columns={this.state.columns}
          pagination={paginationFactory({ nextPageText: "Next" })}
          selectRow={selectRow}
          cellEdit={cellEditFactory({ mode: "click" })}
        />
      </div>
    );
  }
}