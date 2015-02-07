/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  client: {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: {"docker": "node:0.10"},
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}/client",
    shell: "/bin/bash",
    command: "node_modules/grunt-cli/bin/grunt serve",
    // command: "npm start",
    wait: {"retry": 20, "timeout": 1000},
    mounts: {
      '/azk/#{manifest.dir}/client': path("./client"),
    },
    scalable: {"default": 2},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    envs: {
      // set instances variables
      NODE_ENV: "dev",
    },
  },
  server: {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: {"docker": "node:0.10"},
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}/server",
    shell: "/bin/bash",
    command: "npm start",
    wait: {"retry": 20, "timeout": 1000},
    mounts: {
      '/azk/#{manifest.dir}/server': path("./server"),
    },
    scalable: {"default": 2},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    envs: {
      // set instances variables
      NODE_ENV: "dev",
    },
  },
});



