module.exports = {
  packagerConfig: {
    ignore: [
      "token.json",
      "env.json",
      "templates/db.json"
    ],
    icon: 'resources/ic_launcher-web'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
