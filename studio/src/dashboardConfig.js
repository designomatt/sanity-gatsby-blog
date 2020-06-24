export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef33562b21bbb8545cd2eb3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fcvue31r',
                  apiId: '0653cb87-d02b-4544-863a-994b2fd6bd07'
                },
                {
                  buildHookId: '5ef33562ffbc07d66e91d833',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v7rkh9a9',
                  apiId: '8dfa9acc-ea79-43d9-84d6-c8c9281d80f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/designomatt/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v7rkh9a9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
