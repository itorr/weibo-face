
const data = {
    Faces: null,
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
        }
    },
    methods: {

    }
});

fetch('faces.json').then(r=>r.json()).then(r=>{
    app.Faces = r.data;
})