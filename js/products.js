import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const app={
    data(){
        return {
            url:'https://vue3-course-api.hexschool.io',
            path:'ux_peiying',
            products:[],
            tempProduct:{}
        }
    },
    methods:{
        check(){
            //查看token是否有過期
            const apiUrl=this.url+"/v2/api/user/check"
            axios.post(apiUrl)
            .then(res=>{
                this.getData()
            })
            .catch(error=>{
                console.dir(error)
                window.location='index.html'
            })
        },
        getData(){
            
            const apiUrl=this.url+`/v2/api/${this.path}/admin/products`
            axios.get(apiUrl)
            .then(res=>{
                this.products=res.data.products;
                
            })
            .catch(error=>{
                console.log(error)
            })
        },
        click(item){
            this.tempProduct=item;
            
        }
    },
    mounted(){
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        this.check();
    }
}

createApp(app).mount('#app')