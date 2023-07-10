import styled, { keyframes } from 'styled-components'
import { autoWidthVW, colors } from '../../common/Common'
import ImageToken from '../../../public/tokens/ImageToken'
import { Skeleton } from 'antd'
import React from 'react'

export const Content = styled.div`
  width: 100%;
`

export interface base_type {
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  marginBottom?: string
  height?: string
  width?: string
  mWidth?: string
  onClick?: any
  textAlign?: string
  backgroundColor?: string
  maxWidth?: string
  minWidth?: string
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  opacity?: number
  pointerEvents?: string
  disabled?: boolean
  position?: string
  cursor?: string
}

export const BaseView = styled.div<base_type>`
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  background-color: ${(props) => props.backgroundColor};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  position: ${(props) => props.position};
  cursor: ${(props) => props.cursor};
  position: relative;
  @media (max-width: 768px) {
    width: ${(props) => props.mWidth || props.width};
  }
`

export const FlexView = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const FlexViewCenter = styled(FlexView)`
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const FlexViewEnd = styled(FlexView)`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
export const FlexViewBetween = styled(FlexView)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const FlexViewColumn = styled(FlexView)`
  display: flex;
  flex-direction: column;
  align-items:flex-start
`
export const FlexViewCenterColumn = styled(FlexViewColumn)`
  justify-content: center;
  align-items: center;
`
export function LoadingRow({ width = '80%' }: any) {
  return (
    <FlexView style={{width:width}}>
      <SkeletonItem active paragraph={false} />
    </FlexView>
  )
}
const SkeletonItem = styled(Skeleton)`
`
export const SpaceWidth = styled.div<{
  width: number
  webWidth?: number
}>`
  width: ${({ webWidth, width }) => autoWidthVW(webWidth ?? width * 2)};
  @media (max-width: 768px) {
    width: ${({ width }) => autoWidthVW(width)};
  }
`
export const SpaceHeight = styled.div<{
  height: number
  webHeight?: number
}>`
  height: ${({ webHeight, height }) => autoWidthVW(webHeight ?? height * 2)};
  @media (max-width: 768px) {
    height: ${({ height }) => autoWidthVW(height)};
  }
`

export const RelativeView = styled.div`
  position: relative;
`

export const WinView = styled.div`
  @media (max-width: 768px) {
    display: none;
  } ;
`

export const MobileView = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  } ;
`

export const BaseInput = styled.input`
  outline: none;
  outline: none;
  border: none;
  background: transparent;
`

export const BaseBackground = styled.div`
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
export const HeaderView = styled(FlexView)`
  position: fixed;
  height: ${autoWidthVW(44)};
  padding: 0 ${autoWidthVW(15)};
  margin: 0 ${autoWidthVW(-15)};
  margin-top: ${autoWidthVW(-44)};
  background: #030303;
  z-index: 10;
  width: 100%;
  align-items: center;
`
export const HomeHeaderView = styled(HeaderView)`
  height: ${autoWidthVW(60)};
`
