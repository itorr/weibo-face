const titles = {
    usual: '默认',
    norm: '默认',
    hot: '热门',
    more: '其他',
    brand: '牌子',
};
const text = `怎么会这样[失望][悲伤][泪][允悲][苦涩]
生气[白眼]`
const data = {
    text,
    Faces: null,
    titles,
};

const app = new Vue({
	el:'.app',
	data,
    computed: {
        faces(){
            const { Faces } = this;
            if(!Faces) return [];
            return Object.entries(Faces).map(([k,v])=>{
                v = Object.entries(v);
                return [k,v];
            })
        },
        FaceByValues(){
            const { Faces } = this;
            if(!Faces) return [];
            const FaceByValues = {};
            const ParseFaces = Faces=>{
                for(let key in Faces ){
                    const data = Faces[key];
                    if(data.constructor === Array){
                        data.forEach(item=>{
                            FaceByValues[item.value.replace(/\[|\]/g,'')] = item;
                        });
                    }else{
                        ParseFaces(data);
                    }
                }
            };
            ParseFaces(Faces);
            return FaceByValues;
        },
        FaceURLByValues(){
            return Object.fromEntries(Object.entries(this.FaceByValues).map(([k,v])=>[k,v.icon]))
        },
        faceURLByValues(){
            return Object.entries(this.FaceURLByValues).map(([k,v])=>[
                k,
                k.split('').map(v=>v.charCodeAt(0)).join(','),
                v
            ])
        },
        html(){
            const { text,FaceURLByValues: Faces } = this;
            return text.replace(
                /\[([\u4e00-\u9fa5a-z0-9_]+?)\]/ig,
                (all,value)=> Faces[value] ? `<img class="weibo-face" data-value="${value}" alt="[${value}]" src="${Faces[value]}">` : all
            ).replace(/\n/g,'<br>')
        }
    },
    methods: {
        face(face){
            const { text } = this;
            const textareaEl = this.$refs['text'];
            const { selectionStart, selectionEnd } = textareaEl;
            // console.log(face,textareaEl,{ selectionStart, selectionEnd });
            const { length } = text;
            const { value } = face;
            this.text = [
                text.substr(0,selectionStart),
                value,
                text.substr(selectionEnd,length)
            ].join('');

            this.$nextTick(_=>{
                console.log(textareaEl.selectionStart,textareaEl.selectionEnd)
                const index = selectionStart + value.length;
                console.log(selectionStart,index)
                textareaEl.focus();
                textareaEl.selectionStart = index;
                textareaEl.selectionEnd = index;
            });
        }
    }
});

fetch('faces.json').then(r=>r.json()).then(r=>{
    app.Faces = r.data;
})