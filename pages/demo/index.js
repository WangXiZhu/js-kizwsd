/*
 * @Author: zc
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zc
 * @LastEditTime: 2022-10-27 23:28:01
 * @FilePath: /next-app-demo/pages/demo/index.js
 */
import Head from "next/head"
import Link from "next/link"
export default function Home() {
    return (
        <div>
            <Head>
                <title>zc: Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>13123123</h1>

                <Link href="/">
                    <a>Back Home</a>
                </Link>
            </main>
        </div>
    )
}
