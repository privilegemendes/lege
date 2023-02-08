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
    '/artiry-project': `artiry-9f9bfc8a67c0499bb9c1e654982d3169`,
    '/ascii-art-generator-project': `ascii-art-generator-4943f3c1d7904e4dbe800fd235ad7c31`,
  },
  // pageUrlOverrides: null,
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [

    {
      title: 'Projects',
      pageId: 'Projects-d2dfdbbff4264ea6b26db5b0ba590576'
    },
    {
      title: 'About',
      pageId: 'About-ed4f8075dffe462d8e498e15d33df0b2'
    },
    {
      title: 'Contact',
      pageId: 'Contact-99d705dcf8b64fd6a9cc16e175270c9f'
    }
  ],
  navigationModalLinks: [
    {
      title: 'Projects',
      pageId: 'Projects-d2dfdbbff4264ea6b26db5b0ba590576'
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
