export const sizeInMb = (bytes) => {
    let num = parseInt(bytes);
    // console.log((num / 1024) * 1024);
    return `${(num / 1048576).toFixed(2)}MB`;
};
