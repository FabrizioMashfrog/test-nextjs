import './globals.css'
import Link from "next/link";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body style={{"width": "500px", "margin": "20px auto"}}>
        <div style={{color: "white"}}>
            <Link href="/test/">Test page</Link>
            <Link href="/test2/">Test page 2</Link>
        </div>
        <br/>
        <br/>
        <div>{children}</div>
        </body>
        </html>
    )
}
