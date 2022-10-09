const template = `<div class="faces-box">
    <div class="face-list-box" v-for="faces,type in data">
        <h2>{{type}}</h2>
        <div class="face-list" v-if="faces.constructor === Array">
            <div v-for="face in faces" :key="face.value"
                class="face-item" 
                :title="face.value"
                :data-hot="face.hot"
                :data-common="face.common"
                :data-category="face.category"
                >
                <img :src="face.url" :alt="face.value">
            </div>
        </div>
        <face-list v-else :data="faces"></face-list>
        </div>
</div>`
Vue.component('face-list',{
    template,
    props:{
        data: Object
    }
});