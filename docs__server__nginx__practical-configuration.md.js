(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93],{QUjH:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),o=t("ZpkN");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5b9e\u7528\u914d\u7f6e"},l.a.createElement(c["AnchorLink"],{to:"#\u5b9e\u7528\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5b9e\u7528\u914d\u7f6e"),l.a.createElement("h2",{id:"\u8bbf\u95ee\u9650\u5236"},l.a.createElement(c["AnchorLink"],{to:"#\u8bbf\u95ee\u9650\u5236","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u8bbf\u95ee\u9650\u5236"),l.a.createElement("p",null,l.a.createElement("code",null,"deny")," \u548c ",l.a.createElement("code",null,"allow")," \u662f ",l.a.createElement("code",null,"ngx_http_access_module")," \u6a21\u5757\u4e2d\u7684\u8bed\u6cd5\u3002\u5728\u5b9e\u9645\u751f\u4ea7\u4e2d\uff0c\u7ecf\u5e38\u548c ",l.a.createElement("code",null,"ngx_http_geo_module")," \u6a21\u5757\u914d\u5408\u4f7f\u7528\u3002"),l.a.createElement(o["a"],{code:"location / {\n    # \u7981\u6b62\u8bbf\u95ee\n    deny  192.168.1.100;\n    # \u5141\u8bb8 IP \u6bb5\u8bbf\u95ee\uff08\u5df2\u6392\u9664 100\uff09\n    allow 192.168.1.10/200;\n    # \u5141\u8bb8\u8be5\u5355\u72ec IP \u8bbf\u95ee\n    allow 10.110.50.16;\n    # \u5269\u4e0b\u672a\u5339\u914d\u5230\u7684\u5168\u90e8\u7981\u6b62\u8bbf\u95ee\n    deny  all;\n}\n",lang:"nginx"}),l.a.createElement("h2",{id:"\u5408\u5e76\u8bf7\u6c42"},l.a.createElement(c["AnchorLink"],{to:"#\u5408\u5e76\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5408\u5e76\u8bf7\u6c42"),l.a.createElement("p",null,"\u901a\u8fc7 ",l.a.createElement("code",null,"nginx-http-concat")," \u6a21\u5757\uff08\u6dd8\u5b9d\u5f00\u53d1\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u9700\u5355\u72ec\u5b89\u88c5\uff09\u7528\u4e00\u79cd\u7279\u6b8a\u7684\u8bf7\u6c42 URL \u89c4\u5219\uff08\u4f8b\u5982\uff1a",l.a.createElement("code",null,"https://www.example.com/??a.js,b.js,c.js"),"\uff09\uff0c\u524d\u7aef\u53ef\u5c06\u591a\u4e2a\u8d44\u6e90\u8bf7\u6c42\u5408\u5e76\u6210\u4e00\u4e2a\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef Nginx \u4f1a\u83b7\u53d6\u5404\u4e2a\u8d44\u6e90\u5e76\u62fc\u63a5\u6210\u4e00\u4e2a\u7ed3\u679c\u8fdb\u884c\u8fd4\u56de\u3002"),l.a.createElement(o["a"],{code:"# JavaScript \u8d44\u6e90 http-concat\n# nginx-http-concat \u6a21\u5757\u7684\u53c2\u6570\u8fdc\u4e0d\u6b62\u4e0b\u9762\u4e09\u4e2a\uff0c\u5269\u4e0b\u7684\u8bf7\u67e5\u9605\u6587\u6863\nlocation /static/js/ {\n    # \u662f\u5426\u6253\u5f00\u8d44\u6e90\u5408\u5e76\u5f00\u5173\n    concat on;\n    # \u5141\u8bb8\u5408\u5e76\u7684\u8d44\u6e90\u7c7b\u578b\n    concat_types application/javascript;\n    # \u662f\u5426\u5141\u8bb8\u5408\u5e76\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\n    concat_unique off;\n    # \u5141\u8bb8\u5408\u5e76\u7684\u6700\u5927\u8d44\u6e90\u6570\u76ee\n    concat_max_files 5;\n}\n",lang:"nginx"}),l.a.createElement("h2",{id:"\u9875\u9762\u5185\u5bb9\u4fee\u6539"},l.a.createElement(c["AnchorLink"],{to:"#\u9875\u9762\u5185\u5bb9\u4fee\u6539","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u9875\u9762\u5185\u5bb9\u4fee\u6539"),l.a.createElement("p",null,"Nginx \u53ef\u4ee5\u901a\u8fc7\u5411\u9875\u9762\u5e95\u90e8\u6216\u8005\u9876\u90e8\u63d2\u5165\u989d\u5916\u7684 CSS \u548c JS \u6587\u4ef6\uff0c\u4ece\u800c\u5b9e\u73b0\u4fee\u6539\u9875\u9762\u5185\u5bb9\u3002\u8fd9\u4e2a\u529f\u80fd\u9700\u8981\u989d\u5916\u6a21\u5757\u7684\u652f\u6301\uff0c\u4f8b\u5982\uff1a",l.a.createElement("code",null,"nginx_http_footer_filter")," \u6216\u8005 ",l.a.createElement("code",null,"ngx_http_addition_module")," (\u90fd\u9700\u8981\u5b89\u88c5)\u3002"),l.a.createElement("p",null,"\u5de5\u4f5c\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u5207\u6362\u5404\u79cd\u6d4b\u8bd5\u73af\u5883\uff0c\u800c\u901a\u8fc7 ",l.a.createElement("code",null,"switchhosts")," \u7b49\u5de5\u5177\u5207\u6362\u540e\uff0c\u6709\u65f6\u8fd8\u9700\u8981\u6e05\u7406\u6d4f\u89c8\u5668 DNS \u7f13\u5b58\u3002\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"\u9875\u9762\u5185\u5bb9\u4fee\u6539 + Nginx \u53cd\u5411\u4ee3\u7406")," \u6765\u5b9e\u73b0\u8f7b\u677e\u5feb\u6377\u7684\u73af\u5883\u5207\u6362\u3002"),l.a.createElement("p",null,"\u8fd9\u91cc\u9996\u5148\u5728\u672c\u5730\u7f16\u5199\u4e00\u6bb5 JavaScript \u4ee3\u7801\uff08",l.a.createElement("code",null,"switchhost.js"),"\uff09\uff0c\u91cc\u9762\u7684\u903b\u8f91\u662f\uff1a\u5728\u9875\u9762\u63d2\u5165 hosts \u5207\u6362\u83dc\u5355\u4ee5\u53ca\u70b9\u51fb\u5177\u4f53\u67d0\u4e2a\u73af\u5883\u65f6\uff0c\u5c06\u8be5 ",l.a.createElement("code",null,"host")," \u7684 IP \u548c ",l.a.createElement("code",null,"hostname")," \u50a8\u5b58\u5728 Cookie \u4e2d\uff0c\u6700\u540e\u5237\u65b0\u9875\u9762\uff1b\u63a5\u7740\u7f16\u5199\u4e00\u6bb5 CSS \u4ee3\u7801\uff08",l.a.createElement("code",null,"switchhost.css"),"\uff09\u7528\u6765\u8bbe\u7f6e\u8be5 ",l.a.createElement("code",null,"hosts")," \u5207\u6362\u83dc\u5355\u7684\u6837\u5f0f\u3002"),l.a.createElement("p",null,"\u7136\u540e Nginx \u811a\u672c\u914d\u7f6e\uff1a"),l.a.createElement(o["a"],{code:"server {\n    listen 80;\n    listen  443 ssl;\n    expires -1;\n\n    # \u60f3\u8981\u4ee3\u7406\u7684\u57df\u540d\n    server_name m-element.kaola.com;\n    set $root /Users/cc/Desktop/server;\n    charset utf-8;\n    ssl_certificate      /usr/local/etc/nginx/m-element.kaola.com.crt;\n    ssl_certificate_key  /usr/local/etc/nginx/m-element.kaola.com.key;\n\n    # \u8bbe\u7f6e\u9ed8\u8ba4 $switch_host\uff0c\u4e00\u822c\u9ed8\u8ba4\u4e3a\u7ebf\u4e0a host\uff0c\u8fd9\u91cc\u7684 1.1.1.1 \u968f\u4fbf\u5199\u7684\n    set $switch_host '1.1.1.1';\n    # \u8bbe\u7f6e\u9ed8\u8ba4 $switch_hostname\uff0c\u4e00\u822c\u9ed8\u8ba4\u4e3a\u7ebf\u4e0a 'online'\n    set $switch_hostname '';\n\n    # \u4ece Cookie \u4e2d\u83b7\u53d6\u73af\u5883 IP\n    if ($http_cookie ~* \"switch_host=(.+?)(?=;|$)\") {\n        set $switch_host $1;\n    }\n\n    # \u4ece Cookie \u4e2d\u83b7\u53d6\u73af\u5883\u540d\n    if ($http_cookie ~* \"switch_hostname=(.+?)(?=;|$)\") {\n        set $switch_hostname $1;\n    }\n\n    location / {\n        expires -1;\n        index index.html;\n        proxy_set_header Host $host;\n        # \u628a HTML \u9875\u9762\u7684 gzip \u538b\u7f29\u53bb\u6389\uff0c\u4e0d\u7136 sub_filter \u65e0\u6cd5\u66ff\u6362\u5185\u5bb9\n        proxy_set_header Accept-Encoding '';\n        # \u53cd\u5411\u4ee3\u7406\u5230\u5b9e\u9645\u670d\u52a1\u5668 IP\n        proxy_pass  http://$switch_host:80;\n        # \u5168\u90e8\u66ff\u6362\n        sub_filter_once off;\n        # ngx_http_addition_module \u6a21\u5757\u66ff\u6362\u5185\u5bb9\u3002\n        # \u8fd9\u91cc\u5728\u5934\u90e8\u63d2\u5165\u4e00\u6bb5 CSS\uff0c\u5185\u5bb9\u662f hosts \u5207\u6362\u83dc\u5355\u7684 CSS \u6837\u5f0f\n        sub_filter '</head>' '</head><link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"/local/switchhost.css\" />';\n        # \u5c06\u9875\u9762\u4e2d\u7684'\u7f51\u6613\u8003\u62c9'\u6587\u5b57\u540e\u9762\u52a0\u4e0a\u73af\u5883\u540d\uff0c\u4fbf\u4e8e\u5f00\u53d1\u8bc6\u522b\u76ee\u524d\u73af\u5883\n        sub_filter '\u7f51\u6613\u8003\u62c9' '\u7f51\u6613\u8003\u62c9:${switch_hostname}';\n        # \u8fd9\u91cc\u7528\u4e86\u53e6\u4e00\u4e2a\u6a21\u5757nginx_http_footer_filter\uff0c\u5176\u5b9e\u4e0a\u9762\u7684\u6a21\u5757\u5c31\u884c\uff0c\u53ea\u662f\u4e3a\u4e86\u5c55\u793a\u7528\u6cd5\n        # \u6700\u540e\u63d2\u5165\u4e00\u6bb5js\uff0c\u5185\u5bb9\u662fhosts\u5207\u6362\u83dc\u5355\u7684js\u903b\u8f91\n        set $injected '<script language=\"javascript\" src=\"/local/switchhost.js\"><\/script>';\n        footer '${injected}';\n    }\n\n    # \u5bf9\u4e8e/local/\u8bf7\u6c42\uff0c\u4f18\u5148\u5339\u914d\u672c\u5730\u6587\u4ef6\n    # \u6240\u4ee5\u4e0a\u9762\u7684/local/switchhost.css\uff0c/local/switchhost.js\u4f1a\u4ece\u672c\u5730\u83b7\u53d6\n    location ^~ /local/ {\n        root $root;\n    }\n}\n\n",lang:"nginx"}),l.a.createElement("h2",{id:"\u6301\u4e45\u8fde\u63a5"},l.a.createElement(c["AnchorLink"],{to:"#\u6301\u4e45\u8fde\u63a5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u6301\u4e45\u8fde\u63a5"),l.a.createElement("p",null,"HTTP \u8fd0\u884c\u5728 TCP \u8fde\u63a5\u4e4b\u4e0a\uff0c\u81ea\u7136\u4e5f\u6709\u7740\u8ddf TCP \u4e00\u6837\u7684\u4e09\u6b21\u63e1\u624b\u3001\u6162\u542f\u52a8\u7b49\u7279\u6027\u3002"),l.a.createElement("p",null,"\u542f\u7528\u6301\u4e45\u8fde\u63a5\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5668\u53d1\u51fa\u54cd\u5e94\u540e\u8ba9 TCP \u8fde\u63a5\u7ee7\u7eed\u6253\u5f00\u7740\u3002\u540c\u4e00\u5bf9\u5ba2\u6237/\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u540e\u7eed\u8bf7\u6c42\u548c\u54cd\u5e94\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u8fde\u63a5\u53d1\u9001\u3002"),l.a.createElement("p",null,"\u4e3a\u4e86\u5c3d\u53ef\u80fd\u7684\u63d0\u9ad8 HTTP \u6027\u80fd\uff0c\u4f7f\u7528\u6301\u4e45\u8fde\u63a5\u5c31\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u4e86\u3002"),l.a.createElement("p",null,"HTTP/1.1 \u9ed8\u8ba4\u652f\u6301 TCP \u6301\u4e45\u8fde\u63a5\uff0cHTTP/1.0 \u4e5f\u53ef\u4ee5\u901a\u8fc7\u663e\u5f0f\u6307\u5b9a Connection: keep-alive \u6765\u542f\u7528\u6301\u4e45\u8fde\u63a5\u3002\u5bf9\u4e8e TCP \u6301\u4e45\u8fde\u63a5\u4e0a\u7684 HTTP \u62a5\u6587\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u4e00\u79cd\u673a\u5236\u6765\u51c6\u786e\u5224\u65ad\u7ed3\u675f\u4f4d\u7f6e\uff0c\u800c\u5728 HTTP/1.0 \u4e2d\uff0c\u8fd9\u79cd\u673a\u5236\u53ea\u6709 Content-Length\u3002\u800c\u5728 HTTP/1.1 \u4e2d\u65b0\u589e\u7684 Transfer-Encoding: chunked \u6240\u5bf9\u5e94\u7684\u5206\u5757\u4f20\u8f93\u673a\u5236\u53ef\u4ee5\u5b8c\u7f8e\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\u3002"),l.a.createElement("p",null,"nginx \u540c\u6837\u6709\u7740\u914d\u7f6e chunked \u7684\u5c5e\u6027 chunked_transfer_encoding\uff0c\u8fd9\u4e2a\u5c5e\u6027\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\u3002"),l.a.createElement("p",null,"Nginx \u5728\u542f\u7528\u4e86 GZip \u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u4f1a\u7b49\u6587\u4ef6 GZip \u5b8c\u6210\u518d\u8fd4\u56de\u54cd\u5e94\uff0c\u800c\u662f\u8fb9\u538b\u7f29\u8fb9\u54cd\u5e94\uff0c\u8fd9\u6837\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8 TTFB(Time To First Byte\uff0c\u9996\u5b57\u8282\u65f6\u95f4\uff0cWEB \u6027\u80fd\u4f18\u5316\u91cd\u8981\u6307\u6807)\u3002\u8fd9\u6837\u552f\u4e00\u7684\u95ee\u9898\u662f\uff0cNginx \u5f00\u59cb\u8fd4\u56de\u54cd\u5e94\u65f6\uff0c\u5b83\u65e0\u6cd5\u77e5\u9053\u5c06\u8981\u4f20\u8f93\u7684\u6587\u4ef6\u6700\u7ec8\u6709\u591a\u5927\uff0c\u4e5f\u5c31\u662f\u65e0\u6cd5\u7ed9\u51fa Content-Length \u8fd9\u4e2a\u54cd\u5e94\u5934\u90e8\u3002"),l.a.createElement("p",null,"\u6240\u4ee5\uff0c\u5728 HTTP1.0 \u4e2d\u5982\u679c\u5229\u7528 Nginx \u542f\u7528\u4e86 GZip\uff0c\u662f\u65e0\u6cd5\u83b7\u5f97 Content-Length \u7684\uff0c\u8fd9\u5bfc\u81f4 HTTP1.0 \u4e2d\u5f00\u542f\u6301\u4e45\u94fe\u63a5\u548c\u4f7f\u7528 GZip \u53ea\u80fd\u4e8c\u9009\u4e00\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc gzip_http_version \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a 1.1\u3002"),l.a.createElement("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},l.a.createElement(c["AnchorLink"],{to:"#\u5176\u4ed6\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5176\u4ed6\u914d\u7f6e"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://www.cnblogs.com/hiit/p/8568480.html"},"Nginx \u51fa\u73b0 500 Internal Server Error \u9519\u8bef\u7684\u89e3\u51b3\u65b9\u6848")),l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://www.jianshu.com/p/61dc693a51f1"},"Nginx: Stat() failed(13: permission denied)")),l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://blog.csdn.net/zhaoxiace/article/details/86146797"},"Nginx 405 not allowed \u6700\u7b80\u5355\u5feb\u901f\u89e3\u51b3\u65b9\u6cd5"))),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://juejin.im/post/5bacbd395188255c8d0fd4b2"},"Nginx \u4e0e\u524d\u7aef\u5f00\u53d1")))))}}}]);