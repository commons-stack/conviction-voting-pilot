import React from 'react'
import { GU, Link as AragonLink, textStyle, useTheme } from '@aragon/ui'
import styled from 'styled-components'
import Layout from './Layout'
import antSvg from '../assets/logo-cs.svg'

export default function Footer({ compact }) {
  const theme = useTheme()

  return (
    <footer
      css={`
        flex-shrink: 0;
        width: 100%;
        padding: ${5 * GU}px ${compact ? `${3 * GU}px` : 0};
        background: ${theme.surface};
      `}
    >
      <Layout>
        <div
          css={`
            display: ${compact ? 'block' : 'flex'};
            align-items: flex-start;

            & > div {
              margin-bottom: ${2 * GU}px;

              &:not(:first-child) {
                width: ${25 * GU}px;
              }
            }

            & a {
              color: ${theme.contentSecondary};
            }
          `}
        >
          <div
            css={`
              width: ${40 * GU}px;
            `}
          >
            <img src={antSvg} height="40" alt="" />
          </div>
          <div>
            <h5
              css={`
                ${textStyle('body1')};
                margin-bottom: ${1.5 * GU}px;
              `}
            >
              Commons Stack
            </h5>
            <Link href="https://commonsstack.org/" external>
              Home
            </Link>
            <Link href="https://commonsstack.org/abc" external>
              Components
            </Link>
            <Link href="https://commonsstack.org/community" external>
              Community
            </Link>
            <Link href="https://commonsstack.org/apply" external>
              Apply
            </Link>
          </div>
          <div>
            <h5
              css={`
                ${textStyle('body1')};
                margin-bottom: ${1.5 * GU}px;
              `}
            >
              Join Us
            </h5>
            <Link href="https://twitter.com/commonsstack" external>
              Twitter
            </Link>
            <Link href="https://medium.com/commonsstack" external>
              Medium
            </Link>
            <Link href="https://t.me/joinchat/HGrjjRS2PoowbH1ODuefuA" external>
              Telegram
            </Link>
            <Link
              href="https://riot.im/app/#/group/+commons-stack:matrix.org"
              external
            >
              Riot Chat
            </Link>
            <Link href="https://github.com/commons-stack" external>
              Github
            </Link>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

// TODO: Move to 1hive-ui
const Link = styled(AragonLink)`
  display: block;
  margin-bottom: ${1.5 * GU}px;
  text-align: left;
  text-decoration: none;
`
