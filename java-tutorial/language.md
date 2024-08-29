---
outline: deep
---

# 语言参考

## 基本语法

### 指令分隔符

跟 PHP 一样。每个语句后面都必须使用分号结束指令。

### 注释

* 单行注释

```java
// 单行注释
```

* 多行注释

```java
/* 这是多行注释
   也可以另起一行
*/
```

* 文档注释

```java
/**
 * 这就是文档注释
 */
```

## 数据类型

JAVA 存在以下八种数据类型：

* byte
* short
* int
* long
* float
* double
* char
* boolean

引用类型有：

* 强引用

强引用可以理解为 PHP 中的引用，只要计数器不为 0，那么 JVM 就不会回收对象。

* 软引用

在内存足够时，不会回收软引用对象，当内存不足时，会回收软引用对象，如果还没有足够的内存，那么就会抛出内存溢出异常。

* 弱引用

无论内存是否足够， JVM 进行垃圾回收后，弱引用关联的对象将会回收。

* 虚引用

同引用队列（ReferenceQueue）一起使用。

## 变量

### 声明

```java
char num = 'a';
String str = "abc";
```

- 变量必须先声明然后再使用
- 变量声明了类型之后，就不能存储其他类型的数据
- 定义变量可以不赋值，但是使用时必须赋值
- 变量存在作用域，在作用域内不能重复定义同一变量
- 变量可以重复赋值

### 命令规则

- 只能使用大小写字母、数字、$、_。
- 不能使用保留字。
- 首字母不能使用数字。

### 关键字

不再叙述。

### 类型转换

```java
int num = 1;
double ans = 2.0;
num = (int) ans;
```

```java
// 方法 1
String str1 = Integer.toString(int num);

// 方法 2
String str = "" + num ; // num 是 int、long、float、double 类型

// 方法 3
String str1 = String.valueOf(int num);
```

## 常量

使用 `final` 声明常量。

```java

```



## 表达式

## 运算符

## 流程控制

## 类与对象

## 错误与异常

## 注解

作用：

- 编写文档
- 代码分析
- 代码检查

可使用的位置：
- 类
- 方法
- 字段
- 参数

内置注解
- `Override`：表示子类重写了父类的方法
- `Deprecated`：表示已经弃用，
- `SuppressWarnings`：压制警告，对某些警告不再报告

## 泛型

最简单的理解就是类型参数化。

泛型分为三种：泛型类、泛型方法、泛型接口。

- 泛型类

```java
public class Start <T>{

    private T key;

    public void setKey(T key)
    {
        this.key = key;
    }

    public T getKey() {
        return key;
    }
}

public class Main {

    public static void main(String[] args) {

        Number num = 10;

        Start<Number> key = new Start<>();
        key.setKey(num);

        System.out.println(key.getKey());
    }
}
```

- 泛型方法

可以用到传入类型和返回类型

```java
public <E> boolean name(E e1, E e2) {
   return e1.equals(e2);
}
```

泛型的边界

## 反射

就是当不知道要操作的对象是什么的时候，可以在运行时获取其完整构造，并调用相关的方法

