export default {
  install(Vue, options) {
    /**
     * 根据返回状态值判断是否执行成功
     * @param res
     * @returns {boolean}
     */
    function isSuccess(res) {
      if (res.status.toString().charAt(0) === "2"& res.data.code == "100000") {
        return true;
      }
      return false;
    }

    /**
     * 封装post请求
     * @param url
     * @param data
     * @param callback
     * @param error
     * @constructor  传递参数为URL 和data
     */
    Vue.prototype.AycPost = function(url,data,callback,error){
      this.axios(url,{method: 'post',
        headers:{
          'token':'APP155166945394154'},
        data:data}).then(
        function (res) {
          if (!res){
            return
          }
          if(isSuccess(res)){
            console.log(res.data)
            callback(res.data.data)
          }else {
            console.log(res.data.message)
            var errorMessage = res.data.message;
            error(errorMessage)
          }
        }
      ).catch({

      })
    }

    /**
     * 封装get请求
     * @param url
     * @param data
     * @param callback
     * @param error
     * @constructor
     */
    Vue.prototype.AycGet = function(url,data,callback,error){
      this.axios(url,{method: 'get',
        headers:{
          'token':'APP155166945394154'},
        params:data}).then(
        function (res) {
          if (!res){
            return
          }
          if(isSuccess(res)){
            console.log(res.data)
            callback(res.data.data)
          }else {
            console.log(res.data.message)
            var errorMessage = res.data.message;
            error(errorMessage)
          }
        }
      ).catch({

      })
    }

    /**
     * 弹出框式的轻提示
     * @param type
     * @param position
     * @param message
     * @param duration
     * @constructor
     */
    Vue.prototype.AycToast= function(message,position,duration){
        this.$toast({
          position:position,
          message:message,
          duration:duration
        })
    }

    Vue.prototype.AycAxios = function (url,config,callback,error) {
      this.axios(url,config).then(
        function (res){
          if (!res){
            return
          }
          if (isSuccess(res)) {
            callback(res.data.data);
          }else{

          }
        }).catch(

      )}

  }
}

