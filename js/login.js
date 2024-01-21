import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const app={
    data(){
        return {
            
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        singin(){
            axios.post('https://vue3-course-api.hexschool.io/v2/admin/signin',this.user)
            .then(res=>{
                const {token,expired}=res.data
                document.cookie = `hexToken=${token}; expires=${expired}; path=/`;
                window.location="product.html"
            })
            .catch(error=>{
                console.dir(error)
            })
        }
    }
}

createApp(app).mount('#app')