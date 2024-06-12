// Task 1:
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);
    }
}
// Task 2
async function awaitCall() {
        
        const response = await fetch('https://api.example.com/data');
        
        const data = await response.json();
        

        console.log(data);
        
        return data;
}
// Task 3
async function awaitCall() {
    try {

        const response = await fetch('https://api.example.com/data');
        

        const data = await response.json();
        

        console.log(data);
        return data;
    } catch (error) {

        console.error('Error fetching data:', error);
        throw error; 
    }
}
// Task 4
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
} 
async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([
        fetchData('https://api.example.com/endpoint1'),
        fetchData('https://api.example.com/endpoint2')
]);
    console.log('Result 1:', result1);
    console.log('Result 2:', result2);
    } catch (error) {
    console.error('Error during concurrent requests:', error);
    }
}

// Task 5
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
async function parallelCalls(urls) {
    try {
    const responses = await Promise.all(urls.map(url => fetchData(url)));

    console.log('Responses:', responses);


    } catch (error) {
        console.error('Error during parallel calls:', error);
    }
}