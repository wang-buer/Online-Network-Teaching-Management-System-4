
var projectName = '在线教学管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '课程表',
	url: './pages/kechengbiao/list.html'
}, 

{
	name: '论坛交流',
	url: './pages/forum/list.html'
}, 
{
	name: '学校公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot38dw8/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程分类","menuJump":"列表","tableName":"kechengfenlei"}],"menu":"课程分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程表","menuJump":"列表","tableName":"kechengbiao"}],"menu":"课程表管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"作业信息","menuJump":"列表","tableName":"zuoyexinxi"}],"menu":"作业信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"buttons":["查看"],"menu":"上课签到","menuJump":"列表","tableName":"shangkeqiandao"}],"menu":"上课签到管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"论坛交流","tableName":"forum"}],"menu":"论坛交流"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"学校公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程表列表","menuJump":"列表","tableName":"kechengbiao"}],"menu":"课程表模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"课程表","menuJump":"列表","tableName":"kechengbiao"}],"menu":"课程表管理"},{"child":[{"buttons":["查看","作业提交"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看"],"menu":"作业信息","menuJump":"列表","tableName":"zuoyexinxi"}],"menu":"作业信息管理"},{"child":[{"buttons":["查看","新增"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"buttons":["新增","查看"],"menu":"上课签到","menuJump":"列表","tableName":"shangkeqiandao"}],"menu":"上课签到管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程表列表","menuJump":"列表","tableName":"kechengbiao"}],"menu":"课程表模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["查看"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},{"child":[{"buttons":["查看"],"menu":"课程分类","menuJump":"列表","tableName":"kechengfenlei"}],"menu":"课程分类管理"},{"child":[{"buttons":["查看"],"menu":"课程表","menuJump":"列表","tableName":"kechengbiao"}],"menu":"课程表管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"作业信息","menuJump":"列表","tableName":"zuoyexinxi"}],"menu":"作业信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"buttons":["查看"],"menu":"上课签到","menuJump":"列表","tableName":"shangkeqiandao"}],"menu":"上课签到管理"},{"child":[{"buttons":["查看","新增"],"menu":"师生聊天","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程表列表","menuJump":"列表","tableName":"kechengbiao"}],"menu":"课程表模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
