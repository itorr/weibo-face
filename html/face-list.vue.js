const template = `<div class="faces-box">
    <div class="face-list-box" v-for="faces,type in data">
        <h4 v-if="faces.constructor === Array">{{titles[type] || type}}</h4>
        <div class="face-list" v-if="faces.constructor === Array">
            <div v-for="face in faces" :key="face.value"
                class="face-item" 
                :title="face.value"
                :data-hot="face.hot"
                :data-common="face.common"
                :data-category="face.category"
                @click.prevent.stop="$emit('face',face)"
                >
                <img :src="face.url" :alt="face.value">
            </div>
        </div>
        <face-list v-else :data="faces" :titles="titles" @face="$emit('face',$event)"></face-list>
        </div>
</div>`
Vue.component('face-list',{
    template,
    props:{
        data: Object,
        titles: Object
    }
});