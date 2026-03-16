// THİS COMPONENT USED TO GENERATE QR CODE 

// "use client"

// import { useEffect, useMemo, useState } from "react"
// import QRCode from "qrcode"
// import { Download, ExternalLink, Copy, Check } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface QrCodeCardProps {
//   title: string
//   url: string
//   filename?: string
// }

// export function QrCodeCard({
//   title,
//   url,
//   filename = "menu-qr",
// }: QrCodeCardProps) {
//   const [qrDataUrl, setQrDataUrl] = useState("")
//   const [qrSvg, setQrSvg] = useState("")
//   const [copied, setCopied] = useState(false)

//   useEffect(() => {
//     let mounted = true

//     async function generateQr() {
//       try {
//         const [dataUrl, svg] = await Promise.all([
//           QRCode.toDataURL(url, {
//             errorCorrectionLevel: "H",
//             margin: 2,
//             width: 1200,
//             color: {
//               dark: "#111111",
//               light: "#FFFFFF",
//             },
//           }),
//           QRCode.toString(url, {
//             type: "svg",
//             errorCorrectionLevel: "H",
//             margin: 2,
//             color: {
//               dark: "#111111",
//               light: "#FFFFFF",
//             },
//           }),
//         ])

//         if (mounted) {
//           setQrDataUrl(dataUrl)
//           setQrSvg(svg)
//         }
//       } catch (error) {
//         console.error("QR üretilemedi:", error)
//       }
//     }

//     generateQr()

//     return () => {
//       mounted = false
//     }
//   }, [url])

//   const pngDownloadName = useMemo(() => `${filename}.png`, [filename])
//   const svgDownloadName = useMemo(() => `${filename}.svg`, [filename])

//   const handleDownloadPng = () => {
//     if (!qrDataUrl) return

//     const link = document.createElement("a")
//     link.href = qrDataUrl
//     link.download = pngDownloadName
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   const handleDownloadSvg = () => {
//     if (!qrSvg) return

//     const blob = new Blob([qrSvg], { type: "image/svg+xml;charset=utf-8" })
//     const blobUrl = URL.createObjectURL(blob)

//     const link = document.createElement("a")
//     link.href = blobUrl
//     link.download = svgDownloadName
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)

//     URL.revokeObjectURL(blobUrl)
//   }

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(url)
//       setCopied(true)
//       window.setTimeout(() => setCopied(false), 1600)
//     } catch (error) {
//       console.error("URL kopyalanamadı:", error)
//     }
//   }

//   return (
//     <section className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_24px_60px_-32px_rgba(0,0,0,0.18)]">
//       <div className="border-b border-border/60 px-5 py-5 md:px-7">
//         <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
//           QR Kod
//         </p>
//         <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground md:text-3xl">
//           {title}
//         </h2>
//       </div>

//       <div className="grid gap-6 p-5 md:grid-cols-[340px_1fr] md:items-center md:p-7">
//         <div className="rounded-[1.75rem] border border-border/60 bg-background p-4">
//           <div className="overflow-hidden rounded-[1.25rem] bg-white p-4">
//             {qrDataUrl ? (
//               <img
//                 src={qrDataUrl}
//                 alt={`${title} QR kodu`}
//                 className="mx-auto h-auto w-full max-w-[280px]"
//               />
//             ) : (
//               <div className="flex aspect-square w-full items-center justify-center rounded-[1rem] bg-muted text-sm text-muted-foreground">
//                 QR hazırlanıyor...
//               </div>
//             )}
//           </div>
//         </div>

//         <div>
//           <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
//             Hedef URL
//           </p>

//           <div className="mt-3 rounded-[1.25rem] border border-border/60 bg-background px-4 py-4">
//             <p className="break-all text-sm leading-6 text-foreground md:text-[15px]">
//               {url}
//             </p>
//           </div>

//           <div className="mt-5 flex flex-wrap gap-3">
//             <Button
//               type="button"
//               onClick={handleDownloadPng}
//               disabled={!qrDataUrl}
//               className="rounded-full"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               PNG İndir
//             </Button>

//             <Button
//               type="button"
//               variant="outline"
//               onClick={handleDownloadSvg}
//               disabled={!qrSvg}
//               className="rounded-full"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               SVG İndir
//             </Button>

//             <Button
//               type="button"
//               variant="outline"
//               onClick={handleCopy}
//               className="rounded-full"
//             >
//               {copied ? (
//                 <>
//                   <Check className="mr-2 h-4 w-4" />
//                   Kopyalandı
//                 </>
//               ) : (
//                 <>
//                   <Copy className="mr-2 h-4 w-4" />
//                   URL Kopyala
//                 </>
//               )}
//             </Button>

//             <Button
//               type="button"
//               variant="outline"
//               asChild
//               className="rounded-full"
//             >
//               <a href={url} target="_blank" rel="noreferrer">
//                 <ExternalLink className="mr-2 h-4 w-4" />
//                 Siteyi Aç
//               </a>
//             </Button>
//           </div>

//           <p className="mt-5 text-sm leading-7 text-muted-foreground">
//             Baskı için SVG, dijital kullanım için PNG indirebilirsin.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }