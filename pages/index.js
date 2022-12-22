/*
 * @Author: zc
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zc
 * @LastEditTime: 2022-12-22 20:57:06
 * @FilePath: /next-app-demo/pages/index.js
 */
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { useQRCode } from "next-qrcode"

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "S+": this.getMilliseconds()
    }
    //因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
    if (/(y+)/.test(fmt)) {
        //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length))
        }
    }
    return fmt
}

// new Date().toLocaleString() 本地浏览器，与微信托管表现不同
// time: 1671713453379
// 托管: 3810545462 2022-12-22 下午8:48:59
// 本地： 3810545462 2022-12-22 20:48:59
// const now = new Date().toLocaleString().replace(/\//g, "-")

const date = new Date()
const text = `3810545462 ${date.format("yyyy-MM-dd HH:mm:ss")}`

console.log(text)
export default function Home() {
    const { SVG } = useQRCode()

    return (
        <div className={styles.container}>
            <Head>
                <title>我的信息</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.bg}>
                    <div className={styles["qrcode-wrapper"]}>
                        <SVG
                            text={text}
                            options={{
                                level: "L",
                                margin: 0,
                                scale: 4,
                                width: "41vw",
                                color: {
                                    dark: "#000000",
                                    light: "#ffffff"
                                }
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
