//  201901108 天气晴 心情小记 字节跳动（3月3日）


// 一面（1小时）

// 1.线程与进程，空间分配、资源分配等等
// 2.三次握手、四次挥手及标志位、time-wait等等
// 3.H5的新特性，语义化
// 4.BOM与DOM，及BOM相关的一些属性
// 5.设计模式：发布订阅、观察者、双向绑定、防抖和节流

// 二面（1小时）

// 介绍项目

// 1.web worker，web storage，怎样验证本地数据的有效性
// 2.性能优化相关
// 3.缓存相关的http头部属性，强制缓存，协商缓存，优先级，以及meta标签
// 4.怎样做的登录，接着就是session，cookie，token等等
// 5.input属性相关，以及怎样做的文件上传
// 6.微信小程序相关（项目中有涉及到）
// 7.transform transition与animation
// 8.setTimeout、setInterval与requestAnimationFrame
// 9.页面加载问题，JS的异步加载
// 10.给出代码，说出运算结果（this、event loop）
// 写代码：回文数，数组去重，自定义log，判断数据类型
// 11. React与Vue，各自做了些什么事情


// 三面（1小时）

// 介绍项目

// 1.缓存命中率的问题，怎样确保缓存全部数据，缓存命中率不是100%应该怎么办
// 2.说说性能优化的通用架构方案
// 3.请求优化和渲染优化的方法
// 4.数据类型转换的原理
// 5.编程，5个feach请求，请求完成后要求立即执行，但最终的输出顺序要按照要求输出ABCDE（思路是：将每个feach的回调通过a/a的方式输出，但最后没有run出来）

// 干货解析下：
// 1、线程、进程、空间资源分配
//     进程（process）和线程（thread）是操作系统的基本概念
//     1.计算机的核心是CPU，它承担了所有的计算任务
//     2.单个CPU一次只能运行一个任务
//     3.进程它代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态
//     4.一个进程可以包括多个线程。
//     5.一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。
//     6.一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。
//     7.一个防止其他线程使用的简单方法"互斥锁"（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。
//     8.某些内存区域，只能供给固定数目的线程使用。
//         操作系统的设计，因此可以归结为三点：
//         （1）以多进程形式，允许多个任务同时运行；
//         （2）以多线程形式，允许单个任务分成不同的部分运行；
//         （3）提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源。

// 2、三次握手、四次挥手及标志位、time-wait等等
//     Tcp 链接时候  客户端（syn） ====> 服务端(Ack)  ===> 服务端做好接受准备发到客户端 ===> (syn,Ack) 客户端最后确认发到服务器
//     四次挥手，断开链接： 客户端（fn） ===> 服务端（接受fn）(Ack) ===> 告诉客户端在做断开链接准备，但是没有断开 ===> 客户端发起（Ack）确定要断开
//                                                              ===> 告诉客户端我做好准备了Ack = 1 (time-wait)做好断开准备了，在此期间主要重新发放Ack

// 3、H5的新特性，语义化
//     <header/><content/><footer/><section> <nav>
//     <article>:元素用于表示完全独立的内容区域，这些内容可以从页面中提取出来并放入另一个内容中，并且仍然有意义。这可能是文字文章或博客，但也可用于社交媒体帖子，如推特或脸书的墙贴。

// 4、BOM与DOM，及BOM相关的一些属性
//     1. DOM 是 W3C 的标准； [所有浏览器公共遵守的标准]
//     2. BOM 是 各个浏览器厂商根据 DOM 在各自浏览器上的实现;[表现为不同浏览器定义有差别,实现方式不同]
//     3. window 是 BOM 对象，而非 js 对象；
//         DOM（文档对象模型）是 HTML 和 XML 的应用程序接口（API）。
//         BOM 主要处理浏览器窗口和框架，不过通常浏览器特定的 JavaScript 扩展都被看做 BOM 的一部分。这些扩展包括：
//             弹出新的浏览器窗口 移动、关闭浏览器窗口以及调整窗口大小 提供 Web 浏览器详细信息的定位对象 提供用户屏幕分辨率详细信息的屏幕对象 对 cookie 的支持 IE 扩展了 BOM，加入了 ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象javacsript是通过访问BOM（Browser Object Model）对象来访问、控制、修改客户端(浏览器)，由于BOM的window包含了document，window对象的属性和方法是直接可以使用而且被感知的，因此可以直接使用window对象的document属性，通过document属性就可以访问、检索、修改XHTML文档内容与结构。因为document对象又是DOM（Document Object Model）模型的根节点。可以说，BOM包含了DOM(对象)，浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。其中
//         DOM包含：window

//     Window对象包含属性：document、location、navigator、screen、history、frames Document根节点包含子节点：forms、location、anchors、images、links
//     从window.document已然可以看出，DOM的最根本的对象是BOM的window对象的子对象 区别：DOM描述了处理网页内容的方法和接口，BOM描述了与浏览器进行交互的方法和接口。

// 5、设计模式：发布订阅、观察者、双向绑定、防抖和节流
// 双向数据绑定：上代码 Object对象的defineProperty属性，重写data的set和get函数来实现的
    
//     var inputValue = {};
//     Object.defineProperty(inputValue, 'inputValue', {
//         configurable: ture, // 可配置
//         get: function() {
//             return document.getElementById('input').value;
//         },
//         set: function(val) {    
//             document.getElementById('input').value = val;
//             document.getElementById('test').value = val;
//         }
//     })

//     document.getElementById('input').addEventListener("keyup", function() {
//         document.getElementById("test").innerHtML= inputValue['inputValue']
//     })

// 防抖: 防抖debounce代码：
//     function debounce(fn, wait = 50) {
//         let timer = null;
//         return function(...args) {
//             if (timer) clearTimeout(timer);
//             timer = setTimeout(() => {
//                 fn.apply(this,args)
//             }, wait)
//         }
//     }

//     const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000)
//     document.addEventListener('scroll', betterFn)
//     // --------------------//
//     let time2;
//     function debounce() {
//         clearTimeout(time2)
//         time2=setTimeout(() => {
//             // 事件
//         }, 2000)
//     }


// 节流： 节流throttle代码（定时器）：
//     var throttle = function(func, delay) {
//         var timer = null;
//         return function() {
//             var context = this;
//             var args = arguments;
//             if (!timer) {
//                 timer = setTimeout(function() {
//                     func.apply(context, args);
//                     timer = null;
//                 }, delay);
//             }
//         }
//     }
//     function handle() {
//         console.log(Math.random());
//     }
//     window.addEventListener('scroll', throttle(handle, 1000));
//     // -------------------- //
//     let bool = true;
//     if (bool) {
//         bool = false;
//         setTimeout(() => {
//             boo=true;
//         }, 2000)
//     }

//     防抖：你狂点按钮也没有，等你冷静下来事件才会触发。
//     节流：游戏里面的技能冷却功能。

//     函数防抖：将几次操作合并为一此操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。
//     函数节流：使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。
//     区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。

// 发布订阅: 
//     var Obj = {
//         list: [],
//         listen: function(fn) {
//             this.list.push(fn)
//         },
//         tigger: function() {
//             for (var i = 0, fn = this.list[i++];) {
//                 fn.apply(this, arguments)
//             }
//         }
//     } 
//     Obj.listen((color, size)=> {
//         console.log(color);
//         console.log(size);
//     })

//     Obj.trigger("红色",'40')

    