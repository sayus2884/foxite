import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white?: Palette["primary"];
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }

  interface Theme {
    status?: {
      white?: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status?: {
      white?: React.CSSProperties["color"];
    };
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    white: true;
  }
}

export const MuiDrawer = {
  styleOverrides: {
    root: {
      width: "0",
    },
  },
};

export const foxite = {
  palette: {
    primary: {
      main: "#f3522f",
    },
    secondary: {
      main: "#a435d0",
    },
    error: {
      main: "#ff0004",
    },
  },
};

export const themeConfig = createTheme({
  status: {
    white: "#fff",
  },
  palette: {
    white: {
      main: "#fff",
      contrastText: "#fff",
    },
    ...foxite.palette,
  },

  components: {
    MuiDrawer,
  },
});

export default { themeConfig };
