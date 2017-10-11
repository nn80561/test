const shouldSucceed = true;

export default function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve(data);
            } else {
                reject(new Error('API failed'));
            }
        }, 2000);
    });
}