华为codestyle
文件命名	大驼峰风格(DatabaseConnection.h)
类型命名	所有类型使用大驼峰（UrlTableProperties）
变量命名	以小驼峰为基础，三种风格：fileName, m_fileName, fileName_
常量命名	局部const 变量小驼峰；全局const变量大写
函数命名	动宾结构；大驼峰
命名空间	大驼峰
枚举 全大写，下划线链接；enum Color {RED, BLACK}
宏	全大写，下划线链接
头文件内容	头文件自包含；禁止包含用不到的头文件，禁止循环依赖
头文件使用#define保护	不要使用#pragma once; 保护符使用唯一标识名称
头文件包含顺序	首先是本cpp对应头文件，其他头文件建议按稳定顺序排序
