(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{WSwf:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),c=a("dEAq"),o=a("ZpkN");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u7ed3\u6784\u5316\u547d\u4ee4"},t.a.createElement(c["AnchorLink"],{to:"#\u7ed3\u6784\u5316\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u7ed3\u6784\u5316\u547d\u4ee4"),t.a.createElement("h2",{id:"if-else"},t.a.createElement(c["AnchorLink"],{to:"#if-else","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"if else"),t.a.createElement(o["a"],{code:"if condition\nthen\n  statements(s)\nfi\n",lang:"bash"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"condition")," \u662f\u5224\u65ad\u6761\u4ef6",t.a.createElement("ul",null,t.a.createElement("li",null,"\u5982\u679c condition \u6210\u7acb\uff08\u8fd4\u56de ",t.a.createElement("code",null,"true"),"\uff09\uff0c\u90a3\u4e48 ",t.a.createElement("code",null,"then")," \u540e\u8fb9\u7684\u8bed\u53e5\u5c06\u4f1a\u88ab\u6267\u884c"),t.a.createElement("li",null,"\u5982\u679c condition \u4e0d\u6210\u7acb\uff08\u8fd4\u56de ",t.a.createElement("code",null,"false"),"\uff09\uff0c\u90a3\u4e48\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u8bed\u53e5")))),t.a.createElement("p",null,"\u6ce8\u610f\uff0c\u6700\u540e\u5fc5\u987b\u4ee5 ",t.a.createElement("code",null,"fi")," \u6765\u95ed\u5408\uff0c",t.a.createElement("code",null,"fi")," \u5c31\u662f ",t.a.createElement("code",null,"if")," \u5012\u8fc7\u6765\u5199\u3002\u4e5f\u6b63\u5f0f\u6709\u4e86 ",t.a.createElement("code",null,"fi")," \u6765\u7ed3\u5c3e\uff0c\u6240\u4ee5\u5373\u4f7f\u6709\u795e\u8c03\u8bed\u53e5\u4e5f\u4e0d\u9700\u8981\u7528 ",t.a.createElement("code",null,"{","}")," \u5305\u56f4\u8d77\u6765\u3002"),t.a.createElement("h3",{id:"if-else-\u8bed\u53e5"},t.a.createElement(c["AnchorLink"],{to:"#if-else-\u8bed\u53e5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"if else \u8bed\u53e5"),t.a.createElement(o["a"],{code:'#!/bin/bash\n\nread a\nread b\n\nif (($a == $b))\nthen\n  echo "a \u548c b \u76f8\u7b49"\nelse\n  echo "a \u548c b \u4e0d\u60f3\u7b49\uff0c\u8f93\u5165\u9519\u8bef"\nfi\n',lang:"bash"}),t.a.createElement("h3",{id:"if-elif-else-\u8bed\u53e5"},t.a.createElement(c["AnchorLink"],{to:"#if-elif-else-\u8bed\u53e5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"if elif else \u8bed\u53e5"),t.a.createElement(o["a"],{code:"if condition1\nthen\n  statement1\nelif condition2\nthen\n  statement2\nelif condition3\nthen\n  statement3\n...\nelse\n  statementN\nfi\n",lang:"bash"}),t.a.createElement("p",null,"\u26a0\ufe0f \u6ce8\u610f\uff0c",t.a.createElement("code",null,"if")," \u548c ",t.a.createElement("code",null,"elif")," \u540e\u8fb9\u90fd\u5f97\u8ddf\u7740 ",t.a.createElement("code",null,"then"),"\u3002"),t.a.createElement("h3",{id:"\u5d4c\u5957-if-\u8bed\u53e5"},t.a.createElement(c["AnchorLink"],{to:"#\u5d4c\u5957-if-\u8bed\u53e5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u5d4c\u5957 if \u8bed\u53e5"),t.a.createElement("p",null,t.a.createElement("code",null,"if")," \u6761\u4ef6\u6d4b\u8bd5\u4e2d\u53ef\u4ee5\u518d\u5d4c\u5957 ",t.a.createElement("code",null,"if")," \u6761\u4ef6\u6d4b\u8bd5"),t.a.createElement(o["a"],{code:"if [ \u6d4b\u8bd5\u6761\u4ef6\u6210\u7acb ]\nthen \u6267\u884c\u76f8\u5e94\u547d\u4ee4\n  if [ \u6d4b\u8bd5\u6761\u4ef6\u6210\u7acb ]\n  then \u6267\u884c\u76f8\u5e94\u547d\u4ee4\n  fi\nfi \u7ed3\u675f\n",lang:"bash"}),t.a.createElement("h2",{id:"case-in"},t.a.createElement(c["AnchorLink"],{to:"#case-in","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"case in"),t.a.createElement("p",null,"\u548c\u5176\u5b83\u7f16\u7a0b\u8bed\u8a00\u7c7b\u4f3c\uff0cShell \u4e5f\u652f\u6301\u4e24\u79cd\u5206\u652f\u7ed3\u6784\uff08\u9009\u62e9\u7ed3\u6784\uff09\uff0c\u5206\u522b\u662f if else \u8bed\u53e5\u548c case in \u8bed\u53e5\u3002"),t.a.createElement("p",null,"\u57fa\u672c\u683c\u5f0f\uff1a"),t.a.createElement(o["a"],{code:"case expression in\n  pattern1) statement1;;\n  pattern2) statement2;;\n  pattern3 | pattern4) statement3;;\n  *) default statement\nesac\n",lang:"bash"}),t.a.createElement("p",null,t.a.createElement("code",null,"case")," \u547d\u4ee4\u4f1a\u5c06\u6307\u5b9a\u7684\u53d8\u91cf\u4e0e\u4e0d\u540c\u6a21\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u53d8\u91cf\u548c\u6a21\u5f0f\u662f\u5339\u914d\u7684\uff0c\u90a3\u4e48 Shell \u4f1a\u6267\u884c\u8be5\u6a21\u5f0f\u6307\u5b9a\u7684\u547d\u4ee4\u3002\u53ef\u4ee5\u901a\u8fc7\u7ad6\u7ebf\u64cd\u4f5c\u7b26\u5728\u4e00\u884c\u4e2d\u5206\u9694\u51fa\u591a\u4e2a\u6a21\u5f0f\u3002\u661f\u53f7\u4f1a\u6355\u83b7\u6240\u6709\u4e0e\u5df2\u77e5\u6a21\u5f0f\u4e0d\u5339\u914d\u7684\u503c\u3002"),t.a.createElement("p",null,"\u793a\u4f8b\uff1a"),t.a.createElement(o["a"],{code:'$ cat case-in.sh\n#!/bin/bash\n# using the case command\n#\n\ncase $USER in\nrich | barbara)\n    echo "Welcom $USER"\n    echo "Please enjoy your visit";;\ntesting)\n    echo "Special testing account";;\njessica)\n    echo "Do not forget to log off when you\'re done";;\n*)\n    echo "Sorry, you are not allowed here";;\nesac\n\n$ ./case-in.sh\n',lang:"bash"}),t.a.createElement("h2",{id:"for"},t.a.createElement(c["AnchorLink"],{to:"#for","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"for"),t.a.createElement("p",null,t.a.createElement("code",null,"for")," \u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u904d\u5386\u7cfb\u5217\u503c\u7684\u5faa\u73af\u3002\u6bcf\u6b21\u8fed\u4ee3\u90fd\u662f\u7528\u5176\u4e2d\u4e00\u4e2a\u503c\u6765\u6267\u884c\u5df2\u5b9a\u4e49\u597d\u7684\u4e00\u7ec4\u547d\u4ee4\u3002"),t.a.createElement("p",null,"\u57fa\u672c\u683c\u5f0f\uff1a"),t.a.createElement(o["a"],{code:"for var in list\ndo\n  commands\ndone\n",lang:"bash"}),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u53ef\u4ee5\u5c06 do \u8bed\u53e5\u548c for \u8bed\u53e5\u653e\u5728\u540c\u4e00\u884c\uff0c\u4f46\u5fc5\u987b\u7528\u5206\u53f7\u5c06\u5176\u540c\u5217\u8868\u4e2d\u7684\u503c\u5206\u5f00\uff1a",t.a.createElement("code",null,"for var in list; do"))),t.a.createElement(o["a"],{code:"#!/bin/bash\n# basic for command\n\nfor item in Guangdong Sichuan Henan Heilongjiang Zhejiang Jiangsu\ndo\n  echo The next province is $item\ndone\n",lang:"bash"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"for")," \u5faa\u73af\u5047\u5b9a\u6bcf\u4e2a\u503c\u90fd\u662f\u7528\u7a7a\u683c\u5206\u5272\u7684"),t.a.createElement("li",null,"\u5f53\u5217\u8868\u7684\u503c\u542b\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\u53ef\u4ee5\u4f7f\u7528\u8f6c\u4e49\u5b57\u7b26\u89e3\u51b3"),t.a.createElement("li",null,"\u5f53\u5728\u67d0\u4e2a\u503c\u7684\u4e24\u8fb9\u4f7f\u7528\u53cc\u5f15\u53f7\u65f6\uff0cShell \u5e76\u4e0d\u4f1a\u5c06\u53cc\u5f15\u53f7\u5f53\u6210\u503c\u7684\u4e00\u90e8\u5206")),t.a.createElement("h3",{id:"\u4ece\u547d\u4ee4\u4e2d\u8bfb\u53d6\u503c"},t.a.createElement(c["AnchorLink"],{to:"#\u4ece\u547d\u4ee4\u4e2d\u8bfb\u53d6\u503c","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u4ece\u547d\u4ee4\u4e2d\u8bfb\u53d6\u503c"),t.a.createElement("p",null,"\u751f\u6210\u5217\u8868\u4e2d\u6240\u9700\u503c\u7684\u53e6\u5916\u4e00\u4e2a\u9014\u5f84\u5c31\u662f\u4f7f\u7528\u547d\u4ee4\u7684\u8f93\u51fa\u3002\u53ef\u4ee5\u7528\u547d\u4ee4\u66ff\u6362\u6765\u6267\u884c\u4efb\u4f55\u80fd\u4ea7\u751f\u8f93\u51fa\u7684\u547d\u4ee4\uff0c\u7136\u540e\u5728 ",t.a.createElement("code",null,"for")," \u547d\u4ee4\u4e2d\u4f7f\u7528\u8be5\u547d\u4ee4\u7684\u8f93\u51fa\u3002"),t.a.createElement(o["a"],{code:'# for-read-values-from-a-file.sh\n\n# !/bin/bash\n# reading values from  a file\n\nfile="provinces"\n\nfor province in $(cat $file)\ndo\n  echo "Visit beautiful $province"\ndone\n',lang:"bash"}),t.a.createElement("p",null,"\u540c\u76ee\u5f55\u4e0b\u7684 ",t.a.createElement("code",null,"provinces.txt")," \u6587\u4ef6\u4e2d\uff1a"),t.a.createElement(o["a"],{code:"Guangdong\nSichuan\nHenan\nHeilongjiang\nZhejiang\nJiangsu\n",lang:"unknown"}),t.a.createElement("p",null,"\u8be5\u4f8b\u5b50\u5728\u547d\u4ee4\u66ff\u6362\u4e2d\u4f7f\u7528\u4e86 ",t.a.createElement("code",null,"cat")," \u547d\u4ee4\u6765\u8f93\u51fa\u6587\u4ef6 ",t.a.createElement("code",null,"provinces")," \u7684\u5185\u5bb9\u3002",t.a.createElement("code",null,"for")," \u547d\u4ee4\u4ecd\u7136\u4ee5\u6bcf\u6b21\u4e00\u884c\u7684\u65b9\u5f0f\u904d\u5386\u4e86 ",t.a.createElement("code",null,"cat")," \u547d\u4ee4\u7684\u8f93\u51fa\uff0c\u5047\u5b9a\u6bcf\u4e2a\u503c\u90fd\u662f\u5728\u5355\u72ec\u7684\u4e00\u884c\u4e0a\u3002\u4f46\u8fd9\u5e76\u6ca1\u6709\u89e3\u51b3\u6570\u636e\u4e2d\u6709\u7a7a\u683c\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u5217\u51fa\u4e86\u4e00\u4e2a\u540d\u5b57\u4e2d\u6709\u7a7a\u683c\u7684\u503c\uff0c",t.a.createElement("code",null,"for")," \u547d\u4ee4\u4ecd\u7136\u4f1a\u5c06\u6bcf\u4e2a\u5355\u8bcd\u5f53\u4f5c\u5355\u72ec\u7684\u503c\u3002"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u6587\u4ef6\u6267\u884c\u8def\u5f84\u4e3a\u76f8\u540c\u76ee\u5f55\uff0c\u5982\u679c\u662f\u5176\u4ed6\u76ee\u5f55\u4e0b\uff0c\u9700\u8981\u4f7f\u7528\u5168\u8def\u5f84\u540d\u6765\u5f15\u7528\u6587\u4ef6\u4f4d\u7f6e\u3002")),t.a.createElement("h3",{id:"\u66f4\u6539\u5b57\u6bb5\u5206\u9694\u7b26"},t.a.createElement(c["AnchorLink"],{to:"#\u66f4\u6539\u5b57\u6bb5\u5206\u9694\u7b26","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u66f4\u6539\u5b57\u6bb5\u5206\u9694\u7b26"),t.a.createElement("p",null,"\u9020\u6210\u4e0a\u8ff0\u65e0\u6cd5\u5206\u9694\u542b\u6709\u7a7a\u683c\u7684\u503c\u539f\u56e0\u662f\u7279\u6b8a\u7684\u73af\u5883\u53d8\u91cf ",t.a.createElement("code",null,"IFS"),"\uff0c\u53eb\u4f5c ",t.a.createElement("strong",null,"\u5185\u90e8\u5b57\u6bb5\u5206\u9694\u7b26"),"\uff08internal field separator\uff09\u3002IFS \u73af\u5883\u53d8\u91cf\u5b9a\u4e49\u4e86 Bash Shell \u7528\u4f5c\u5b57\u6bb5\u5206\u9694\u7b26\u7684\u4e00\u7cfb\u5217\u5b57\u7b26\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBash Shell \u4f1a\u5c06\u4e0b\u5217\u5b57\u7b26\u5f53\u4f5c\u5b57\u7b26\u5206\u9694\u7b26\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u7a7a\u683c"),t.a.createElement("li",null,"\u5236\u8868\u7b26"),t.a.createElement("li",null,"\u6362\u884c\u7b26")),t.a.createElement("p",null,"\u5982\u679c Bash Shell \u5728\u6570\u636e\u4e2d\u770b\u5230\u4e86\u8fd9\u4e9b\u5b57\u7b26\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\uff0c\u5b83\u5c31\u4f1a\u5047\u5b9a\u8fd9\u8868\u660e\u4e86\u5217\u8868\u4e2d\u4e00\u4e2a\u65b0\u6570\u636e\u5b57\u6bb5\u7684\u5f00\u59cb\u3002\u5728\u5904\u7406\u53ef\u80fd\u542b\u6709\u7a7a\u683c\u7684\u6570\u636e\uff08\u6bd4\u5982\u6587\u4ef6\u540d\uff09\u65f6\uff0c\u8fd9\u4f1a\u975e\u5e38\u9ebb\u70e6\uff0c\u5c31\u50cf\u4f60\u4e0a\u4e00\u4e2a\u811a\u672c\u793a\u4f8b\u4e2d\u770b\u5230\u7684\u3002"),t.a.createElement("p",null,"\u5728 Shell \u811a\u672c\u4e2d\u4e34\u65f6\u66f4\u6539 IFS \u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u9650\u5236\u88ab Bash Shell \u5f53\u4f5c\u5b57\u6bb5\u5206\u9694\u7b26\u7684\u5b57\u7b26\u3002"),t.a.createElement(o["a"],{code:'#/bin/bash\n# reading values from a file\n\nfile="provinces"\n\nIFS=$\'\\n\'\nfor province in $(cat $file)\ndo\n  echo "Visit beautiful $province"\ndone\n',lang:"bash"}),t.a.createElement("h3",{id:"\u7528\u901a\u914d\u7b26\u8bfb\u53d6\u76ee\u5f55"},t.a.createElement(c["AnchorLink"],{to:"#\u7528\u901a\u914d\u7b26\u8bfb\u53d6\u76ee\u5f55","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u7528\u901a\u914d\u7b26\u8bfb\u53d6\u76ee\u5f55"),t.a.createElement("p",null,"\u8981\u7528 ",t.a.createElement("code",null,"for")," \u547d\u4ee4\u6765\u81ea\u52a8\u904d\u5386\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\uff0c\u5fc5\u987b\u5728\u6587\u4ef6\u540d\u6216\u8def\u5f84\u540d\u4e2d\u4f7f\u7528\u901a\u914d\u7b26\u3002\u6587\u4ef6\u6269\u5c55\u5339\u914d\u662f\u751f\u6210\u5339\u914d\u6307\u5b9a\u901a\u914d\u7b26\u7684\u6587\u4ef6\u540d\u6216\u8def\u5f84\u540d\u7684\u8fc7\u7a0b\u3002"),t.a.createElement("p",null,"\u5982\u679c\u4e0d\u77e5\u9053\u6240\u6709\u6587\u4ef6\u540d\uff0c\u8fd9\u4e2a\u7279\u6027\u5728\u5904\u7406\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u65f6\u5c31\u975e\u5e38\u6709\u7528\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# iterate through all the files in a directory\n\nfor file in ./*\ndo\n  if [ -d "$file"]\n  then\n    echo "$file is a directory"\n  elif [ -f "$file" ]\n  then\n    echo "$file is a file"\n  fi\ndone\n',lang:"bash"}),t.a.createElement("h3",{id:"c-\u8bed\u8a00\u98ce\u683c\u7684-for-\u547d\u4ee4"},t.a.createElement(c["AnchorLink"],{to:"#c-\u8bed\u8a00\u98ce\u683c\u7684-for-\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"C \u8bed\u8a00\u98ce\u683c\u7684 for \u547d\u4ee4"),t.a.createElement("p",null,"\u57fa\u672c\u683c\u5f0f\uff1a"),t.a.createElement(o["a"],{code:"for (( variable assignment ; condition ; iteration process ))\n",lang:"bash"}),t.a.createElement("p",null,"\u793a\u4f8b\uff1a"),t.a.createElement(o["a"],{code:'for (( i=1; i<= 10; i++ ))\ndo\n  echo "The next number is $i"\ndone\n',lang:"bash"}),t.a.createElement("h2",{id:"while"},t.a.createElement(c["AnchorLink"],{to:"#while","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"while"),t.a.createElement("p",null,t.a.createElement("code",null,"while")," \u547d\u4ee4\u67d0\u79cd\u610f\u4e49\u4e0a\u662f ",t.a.createElement("code",null,"if-then")," \u8bed\u53e5\u548c ",t.a.createElement("code",null,"for")," \u5faa\u73af\u7684\u6df7\u5408\u4f53\u3002",t.a.createElement("code",null,"while")," \u547d\u4ee4\u5141\u8bb8\u5b9a\u4e49\u4e00\u4e2a\u8981\u6d4b\u8bd5\u7684\u547d\u4ee4\uff0c\u7136\u540e\u5faa\u73af\u6267\u884c\u4e00\u7ec4\u547d\u4ee4\uff0c\u53ea\u8981\u5b9a\u4e49\u7684\u6d4b\u8bd5\u547d\u4ee4\u8fd4\u56de\u7684\u662f\u9000\u51fa\u72b6\u6001\u7801 0\u3002\u5b83\u4f1a\u5728\u6bcf\u6b21\u8fed\u4ee3\u7684\u4e00\u5f00\u59cb\u6d4b\u8bd5 ",t.a.createElement("code",null,"test")," \u547d\u4ee4\u3002\u5728 ",t.a.createElement("code",null,"test")," \u547d\u4ee4\u8fd4\u56de\u975e\u96f6\u9000\u51fa\u72b6\u6001\u7801\u65f6\uff0c",t.a.createElement("code",null,"while")," \u547d\u4ee4\u4f1a\u505c\u6b62\u6267\u884c\u90a3\u7ec4\u547d\u4ee4\u3002"),t.a.createElement("p",null,"\u57fa\u672c\u683c\u5f0f\uff1a"),t.a.createElement(o["a"],{code:"while test command\ndo\n  other commands\ndone\n",lang:"bash"}),t.a.createElement("p",null,"\u5e38\u89c1\u7684\u7528\u6cd5\u662f\u65b9\u62ec\u53f7\u6765\u68c0\u67e5\u5faa\u73af\u547d\u4ee4\u4e2d\u7528\u5230\u7684 Shell \u53d8\u91cf\u7684\u503c\uff1a"),t.a.createElement(o["a"],{code:"#/bin/bash\n# while command test\n\nvar1=10\nwhile [ $var1 -gt 0 ]\ndo\n  echo $var1\n  var1=$[ $var1 - 1 ]\ndone\n",lang:"bash"}),t.a.createElement("p",null,"\u53ea\u8981\u6d4b\u8bd5\u6761\u4ef6\u6210\u7acb\uff0c",t.a.createElement("code",null,"while")," \u547d\u4ee4\u5c31\u4f1a\u4e0d\u505c\u5730\u5faa\u73af\u6267\u884c\u5b9a\u4e49\u597d\u7684\u547d\u4ee4\u3002\u5728\u8fd9\u4e9b\u547d\u4ee4\u4e2d\uff0c\u6d4b\u8bd5\u6761\u4ef6\u4e2d\u7528\u5230\u7684\u53d8\u91cf\u5fc5\u987b\u4fee\u6539\uff0c\u5426\u5219\u5c31\u4f1a\u9677\u5165\u65e0\u9650\u5faa\u73af\u3002"),t.a.createElement("h2",{id:"until"},t.a.createElement(c["AnchorLink"],{to:"#until","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"until"),t.a.createElement("p",null,t.a.createElement("code",null,"util")," \u547d\u4ee4\u548c ",t.a.createElement("code",null,"while")," \u547d\u4ee4\u5de5\u4f5c\u7684\u65b9\u5f0f\u5b8c\u5168\u76f8\u53cd\u3002",t.a.createElement("code",null,"util")," \u547d\u4ee4\u8981\u6c42\u4f60\u6307\u5b9a\u4e00\u4e2a\u901a\u5e38\u8fd4\u56de\u975e\u96f6\u9000\u51fa\u72b6\u6001\u7801\u7684\u6d4b\u8bd5\u547d\u4ee4\u3002\u53ea\u8981\u6d4b\u8bd5\u547d\u4ee4\u7684\u9000\u51fa\u72b6\u6001\u7801\u4e0d\u4e3a 0\uff0cBash Shell \u624d\u4f1a\u6267\u884c\u5faa\u73af\u4e2d\u5217\u51fa\u7684\u547d\u4ee4\u3002\u4e00\u65e6\u6d4b\u8bd5\u547d\u4ee4\u8fd4\u56de\u4e86\u9000\u51fa\u72b6\u6001\u7801 0\uff0c\u5faa\u73af\u5c31\u7ed3\u675f\u4e86\u3002"),t.a.createElement("p",null,"\u57fa\u672c\u683c\u5f0f\uff1a"),t.a.createElement(o["a"],{code:"util test commands\ndo\n  other commands\ndone\n",lang:"bash"}),t.a.createElement("p",null,"\u793a\u4f8b\uff1a"),t.a.createElement(o["a"],{code:"#!/bin/bash\n# using the until command\n\nnum=100\n\nuntil [ $num -eq 0 ]\ndo\n    echo $num\n    num=$[ $num - 25 ]\ndone\n",lang:"bash"}),t.a.createElement("h2",{id:"break"},t.a.createElement(c["AnchorLink"],{to:"#break","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"break"),t.a.createElement("p",null,t.a.createElement("code",null,"break")," \u547d\u4ee4\u662f\u9000\u51fa\u5faa\u73af\u7684\u4e00\u4e2a\u7b80\u5355\u65b9\u6cd5\u3002\u53ef\u4ee5\u7528 ",t.a.createElement("code",null,"break")," \u547d\u4ee4\u6765\u9000\u51fa\u4efb\u610f\u7c7b\u578b\u7684\u5faa\u73af\uff0c\u5305\u62ec ",t.a.createElement("code",null,"while")," \u548c ",t.a.createElement("code",null,"until")," \u5faa\u73af\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u8df3\u51fa\u5355\u4f53\u5faa\u73af")),t.a.createElement(o["a"],{code:'#!/bin/bash\n# breaking out of a for loop\n\nfor num in 1 2 3 4 5 6 7 8 9 10\ndo\n  if [ $num -eq 5 ]\n  then\n    break\n  fi\n  echo "Iteration number: $num"\ndone\necho "The for loop is completed"\n',lang:"bash"}),t.a.createElement("p",null,t.a.createElement("code",null,"for")," \u5faa\u73af\u901a\u5e38\u90fd\u4f1a\u904d\u5386\u5217\u8868\u4e2d\u6307\u5b9a\u7684\u6240\u6709\u503c\u3002\u4f46\u5f53\u6ee1\u8db3 ",t.a.createElement("code",null,"if-then")," \u7684\u6761\u4ef6\u65f6\uff0cShell \u4f1a\u6267\u884c ",t.a.createElement("code",null,"break")," \u547d\u4ee4\uff0c\u505c\u6b62 ",t.a.createElement("code",null,"for")," \u5faa\u73af\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u8df3\u51fa\u5185\u90e8\u5faa\u73af")),t.a.createElement("p",null,"\u5728\u5904\u7406\u591a\u4e2a\u5faa\u73af\u65f6\uff0c",t.a.createElement("code",null,"break")," \u547d\u4ee4\u4f1a\u81ea\u52a8\u7ec8\u6b62\u4f60\u6240\u5728\u7684\u6700\u5185\u5c42\u7684\u5faa\u73af\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# breaking out of an inner loop\n\nfor (( a = 1; a < 4; a++ ))\ndo\n  echo "Outer loop: $a"\n  for (( b = 1; b < 100; b++ ))\n  do\n    if [ $b -eq 5 ]\n    then\n      break\n    fi\n    echo "Inner loop: $b"\n  done\ndone\n',lang:"bash"}),t.a.createElement("p",null,t.a.createElement("strong",null,"\u8df3\u51fa\u5916\u90e8\u5faa\u73af")),t.a.createElement("p",null,"\u6709\u65f6\u4f60\u518d\u5185\u90e8\u5faa\u73af\uff0c\u4f46\u9700\u8981\u505c\u6b62\u5916\u90e8\u5faa\u73af\u3002",t.a.createElement("code",null,"break")," \u547d\u4ee4\u63a5\u53d7\u5355\u4e2a\u547d\u4ee4\u884c\u53c2\u6570\u503c\uff1a"),t.a.createElement(o["a"],{code:"break n\n",lang:"bash"}),t.a.createElement("p",null,"\u5176\u4e2d ",t.a.createElement("code",null,"n")," \u6307\u5b9a\u4e86\u8981\u8df3\u51fa\u7684\u5faa\u73af\u5c42\u7ea7\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",t.a.createElement("code",null,"n")," \u4e3a 1\uff0c\u8868\u660e\u8df3\u51fa\u7684\u662f\u5f53\u524d\u7684\u5faa\u73af\u3002\u5982\u679c\u4f60\u5c06 ",t.a.createElement("code",null,"n")," \u8bbe\u4e3a 2\uff0c",t.a.createElement("code",null,"break")," \u547d\u4ee4\u5c31\u4f1a\u505c\u6b62\u4e0b\u4e00\u7ea7\u7684\u5916\u90e8\u5faa\u73af\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# breaking out of an outer loop\n\nfor (( a = 1; a < 4; a++ ))\ndo\n  echo "Outer loop: $a"\n  for (( b = 1; b < 100; b++ ))\n  do\n    if [ $b -gt 4 ]\n    then\n      break 2\n    fi\n    echo "Inner loop: $b"\n  done\ndone\n',lang:"bash"}),t.a.createElement("h2",{id:"continue"},t.a.createElement(c["AnchorLink"],{to:"#continue","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"continue"),t.a.createElement("p",null,t.a.createElement("code",null,"continue")," \u547d\u4ee4\u53ef\u4ee5\u63d0\u524d\u4e2d\u6b62\u67d0\u6b21\u5faa\u73af\u4e2d\u7684\u547d\u4ee4\uff0c\u4f46\u5e76\u4e0d\u4f1a\u5b8c\u5168\u7ec8\u6b62\u6574\u4e2a\u5faa\u73af\u3002\u53ef\u4ee5\u5728\u5faa\u73af\u5185\u90e8\u8bbe\u7f6e Shell \u4e0d\u6267\u884c\u547d\u4ee4\u7684\u6761\u4ef6\u3002\u8fd9\u91cc\u6709\u4e2a\u5728 ",t.a.createElement("code",null,"for")," \u5faa\u73af\u4e2d\u4f7f\u7528 ",t.a.createElement("code",null,"continue")," \u547d\u4ee4\u7684\u7b80\u5355\u4f8b\u5b50\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# using the continue command\n\nfor (( num = 1; num < 15; num++ ))\ndo\n  if [ $num -gt 5 ] && [ $num -lt 10 ]\n  then\n    continue\n  fi\n  echo "Iteration number: $num"\ndone\n',lang:"bash"}),t.a.createElement("p",null,"\u5f53 ",t.a.createElement("code",null,"if-then")," \u8bed\u53e5\u7684\u6761\u4ef6\u88ab\u6ee1\u8db3\u65f6\uff0cShell \u4f1a\u6267\u884c ",t.a.createElement("code",null,"continue")," \u547d\u4ee4\uff0c\u8df3\u8fc7\u6b64\u6b21\u5faa\u73af\u4e2d\u5269\u4f59\u7684\u547d\u4ee4\uff0c\u4f46\u6574\u4e2a\u5faa\u73af\u8fd8\u4f1a\u7ee7\u7eed\u3002\u5f53 ",t.a.createElement("code",null,"if-then")," \u8bed\u53e5\u4e0d\u518d\u88ab\u6ee1\u8db3\u65f6\uff0c\u4e00\u5207\u53c8\u56de\u5230\u6b63\u8f68\u3002"),t.a.createElement("p",null,"\u4e5f\u53ef\u4ee5\u5728 ",t.a.createElement("code",null,"while")," \u548c ",t.a.createElement("code",null,"until")," \u5faa\u73af\u4e2d\u4f7f\u7528 ",t.a.createElement("code",null,"continue")," \u547d\u4ee4\uff0c\u4f46\u8981\u7279\u522b\u5c0f\u5fc3\u3002\u8bb0\u4f4f\uff0c\u5f53 Shell \u6267\u884c ",t.a.createElement("code",null,"continue")," \u547d\u4ee4\u65f6\uff0c\u5b83\u4f1a\u8df3\u8fc7\u5269\u4f59\u7684\u547d\u4ee4\u3002\u5982\u679c\u4f60\u5728\u5176\u4e2d\u67d0\u4e2a\u6761\u4ef6\u91cc\u5bf9\u6d4b\u8bd5\u6761\u4ef6\u53d8\u91cf\u8fdb\u884c\u589e\u503c\uff0c\u95ee\u9898\u5c31\u4f1a\u51fa\u73b0\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# improperly using the continue command in a while loop\n\nnum=0\n\nwhile echo "while iteration: $num"\n  [ $num -lt 15 ]\ndo\n  if [ $num -gt 15 ] && [ $num -lt 10 ]\n  then\n    continue\n  fi\n  echo "Inside iteration number: $num"\n  num=$[ $num + 1 ]\ndone\n',lang:"bash"}),t.a.createElement("h2",{id:"\u5d4c\u5957\u5faa\u73af"},t.a.createElement(c["AnchorLink"],{to:"#\u5d4c\u5957\u5faa\u73af","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u5d4c\u5957\u5faa\u73af"),t.a.createElement("p",null,"\u5faa\u73af\u8bed\u53e5\u53ef\u4ee5\u5728\u5faa\u73af\u5185\u4f7f\u7528\u4efb\u610f\u7c7b\u578b\u7684\u547d\u4ee4\uff0c\u5305\u62ec\u5176\u4ed6\u5faa\u73af\u547d\u4ee4\u3002\u8fd9\u79cd\u5faa\u73af\u53eb\u4f5c\u5d4c\u5957\u5faa\u73af\uff08nested loop\uff09\u3002\u6ce8\u610f\uff0c\u5728\u4f7f\u7528\u5d4c\u5957\u5faa\u73af\u65f6\uff0c\u4f60\u662f\u5728\u8fed\u4ee3\u4e2d\u4f7f\u7528\u8fed\u4ee3\uff0c\u4e0e\u547d\u4ee4\u8fd0\u884c\u7684\u6b21\u6570\u662f\u4e58\u79ef\u5173\u7cfb\u3002\u4e0d\u6ce8\u610f\u7740\u70b9\u8bdd\uff0c\u6709\u53ef\u80fd\u4f1a\u5728\u811a\u672c\u4e2d\u9020\u6210\u95ee\u9898\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# nesting for loops\n\nfor (( a = 1; a <= 3; a++ ))\ndo\n  echo "Starting loop $a"\n  for (( b = 1; b <= 3; b++ ))\n  do\n    echo " Inside loop: $b"\n  done\ndone\n',lang:"bash"}),t.a.createElement("p",null,t.a.createElement("code",null,"while")," \u5faa\u73af\u5185\u90e8\u653e\u7f6e\u4e00\u4e2a ",t.a.createElement("code",null,"for")," \u5faa\u73af\uff1a"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# placing a for loop inside a while loop\n\nnum1=5\n\nwhile [ $num1 -ge 0 ]\ndo\n  echo "Output loop: $num1"\n  for (( num2 = 1; num2 < 3; num2++ ))\n  do\n    num3=$[ $num1 * $num2 ]\n    echo " Inner loop: $num1 * $num2 = $num3"\n  done\n  $num1=$[ $num1 - 1 ]\ndone\n',lang:"bash"}),t.a.createElement("h2",{id:"\u5904\u7406\u5faa\u73af\u8f93\u51fa"},t.a.createElement(c["AnchorLink"],{to:"#\u5904\u7406\u5faa\u73af\u8f93\u51fa","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u5904\u7406\u5faa\u73af\u8f93\u51fa"),t.a.createElement("p",null,"\u5982\u679c\u9700\u8981\u5bf9\u5faa\u73af\u7684\u8f93\u51fa\u4f7f\u7528\u7ba1\u9053\u6216\u8fdb\u884c\u91cd\u5b9a\u5411\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 ",t.a.createElement("code",null,"done")," \u547d\u4ee4\u4e4b\u540e\u6dfb\u52a0\u4e00\u4e2a\u5904\u7406\u547d\u4ee4\u6765\u5b9e\u73b0\u3002"),t.a.createElement(o["a"],{code:'for file in /home/rich/*\n  do\n    if [ -d "$file" ]\n    then\n      echo "$file is a direcoty"\n    elif\n      echo "$file is a file"\n    fi\ndone > output.txt\n',lang:"bash"}),t.a.createElement("h2",{id:"\u5b9e\u8df5\u5e94\u7528"},t.a.createElement(c["AnchorLink"],{to:"#\u5b9e\u8df5\u5e94\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u5b9e\u8df5\u5e94\u7528"),t.a.createElement("h3",{id:"\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6"},t.a.createElement(c["AnchorLink"],{to:"#\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u67e5\u627e\u53ef\u6267\u884c\u6587\u4ef6"),t.a.createElement("p",null,"\u5faa\u73af\u73af\u5883\u53d8\u91cf ",t.a.createElement("code",null,"$PATH")," \u4e2d\u7684\u76ee\u5f55\u8fed\u4ee3\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# finding files in the PATH\n\nIFS=:\nfor folder in $PATH\ndo\n  echo "$folder:"\n  for file in $folder/*\n  do\n    if [ -x $file ]\n    then\n      echo "    $file"\n    fi\n  done\ndone\n',lang:"bash"}),t.a.createElement("p",null,"\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u65f6\uff0c\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528\u7684\u53ef\u6267\u884c\u6587\u4ef6\u7684\u5217\u8868\u3002"),t.a.createElement("h3",{id:"\u521b\u5efa\u591a\u4e2a\u7528\u6237\u8d26\u6237"},t.a.createElement(c["AnchorLink"],{to:"#\u521b\u5efa\u591a\u4e2a\u7528\u6237\u8d26\u6237","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u521b\u5efa\u591a\u4e2a\u7528\u6237\u8d26\u6237"),t.a.createElement("p",null,"\u901a\u8fc7\u6dfb\u52a0\u65b0\u7528\u6237\u8d26\u6237\u653e\u5728\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u811a\u672c\u5904\u7406\u3002"),t.a.createElement("p",null,"\u6587\u672c\u6587\u4ef6\u7684\u683c\u5f0f\uff1a"),t.a.createElement(o["a"],{code:"userid,user name\n",lang:"unknown"}),t.a.createElement("p",null,t.a.createElement("code",null,"read")," \u547d\u4ee4\u4f1a\u81ea\u52a8\u8bfb\u53d6 ",t.a.createElement("code",null,".csv")," \u6587\u672c\u7684\u4e0b\u4e00\u884c\u5185\u5bb9\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u4e13\u95e8\u518d\u5199\u4e00\u4e2a\u5faa\u73af\u6765\u5904\u7406\u3002\u5f53 ",t.a.createElement("code",null,"read")," \u547d\u4ee4\u8fd4\u56de FALSE\uff08\u4e5f\u5c31\u662f\u8bfb\u53d6\u5b8c\u6574\u4e2a\u6587\u4ef6\u65f6\uff09\uff0c",t.a.createElement("code",null,"while")," \u547d\u4ee4\u5c31\u4f1a\u9000\u51fa\u3002"),t.a.createElement(o["a"],{code:'#!/bin/bash\n# process new user accounts\n\ninput="users.csv"\nwhile IFS=\',\' read -r userid name\ndo\n  echo "adding $userid"\n  useradd -c "$name" -m $userid\ndone < "$input"\n',lang:"bash"}),t.a.createElement("p",null,"\u5fc5\u987b\u4f5c\u4e3a ",t.a.createElement("code",null,"root")," \u7528\u6237\u624d\u80fd\u8fd0\u884c\u8fd9\u4e2a\u811a\u672c\uff0c\u56e0\u4e3a ",t.a.createElement("code",null,"useradd")," \u547d\u4ee4\u9700\u8981 ",t.a.createElement("code",null,"root")," \u6743\u9650\u3002")))}}}]);