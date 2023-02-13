import React, { useState } from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import "./Datatable.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
interface DatatableProps {
  rowsPerPage: number;
  rows: GridRowsProp;
  columns: GridColDef[];
}

const Datatable: React.FC<DatatableProps> = ({
  rowsPerPage,
  rows,
  columns,
}) => {
  // action menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridCellParams) => {
        return (
          <>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{color: 'white'}}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];
  return (
    <div className="Datatable">
      <DataGrid
        sx={{
          boxShadow: 2,
          bgcolor: "#111315",
          color: "whitesmoke",
          border: 1,
          borderColor: "transparent",
          "& .css-rtrcn9-MuiTablePagination-root": {
            color: "whitesmoke",
          },
        }}
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
