import classNames from "classnames";
import styles from './modal.module.scss'
import {LpPair} from "@src/views/earn/index";
import ImageToken from "@public/tokens/ImageToken";
import Image from "next/image";
import ImageCommon from "@public/images/ImageCommon";
import {useState} from "react";
import useTranslationLanguage from "@src/hooks/useTranslationLanguage";
export default function Modal({onClose}:any){
    return(
        <div className={classNames("animate__animated" ,"animate__fadeInUp" ,"animate__faster",styles.container)}>
            <div className={styles.header}>
                <LpPair pairs={[ImageToken.OMNI,ImageToken.USDT]}></LpPair>
                <div className={styles.icon_close} onClick={onClose}>
                    <Image src={ImageCommon.close} layout='fill'/>
                </div>
            </div>
            <Tab></Tab>
            <Table></Table>
        </div>
    )
}
function Tab() {
    const [selectIndex, setSelectIndex] = useState(0)
    const {t} = useTranslationLanguage()
    function onChangeTab(index: number) {
        setSelectIndex(index)
    }

    return (
        <div className={styles.tab_container}>
            <div className={styles.content}>
                <div className={classNames(styles.item, {[styles.active]: selectIndex === 0})}
                     onClick={() => onChangeTab(0)}>{t("LP Mining Income")}
                </div>
                <div className={classNames(styles.item, {[styles.active]: selectIndex === 1})}
                     onClick={() => onChangeTab(1)}>{t("Community Mining Income")}
                </div>
            </div>
        </div>
    )
}
function Table(){
    const {t} = useTranslationLanguage()
    return(
        <div className={styles.table_container}>
            <div className={styles.table_header}>
                <div className={styles.title}>{t("Release Time")}</div>
                <div className={styles.title}>Proportion</div>
                <div className={styles.title}>Amout of Income(OMNI)</div>
            </div>
            {/*<div className={styles.table_content}>*/}
            {/*    <div className={styles.table_item}>*/}
            {/*        <div className={styles.title}>2023-05-12 12:00</div>*/}
            {/*        <div className={styles.title}>234sdfg...45sf</div>*/}
            {/*        <div className={styles.title}>234,124.32 USDT</div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.table_item}>*/}
            {/*        <div className={styles.title}>2023-05-12 12:00</div>*/}
            {/*        <div className={styles.title}>234sdfg...45sf</div>*/}
            {/*        <div className={styles.title}>234,124.32 USDT</div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.table_item}>*/}
            {/*        <div className={styles.title}>2023-05-12 12:00</div>*/}
            {/*        <div className={styles.title}>234sdfg...45sf</div>*/}
            {/*        <div className={styles.title}>234,124.32 USDT</div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.table_item}>*/}
            {/*        <div className={styles.title}>2023-05-12 12:00</div>*/}
            {/*        <div className={styles.title}>234sdfg...45sf</div>*/}
            {/*        <div className={styles.title}>234,124.32 USDT</div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.table_item}>*/}
            {/*        <div className={styles.title}>2023-05-12 12:00</div>*/}
            {/*        <div className={styles.title}>234sdfg...45sf</div>*/}
            {/*        <div className={styles.title}>234,124.32 USDT</div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.table_item}>*/}
            {/*        <div className={styles.title}>2023-05-12 12:00</div>*/}
            {/*        <div className={styles.title}>234sdfg...45sf</div>*/}
            {/*        <div className={styles.title}>234,124.32 USDT</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <NoData></NoData>
        </div>
    )
}
function NoData(){
    return(
        <div className={styles.nodata_container}>
            <div className={styles.icon_nodata}>
                <Image src={ImageCommon.icon_nodata} layout={"fill"}></Image>
            </div>
            <div className={styles.title}>No Data</div>
        </div>
    )
}
