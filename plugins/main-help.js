let handler = async (m, { conn }) => {
   let text = `
*Fitur Smart Bot:* 

 - *Pembuat stiker*: ketik *'.stiker'* untuk membuat stiker. 
 - *IG Downloader* : ketik *'.igdl' * untuk mengunduh video atau foto dari Instagram. 
 - *Tiktok Downloader*  : ketik *'.tiktok' * untuk mengunduh video dari Tiktok. 
 - *Semua perintah*  : ketik *'.allmenu' * untuk melihat semua perintah Smart Bot. 
 - *Pemilik*  : Ketik *'.owner'* Jika Anda memiliki kebutuhan / tidak mengerti cara menggunakan Smart Bot. 

 CARA PENGGUNAAN: 
 Ketik perintah yang sesuai di obrolan dengan Smart Bot. 

 Catatan: 
 - Pastikan untuk mengirim pesan ke Smart Bot dalam bentuk teks atau keterangan. 
 - Beberapa fitur memerlukan tautan untuk diunduh, jadi pastikan Anda mengirim tautan dengan benar. 

 Jangan ragu untuk bertanya kepada pemilik Smart Bot apakah Anda mengalami kesulitan atau memiliki pertanyaan lebih lanjut. 

 Terima kasih telah menggunakan Smart Bot!

 Powered By FWD`
  
  return conn.reply(m.chat, text, m)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = /^help$/i

export default handler
