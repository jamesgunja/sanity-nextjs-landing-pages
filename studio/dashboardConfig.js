export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ea423bf1a021b0b5a0bb267',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g685oebo',
                  apiId: '5ae3b4fa-6631-4814-9a1c-02175c4f3c9b'
                },
                {
                  buildHookId: '5ea423bf03d6d4a4c6082a88',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-73mabinb',
                  apiId: '184db4f8-301f-4b11-b18e-f1a6052f5252'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesgunja/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-73mabinb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
