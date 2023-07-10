import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn, SpaceHeight, SpaceWidth, FlexViewCenter, FlexViewEnd, LoadingRow } from '../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight, TextSemiBold } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  TopBg,
  Content,
  TitleIcon,
  Line,
  ConfirButton,
  BGView,
  Copy,
  ArrowIcon,
  Title2Icon,
  AddressView,
  AddressTitle,
  AddressViewItem,
  CoinListView,
  Title3Icon,
  AddressInput,
  TopRightBg,
  TitleView,
  InviteView,
  TopView
} from '../styles/Community'
import { useAccount } from 'wagmi'
import { useStudioList, useStudioReward } from '../contract'
import { isBrowser } from 'react-device-detect'
import { formatBalance } from '../common/Common'

const MyNode: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const {address} = useAccount()
  const studioList = useStudioList()
  const studioReward = useStudioReward(String(address))

  return <Main>
    <TopRightBg>
      <Image src={ImageCommon.MYCommunityicon} layout='fill'/>
    </TopRightBg>
    <TitleView>
      <TextBold size={0} webSize={64}>{t('my node')}</TextBold>
      <Text size={0} webSize={24} color='#868AAE'>{t('my node')}</Text>
    </TitleView>
    <Content>
      <FlexView>
        <TitleIcon>
          <Image src={ImageCommon.inv} layout='fill'/>
        </TitleIcon>
        <Text size={16} webSize={24}>{t('my node')}</Text>
      </FlexView>
      <SpaceHeight height={10}/>
      <FlexViewBetween>
        <FlexView>
          <Text size={14} webSize={18}>{t('node status')}：</Text>
          {studioList.isLoading ? <LoadingRow width={'20%'}/> : <Text size={14} webSize={18}>{studioList.data?.isNode ? t('yes') : t('no')}</Text>}
        </FlexView>
        <FlexView>
          <Text size={14} webSize={18}>{t('Node performance')}：</Text>
          {studioReward.isLoading ? <LoadingRow width={'20%'}/> : <Text size={14} webSize={18}>{formatBalance(studioReward.data?.reward)}</Text>}
        </FlexView>
      </FlexViewBetween>
    </Content>
  </Main>
}
export default MyNode
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',