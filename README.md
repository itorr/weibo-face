# 解析微博表情

## 安装
```bash
npm i weibo-face
```
或者
### 引用 CDN
例 [html/npm-cdn.html](https://lab.magiconch.com/weibo-face/npm-cdn.html)
[源代码](https://github.com/itorr/weibo-face/blob/main/html/npm-cdn.html#L46)

## 使用

### 转换正文中表情成网页代码
```javascript
import { weiboFaceParse } from 'weibo-face'

weiboFaceParse('好耶[太开心][鼓掌][嘻嘻]')
// '好耶<img alt="太开心" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2018new_taikaixin_org.png"><img alt="鼓掌" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_guzhang_thumb.png"><img alt="嘻嘻" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/33/2018new_xixi_thumb.png">'
```

### 获取表情列表
```javascript
import { WeiboFaceByValues } from 'weibo-face'
// { value: url,... }

Object.entries(WeiboFaceByValues)
// [ [value, url],... ]
```
## 建议的样式
```CSS
.weibo-face{
    width: 18px;
    height: 18px;
    vertical-align: -4px;
    margin: 0 1px;
}
```
