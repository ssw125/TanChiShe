const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 
const HTMLWebpackPlugin = require('html-webpack-plugin') 
module.exports = {
    mode:'production',
    //指定入口文件
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",

        environment:{//指定输出环境
            arrowFunction:false ,//是否允许输出文件有箭头函数
            const:false // 打包后是否使用const
        }
    },

    //webpack打包使用的模块
    module:{
        //指定加载规则
        rules:[
            {
                //指定需要生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                {
                    loader:'babel-loader',
                    options:{
                        presets:[
                            [
                                '@babel/preset-env',
                                {
                                    //兼容浏览器
                                    targets:{
                                        "chrome":"88"
                                    },
                                    //指定版本
                                    "corejs":3,
                                    //corejs加载方式 usage按需加载
                                    "useBuiltIns":"usage"

                                }
                            ]
                        ]
                    }
                },
                'ts-loader'],
                //排除的文件 
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader',
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                {
                                    browsers:'last 2 version'
                                }
                                ]
                            ]
                        }
                    }
                },
                'less-loader']
            }
        ]
    },
    //插件的使用
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    //用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }

}