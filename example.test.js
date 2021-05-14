const puppeteer = require('puppeteer')

describe('prueba de navegador', () => {

    it('debe abrir el navegador', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForTimeout(5000)
        await page.click('#block_top_menu > ul > li:nth-child(1) > a')
        await page.waitForTimeout(5000)
        await browser.close()
    })

    it('debe abrir el navegador X2', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForTimeout(5000)
        await page.waitForSelector('#block_top_menu > ul > li:nth-child(2) > a')
        await page.waitForTimeout(5000)
        await browser.close()
    })

    it('debe abrir el navegador X3', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForTimeout(5000)
        const prueba3 = await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[3]/a')
        prueba3.click()
        await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[3]/a')
        await page.waitForTimeout(5000)
        await browser.close()
    })
    

})
