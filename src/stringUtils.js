/**
 * Created by yangjie on 2018/7/19.
 * 字符串处理工具（使用闭包方式开发）
 */

;//JavaScript 弱语法的特点,如果前面刚好有个函数没有以";"结尾,那么可能会有语法错误，因此在这里加上";"号。
//使用自调用匿名函数封装(防止插件用户定义的函数名与插件名冲突)
(function(window,document){
    //定义一些默认参数
    var _options={
        default_word:"default hello"

    }

    //定义一些API方法
    var _StringUtils = {
        //获取字符串长度：中文为2个英文字符。
        getLength:function(str){
            var j=0;
            for(var i=0;i<str.length;i++)
            {
                if(str.substr(i,1).charCodeAt(0)>255) j = j + 2;
                else j=j+1;
            }
            return j;
        },
        firstFunc:function(str){
            alert(str);
            return this;//返回当前方法
        },
        secondFunc:function(){
            alert("secondFunc");
            return this;//返回当前方法
        }
    };
    //这里确定了插件的名称
    this.StringUtils = _StringUtils;
}(window,document));


