import palette from "../palette"
import pallette from "../palette"


export default function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: palette.grey[300]
        },
      },
    },
  };
}
