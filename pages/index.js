/*
 * @Author: zc
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zc
 * @LastEditTime: 2022-12-21 15:11:13
 * @FilePath: /next-app-demo/pages/index.js
 */
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { useQRCode } from "next-qrcode"

const now = new Date().toLocaleString().replace(/\//g, "-")
const text = `3810545462 ${now}`

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
