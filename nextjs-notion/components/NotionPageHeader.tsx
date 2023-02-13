import * as React from 'react'
import * as types from 'notion-types'

import cs from 'classnames'
import { Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle } from '../src/lib/config'
import { DesktopOnly, MobileOnly } from '../src/styles/SharedStyles'
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu'

import styles from './styles.module.css'
import { LogoHeader } from '@/components/Logo/Logo'
import MenuModal from '@/components/MenuModal/MenuModal'
import { useRouter } from 'next/router'

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()
  const [showMenuModal, setShowMenuModal] = React.useState(false);

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  const router = useRouter();

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <LogoHeader/>
        <div className='notion-nav-header-rhs breadcrumbs'>
          <DesktopOnly>
            {navigationLinks
              ?.map((link, index) => {
                if (!link.pageId && !link.url) {

                  return null;
                }

                if (link.pageId) {
                  return (
                    <components.PageLink
                      href={mapPageUrl(link.pageId)}
                      key={index}
                      className={cs(styles.navLink, 'breadcrumb', 'button', router.asPath === mapPageUrl(link.pageId) ? styles.activeNav : '')}
                    >
                      {link.title}
                    </components.PageLink>
                  )
                } else {
                  return (
                    <components.Link
                      href={link.url}
                      key={index}
					  					className={cs(styles.navLink, 'breadcrumb', 'button', router.asPath === link.url ? styles.activeNav : '')}
                    >
                      {link.title}
                    </components.Link>
                  )
                }
              })
              .filter(Boolean)}

            {/*<ToggleThemeButton />*/}

            {isSearchEnabled && <Search block={block} title={null} />}
          </DesktopOnly>
          <MobileOnly>
            {isSearchEnabled && <Search block={block} title={null} />}
            {/*<ToggleThemeButton />*/}
            <div
              className={cs('breadcrumb', 'button')}
              onClick={() => setShowMenuModal(true)}
            >
              <AiOutlineMenu/>
            </div>
              {showMenuModal && <MenuModal
                onClose={() => setShowMenuModal(false)}
                show={showMenuModal}
                >
                {navigationLinks
                  ?.map((link, index) => {
                    if (!link.pageId && !link.url) {

                      return null;
                    }

                    if (link.pageId) {
                      return (
                        <components.PageLink
                          href={mapPageUrl(link.pageId)}
                          key={index}
													className={cs(styles.navModalMenu, router.asPath === mapPageUrl(link.pageId) ? styles.activeNav : '')}
                        >
                          {link.title}
                        </components.PageLink>
                      )
                    } else {
                      return (
                        <components.Link
                          href={link.url}
                          key={index}
                          className={styles.navModalMenu}
                        >
                          {link.title}
                        </components.Link>
                      )
                    }
                  })
                  .filter(Boolean)}
                </MenuModal>}
          </MobileOnly>
        </div>
      </div>
    </header>
  )
}

