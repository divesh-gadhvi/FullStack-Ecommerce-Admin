import {
  GridColumnMenuContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import React from "react";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  const theme = useTheme();
  return (
    <div style={{ width: "8rem" }}>
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
      >
        <div style={{ marginBottom: "8px" }}>
          <GridToolbarFilterButton
            sx={{ color: theme.palette.secondary[200] }}
            onClick={hideMenu}
            column={currentColumn}
          />
        </div>
        <div>
          <GridToolbarColumnsButton
            sx={{ color: theme.palette.secondary[200] }}
            onClick={hideMenu}
            column={currentColumn}
          />
        </div>
      </GridColumnMenuContainer>
    </div>
  );
};

export default CustomColumnMenu;
