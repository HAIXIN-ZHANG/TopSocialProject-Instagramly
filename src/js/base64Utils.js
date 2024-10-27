export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result); // 返回 Base64 字符串
    };

    reader.onerror = (error) => {
      reject(error); // 处理读取错误
    };

    reader.readAsDataURL(file); // 开始读取文件
  });
}
