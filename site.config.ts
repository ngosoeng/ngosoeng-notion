import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6cbbdaa9b8884ec49876a45e568da0ff',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'NgoSoeng 我想',
  domain: 'ngosoeng.com',
  author: 'NgoSoeng',

  // open graph metadata (optional)
  description: '記錄每個21克的故事',

  // social usernames (optional)
  // (hide) twitter: '',
  // (hide) github: '',
  // (hide) linkedin: '',
  
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
    '/about-page': '46cb45f03b2e491da1a170c9c2cde4d6',
    '/about-me': '4f500097a9c0491a84b20604a32aa448'
    '/topic': '9eba45d6d50c4a19a5271caafe20db5c'
    '/all': '883c47b0802b435880495eb991da9547'
  }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '關於NgoSoeng',
      pageId: '46cb45f03b2e491da1a170c9c2cde4d6'
    },
    {
      title: '自我介紹',
      pageId: '4f500097a9c0491a84b20604a32aa448'
    }
      title: '所有主題',
      pageId: '9eba45d6d50c4a19a5271caafe20db5c'
    }
      title: '全部',
      pageId: '883c47b0802b435880495eb991da9547'
    }
  ]
})
