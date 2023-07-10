import React from 'react'
import Head from 'next/head'
import { isBrowser } from 'react-device-detect'
import { autoWidthVW } from '../../common/Common'

const Layout = ({
  children,
  title = 'INTO',
  header = true,
  footer = false,
}: {
  children: React.ReactNode
  title?: string
  footer?: boolean
  header?: boolean
}) => (
  <div
    style={{
      width: '100%',
      overflow: 'hidden',
      paddingLeft:isBrowser?autoWidthVW(370):0,
      paddingTop:isBrowser?autoWidthVW(125):autoWidthVW(60),
      zIndex:10
    }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key={'INTO'}
      />
    </Head>
    {children}
  </div>
)

export default Layout
