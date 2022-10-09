const titles = {
    usual: '默认',
    norm: '默认',
    hot: '热门',
    more: '其他',
    brand: '牌子',
};

const data = {
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
        }
    },
    methods: {

    }
});

fetch('faces.json').then(r=>r.json()).then(r=>{
    app.Faces = r.data;
})