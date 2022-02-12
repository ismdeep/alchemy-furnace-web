export const AppData = {
  "app": {
    "name": "Alchemy Furnace",
    "description": "Alchemy Furnace"
  },
  "user": {
    "name": "Alchemy Furnace",
    "avatar": "./assets/tmp/img/avatar.jpg",
    "email": "alchemy-furnace@ismdeep.com"
  },
  "menu": [
    {
      "text": "主导航",
      "group": true,
      "hideInBreadcrumb": true,
      "children": [
        {
          "text": "平台概况",
          "icon": "anticon-bar-chart",
          "link": "/"
        },
        {
          "text": "任务中心",
          "icon": "anticon-appstore",
          "link": "/tasks"
        },
        {
          "text": "管理中心",
          "icon": "anticon-control",
          "children": [
            {
              "text": "系统配置",
              "link": "/operation/system-settings"
            }
          ]
        }
      ]
    }
  ]
}