let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} SEWA ${htka}`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💱SEWA 3 BULAN HANYA 5K DI SINI', url: 'https://wa.me/6283839255168'}},
    {index: 4, quickReplyButton: {displayText: '↗️UPGRADE PREMIUM', id: '.upprem'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^belibot$/i
handler.private = true

export default handler