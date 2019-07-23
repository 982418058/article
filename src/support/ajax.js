import axios from 'axios'
let ajax = function(){
        const load = "https://laozai.online:8081/";
        const get="get?";
        const post="post?";
        return (mode,callBack,errBack)=> axios.get(load+get+mode)
        .then(function(res){
            callBack?callBack(res.data):'';
        })
        .catch(function(err){
            errBack?errBack(res):'';
        })
}
export default ajax()