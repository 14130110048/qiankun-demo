## 简介

该案例是使用qiankun搭建的开发环境微前端demo。主应用使用vue搭建,两个子应用分别使用vue和react搭建。

## 运行案例

Vue主应用

### 运行主应用 ```qiankun-base```

```
cd qiankun-base
npm install
npm run serve
```

### 运行子应用 ```qiankun-vue```

Vue子应用配置的主应用访问端口号为10000

```
cd qiankun-vue
npm install
npm run serve
```

### 运行子应用 ```qiankun-react```

react子应用配置的主应用访问端口号为20000

```
cd qiankun-react
npm install
npm run start
```

## 搭建过程

[搭建过程](https://blog.csdn.net/qq_42006353/article/details/115375583)

## 效果展示
<p>
<img
    alt="vue主应用" src="https://raw.githubusercontent.com/zhanghaifeng213/qiankun-demo/master/preview/base.png">
</p>
<p>
<img
    alt="vue子应用" src="https://raw.githubusercontent.com/zhanghaifeng213/qiankun-demo/master/preview/vue.png">
</p>
<p>
<img
    alt="react子应用" src="https://raw.githubusercontent.com/zhanghaifeng213/qiankun-demo/master/preview/react.png">
</p>

## 讨论交流

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <p style="font-size:12px;">QQ讨论交流群：650471018</p>
        <p>
          <img
            width="200"
            src="https://raw.githubusercontent.com/zhanghaifeng213/qiankun-demo/master/preview/qq.jpg">
        </p>
      </td>
    </tr>
  </tbody>
</table>