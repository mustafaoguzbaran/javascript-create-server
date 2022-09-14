/* createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/
const http = require('http');
const port = 5000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    const url = req.url;
    if (url === "/") {
        res.write("<h2>Welcome to Index Page</h2>")
    }else if (url === "/about") {
        res.write("<h2>Welcome to About Page</h2>")
    }else if (url === "/contact") {
        res.write("<h2>Welcome to Contact Page</h2>")
    }
    res.end()
})

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`)
})