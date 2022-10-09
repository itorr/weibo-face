# 解析微博表情

## 安装
```bash
npm i weibo-face
```
或者 引用 CDN
[npm-cdn.html](https://lab.magiconch.com/weibo-face/npm-cdn.html)
[code](https://github.com/itorr/weibo-face/blob/main/html/npm-cdn.html#L46)

## 使用
```javascript
import { weiboFaceParse } from 'weibo-face'

weiboFaceParse('好耶[太开心][鼓掌][嘻嘻]')
// '好耶<img alt="太开心" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2018new_taikaixin_org.png"><img alt="鼓掌" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_guzhang_thumb.png"><img alt="嘻嘻" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/33/2018new_xixi_thumb.png">'
```