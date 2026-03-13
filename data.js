var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-1",
      "name": "Panorama 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03565747456970492,
          "pitch": 0.2710041103942764,
          "rotation": 0,
          "target": "1-panorama-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-2",
      "name": "Panorama 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3775557088494974,
          "pitch": 0.5968607326390156,
          "rotation": 0,
          "target": "2-panorama-3"
        },
        {
          "yaw": -2.9896856151975797,
          "pitch": 0.36556620035833376,
          "rotation": 0,
          "target": "0-panorama-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama-3",
      "name": "Panorama 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4895641126887647,
          "pitch": 0.5234891885671225,
          "rotation": 0,
          "target": "1-panorama-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
