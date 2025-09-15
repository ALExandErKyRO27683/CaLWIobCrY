// 代码生成时间: 2025-09-16 01:37:21
$(document).ready(function() {

    // 错误处理函数
    function handleError(error) {
        console.error('解压过程中发生错误:', error);
        alert('解压失败: ' + error.message);
    }

    // 解压文件函数
    function decompressFile(fileInput, callback) {
        try {
            // 检查文件输入是否存在
            if (!fileInput.files || fileInput.files.length === 0) {
                throw new Error('请先选择一个压缩文件。');
            }

            // 获取文件列表
            const files = fileInput.files;
            const reader = new FileReader();

            // 文件读取完成的回调函数
            reader.onload = function(event) {
                try {
                    // 将文件内容转换为二进制字符串
                    const fileContent = event.target.result;

                    // 使用JSZip库解压文件
                    JSZip.loadAsync(fileContent).then(function(zip) {
                        // 遍历zip文件中的所有文件
                        zip.forEach(function(relativePath, file) {
                            // 解压单个文件
                            file.async('blob').then(function(content) {
                                // 这里可以根据需要处理解压后的文件，例如保存到服务器或本地
                                // 例如：保存文件到服务器的代码（需要服务器端支持）
                                // $.ajax({
                                //     url: '/upload',
                                //     method: 'POST',
                                //     data: content,
                                //     processData: false,
                                //     contentType: 'application/octet-stream',
                                //     success: function() {
                                //         alert('文件解压并上传成功');
                                //     },
                                //     error: handleError
                                // });

                                // 调用回调函数处理文件
                                callback(content, relativePath);
                            });
                        });
                    });
                } catch (error) {
                    handleError(error);
                }
            };

            // 以二进制字符串的形式读取文件
            reader.readAsArrayBuffer(files[0]);
        } catch (error) {
            handleError(error);
        }
    }

    // 解压按钮点击事件
    $('#decompressButton').on('click', function() {
        decompressFile($('#fileInput'), function(content, fileName) {
            // 处理解压后的文件
            console.log('文件解压成功:', fileName);
            // 这里可以添加代码来处理解压后的文件，例如显示文件内容或保存文件等
        });
    });

    // 文件选择器变化事件
    $('#fileInput').on('change', function() {
        // 清除之前的错误提示
        alert('请解压文件');
    });

});

// 请注意，此代码示例依赖于JSZip库，需要在HTML文件中引入JSZip的CDN链接。
