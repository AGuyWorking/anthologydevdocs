/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  //documentationSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  //  documentationSidebar: 

  documentationSidebar: [
    'site-intro',
    // REST APIs
    {
      type: 'category',
      label: 'REST APIs',
      collapsible: true,
      collapsed: true,
      items: ['REST APIs/apis-intro',
      // Learn
      {
        type: 'category',
        label: 'Learn',
        collapsible: true,
        // collapsed: true,
        items: [
          'REST APIs/Learn/learn-intro',
          // Getting Started
          {
            type: 'category',
            label: 'Getting Started',
            collapsible: true,
            // collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'REST APIs/Learn/Getting Started', // Generate sidebar slice from docs path
              },
            ]
          },
          // Admin
          {
            type: 'category',
            label: 'Admin',
            collapsible: true,
            // collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'REST APIs/Learn/Admin', // Generate sidebar slice from docs path
              },
            ]
          },
          // Working with Learn APIs
          {
            type: 'category',
            label: 'Working with Learn APIs',
            collapsible: true,
            collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'REST APIs/Learn/Working with Learn APIs', // Generate sidebar slice from docs path
              },
            ]
          },
          // Examples
          {
            type: 'category',
            label: 'Examples',
            collapsible: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'REST APIs/Learn/Examples', // Generate sidebar slice from path
              },
            ]
          },
          // Advanced
          {
            type: 'category',
            label: 'Advanced',
            collapsible: true,
            // collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'REST APIs/Learn/Advanced', // Generate sidebar slice from docs path
              },
            ]
          },
          // Sandbox
          {
            type: 'category',
            label: 'Sandbox',
            collapsible: true,
            // collapsed: true,
            items: [
              'REST APIs/Learn/Sandbox/rest_apis-learn-sandbox-developer_ami',
            ]
          },
          // Learn App
          {
            type: 'category',
            label: 'Learn App',
            collapsible: true,
            // collapsed: true,
            items: [
              'REST APIs/Learn/Learn App/rest_apis-learn-bbapp-student_launch_schema',
            ]
            },
          ],
        },
        // Ally
        {
          type: 'category',
          label: 'Ally',
          collapsible: true,
          // collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'REST APIs/Ally', // Generate sidebar slice from docs path
            },
          ]
        },
        // Student
        {
          type: 'category',
          label: 'Student',
          collapsible: true,
          // collapsed: true,
          items: [
          'REST APIs/Learn/Learn App/rest_apis-learn-bbapp-student_launch_schema',
          ]
        },
        // Premium APIs
        {
          type: 'category',
          label: 'Premium APIs',
          collapsible: true,
          // collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'REST APIs/Premium APIs', // Generate sidebar slice from docs path
            },
          ]
        },
      ],
    },
    // LTI
    {
      type: 'category',
      label: 'LTI',
      collapsible: true,
      // collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'LTI', // Generate sidebar slice from docs path
        },
       ]
    },
    // Standards
    {
      type: 'category',
      label: 'Standards',
      collapsible: true,
      // collapsed: true,
      items: [
        'Standards/standards-intro',
        {
          type: 'category',
          label: 'Caliper',
          collapsible: true,
          items: [
            // 'Standards/Caliper/caliper-intro',
            {
              type: 'category',
              label: 'Getting Started',
              collapsible: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Standards/Caliper/getting-started', // Generate sidebar slice from docs path
                },
              ]
            },
            {
              type: 'category',
              label: 'Events',
              collapsible: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Standards/Caliper/events', // Generate sidebar slice from docs path
                },

              ]
            }
          ]
        },
      ]
    },
    // Developer Portal
    {
      type: 'category',
      label: 'Developer Portal',
      collapsible: true,
      // collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Developer Portal', // Generate sidebar slice from docs path
        },
       ]
    },
    // Partners
    {
      type: 'category',
      label: 'Partners',
      collapsible: true,
      // collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Partners', // Generate sidebar slice from docs path
        },
      ]
    },
    // Community 
    {
      type: 'category',
      label: 'Community',
      collapsible: true,
      // collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Community', // Generate sidebar slice from docs path
        },
      ]
    },
  ],

}

module.exports = sidebars;
