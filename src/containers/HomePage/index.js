import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import { PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';
import { CustomTable, HeaderColumn } from '../../components/CustomTable';
import selectors from './selectors';
import * as actions from './actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    const { load } = this.props;
    load();
  }

  render() {
    const { bookList, autors } = this.props;
    return (
      <div>
        <PageHeader>Book list</PageHeader>
        <CustomTable
          tableHeaderClass="bg-blue bg-font-blue"
          tableClass="table table-striped  table-hover"
          trClassName="vertical-middle"
          data={bookList}
          striped
          hover
          columnClassName="vertical-middle"
        >
          <HeaderColumn
            dataField="id"
            width="5%"
            dataSort
            columnClassName="vertical-middle"
            isKey
          >
            #
          </HeaderColumn>
          <HeaderColumn
            dataField="name"
            width="50%"
            dataSort
            columnClassName="vertical-middle"
            dataFormat={(cell, row) => (
              <Link
                key="1"
                to={`/book/${row.id}`}
                className="btn btn-icon-only yellow"
                title="Открыть страницу книги"
              >
                {cell}
              </Link>
            )}
          >
            Название книги
          </HeaderColumn>
          <HeaderColumn
            dataField="autors"
            width="50%"
            dataSort
            columnClassName="vertical-middle"
            dataFormat={cell => (
              <div>
              {
                cell && cell.map((item, i) => (
                  <group key={`group${i}`}>
                    <DropdownButton title={item.name} key={i} id={`split-button-basic-${i}`}>
                      <MenuItem eventKey={`menu_1${i}`}>
                        <Link
                          key={`autor${item.id}`}
                          to={`/autor/${item.id}`}
                          className="btn btn-icon-only yellow"
                          title="Открыть страницу автора"
                        >
                          Перейти на страницу автора
                        </Link>
                      </MenuItem>
                      <MenuItem eventKey={"subLine"} divider />
                      {
                        autors && autors[item.id].books.map((b, key) => (
                          <MenuItem key={`b${b.id}`} eventKey={`menu_${key}`}>
                            <Link
                              key={`book${key}`}
                              to={`/book/${b.id}`}
                              className="btn btn-icon-only yellow"
                              title="Открыть страницу книги"
                            >
                              {b.name}
                            </Link>
                          </MenuItem>
                        ))
                      }
                    </DropdownButton>
                  </group>
                ))
              }
              </div>
            )}
          >
            Автор книги
          </HeaderColumn>
        </CustomTable>
      </div>
    );
  }
}

export default connect(selectors, actions)(HomePage);
