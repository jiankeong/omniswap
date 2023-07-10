import type {NextPage} from 'next'
import Image from 'next/image'
import {
    Main,
    TopBg,
    Content,
    TitleIcon,
    NFTItemView,
    NFTIcon,
    ItemRight,
    ConfirButton,
    NFTLevelIcon,
    Line,
    TipIcon,
    TopRightBg,
    TitleView
} from '@src/styles/NFT'
import {useRouter} from 'next/router'
import {message, Switch} from 'antd'
import {useSpring, animated} from 'react-spring'
import {isBrowser} from 'react-device-detect'
import useTranslationLanguage from "@src/hooks/useTranslationLanguage";
import ImageCommon from "@public/images/ImageCommon";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import styles from './index.module.scss'
import classNames from "classnames";
import ImageToken from "@public/tokens/ImageToken";
import {useModalContext} from "@src/provider/modalProvider";
import Modal from "@src/views/earn/modal";
import getContent from "@src/common/languageLib";
import {useTab} from "@src/hooks";
import Community from "@src/views/earn/community";
import { TextBold } from '../../components/Text'

const Earn: NextPage = (props: any) => {
    const {t} = useTranslationLanguage()
    const [pageHeight, setPageHeight] = useState('fit-content')
    const dispatch = useDispatch()
    const modalContext = useModalContext()
    const tab = useTab()
    useEffect(() => {
        setPageHeight(window.innerHeight + 'px')
        getContent()
    }, [])

    function onExtractClick() {
        modalContext.show(<Modal onClose={modalContext.hidden}></Modal>)
    }

    if (tab.tabIndex === 1) {
        return <Community></Community>
    }
    return <Main>
        {/*<TopBg>*/}
        {/*  <Image src={ImageCommon.homebg} layout='fill'/>*/}
        {/*</TopBg>*/}
        <div className={styles.pic_bg}>
        <Image src={ImageCommon.earnbg} layout='fill'/>
        </div>
        <div className={styles.pic_earn}>
          <Image src={ImageCommon.pic_earn} layout='fill'/>
        </div>
        <div className={styles.container}>
            <Tab tabs={[
                {
                    title: t("LP Mining Income"),
                    path: "/earn"
                },
                {
                    title: t("Community Mining Income"),
                    path: "/earn_community"
                }]} onChange={(index: number) => tab.setTabIndex(index)} initialIndex={0}></Tab>
                

            <div className={styles.content}>
                <TextBold size={28} webSize={64}>{t('LP Mining Income')}</TextBold>
                <p className={styles.desc}>{t("After the funds")}</p>
                <div className={styles.search_container}>
                    <div className={styles.input_container}>
                        <div className={styles.icon_search}>
                            <Image src={ImageCommon.icon_search} layout={"fill"}></Image>
                        </div>
                        <input type="text" placeholder={"Search"} className={styles.input}/>
                    </div>
                    <div className={styles.switch_container}>
                        <div className={styles.title}>{t("Show only my")}</div>
                        <Switch className={styles.switch} defaultChecked onChange={() => {
                        }}/>;
                    </div>
                </div>
                <div className={styles.mining_container}>
                    <div className={styles.lp_wrap}>

                        <LpPair pairs={[ImageToken.OMNI, ImageToken.USDT]}></LpPair>


                        <div className={"flex-center"}>
                            <div className={styles.time}>{t("Creation Time")}: 2023-04-23</div>
                            <div className={styles.status}>{t("Live")}</div>
                        </div>
                    </div>
                    <div className={styles.lp_total_warp}>
                        <div className={styles.name}>{t("LP Total Computing")}</div>
                        <div className={styles.amount}>15258908.6246</div>
                    </div>
                    <div className={classNames(styles.lp_total_warp, styles.blue)}>
                        <div className={styles.name}>{t("Your Current LP")}</div>
                        <div className={styles.amount}>908.6246</div>
                    </div>
                    <div className={classNames(styles.lp_total_warp, styles.black)}>
                        <div className={styles.left}>
                            <div className={styles.name}>{t("Your LP Mining")}</div>
                            <div className={styles.amount}>908.6246</div>
                        </div>
                        <div className={"flex-center"}>
                            <div className={styles.title_record}>{t("Revenye Record")}</div>
                            <div className={styles.icon_record}>
                                <Image src={ImageCommon.icon_arrow_right_record} layout={"fill"}></Image>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom_wrap}>
                        <div className={styles.left}>
                            <div className={styles.amount}>908.6246</div>
                            <div className={styles.desc}>{t("Pending Receipt")}</div>
                            <div className={styles.btn} onClick={onExtractClick}>{t("Extract")}</div>
                            <div className={"flex-center-justify-end"}>
                                <div className={styles.txt_extract_record}>
                                    {t("Extract Record")}
                                </div>
                                <div className={styles.icon_arrow_right_gray}>
                                    <Image src={ImageCommon.icon_arrow_right_gray} layout={"fill"}></Image>
                                </div>

                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.right}>
                            <div className={styles.amount}>23458.6246</div>
                            <div className={styles.desc}>{t("Benefits Receipt")}</div>
                            <div className={styles.btn}>{t("Put in USDT")}</div>
                            <div className={"flex-center-justify-end"}>
                                <div className={styles.txt_extract_record}>
                                    {t("View Mining Pool Contract")}
                                </div>
                                <div className={styles.icon_arrow_right_gray}>
                                    <Image src={ImageCommon.icon_arrow_right_gray} layout={"fill"}></Image>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
}
export default Earn;
{/*import Community from './community'*/
}
{/*const Earn: NextPage = (props: any) => {*/
}
{/*  const {t} = useTranslationLanguage()*/
}
{/*  const [pageHeight,setPageHeight] = useState('fit-content')*/
}
{/*  const dispatch = useDispatch()*/
}
{/*  useEffect(()=>{*/
}
{/*    setPageHeight(window.innerHeight+'px')*/
}
{/*  },[])*/
}
{/*  return <Community/>*/
}
{/*  return <Main style={{height:pageHeight}}>*/
}
{/*    /!*<TopBg>*!/*/
}
{/*    /!*  <Image src={ImageCommon.homebg} layout='fill'/>*!/*/
}
{/*    /!*</TopBg>*!/*/
}
{/*    <div className={styles.container}>*/
}
{/*      <Tab></Tab>*/
}
{/*      <div className={styles.content}>*/
}
{/*        <h1>{t("LP Mining Income")}</h1>*/
}
{/*        <p className={styles.desc}>After the funds are inveated,the contract will be automatically injected into the liquidity pool to obtain LP cpmputing power. The LP computing power comes from the Nth power of the total amount of invested funds*coefficient.nrepreents the number of days the mining pool was created. the same investment amount,the later the LP computing power is obtained bigger</p>*/
}
{/*        <div className={styles.search_container}>*/
}
{/*          <div className={styles.input_container}>*/
}
{/*            <div className={styles.icon_search}>*/
}
{/*              <Image src={ImageCommon.icon_search} layout={"fill"}></Image>*/
}
{/*            </div>*/
}
{/*        </div>*/
}

