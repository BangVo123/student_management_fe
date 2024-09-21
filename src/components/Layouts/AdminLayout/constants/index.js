import { Home, People } from "@mui/icons-material"

export const SIDE_BAR_WIDTH = `${270}px`

export const SIDE_BAR_ITEMS = [
  {
    title: "Trang chủ",
    icon: <Home />
  },
  {
    title: "Quản lý học sinh",
    icon: <People />,
    children: [
      {
        title: "Thêm học sinh", // includes adding protectors
        path: "/admin/students/add"
      },
      {
        title: "Sửa thông tin",
        path: "/admin/students/edit",
      }
    ]
  }
]
