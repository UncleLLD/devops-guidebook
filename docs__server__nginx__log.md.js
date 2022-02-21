(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116],{ogMZ:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("ZpkN");t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8bbf\u95ee\u65e5\u5fd7"},n.a.createElement(r["AnchorLink"],{to:"#\u8bbf\u95ee\u65e5\u5fd7","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:["icon","icon-link"]})),"\u8bbf\u95ee\u65e5\u5fd7"),n.a.createElement("p",null,"Nginx \u4e2d\u7684\u65e5\u5fd7\u7c7b\u578b\u5305\u62ec\uff1a"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"access.log"),"\uff1a\u8bb0\u5f55 Nginx \u5904\u7406\u7684\u8bf7\u6c42\u7684\u8fc7\u7a0b\uff0c\u5305\u542b\u8bf7\u6c42\u7c7b\u578b\u3001\u65f6\u95f4\u3001\u5ba2\u6237\u7aef\u4fe1\u606f\u3001\u5904\u7406\u7ed3\u679c\u3001\u5904\u7406\u65f6\u957f\u7b49\u4fe1\u606f\uff0c\u5177\u4f53\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"log_format")," \u6307\u4ee4\u5f15\u7528\u7279\u5b9a\u53d8\u91cf\u6765\u8bb0\u5f55\u76f8\u5173\u4fe1\u606f\u3002"),n.a.createElement("li",null,n.a.createElement("code",null,"error.log"),"\uff1a\u8bb0\u5f55 Nginx \u8fdb\u7a0b\u542f\u52a8\u3001\u505c\u6b62\u3001\u91cd\u542f\u53ca\u5904\u7406\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u53d1\u751f\u7684\u9519\u8bef\u4fe1\u606f\u3002"),n.a.createElement("li",null,n.a.createElement("code",null,"rewrite.log"),"\uff1a\u8bb0\u5f55 rewrite \u89c4\u5219\u5de5\u4f5c\u7684\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u7528\u4e8e\u8c03\u8bd5 rewrite \u89c4\u5219")),n.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u56de\u81ea\u52a8\u8bb0\u5f55 access \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u5b58\u653e\u8def\u5f84\u4e3a ",n.a.createElement("code",null,"/usr/local/nginx/logs/access.log"),"\u3002"),n.a.createElement("p",null,"Nginx \u63d0\u4f9b\u4e86 ",n.a.createElement("code",null,"log_format")," \u6307\u4ee4\u7528\u4e8e\u81ea\u5b9a\u4e49 access \u65e5\u5fd7\u7684\u683c\u5f0f\uff0c\u5b83\u7edf\u4e00\u5728 HTTP \u5c42\u7ea7\u8fdb\u884c\u914d\u7f6e\u3002"),n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"log_format")," \u53ef\u4f7f\u7528\u7684\u53d8\u91cf\uff1a")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{align:"left"},"\u53d8\u91cf\u540d"),n.a.createElement("th",{align:"left"},"\u8bf4\u660e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$remote_addr")),n.a.createElement("td",{align:"left"},"\u8bb0\u5f55\u5ba2\u6237\u7aef IP \u5730\u5740")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$http_x_forwarded_for")),n.a.createElement("td",{align:"left"},"\u5f53 Nginx \u5904\u4e8e\u8d1f\u8f7d\u5747\u8861\u5668\u3001Squid\u3001\u53cd\u5411\u4ee3\u7406\u4e4b\u540e\u65f6\uff0c\u9700\u8981\u8fd9\u4e2a\u5b57\u6bb5\u624d\u80fd\u8bb0\u5f55\u7528\u6237\u7684\u5b9e\u9645 IP \u5730\u5740")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$remote_user")),n.a.createElement("td",{align:"left"},"\u8bb0\u5f55\u5ba2\u6237\u7aef\u7528\u6237\u540d\u79f0\uff0c\u9488\u5bf9\u542f\u7528\u4e86\u7528\u6237\u8ba4\u8bc1\u7684\u8bf7\u6c42\u8fdb\u884c\u8bb0\u5f55")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$request")),n.a.createElement("td",{align:"left"},"\u8bb0\u5f55\u7528\u6237\u8bf7\u6c42\u7684 URL")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$status")),n.a.createElement("td",{align:"left"},"\u8bb0\u5f55\u8bf7\u6c42\u7ed3\u679c\u72b6\u6001\u7801")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$body_bytes_sent")),n.a.createElement("td",{align:"left"},"\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u7684\u5b57\u8282\u6570\uff0c\u4e0d\u5305\u62ec\u54cd\u5e94\u5934\u7684\u5927\u5c0f")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$bytes_sent")),n.a.createElement("td",{align:"left"},"\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u7684\u5b57\u8282\u6570\uff0c\u4e0d\u5305\u62ec\u54cd\u5e94\u5934\u7684\u5927\u5c0f")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$connection")),n.a.createElement("td",{align:"left"},"\u8fde\u63a5\u7684\u5e8f\u5217\u53f7")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$msec")),n.a.createElement("td",{align:"left"},"\u65e5\u5fd7\u5199\u5165\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u7cbe\u5ea6\u4e3a\u6beb\u79d2")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$pipe")),n.a.createElement("td",{align:"left"},"\u5982\u679c\u8bf7\u6c42\u662f\u901a\u8fc7 HTTP \u6d41\u6c34\u7ebf\u53d1\u9001\uff0c\u5219\u5176\u503c\u4e3a i ",n.a.createElement("code",null,"p"),"\uff0c\u5426\u5219\u4e3a ",n.a.createElement("code",null,"."))),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$http_referer")),n.a.createElement("td",{align:"left"},"\u8bb0\u5f55\u4ece\u54ea\u4e2a\u9875\u9762\u94fe\u63a5\u8fc7\u6765\u7684")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$http_user_agent")),n.a.createElement("td",{align:"left"},"\u8bb0\u5f55\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u76f8\u5173\u4fe1\u606f")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$request_length")),n.a.createElement("td",{align:"left"},"\u8bf7\u6c42\u7684\u957f\u5ea6\uff08\u5305\u62ec\u8bf7\u6c42\u884c\u3001\u8bf7\u6c42\u5934\u548c\u4e3b\u4f53\uff09")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$request_time")),n.a.createElement("td",{align:"left"},"\u8bf7\u6c42\u5904\u7406\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u7cbe\u5ea6\u4e3a\u6beb\u79d2\uff0c\u4ece\u8bfb\u5165\u5ba2\u6237\u7aef\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u5f00\u59cb\uff0c\u77e5\u9053\u628a\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u8fdb\u884c\u65e5\u5fd7\u5199\u5165\u4e3a\u6b62")),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$time_iso8601")),n.a.createElement("td",{align:"left"},"\u6807\u51c6\u683c\u5f0f\u4e0b\u7684\u672c\u5730\u65f6\u95f4 ",n.a.createElement("code",null,"2017-05-24T18:31:27+0800"))),n.a.createElement("tr",null,n.a.createElement("td",{align:"left"},n.a.createElement("code",null,"$time_local")),n.a.createElement("td",{align:"left"},"\u901a\u8fc7\u65e5\u5fd7\u683c\u5f0f\u4e0b\u7684\u672c\u5730\u65f6\u95f4\uff0c\u5f62\u5982 ",n.a.createElement("code",null,"24/May/2017:18:31:27 +0800"))))),n.a.createElement("p",null,"\u5e38\u89c1\u914d\u7f6e\uff1a"),n.a.createElement(c["a"],{code:"# \u8bbf\u95ee\u65e5\u5fd7\n# access_log [\u5b58\u50a8\u8def\u5f84] [buff=\u5927\u5c0f] [gzip=\u538b\u7f29\u7ea7\u522b] [flush=time \u5237\u65b0\u65f6\u95f4]\nacess_log /user/local/nginx/logs/access.log buffer=64k flush=1m;\n\nlog_format combined    '$remote_addr - $remote_user [$time_local]'\n                                         ' \"$request\"  $status   $body_bytes_sent '\n                                         ' \"$http_referer\"    \"$http_user_agent\" ';\n\n# \u8bbe\u7f6e\u65e5\u5fd7\u6587\u4ef6\u7f13\u5b58\nopen_log_file_cache max=1000 inactive=20s min_uses=1 valid=60s;\n\n# \u662f\u5426\u5c06 not found \u9519\u8bef\u8bb0\u5f55\u5728 error_log \u4e2d\nlog_not_found on;\n\n# \u5728 access_log \u5728\u8bb0\u5f55\u5b50\u8bf7\u6c42\u7684\u8bbf\u95ee\u65e5\u5fd7\nlog_subrequest off;\n\n# \u8bb0\u5f55\u91cd\u5199\u65e5\u5fd7\uff0c\u9ed8\u8ba4\u5173\u95ed\uff0c\u5f00\u542f\u540e\u8bb0\u5f55\u5728 error_log\nrewrite_log logs/rewrite.log on;\n\n# \u8bb0\u5f55\u9519\u8bef\u65e5\u5fd7\nerror_log logs/error.log error;\n",lang:"nginx"}),n.a.createElement("h2",{id:"\u65e5\u5fd7\u6316\u6398"},n.a.createElement(r["AnchorLink"],{to:"#\u65e5\u5fd7\u6316\u6398","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:["icon","icon-link"]})),"\u65e5\u5fd7\u6316\u6398"),n.a.createElement("h2",{id:"\u6570\u636e\u7edf\u8ba1"},n.a.createElement(r["AnchorLink"],{to:"#\u6570\u636e\u7edf\u8ba1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:["icon","icon-link"]})),"\u6570\u636e\u7edf\u8ba1"),n.a.createElement("h2",{id:"\u65e5\u5fd7\u5207\u5272"},n.a.createElement(r["AnchorLink"],{to:"#\u65e5\u5fd7\u5207\u5272","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:["icon","icon-link"]})),"\u65e5\u5fd7\u5207\u5272"),n.a.createElement("h2",{id:"\u53c2\u8003\u8d44\u6599"},n.a.createElement(r["AnchorLink"],{to:"#\u53c2\u8003\u8d44\u6599","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:["icon","icon-link"]})),"\u53c2\u8003\u8d44\u6599"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r["Link"],{to:"https://wylong.top/nginx/06-nginx%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E6%8C%96%E6%8E%98accessLog%E6%97%A5%E5%BF%97.html"},"\ud83d\udcdd Nginx \u7ecf\u5178\u6848\u4f8b\u6316\u6398 accessLog \u65e5\u5fd7")))))}}}]);