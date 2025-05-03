module.exports = {
    apps: [
      {
        name: 'NuxtGummersbachImbiss',
        port: '4070',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }