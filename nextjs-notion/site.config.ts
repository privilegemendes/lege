import { siteConfig } from './src/lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'legemendes-488679b9f99f4094a8d58928f44980cb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Privilege Portfolio',
  domain: 'legemendes',
  author: 'Privilege Mendes',

  // open graph metadata (optional)
  description: 'Privilege Site',

  // social usernames (optional)
  twitter: 'privilegemendes',
  github: 'privilegemendes',
  linkedin: 'privilegemendes',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    // '/artiry': `/artiry--art-prints-digital-marketplace-722d6c8c9b244847881ca2a4e7bb0b8a`,
    // '/ascii-art-generator': `ascii-art-generator-770244cd7e71401b8ed7a4885452b050`,
  },
  // pageUrlOverrides: null,
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'About-ed4f8075dffe462d8e498e15d33df0b2'
    },
    {
      title: 'Projects',
      pageId: '26c1ec8826fd48dd8f7f523fc214c859?v=d3c013e8abae43499ccab929346f3d0f'
    },
    {
      title: 'Contact',
      pageId: 'Contact-99d705dcf8b64fd6a9cc16e175270c9f'
    }
  ],
  navigationModalLinks: [
    {
      title: 'Blogs',
      pageId: '0bb7856ba4ca43319a86cd46d06bfcea?v=e9f7e96aa38242c383033312794403df'
    },
    {
      title: 'Projects',
      pageId: '26c1ec8826fd48dd8f7f523fc214c859?v=d3c013e8abae43499ccab929346f3d0f'
    },
    {
      title: 'About',
      pageId: 'About-ed4f8075dffe462d8e498e15d33df0b2'
    },
    {
      title: 'Contact',
      pageId: 'Contact-99d705dcf8b64fd6a9cc16e175270c9f'
    }
  ]
})
