var baseUrl='https://music.aityp.com/'
function http({url,type="get",callback}){
      $.ajax({
          url:baseUrl+url,
          type,
          dataType:"json",
          success:res=>{
              callback(res)
          }
      })
}