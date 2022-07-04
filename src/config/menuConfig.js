// 菜单列表

// 引入antd相应的图标
import {
  HomeOutlined,
  ShopOutlined,
  HddOutlined,
  GiftOutlined,
  TeamOutlined,
  UsbOutlined,
  ApartmentOutlined,
  BuildOutlined,
  ForkOutlined,
  SmileOutlined,
  BookOutlined,
} from '@ant-design/icons';



const menuList = [
  {
    label: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: <HomeOutlined />, // 图标名称
    // isPublic: true, // 公开的
  },
  {
    label: '商品',
    key: '/products',
    icon: <ShopOutlined />,
    children: [ // 子菜单列表
      {
        label: '品类管理',
        key: '/category',
        icon: <HddOutlined />
      },
      {
        label: '商品管理',
        key: '/product',
        icon: <GiftOutlined />
      },
    ]
  },

  {
    label: '用户管理',
    key: '/user',
    icon: <TeamOutlined />
  },
  {
    label: '角色管理',
    key: '/role',
    icon: <UsbOutlined />
  },

  {
    label: '图形图表',
    key: '/charts',
    icon: <ApartmentOutlined />,
    children: [
      {
        label: '柱形图',
        key: '/charts/bar',
        icon: <BuildOutlined />
      },
      {
        label: '折线图',
        key: '/charts/line',
        icon: <ForkOutlined />
      },
      {
        label: '饼图',
        key: '/charts/pie',
        icon: <SmileOutlined />
      },
    ]
  },

  {
    label: '订单管理',
    key: '/order',
    icon: <BookOutlined />
  },
]

export default menuList