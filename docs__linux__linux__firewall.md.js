(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"DtJ/":function(e,l,n){"use strict";n.r(l);var a=n("q1tI"),t=n.n(a),r=n("dEAq"),c=n("ZpkN");l["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u9632\u706b\u5899"},t.a.createElement(r["AnchorLink"],{to:"#\u9632\u706b\u5899","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u9632\u706b\u5899"),t.a.createElement("h2",{id:"\u6dfb\u52a0\u7aef\u53e3\u5230\u9632\u706b\u5899"},t.a.createElement(r["AnchorLink"],{to:"#\u6dfb\u52a0\u7aef\u53e3\u5230\u9632\u706b\u5899","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u6dfb\u52a0\u7aef\u53e3\u5230\u9632\u706b\u5899"),t.a.createElement(c["a"],{code:"firewall-cmd --zone=public --add-port=\u4f60\u7684\u7aef\u53e3/tcp permanet\nsystemctl restart firewalld.service\n",lang:"bash"}),t.a.createElement("h3",{id:"\u57fa\u672c\u64cd\u4f5c"},t.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u57fa\u672c\u64cd\u4f5c"),t.a.createElement("p",null,"3.\u914d\u7f6e firewalld-cmd"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u67e5\u770b\u7248\u672c\uff1a firewall-cmd --version"),t.a.createElement("li",null,"\u67e5\u770b\u5e2e\u52a9\uff1a firewall-cmd --help"),t.a.createElement("li",null,"\u663e\u793a\u72b6\u6001\uff1a firewall-cmd --state"),t.a.createElement("li",null,"\u67e5\u770b\u6240\u6709\u6253\u5f00\u7684\u7aef\u53e3\uff1a firewall-cmd --zone=public --list-ports"),t.a.createElement("li",null,"\u66f4\u65b0\u9632\u706b\u5899\u89c4\u5219\uff1a firewall-cmd --reload"),t.a.createElement("li",null,"\u67e5\u770b\u533a\u57df\u4fe1\u606f: firewall-cmd --get-active-zones"),t.a.createElement("li",null,"\u67e5\u770b\u6307\u5b9a\u63a5\u53e3\u6240\u5c5e\u533a\u57df\uff1a firewall-cmd --get-zone-of-interface=eth0"),t.a.createElement("li",null,"\u62d2\u7edd\u6240\u6709\u5305\uff1afirewall-cmd --panic-on"),t.a.createElement("li",null,"\u53d6\u6d88\u62d2\u7edd\u72b6\u6001\uff1a firewall-cmd --panic-off"),t.a.createElement("li",null,"\u67e5\u770b\u662f\u5426\u62d2\u7edd\uff1a firewall-cmd --query-panic")),t.a.createElement("p",null,"\u5f00\u542f\u7aef\u53e3"),t.a.createElement(c["a"],{code:"# \u6dfb\u52a0\nfirewall-cmd --zone=public --add-port=80/tcp --permanent \uff08--permanent \u6c38\u4e45\u751f\u6548\uff0c\u6ca1\u6709\u6b64\u53c2\u6570\u91cd\u542f\u540e\u5931\u6548\uff09\n\n# \u91cd\u65b0\u8f7d\u5165\nfirewall-cmd --reload\n\n# \u67e5\u770b\nfirewall-cmd --zone= public --query-port=80/tcp\n\n# \u5220\u9664\nfirewall-cmd --zone= public --remove-port=80/tcp --permanent\n",lang:"bash"}),t.a.createElement("h2",{id:"\u8bbe\u7f6e\u7aef\u53e3"},t.a.createElement(r["AnchorLink"],{to:"#\u8bbe\u7f6e\u7aef\u53e3","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u8bbe\u7f6e\u7aef\u53e3"),t.a.createElement("p",null,"Ali \u963f\u91cc\u4e91\u6709\u9632\u706b\u5899"),t.a.createElement("p",null,"\u5f00\u653e\u65b0\u7aef\u53e3"),t.a.createElement("ol",null,t.a.createElement("li",null,"\u5b9e\u4f8b\u5b89\u5168\u7ec4\u6dfb\u52a0\u7aef\u53e3"),t.a.createElement("li",null,"\u670d\u52a1\u5668\u6dfb\u52a0\u65b0\u7aef\u53e3\u5230\u9632\u706b\u5899\u914d\u7f6e\u4e2d")),t.a.createElement(c["a"],{code:"# \u5bf9\u5916\u5f00\u653e\u7aef\u53e3\nfirewall-cmd --permanent --add-port=8080-8085/tcp\n\n# \u91cd\u8f7d\u7aef\u53e3\nfirewall-cmd --reload\n\n# \u5220\u9664\u7aef\u53e3\nfirewall-cmd --permanent --remove-port=8080-8085/tcp\n\n# \u67e5\u770b\u9632\u706b\u5899\u5f00\u653e\u7aef\u53e3\nfirewall-cmd --permanent --list-ports\n\n# \u67e5\u770b\u4f7f\u7528\u4e92\u8054\u7f51\u7684\u670d\u52a1\nfirewall-cmd --permanent --list-services\n",lang:"bash"}),t.a.createElement("hr",null),t.a.createElement("p",null,t.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(r["Link"],{to:"http://www.zsythink.net/archives/1199/"},"iptables \u8be6\u89e3")),t.a.createElement("li",null,t.a.createElement(r["Link"],{to:"https://blog.csdn.net/chenshiai/article/details/53639167"},"Linux (centos7) \u9632\u706b\u5899\u547d\u4ee4")))))}}}]);