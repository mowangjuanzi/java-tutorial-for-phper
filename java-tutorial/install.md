# 安装 JDK

## Mac OS

执行如下命令安装：

```bash
brew install openjdk@17
```

For the system Java wrappers to find this JDK：

```bash
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

添加到 PATH：

```bash
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
source .zshrc
```

## 安装 Maven

> maven 在运行时需要 JAVA_HOME。

```bash
brew install --ignore-dependencies maven
```