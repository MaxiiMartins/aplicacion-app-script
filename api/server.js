const doGet = ()=> HtmlService.createTemplateFromFile("client/index")
.evaluate()
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
.setSandboxMode(HtmlService.SandboxMode.IFRAME)
.addMetaTag("viewport",'width=device-width,user-scalable=no,initial-scale=1,minimum-scale=1"')
.setTitle("Probando App Script")
.setFaviconUrl("https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon.png")

const include = (url) => HtmlService.createHtmlOutputFromFile(url).getContent()