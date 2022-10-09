# 解析微博表情

## 安装
```bash
npm i weibo-face
```
或者
```html
<script type="importmap">
    {
        "imports": {
            "weibo-face": "https://cdn.jsdelivr.net/npm/weibo-face"
        }
    }
</script>
```
[直接引用 NPM CDN 例](html/test.html)

## 使用
```javascript
import { weiboFaceParse } from 'weibo-face'

weiboFaceParse('好耶[太开心][鼓掌][嘻嘻]')
// '好耶<img alt="太开心" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2018new_taikaixin_org.png"><img alt="鼓掌" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_guzhang_thumb.png"><img alt="嘻嘻" src="https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/33/2018new_xixi_thumb.png">'
```