{/*    </Main>*/
}
{/*}*/
}

export function Tab({onChange, tabs,initialIndex}: any) {
    const [selectIndex, setSelectIndex] = useState(initialIndex)
    const {t} = useTranslationLanguage()
    const route = useRouter()

    function onChangeTab(index: number) {
        setSelectIndex(index)
        onChange && onChange(index)
        tabs[index].path && route.push(tabs[index].path)
    }

    return (
        <div className={styles.tab_container}>
            <div className={styles.content}>
                {
                    tabs.map((item:any,index:number)=>{
                        return(
                            <div key={"tab_item_"+index} className={classNames(styles.item, {[styles.active]: selectIndex === index})}
                                 onClick={() => onChangeTab(index)}>{item.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export function LpPair({pairs}: any) {
    const {t} = useTranslationLanguage()
    return (
        <div className={styles.lp_pair_container}>
            <div className={styles.lp_pair_wrap}>
                {pairs.map((item: any, index: number) => {
                    return (
                        <div className={styles.icon_coin} key={index+'pairs'}>
                            <Image src={item} layout={"fill"}></Image>
                        </div>
                    )
                })}
            </div>
            <div className={styles.lp_name}>{t("Put in USDT")}</div>
            <div className={styles.icon_arrow_right_orange}>
                <Image src={ImageCommon.icon_arrow_right_orange} layout={"fill"}></Image>
            </div>
            <div className={styles.lp_name}>{t("Get OMNI")}</div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {},
        // revalidate: 24*60*60,  //1天更新一次 (单位秒)
    }
}
